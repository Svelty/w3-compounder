pragma solidity 0.5.17;

//0xb7ca41496dfeddbc5eeb655215da4b845047be13
contract ComptrollerInterface {
    bool public constant isComptroller = true;

    function enterMarkets(address[] calldata tqTokens)
        external
        returns (uint256[] memory);

    function exitMarket(address tqToken) external returns (uint256);

    function mintAllowed(
        address tqToken,
        address minter,
        uint256 mintAmount
    ) external returns (uint256);

    function mintVerify(
        address tqToken,
        address minter,
        uint256 mintAmount,
        uint256 mintTokens
    ) external;

    function redeemAllowed(
        address tqToken,
        address redeemer,
        uint256 redeemTokens
    ) external returns (uint256);

    function redeemVerify(
        address tqToken,
        address redeemer,
        uint256 redeemAmount,
        uint256 redeemTokens
    ) external;

    function borrowAllowed(
        address tqToken,
        address borrower,
        uint256 borrowAmount
    ) external returns (uint256);

    function borrowVerify(
        address tqToken,
        address borrower,
        uint256 borrowAmount
    ) external;

    function repayBorrowAllowed(
        address tqToken,
        address payer,
        address borrower,
        uint256 repayAmount
    ) external returns (uint256);

    function repayBorrowVerify(
        address tqToken,
        address payer,
        address borrower,
        uint256 repayAmount,
        uint256 borrowerIndex
    ) external;

    function liquidateBorrowAllowed(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        address liquidator,
        address borrower,
        uint256 repayAmount
    ) external returns (uint256);

    function liquidateBorrowVerify(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        address liquidator,
        address borrower,
        uint256 repayAmount,
        uint256 seizeTokens
    ) external;

    function seizeAllowed(
        address tqTokenCollateral,
        address tqTokenBorrowed,
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external returns (uint256);

    function seizeVerify(
        address tqTokenCollateral,
        address tqTokenBorrowed,
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external;

    function transferAllowed(
        address tqToken,
        address src,
        address dst,
        uint256 transferTokens
    ) external returns (uint256);

    function transferVerify(
        address tqToken,
        address src,
        address dst,
        uint256 transferTokens
    ) external;

    function liquidateCalculateSeizeTokens(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        uint256 repayAmount
    ) external view returns (uint256, uint256);
}

contract InterestRateModel {
    bool public constant isInterestRateModel = true;

    function getBorrowRate(
        uint256 cash,
        uint256 borrows,
        uint256 reserves
    ) external view returns (uint256);

    function getSupplyRate(
        uint256 cash,
        uint256 borrows,
        uint256 reserves,
        uint256 reserveFactorMantissa
    ) external view returns (uint256);
}

interface EIP20NonStandardInterface {
    function totalSupply() external view returns (uint256);

    function balanceOf(address owner) external view returns (uint256 balance);

    function transfer(address dst, uint256 amount) external;

    function transferFrom(
        address src,
        address dst,
        uint256 amount
    ) external;

    function approve(address spender, uint256 amount)
        external
        returns (bool success);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256 remaining);

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );
}

contract TqTokenStorage {
    bool internal _notEntered;

    string public name;

    string public symbol;

    uint8 public decimals;

    uint256 internal constant borrowRateMaxMantissa = 0.0005e16;

    uint256 internal constant reserveFactorMaxMantissa = 1e18;

    address payable public admin;

    address payable public pendingAdmin;

    ComptrollerInterface public comptroller;

    InterestRateModel public interestRateModel;

    uint256 internal initialExchangeRateMantissa;

    uint256 public reserveFactorMantissa;

    uint256 public accrualBlockTimestamp;

    uint256 public borrowIndex;

    uint256 public totalBorrows;

    uint256 public totalReserves;

    uint256 public totalSupply;

    mapping(address => uint256) internal accountTokens;

    mapping(address => mapping(address => uint256)) internal transferAllowances;

    struct BorrowSnapshot {
        uint256 principal;
        uint256 interestIndex;
    }

    mapping(address => BorrowSnapshot) internal accountBorrows;

    uint256 public protocolSeizeShareMantissa;
}

contract TqTokenInterface is TqTokenStorage {
    bool public constant isTqToken = true;

    event AccrueInterest(
        uint256 cashPrior,
        uint256 interestAccumulated,
        uint256 borrowIndex,
        uint256 totalBorrows
    );

    event Mint(address minter, uint256 mintAmount, uint256 mintTokens);

    event Redeem(address redeemer, uint256 redeemAmount, uint256 redeemTokens);

    event Borrow(
        address borrower,
        uint256 borrowAmount,
        uint256 accountBorrows,
        uint256 totalBorrows
    );

    event RepayBorrow(
        address payer,
        address borrower,
        uint256 repayAmount,
        uint256 accountBorrows,
        uint256 totalBorrows
    );

    event LiquidateBorrow(
        address liquidator,
        address borrower,
        uint256 repayAmount,
        address tqTokenCollateral,
        uint256 seizeTokens
    );

    event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);

    event NewAdmin(address oldAdmin, address newAdmin);

    event NewComptroller(
        ComptrollerInterface oldComptroller,
        ComptrollerInterface newComptroller
    );

    event NewMarketInterestRateModel(
        InterestRateModel oldInterestRateModel,
        InterestRateModel newInterestRateModel
    );

    event NewReserveFactor(
        uint256 oldReserveFactorMantissa,
        uint256 newReserveFactorMantissa
    );

    event NewProtocolSeizeShare(
        uint256 oldProtocolSeizeShareMantissa,
        uint256 newProtocolSeizeShareMantissa
    );

    event ReservesAdded(
        address benefactor,
        uint256 addAmount,
        uint256 newTotalReserves
    );

    event ReservesReduced(
        address admin,
        uint256 reduceAmount,
        uint256 newTotalReserves
    );

    event Transfer(address indexed from, address indexed to, uint256 amount);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );

    event Failure(uint256 error, uint256 info, uint256 detail);

    function transfer(address dst, uint256 amount) external returns (bool);

    function transferFrom(
        address src,
        address dst,
        uint256 amount
    ) external returns (bool);

    function approve(address spender, uint256 amount) external returns (bool);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256);

    function balanceOf(address owner) external view returns (uint256);

    function balanceOfUnderlying(address owner) external returns (uint256);

    function getAccountSnapshot(address account)
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        );

    function borrowRatePerTimestamp() external view returns (uint256);

    function supplyRatePerTimestamp() external view returns (uint256);

    function totalBorrowsCurrent() external returns (uint256);

    function borrowBalanceCurrent(address account) external returns (uint256);

    function borrowBalanceStored(address account) public view returns (uint256);

    function exchangeRateCurrent() public returns (uint256);

    function exchangeRateStored() public view returns (uint256);

    function getCash() external view returns (uint256);

    function accrueInterest() public returns (uint256);

    function seize(
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external returns (uint256);

    function _setPendingAdmin(address payable newPendingAdmin)
        external
        returns (uint256);

    function _acceptAdmin() external returns (uint256);

    function _setComptroller(ComptrollerInterface newComptroller)
        public
        returns (uint256);

    function _setReserveFactor(uint256 newReserveFactorMantissa)
        external
        returns (uint256);

    function _reduceReserves(uint256 reduceAmount) external returns (uint256);

    function _setInterestRateModel(InterestRateModel newInterestRateModel)
        public
        returns (uint256);

    function _setProtocolSeizeShare(uint256 newProtocolSeizeShareMantissa)
        external
        returns (uint256);
}

contract TqErc20Storage {
    address public underlying;
}

contract TqErc20Interface is TqErc20Storage {
    function mint(uint256 mintAmount) external returns (uint256);

    function redeem(uint256 redeemTokens) external returns (uint256);

    function redeemUnderlying(uint256 redeemAmount) external returns (uint256);

    function borrow(uint256 borrowAmount) external returns (uint256);

    function repayBorrow(uint256 repayAmount) external returns (uint256);

    function repayBorrowBehalf(address borrower, uint256 repayAmount)
        external
        returns (uint256);

    function liquidateBorrow(
        address borrower,
        uint256 repayAmount,
        TqTokenInterface tqTokenCollateral
    ) external returns (uint256);

    function sweepToken(EIP20NonStandardInterface token) external;

    function _addReserves(uint256 addAmount) external returns (uint256);
}

contract TqDelegationStorage {
    address public implementation;
}

contract TqDelegatorInterface is TqDelegationStorage {
    event NewImplementation(
        address oldImplementation,
        address newImplementation
    );

    function _setImplementation(
        address implementation_,
        bool allowResign,
        bytes memory becomeImplementationData
    ) public;
}

contract TqDelegateInterface is TqDelegationStorage {
    function _becomeImplementation(bytes memory data) public;

    function _resignImplementation() public;
}

contract ComptrollerErrorReporter {
    enum Error {
        NO_ERROR,
        UNAUTHORIZED,
        COMPTROLLER_MISMATCH,
        INSUFFICIENT_SHORTFALL,
        INSUFFICIENT_LIQUIDITY,
        INVALID_CLOSE_FACTOR,
        INVALID_COLLATERAL_FACTOR,
        INVALID_LIQUIDATION_INCENTIVE,
        MARKET_NOT_ENTERED,
        MARKET_NOT_LISTED,
        MARKET_ALREADY_LISTED,
        MATH_ERROR,
        NONZERO_BORROW_BALANCE,
        PRICE_ERROR,
        REJECTION,
        SNAPSHOT_ERROR,
        TOO_MANY_ASSETS,
        TOO_MUCH_REPAY
    }
    enum FailureInfo {
        ACCEPT_ADMIN_PENDING_ADMIN_CHECK,
        ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK,
        EXIT_MARKET_BALANCE_OWED,
        EXIT_MARKET_REJECTION,
        SET_CLOSE_FACTOR_OWNER_CHECK,
        SET_CLOSE_FACTOR_VALIDATION,
        SET_COLLATERAL_FACTOR_OWNER_CHECK,
        SET_COLLATERAL_FACTOR_NO_EXISTS,
        SET_COLLATERAL_FACTOR_VALIDATION,
        SET_COLLATERAL_FACTOR_WITHOUT_PRICE,
        SET_IMPLEMENTATION_OWNER_CHECK,
        SET_LIQUIDATION_INCENTIVE_OWNER_CHECK,
        SET_LIQUIDATION_INCENTIVE_VALIDATION,
        SET_MAX_ASSETS_OWNER_CHECK,
        SET_PENDING_ADMIN_OWNER_CHECK,
        SET_PENDING_IMPLEMENTATION_OWNER_CHECK,
        SET_PRICE_ORACLE_OWNER_CHECK,
        SUPPORT_MARKET_EXISTS,
        SUPPORT_MARKET_OWNER_CHECK,
        SET_PAUSE_GUARDIAN_OWNER_CHECK
    }

    event Failure(uint256 error, uint256 info, uint256 detail);

    function fail(Error err, FailureInfo info) internal returns (uint256) {
        emit Failure(uint256(err), uint256(info), 0);
        return uint256(err);
    }

    function failOpaque(
        Error err,
        FailureInfo info,
        uint256 opaqueError
    ) internal returns (uint256) {
        emit Failure(uint256(err), uint256(info), opaqueError);
        return uint256(err);
    }
}

contract TokenErrorReporter {
    enum Error {
        NO_ERROR,
        UNAUTHORIZED,
        BAD_INPUT,
        COMPTROLLER_REJECTION,
        COMPTROLLER_CALCULATION_ERROR,
        INTEREST_RATE_MODEL_ERROR,
        INVALID_ACCOUNT_PAIR,
        INVALID_CLOSE_AMOUNT_REQUESTED,
        INVALID_COLLATERAL_FACTOR,
        MATH_ERROR,
        MARKET_NOT_FRESH,
        MARKET_NOT_LISTED,
        TOKEN_INSUFFICIENT_ALLOWANCE,
        TOKEN_INSUFFICIENT_BALANCE,
        TOKEN_INSUFFICIENT_CASH,
        TOKEN_TRANSFER_IN_FAILED,
        TOKEN_TRANSFER_OUT_FAILED
    }

    enum FailureInfo {
        ACCEPT_ADMIN_PENDING_ADMIN_CHECK,
        ACCRUE_INTEREST_ACCUMULATED_INTEREST_CALCULATION_FAILED,
        ACCRUE_INTEREST_BORROW_RATE_CALCULATION_FAILED,
        ACCRUE_INTEREST_NEW_BORROW_INDEX_CALCULATION_FAILED,
        ACCRUE_INTEREST_NEW_TOTAL_BORROWS_CALCULATION_FAILED,
        ACCRUE_INTEREST_NEW_TOTAL_RESERVES_CALCULATION_FAILED,
        ACCRUE_INTEREST_SIMPLE_INTEREST_FACTOR_CALCULATION_FAILED,
        BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED,
        BORROW_ACCRUE_INTEREST_FAILED,
        BORROW_CASH_NOT_AVAILABLE,
        BORROW_FRESHNESS_CHECK,
        BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED,
        BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED,
        BORROW_MARKET_NOT_LISTED,
        BORROW_COMPTROLLER_REJECTION,
        LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED,
        LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED,
        LIQUIDATE_COLLATERAL_FRESHNESS_CHECK,
        LIQUIDATE_COMPTROLLER_REJECTION,
        LIQUIDATE_COMPTROLLER_CALCULATE_AMOUNT_SEIZE_FAILED,
        LIQUIDATE_CLOSE_AMOUNT_IS_UINT_MAX,
        LIQUIDATE_CLOSE_AMOUNT_IS_ZERO,
        LIQUIDATE_FRESHNESS_CHECK,
        LIQUIDATE_LIQUIDATOR_IS_BORROWER,
        LIQUIDATE_REPAY_BORROW_FRESH_FAILED,
        LIQUIDATE_SEIZE_BALANCE_INCREMENT_FAILED,
        LIQUIDATE_SEIZE_BALANCE_DECREMENT_FAILED,
        LIQUIDATE_SEIZE_COMPTROLLER_REJECTION,
        LIQUIDATE_SEIZE_LIQUIDATOR_IS_BORROWER,
        LIQUIDATE_SEIZE_TOO_MUCH,
        MINT_ACCRUE_INTEREST_FAILED,
        MINT_COMPTROLLER_REJECTION,
        MINT_EXCHANGE_CALCULATION_FAILED,
        MINT_EXCHANGE_RATE_READ_FAILED,
        MINT_FRESHNESS_CHECK,
        MINT_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED,
        MINT_NEW_TOTAL_SUPPLY_CALCULATION_FAILED,
        MINT_TRANSFER_IN_FAILED,
        MINT_TRANSFER_IN_NOT_POSSIBLE,
        REDEEM_ACCRUE_INTEREST_FAILED,
        REDEEM_COMPTROLLER_REJECTION,
        REDEEM_EXCHANGE_TOKENS_CALCULATION_FAILED,
        REDEEM_EXCHANGE_AMOUNT_CALCULATION_FAILED,
        REDEEM_EXCHANGE_RATE_READ_FAILED,
        REDEEM_FRESHNESS_CHECK,
        REDEEM_NEW_ACCOUNT_BALANCE_CALCULATION_FAILED,
        REDEEM_NEW_TOTAL_SUPPLY_CALCULATION_FAILED,
        REDEEM_TRANSFER_OUT_NOT_POSSIBLE,
        REDUCE_RESERVES_ACCRUE_INTEREST_FAILED,
        REDUCE_RESERVES_ADMIN_CHECK,
        REDUCE_RESERVES_CASH_NOT_AVAILABLE,
        REDUCE_RESERVES_FRESH_CHECK,
        REDUCE_RESERVES_VALIDATION,
        REPAY_BEHALF_ACCRUE_INTEREST_FAILED,
        REPAY_BORROW_ACCRUE_INTEREST_FAILED,
        REPAY_BORROW_ACCUMULATED_BALANCE_CALCULATION_FAILED,
        REPAY_BORROW_COMPTROLLER_REJECTION,
        REPAY_BORROW_FRESHNESS_CHECK,
        REPAY_BORROW_NEW_ACCOUNT_BORROW_BALANCE_CALCULATION_FAILED,
        REPAY_BORROW_NEW_TOTAL_BALANCE_CALCULATION_FAILED,
        REPAY_BORROW_TRANSFER_IN_NOT_POSSIBLE,
        SET_COLLATERAL_FACTOR_OWNER_CHECK,
        SET_COLLATERAL_FACTOR_VALIDATION,
        SET_COMPTROLLER_OWNER_CHECK,
        SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED,
        SET_INTEREST_RATE_MODEL_FRESH_CHECK,
        SET_INTEREST_RATE_MODEL_OWNER_CHECK,
        SET_MAX_ASSETS_OWNER_CHECK,
        SET_ORACLE_MARKET_NOT_LISTED,
        SET_PENDING_ADMIN_OWNER_CHECK,
        SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED,
        SET_RESERVE_FACTOR_ADMIN_CHECK,
        SET_RESERVE_FACTOR_FRESH_CHECK,
        SET_RESERVE_FACTOR_BOUNDS_CHECK,
        TRANSFER_COMPTROLLER_REJECTION,
        TRANSFER_NOT_ALLOWED,
        TRANSFER_NOT_ENOUGH,
        TRANSFER_TOO_MUCH,
        ADD_RESERVES_ACCRUE_INTEREST_FAILED,
        ADD_RESERVES_FRESH_CHECK,
        ADD_RESERVES_TRANSFER_IN_NOT_POSSIBLE,
        SET_PROTOCOL_SEIZE_SHARE_ACCRUE_INTEREST_FAILED,
        SET_PROTOCOL_SEIZE_SHARE_OWNER_CHECK,
        SET_PROTOCOL_SEIZE_SHARE_FRESH_CHECK
    }

    event Failure(uint256 error, uint256 info, uint256 detail);

    function fail(Error err, FailureInfo info) internal returns (uint256) {
        emit Failure(uint256(err), uint256(info), 0);
        return uint256(err);
    }

    function failOpaque(
        Error err,
        FailureInfo info,
        uint256 opaqueError
    ) internal returns (uint256) {
        emit Failure(uint256(err), uint256(info), opaqueError);
        return uint256(err);
    }
}

contract CarefulMath {
    enum MathError {
        NO_ERROR,
        DIVISION_BY_ZERO,
        INTEGER_OVERFLOW,
        INTEGER_UNDERFLOW
    }

    function mulUInt(uint256 a, uint256 b)
        internal
        pure
        returns (MathError, uint256)
    {
        if (a == 0) {
            return (MathError.NO_ERROR, 0);
        }
        uint256 c = a * b;
        if (c / a != b) {
            return (MathError.INTEGER_OVERFLOW, 0);
        } else {
            return (MathError.NO_ERROR, c);
        }
    }

    function divUInt(uint256 a, uint256 b)
        internal
        pure
        returns (MathError, uint256)
    {
        if (b == 0) {
            return (MathError.DIVISION_BY_ZERO, 0);
        }
        return (MathError.NO_ERROR, a / b);
    }

    function subUInt(uint256 a, uint256 b)
        internal
        pure
        returns (MathError, uint256)
    {
        if (b <= a) {
            return (MathError.NO_ERROR, a - b);
        } else {
            return (MathError.INTEGER_UNDERFLOW, 0);
        }
    }

    function addUInt(uint256 a, uint256 b)
        internal
        pure
        returns (MathError, uint256)
    {
        uint256 c = a + b;
        if (c >= a) {
            return (MathError.NO_ERROR, c);
        } else {
            return (MathError.INTEGER_OVERFLOW, 0);
        }
    }

    function addThenSubUInt(
        uint256 a,
        uint256 b,
        uint256 c
    ) internal pure returns (MathError, uint256) {
        (MathError err0, uint256 sum) = addUInt(a, b);
        if (err0 != MathError.NO_ERROR) {
            return (err0, 0);
        }
        return subUInt(sum, c);
    }
}

contract ExponentialNoError {
    uint256 constant expScale = 1e18;
    uint256 constant doubleScale = 1e36;
    uint256 constant halfExpScale = expScale / 2;
    uint256 constant mantissaOne = expScale;
    struct Exp {
        uint256 mantissa;
    }
    struct Double {
        uint256 mantissa;
    }

    function truncate(Exp memory exp) internal pure returns (uint256) {
        return exp.mantissa / expScale;
    }

    function mul_ScalarTruncate(Exp memory a, uint256 scalar)
        internal
        pure
        returns (uint256)
    {
        Exp memory product = mul_(a, scalar);
        return truncate(product);
    }

    function mul_ScalarTruncateAddUInt(
        Exp memory a,
        uint256 scalar,
        uint256 addend
    ) internal pure returns (uint256) {
        Exp memory product = mul_(a, scalar);
        return add_(truncate(product), addend);
    }

    function lessThanExp(Exp memory left, Exp memory right)
        internal
        pure
        returns (bool)
    {
        return left.mantissa < right.mantissa;
    }

    function lessThanOrEqualExp(Exp memory left, Exp memory right)
        internal
        pure
        returns (bool)
    {
        return left.mantissa <= right.mantissa;
    }

    function greaterThanExp(Exp memory left, Exp memory right)
        internal
        pure
        returns (bool)
    {
        return left.mantissa > right.mantissa;
    }

    function isZeroExp(Exp memory value) internal pure returns (bool) {
        return value.mantissa == 0;
    }

    function safe224(uint256 n, string memory errorMessage)
        internal
        pure
        returns (uint224)
    {
        require(n < 2**224, errorMessage);
        return uint224(n);
    }

    function safe32(uint256 n, string memory errorMessage)
        internal
        pure
        returns (uint32)
    {
        require(n < 2**32, errorMessage);
        return uint32(n);
    }

    function add_(Exp memory a, Exp memory b)
        internal
        pure
        returns (Exp memory)
    {
        return Exp({mantissa: add_(a.mantissa, b.mantissa)});
    }

    function add_(Double memory a, Double memory b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: add_(a.mantissa, b.mantissa)});
    }

    function add_(uint256 a, uint256 b) internal pure returns (uint256) {
        return add_(a, b, 'addition overflow');
    }

    function add_(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, errorMessage);
        return c;
    }

    function sub_(Exp memory a, Exp memory b)
        internal
        pure
        returns (Exp memory)
    {
        return Exp({mantissa: sub_(a.mantissa, b.mantissa)});
    }

    function sub_(Double memory a, Double memory b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: sub_(a.mantissa, b.mantissa)});
    }

    function sub_(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub_(a, b, 'subtraction underflow');
    }

    function sub_(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        return a - b;
    }

    function mul_(Exp memory a, Exp memory b)
        internal
        pure
        returns (Exp memory)
    {
        return Exp({mantissa: mul_(a.mantissa, b.mantissa) / expScale});
    }

    function mul_(Exp memory a, uint256 b) internal pure returns (Exp memory) {
        return Exp({mantissa: mul_(a.mantissa, b)});
    }

    function mul_(uint256 a, Exp memory b) internal pure returns (uint256) {
        return mul_(a, b.mantissa) / expScale;
    }

    function mul_(Double memory a, Double memory b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: mul_(a.mantissa, b.mantissa) / doubleScale});
    }

    function mul_(Double memory a, uint256 b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: mul_(a.mantissa, b)});
    }

    function mul_(uint256 a, Double memory b) internal pure returns (uint256) {
        return mul_(a, b.mantissa) / doubleScale;
    }

    function mul_(uint256 a, uint256 b) internal pure returns (uint256) {
        return mul_(a, b, 'multiplication overflow');
    }

    function mul_(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        if (a == 0 || b == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b, errorMessage);
        return c;
    }

    function div_(Exp memory a, Exp memory b)
        internal
        pure
        returns (Exp memory)
    {
        return Exp({mantissa: div_(mul_(a.mantissa, expScale), b.mantissa)});
    }

    function div_(Exp memory a, uint256 b) internal pure returns (Exp memory) {
        return Exp({mantissa: div_(a.mantissa, b)});
    }

    function div_(uint256 a, Exp memory b) internal pure returns (uint256) {
        return div_(mul_(a, expScale), b.mantissa);
    }

    function div_(Double memory a, Double memory b)
        internal
        pure
        returns (Double memory)
    {
        return
            Double({mantissa: div_(mul_(a.mantissa, doubleScale), b.mantissa)});
    }

    function div_(Double memory a, uint256 b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: div_(a.mantissa, b)});
    }

    function div_(uint256 a, Double memory b) internal pure returns (uint256) {
        return div_(mul_(a, doubleScale), b.mantissa);
    }

    function div_(uint256 a, uint256 b) internal pure returns (uint256) {
        return div_(a, b, 'divide by zero');
    }

    function div_(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        return a / b;
    }

    function fraction(uint256 a, uint256 b)
        internal
        pure
        returns (Double memory)
    {
        return Double({mantissa: div_(mul_(a, doubleScale), b)});
    }
}

contract Exponential is CarefulMath, ExponentialNoError {
    function getExp(uint256 num, uint256 denom)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError err0, uint256 scaledNumerator) = mulUInt(num, expScale);
        if (err0 != MathError.NO_ERROR) {
            return (err0, Exp({mantissa: 0}));
        }
        (MathError err1, uint256 rational) = divUInt(scaledNumerator, denom);
        if (err1 != MathError.NO_ERROR) {
            return (err1, Exp({mantissa: 0}));
        }
        return (MathError.NO_ERROR, Exp({mantissa: rational}));
    }

    function addExp(Exp memory a, Exp memory b)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError error, uint256 result) = addUInt(a.mantissa, b.mantissa);
        return (error, Exp({mantissa: result}));
    }

    function subExp(Exp memory a, Exp memory b)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError error, uint256 result) = subUInt(a.mantissa, b.mantissa);
        return (error, Exp({mantissa: result}));
    }

    function mulScalar(Exp memory a, uint256 scalar)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError err0, uint256 scaledMantissa) = mulUInt(a.mantissa, scalar);
        if (err0 != MathError.NO_ERROR) {
            return (err0, Exp({mantissa: 0}));
        }
        return (MathError.NO_ERROR, Exp({mantissa: scaledMantissa}));
    }

    function mulScalarTruncate(Exp memory a, uint256 scalar)
        internal
        pure
        returns (MathError, uint256)
    {
        (MathError err, Exp memory product) = mulScalar(a, scalar);
        if (err != MathError.NO_ERROR) {
            return (err, 0);
        }
        return (MathError.NO_ERROR, truncate(product));
    }

    function mulScalarTruncateAddUInt(
        Exp memory a,
        uint256 scalar,
        uint256 addend
    ) internal pure returns (MathError, uint256) {
        (MathError err, Exp memory product) = mulScalar(a, scalar);
        if (err != MathError.NO_ERROR) {
            return (err, 0);
        }
        return addUInt(truncate(product), addend);
    }

    function divScalar(Exp memory a, uint256 scalar)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError err0, uint256 descaledMantissa) = divUInt(
            a.mantissa,
            scalar
        );
        if (err0 != MathError.NO_ERROR) {
            return (err0, Exp({mantissa: 0}));
        }
        return (MathError.NO_ERROR, Exp({mantissa: descaledMantissa}));
    }

    function divScalarByExp(uint256 scalar, Exp memory divisor)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError err0, uint256 numerator) = mulUInt(expScale, scalar);
        if (err0 != MathError.NO_ERROR) {
            return (err0, Exp({mantissa: 0}));
        }
        return getExp(numerator, divisor.mantissa);
    }

    function divScalarByExpTruncate(uint256 scalar, Exp memory divisor)
        internal
        pure
        returns (MathError, uint256)
    {
        (MathError err, Exp memory fraction) = divScalarByExp(scalar, divisor);
        if (err != MathError.NO_ERROR) {
            return (err, 0);
        }
        return (MathError.NO_ERROR, truncate(fraction));
    }

    function mulExp(Exp memory a, Exp memory b)
        internal
        pure
        returns (MathError, Exp memory)
    {
        (MathError err0, uint256 doubleScaledProduct) = mulUInt(
            a.mantissa,
            b.mantissa
        );
        if (err0 != MathError.NO_ERROR) {
            return (err0, Exp({mantissa: 0}));
        }

        (MathError err1, uint256 doubleScaledProductWithHalfScale) = addUInt(
            halfExpScale,
            doubleScaledProduct
        );
        if (err1 != MathError.NO_ERROR) {
            return (err1, Exp({mantissa: 0}));
        }
        (MathError err2, uint256 product) = divUInt(
            doubleScaledProductWithHalfScale,
            expScale
        );

        assert(err2 == MathError.NO_ERROR);
        return (MathError.NO_ERROR, Exp({mantissa: product}));
    }

    function mulExp(uint256 a, uint256 b)
        internal
        pure
        returns (MathError, Exp memory)
    {
        return mulExp(Exp({mantissa: a}), Exp({mantissa: b}));
    }

    function mulExp3(
        Exp memory a,
        Exp memory b,
        Exp memory c
    ) internal pure returns (MathError, Exp memory) {
        (MathError err, Exp memory ab) = mulExp(a, b);
        if (err != MathError.NO_ERROR) {
            return (err, ab);
        }
        return mulExp(ab, c);
    }

    function divExp(Exp memory a, Exp memory b)
        internal
        pure
        returns (MathError, Exp memory)
    {
        return getExp(a.mantissa, b.mantissa);
    }
}

interface EIP20Interface {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    function totalSupply() external view returns (uint256);

    function balanceOf(address owner) external view returns (uint256 balance);

    function transfer(address dst, uint256 amount)
        external
        returns (bool success);

    function transferFrom(
        address src,
        address dst,
        uint256 amount
    ) external returns (bool success);

    function approve(address spender, uint256 amount)
        external
        returns (bool success);

    function allowance(address owner, address spender)
        external
        view
        returns (uint256 remaining);

    event Transfer(address indexed from, address indexed to, uint256 amount);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );
}

contract TqToken is TqTokenInterface, Exponential, TokenErrorReporter {
    function initialize(
        ComptrollerInterface comptroller_,
        InterestRateModel interestRateModel_,
        uint256 initialExchangeRateMantissa_,
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) public {}

    function transferTokens(
        address spender,
        address src,
        address dst,
        uint256 tokens
    ) internal returns (uint256) {
        // Tuncated

        return uint256(Error.NO_ERROR);
    }

    function transfer(address dst, uint256 amount)
        external
        nonReentrant
        returns (bool)
    {
        return
            transferTokens(msg.sender, msg.sender, dst, amount) ==
            uint256(Error.NO_ERROR);
    }

    function transferFrom(
        address src,
        address dst,
        uint256 amount
    ) external nonReentrant returns (bool) {
        return
            transferTokens(msg.sender, src, dst, amount) ==
            uint256(Error.NO_ERROR);
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        address src = msg.sender;
        transferAllowances[src][spender] = amount;
        emit Approval(src, spender, amount);
        return true;
    }

    function allowance(address owner, address spender)
        external
        view
        returns (uint256)
    {
        return transferAllowances[owner][spender];
    }

    function balanceOf(address owner) external view returns (uint256) {
        return accountTokens[owner];
    }

    function balanceOfUnderlying(address owner) external returns (uint256) {
        Exp memory exchangeRate = Exp({mantissa: exchangeRateCurrent()});
        (MathError mErr, uint256 balance) = mulScalarTruncate(
            exchangeRate,
            accountTokens[owner]
        );
        require(mErr == MathError.NO_ERROR, 'balance could not be calculated');
        return balance;
    }

    function getAccountSnapshot(address account)
        external
        view
        returns (
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        // Tuncated

        return (uint256(Error.NO_ERROR), 0, 0, 0);
    }

    function getBlockTimestamp() internal view returns (uint256) {
        return block.timestamp;
    }

    function borrowRatePerTimestamp() external view returns (uint256) {
        return
            interestRateModel.getBorrowRate(
                getCashPrior(),
                totalBorrows,
                totalReserves
            );
    }

    function supplyRatePerTimestamp() external view returns (uint256) {
        return
            interestRateModel.getSupplyRate(
                getCashPrior(),
                totalBorrows,
                totalReserves,
                reserveFactorMantissa
            );
    }

    function totalBorrowsCurrent() external nonReentrant returns (uint256) {
        require(
            accrueInterest() == uint256(Error.NO_ERROR),
            'accrue interest failed'
        );
        return totalBorrows;
    }

    function borrowBalanceCurrent(address account)
        external
        nonReentrant
        returns (uint256)
    {
        require(
            accrueInterest() == uint256(Error.NO_ERROR),
            'accrue interest failed'
        );
        return borrowBalanceStored(account);
    }

    function borrowBalanceStored(address account)
        public
        view
        returns (uint256)
    {
        (MathError err, uint256 result) = borrowBalanceStoredInternal(account);
        require(
            err == MathError.NO_ERROR,
            'borrowBalanceStored: borrowBalanceStoredInternal failed'
        );
        return result;
    }

    function borrowBalanceStoredInternal(address account)
        internal
        view
        returns (MathError, uint256)
    {
        // Tuncated

        return (MathError.NO_ERROR, 0);
    }

    function exchangeRateCurrent() public nonReentrant returns (uint256) {
        require(
            accrueInterest() == uint256(Error.NO_ERROR),
            'accrue interest failed'
        );
        return exchangeRateStored();
    }

    function exchangeRateStored() public view returns (uint256) {
        (MathError err, uint256 result) = exchangeRateStoredInternal();
        require(
            err == MathError.NO_ERROR,
            'exchangeRateStored: exchangeRateStoredInternal failed'
        );
        return result;
    }

    function exchangeRateStoredInternal()
        internal
        view
        returns (MathError, uint256)
    {
        uint256 _totalSupply = totalSupply;
        if (_totalSupply == 0) {
            return (MathError.NO_ERROR, initialExchangeRateMantissa);
        } else {
            uint256 totalCash = getCashPrior();
            uint256 cashPlusBorrowsMinusReserves;
            Exp memory exchangeRate;
            MathError mathErr;
            (mathErr, cashPlusBorrowsMinusReserves) = addThenSubUInt(
                totalCash,
                totalBorrows,
                totalReserves
            );
            if (mathErr != MathError.NO_ERROR) {
                return (mathErr, 0);
            }
            (mathErr, exchangeRate) = getExp(
                cashPlusBorrowsMinusReserves,
                _totalSupply
            );
            if (mathErr != MathError.NO_ERROR) {
                return (mathErr, 0);
            }
            return (MathError.NO_ERROR, exchangeRate.mantissa);
        }
    }

    function getCash() external view returns (uint256) {
        return getCashPrior();
    }

    function accrueInterest() public returns (uint256) {
        // Tuncated

        return uint256(Error.NO_ERROR);
    }

    function mintInternal(uint256 mintAmount)
        internal
        nonReentrant
        returns (uint256, uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return (
                fail(Error(error), FailureInfo.MINT_ACCRUE_INTEREST_FAILED),
                0
            );
        }

        return mintFresh(msg.sender, mintAmount);
    }

    struct MintLocalVars {
        Error err;
        MathError mathErr;
        uint256 exchangeRateMantissa;
        uint256 mintTokens;
        uint256 totalSupplyNew;
        uint256 accountTokensNew;
        uint256 actualMintAmount;
    }

    function mintFresh(address minter, uint256 mintAmount)
        internal
        returns (uint256, uint256)
    {
        // Tuncated

        return (uint256(Error.NO_ERROR), 0);
    }

    function redeemInternal(uint256 redeemTokens)
        internal
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(Error(error), FailureInfo.REDEEM_ACCRUE_INTEREST_FAILED);
        }

        return redeemFresh(msg.sender, redeemTokens, 0);
    }

    function redeemUnderlyingInternal(uint256 redeemAmount)
        internal
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(Error(error), FailureInfo.REDEEM_ACCRUE_INTEREST_FAILED);
        }

        return redeemFresh(msg.sender, 0, redeemAmount);
    }

    struct RedeemLocalVars {
        Error err;
        MathError mathErr;
        uint256 exchangeRateMantissa;
        uint256 redeemTokens;
        uint256 redeemAmount;
        uint256 totalSupplyNew;
        uint256 accountTokensNew;
    }

    function redeemFresh(
        address payable redeemer,
        uint256 redeemTokensIn,
        uint256 redeemAmountIn
    ) internal returns (uint256) {
        // Tuncated

        return uint256(Error.NO_ERROR);
    }

    function borrowInternal(uint256 borrowAmount)
        internal
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(Error(error), FailureInfo.BORROW_ACCRUE_INTEREST_FAILED);
        }

        return borrowFresh(msg.sender, borrowAmount);
    }

    struct BorrowLocalVars {
        MathError mathErr;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
    }

    function borrowFresh(address payable borrower, uint256 borrowAmount)
        internal
        returns (uint256)
    {
        // Tuncated

        return uint256(Error.NO_ERROR);
    }

    function repayBorrowInternal(uint256 repayAmount)
        internal
        nonReentrant
        returns (uint256, uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return (
                fail(
                    Error(error),
                    FailureInfo.REPAY_BORROW_ACCRUE_INTEREST_FAILED
                ),
                0
            );
        }

        return repayBorrowFresh(msg.sender, msg.sender, repayAmount);
    }

    function repayBorrowBehalfInternal(address borrower, uint256 repayAmount)
        internal
        nonReentrant
        returns (uint256, uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return (
                fail(
                    Error(error),
                    FailureInfo.REPAY_BEHALF_ACCRUE_INTEREST_FAILED
                ),
                0
            );
        }

        return repayBorrowFresh(msg.sender, borrower, repayAmount);
    }

    struct RepayBorrowLocalVars {
        Error err;
        MathError mathErr;
        uint256 repayAmount;
        uint256 borrowerIndex;
        uint256 accountBorrows;
        uint256 accountBorrowsNew;
        uint256 totalBorrowsNew;
        uint256 actualRepayAmount;
    }

    function repayBorrowFresh(
        address payer,
        address borrower,
        uint256 repayAmount
    ) internal returns (uint256, uint256) {
        // Tuncated

        return (uint256(Error.NO_ERROR), 0);
    }

    function liquidateBorrowInternal(
        address borrower,
        uint256 repayAmount,
        TqTokenInterface tqTokenCollateral
    ) internal nonReentrant returns (uint256, uint256) {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return (
                fail(
                    Error(error),
                    FailureInfo.LIQUIDATE_ACCRUE_BORROW_INTEREST_FAILED
                ),
                0
            );
        }
        error = tqTokenCollateral.accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return (
                fail(
                    Error(error),
                    FailureInfo.LIQUIDATE_ACCRUE_COLLATERAL_INTEREST_FAILED
                ),
                0
            );
        }

        return
            liquidateBorrowFresh(
                msg.sender,
                borrower,
                repayAmount,
                tqTokenCollateral
            );
    }

    function liquidateBorrowFresh(
        address liquidator,
        address borrower,
        uint256 repayAmount,
        TqTokenInterface tqTokenCollateral
    ) internal returns (uint256, uint256) {
        // Tuncated

        return (uint256(Error.NO_ERROR), 0);
    }

    function seize(
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external nonReentrant returns (uint256) {
        return seizeInternal(msg.sender, liquidator, borrower, seizeTokens);
    }

    struct SeizeInternalLocalVars {
        MathError mathErr;
        uint256 borrowerTokensNew;
        uint256 liquidatorTokensNew;
        uint256 liquidatorSeizeTokens;
        uint256 protocolSeizeTokens;
        uint256 protocolSeizeAmount;
        uint256 exchangeRateMantissa;
        uint256 totalReservesNew;
        uint256 totalSupplyNew;
    }

    function seizeInternal(
        address seizerToken,
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) internal returns (uint256) {
        // Tuncated

        return uint256(Error.NO_ERROR);
    }

    function _setPendingAdmin(address payable newPendingAdmin)
        external
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PENDING_ADMIN_OWNER_CHECK
                );
        }

        address oldPendingAdmin = pendingAdmin;

        pendingAdmin = newPendingAdmin;

        emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);
        return uint256(Error.NO_ERROR);
    }

    function _acceptAdmin() external returns (uint256) {
        if (msg.sender != pendingAdmin || msg.sender == address(0)) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.ACCEPT_ADMIN_PENDING_ADMIN_CHECK
                );
        }

        address oldAdmin = admin;
        address oldPendingAdmin = pendingAdmin;

        admin = pendingAdmin;

        pendingAdmin = address(0);
        emit NewAdmin(oldAdmin, admin);
        emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);
        return uint256(Error.NO_ERROR);
    }

    function _setComptroller(ComptrollerInterface newComptroller)
        public
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_COMPTROLLER_OWNER_CHECK
                );
        }
        ComptrollerInterface oldComptroller = comptroller;

        require(newComptroller.isComptroller(), 'marker method returned false');

        comptroller = newComptroller;

        emit NewComptroller(oldComptroller, newComptroller);
        return uint256(Error.NO_ERROR);
    }

    function _setReserveFactor(uint256 newReserveFactorMantissa)
        external
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(
                    Error(error),
                    FailureInfo.SET_RESERVE_FACTOR_ACCRUE_INTEREST_FAILED
                );
        }

        return _setReserveFactorFresh(newReserveFactorMantissa);
    }

    function _setReserveFactorFresh(uint256 newReserveFactorMantissa)
        internal
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_RESERVE_FACTOR_ADMIN_CHECK
                );
        }

        if (accrualBlockTimestamp != getBlockTimestamp()) {
            return
                fail(
                    Error.MARKET_NOT_FRESH,
                    FailureInfo.SET_RESERVE_FACTOR_FRESH_CHECK
                );
        }

        if (newReserveFactorMantissa > reserveFactorMaxMantissa) {
            return
                fail(
                    Error.BAD_INPUT,
                    FailureInfo.SET_RESERVE_FACTOR_BOUNDS_CHECK
                );
        }
        uint256 oldReserveFactorMantissa = reserveFactorMantissa;
        reserveFactorMantissa = newReserveFactorMantissa;
        emit NewReserveFactor(
            oldReserveFactorMantissa,
            newReserveFactorMantissa
        );
        return uint256(Error.NO_ERROR);
    }

    function _addReservesInternal(uint256 addAmount)
        internal
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(
                    Error(error),
                    FailureInfo.ADD_RESERVES_ACCRUE_INTEREST_FAILED
                );
        }

        (error, ) = _addReservesFresh(addAmount);
        return error;
    }

    function _addReservesFresh(uint256 addAmount)
        internal
        returns (uint256, uint256)
    {
        uint256 totalReservesNew;
        uint256 actualAddAmount;

        if (accrualBlockTimestamp != getBlockTimestamp()) {
            return (
                fail(
                    Error.MARKET_NOT_FRESH,
                    FailureInfo.ADD_RESERVES_FRESH_CHECK
                ),
                actualAddAmount
            );
        }

        actualAddAmount = doTransferIn(msg.sender, addAmount);
        totalReservesNew = totalReserves + actualAddAmount;

        require(
            totalReservesNew >= totalReserves,
            'add reserves unexpected overflow'
        );

        totalReserves = totalReservesNew;

        emit ReservesAdded(msg.sender, actualAddAmount, totalReservesNew);

        return (uint256(Error.NO_ERROR), actualAddAmount);
    }

    function _reduceReserves(uint256 reduceAmount)
        external
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(
                    Error(error),
                    FailureInfo.REDUCE_RESERVES_ACCRUE_INTEREST_FAILED
                );
        }

        return _reduceReservesFresh(reduceAmount);
    }

    function _reduceReservesFresh(uint256 reduceAmount)
        internal
        returns (uint256)
    {
        uint256 totalReservesNew;

        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.REDUCE_RESERVES_ADMIN_CHECK
                );
        }

        if (accrualBlockTimestamp != getBlockTimestamp()) {
            return
                fail(
                    Error.MARKET_NOT_FRESH,
                    FailureInfo.REDUCE_RESERVES_FRESH_CHECK
                );
        }

        if (getCashPrior() < reduceAmount) {
            return
                fail(
                    Error.TOKEN_INSUFFICIENT_CASH,
                    FailureInfo.REDUCE_RESERVES_CASH_NOT_AVAILABLE
                );
        }

        if (reduceAmount > totalReserves) {
            return
                fail(Error.BAD_INPUT, FailureInfo.REDUCE_RESERVES_VALIDATION);
        }

        totalReservesNew = totalReserves - reduceAmount;

        require(
            totalReservesNew <= totalReserves,
            'reduce reserves unexpected underflow'
        );

        totalReserves = totalReservesNew;

        doTransferOut(admin, reduceAmount);
        emit ReservesReduced(admin, reduceAmount, totalReservesNew);
        return uint256(Error.NO_ERROR);
    }

    function _setInterestRateModel(InterestRateModel newInterestRateModel)
        public
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(
                    Error(error),
                    FailureInfo.SET_INTEREST_RATE_MODEL_ACCRUE_INTEREST_FAILED
                );
        }

        return _setInterestRateModelFresh(newInterestRateModel);
    }

    function _setInterestRateModelFresh(InterestRateModel newInterestRateModel)
        internal
        returns (uint256)
    {
        InterestRateModel oldInterestRateModel;

        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_INTEREST_RATE_MODEL_OWNER_CHECK
                );
        }

        if (accrualBlockTimestamp != getBlockTimestamp()) {
            return
                fail(
                    Error.MARKET_NOT_FRESH,
                    FailureInfo.SET_INTEREST_RATE_MODEL_FRESH_CHECK
                );
        }

        oldInterestRateModel = interestRateModel;

        require(
            newInterestRateModel.isInterestRateModel(),
            'marker method returned false'
        );

        interestRateModel = newInterestRateModel;

        emit NewMarketInterestRateModel(
            oldInterestRateModel,
            newInterestRateModel
        );
        return uint256(Error.NO_ERROR);
    }

    function _setProtocolSeizeShare(uint256 newProtocolSeizeShareMantissa)
        external
        nonReentrant
        returns (uint256)
    {
        uint256 error = accrueInterest();
        if (error != uint256(Error.NO_ERROR)) {
            return
                fail(
                    Error(error),
                    FailureInfo.SET_PROTOCOL_SEIZE_SHARE_ACCRUE_INTEREST_FAILED
                );
        }

        return _setProtocolSeizeShareFresh(newProtocolSeizeShareMantissa);
    }

    function _setProtocolSeizeShareFresh(uint256 newProtocolSeizeShareMantissa)
        internal
        returns (uint256)
    {
        uint256 oldProtocolSeizeShareMantissa;

        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PROTOCOL_SEIZE_SHARE_OWNER_CHECK
                );
        }

        if (accrualBlockTimestamp != getBlockTimestamp()) {
            return
                fail(
                    Error.MARKET_NOT_FRESH,
                    FailureInfo.SET_PROTOCOL_SEIZE_SHARE_FRESH_CHECK
                );
        }

        oldProtocolSeizeShareMantissa = protocolSeizeShareMantissa;

        protocolSeizeShareMantissa = newProtocolSeizeShareMantissa;

        emit NewProtocolSeizeShare(
            oldProtocolSeizeShareMantissa,
            newProtocolSeizeShareMantissa
        );
        return uint256(Error.NO_ERROR);
    }

    function getCashPrior() internal view returns (uint256);

    function doTransferIn(address from, uint256 amount)
        internal
        returns (uint256);

    function doTransferOut(address payable to, uint256 amount) internal;

    modifier nonReentrant() {
        require(_notEntered, 're-entered');
        _notEntered = false;
        _;
        _notEntered = true;
    }
}

contract PriceOracle {
    bool public constant isPriceOracle = true;

    function getUnderlyingPrice(TqToken tqToken)
        external
        view
        returns (uint256);
}

contract UnitrollerAdminStorage {
    address public admin;

    address public pendingAdmin;

    address public comptrollerImplementation;

    address public pendingComptrollerImplementation;
}

contract ComptrollerVXStorage is UnitrollerAdminStorage {
    PriceOracle public oracle;

    uint256 public closeFactorMantissa;

    uint256 public liquidationIncentiveMantissa;

    uint256 public maxAssets;

    mapping(address => TqToken[]) public accountAssets;
    struct Market {
        bool isListed;
        uint256 collateralFactorMantissa;
        mapping(address => bool) accountMembership;
        bool isTranqed;
    }

    mapping(address => Market) public markets;

    address public pauseGuardian;
    bool public _mintGuardianPaused;
    bool public _borrowGuardianPaused;
    bool public transferGuardianPaused;
    bool public seizeGuardianPaused;
    mapping(address => bool) public mintGuardianPaused;
    mapping(address => bool) public borrowGuardianPaused;

    TqToken[] public allMarkets;

    address public borrowCapGuardian;

    mapping(address => uint256) public borrowCaps;
    struct RewardMarketState {
        uint224 index;
        uint32 timestamp;
    }

    mapping(uint8 => uint256) rewardRate;

    mapping(uint8 => mapping(address => uint256)) public rewardSpeeds;

    mapping(uint8 => mapping(address => RewardMarketState))
        public rewardSupplyState;

    mapping(uint8 => mapping(address => RewardMarketState))
        public rewardBorrowState;

    mapping(uint8 => mapping(address => mapping(address => uint256)))
        public rewardSupplierIndex;

    mapping(uint8 => mapping(address => mapping(address => uint256)))
        public rewardBorrowerIndex;

    mapping(uint8 => mapping(address => uint256)) public rewardAccrued;

    address public tranqAddress;
}

contract Unitroller is UnitrollerAdminStorage, ComptrollerErrorReporter {
    event NewPendingImplementation(
        address oldPendingImplementation,
        address newPendingImplementation
    );

    event NewImplementation(
        address oldImplementation,
        address newImplementation
    );

    event NewPendingAdmin(address oldPendingAdmin, address newPendingAdmin);

    event NewAdmin(address oldAdmin, address newAdmin);

    constructor() public {
        admin = msg.sender;
    }

    function _setPendingImplementation(address newPendingImplementation)
        public
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PENDING_IMPLEMENTATION_OWNER_CHECK
                );
        }
        address oldPendingImplementation = pendingComptrollerImplementation;
        pendingComptrollerImplementation = newPendingImplementation;
        emit NewPendingImplementation(
            oldPendingImplementation,
            pendingComptrollerImplementation
        );
        return uint256(Error.NO_ERROR);
    }

    function _acceptImplementation() public returns (uint256) {
        if (
            msg.sender != pendingComptrollerImplementation ||
            pendingComptrollerImplementation == address(0)
        ) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.ACCEPT_PENDING_IMPLEMENTATION_ADDRESS_CHECK
                );
        }

        address oldImplementation = comptrollerImplementation;
        address oldPendingImplementation = pendingComptrollerImplementation;
        comptrollerImplementation = pendingComptrollerImplementation;
        pendingComptrollerImplementation = address(0);
        emit NewImplementation(oldImplementation, comptrollerImplementation);
        emit NewPendingImplementation(
            oldPendingImplementation,
            pendingComptrollerImplementation
        );
        return uint256(Error.NO_ERROR);
    }

    function _setPendingAdmin(address newPendingAdmin)
        public
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PENDING_ADMIN_OWNER_CHECK
                );
        }

        address oldPendingAdmin = pendingAdmin;

        pendingAdmin = newPendingAdmin;

        emit NewPendingAdmin(oldPendingAdmin, newPendingAdmin);
        return uint256(Error.NO_ERROR);
    }

    function _acceptAdmin() public returns (uint256) {
        if (msg.sender != pendingAdmin || msg.sender == address(0)) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.ACCEPT_ADMIN_PENDING_ADMIN_CHECK
                );
        }

        address oldAdmin = admin;
        address oldPendingAdmin = pendingAdmin;

        admin = pendingAdmin;

        pendingAdmin = address(0);
        emit NewAdmin(oldAdmin, admin);
        emit NewPendingAdmin(oldPendingAdmin, pendingAdmin);
        return uint256(Error.NO_ERROR);
    }

    function() external payable {
        (bool success, ) = comptrollerImplementation.delegatecall(msg.data);
        assembly {
            let free_mem_ptr := mload(0x40)
            returndatacopy(free_mem_ptr, 0, returndatasize)
            switch success
            case 0 {
                revert(free_mem_ptr, returndatasize)
            }
            default {
                return(free_mem_ptr, returndatasize)
            }
        }
    }
}

contract Tranquil {
    string public constant name = 'Tranquil';

    string public constant symbol = 'TRANQ';

    uint8 public constant decimals = 18;

    uint256 public constant totalSupply = 1_000_000_000e18;

    mapping(address => mapping(address => uint96)) internal allowances;

    mapping(address => uint96) internal balances;

    mapping(address => address) public delegates;

    struct Checkpoint {
        uint32 fromBlock;
        uint96 votes;
    }

    mapping(address => mapping(uint32 => Checkpoint)) public checkpoints;

    mapping(address => uint32) public numCheckpoints;

    bytes32 public constant DOMAIN_TYPEHASH =
        keccak256(
            'EIP712Domain(string name,uint256 chainId,address verifyingContract)'
        );

    bytes32 public constant DELEGATION_TYPEHASH =
        keccak256('Delegation(address delegatee,uint256 nonce,uint256 expiry)');

    bytes32 public constant PERMIT_TYPEHASH =
        keccak256(
            'Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)'
        );

    mapping(address => uint256) public nonces;

    event DelegateChanged(
        address indexed delegator,
        address indexed fromDelegate,
        address indexed toDelegate
    );

    event DelegateVotesChanged(
        address indexed delegate,
        uint256 previousBalance,
        uint256 newBalance
    );

    event Transfer(address indexed from, address indexed to, uint256 amount);

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 amount
    );

    constructor(address account) public {
        balances[account] = uint96(totalSupply);
        emit Transfer(address(0), account, totalSupply);
    }

    function allowance(address account, address spender)
        external
        view
        returns (uint256)
    {
        return allowances[account][spender];
    }

    function approve(address spender, uint256 rawAmount)
        external
        returns (bool)
    {
        uint96 amount;
        if (rawAmount == uint256(-1)) {
            amount = uint96(-1);
        } else {
            amount = safe96(
                rawAmount,
                'Tranq::approve: amount exceeds 96 bits'
            );
        }
        allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function permit(
        address owner,
        address spender,
        uint256 rawAmount,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external {
        uint96 amount;
        if (rawAmount == uint256(-1)) {
            amount = uint96(-1);
        } else {
            amount = safe96(rawAmount, 'Tranq::permit: amount exceeds 96 bits');
        }
        bytes32 domainSeparator = keccak256(
            abi.encode(
                DOMAIN_TYPEHASH,
                keccak256(bytes(name)),
                getChainId(),
                address(this)
            )
        );
        bytes32 structHash = keccak256(
            abi.encode(
                PERMIT_TYPEHASH,
                owner,
                spender,
                rawAmount,
                nonces[owner]++,
                deadline
            )
        );
        bytes32 digest = keccak256(
            abi.encodePacked('\x19\x01', domainSeparator, structHash)
        );
        address signatory = ecrecover(digest, v, r, s);
        require(signatory != address(0), 'Tranq::permit: invalid signature');
        require(signatory == owner, 'Tranq::permit: unauthorized');
        require(now <= deadline, 'Tranq::permit: signature expired');
        allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    function transfer(address dst, uint256 rawAmount) external returns (bool) {
        uint96 amount = safe96(
            rawAmount,
            'Tranq::transfer: amount exceeds 96 bits'
        );
        _transferTokens(msg.sender, dst, amount);
        return true;
    }

    function transferFrom(
        address src,
        address dst,
        uint256 rawAmount
    ) external returns (bool) {
        address spender = msg.sender;
        uint96 spenderAllowance = allowances[src][spender];
        uint96 amount = safe96(
            rawAmount,
            'Tranq::approve: amount exceeds 96 bits'
        );
        if (spender != src && spenderAllowance != uint96(-1)) {
            uint96 newAllowance = sub96(
                spenderAllowance,
                amount,
                'Tranq::transferFrom: transfer amount exceeds spender allowance'
            );
            allowances[src][spender] = newAllowance;
            emit Approval(src, spender, newAllowance);
        }
        _transferTokens(src, dst, amount);
        return true;
    }

    function delegate(address delegatee) public {
        return _delegate(msg.sender, delegatee);
    }

    function delegateBySig(
        address delegatee,
        uint256 nonce,
        uint256 expiry,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) public {
        bytes32 domainSeparator = keccak256(
            abi.encode(
                DOMAIN_TYPEHASH,
                keccak256(bytes(name)),
                getChainId(),
                address(this)
            )
        );
        bytes32 structHash = keccak256(
            abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry)
        );
        bytes32 digest = keccak256(
            abi.encodePacked('\x19\x01', domainSeparator, structHash)
        );
        address signatory = ecrecover(digest, v, r, s);
        require(
            signatory != address(0),
            'Tranq::delegateBySig: invalid signature'
        );
        require(
            nonce == nonces[signatory]++,
            'Tranq::delegateBySig: invalid nonce'
        );
        require(now <= expiry, 'Tranq::delegateBySig: signature expired');
        return _delegate(signatory, delegatee);
    }

    function getCurrentVotes(address account) external view returns (uint96) {
        uint32 nCheckpoints = numCheckpoints[account];
        return
            nCheckpoints > 0 ? checkpoints[account][nCheckpoints - 1].votes : 0;
    }

    function getPriorVotes(address account, uint256 blockNumber)
        public
        view
        returns (uint96)
    {
        require(
            blockNumber < block.number,
            'Tranq::getPriorVotes: not yet determined'
        );
        uint32 nCheckpoints = numCheckpoints[account];
        if (nCheckpoints == 0) {
            return 0;
        }

        if (checkpoints[account][nCheckpoints - 1].fromBlock <= blockNumber) {
            return checkpoints[account][nCheckpoints - 1].votes;
        }

        if (checkpoints[account][0].fromBlock > blockNumber) {
            return 0;
        }
        uint32 lower = 0;
        uint32 upper = nCheckpoints - 1;
        while (upper > lower) {
            uint32 center = upper - (upper - lower) / 2;
            Checkpoint memory cp = checkpoints[account][center];
            if (cp.fromBlock == blockNumber) {
                return cp.votes;
            } else if (cp.fromBlock < blockNumber) {
                lower = center;
            } else {
                upper = center - 1;
            }
        }
        return checkpoints[account][lower].votes;
    }

    function _delegate(address delegator, address delegatee) internal {
        address currentDelegate = delegates[delegator];
        uint96 delegatorBalance = balances[delegator];
        delegates[delegator] = delegatee;
        emit DelegateChanged(delegator, currentDelegate, delegatee);
        _moveDelegates(currentDelegate, delegatee, delegatorBalance);
    }

    function _transferTokens(
        address src,
        address dst,
        uint96 amount
    ) internal {
        require(
            src != address(0),
            'Tranq::_transferTokens: cannot transfer from the zero address'
        );
        require(
            dst != address(0),
            'Tranq::_transferTokens: cannot transfer to the zero address'
        );
        balances[src] = sub96(
            balances[src],
            amount,
            'Tranq::_transferTokens: transfer amount exceeds balance'
        );
        balances[dst] = add96(
            balances[dst],
            amount,
            'Tranq::_transferTokens: transfer amount overflows'
        );
        emit Transfer(src, dst, amount);
        _moveDelegates(delegates[src], delegates[dst], amount);
    }

    function _moveDelegates(
        address srcRep,
        address dstRep,
        uint96 amount
    ) internal {
        if (srcRep != dstRep && amount > 0) {
            if (srcRep != address(0)) {
                uint32 srcRepNum = numCheckpoints[srcRep];
                uint96 srcRepOld = srcRepNum > 0
                    ? checkpoints[srcRep][srcRepNum - 1].votes
                    : 0;
                uint96 srcRepNew = sub96(
                    srcRepOld,
                    amount,
                    'Tranq::_moveVotes: vote amount underflows'
                );
                _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
            }
            if (dstRep != address(0)) {
                uint32 dstRepNum = numCheckpoints[dstRep];
                uint96 dstRepOld = dstRepNum > 0
                    ? checkpoints[dstRep][dstRepNum - 1].votes
                    : 0;
                uint96 dstRepNew = add96(
                    dstRepOld,
                    amount,
                    'Tranq::_moveVotes: vote amount overflows'
                );
                _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
            }
        }
    }

    function _writeCheckpoint(
        address delegatee,
        uint32 nCheckpoints,
        uint96 oldVotes,
        uint96 newVotes
    ) internal {
        uint32 blockNumber = safe32(
            block.number,
            'Tranq::_writeCheckpoint: block number exceeds 32 bits'
        );
        if (
            nCheckpoints > 0 &&
            checkpoints[delegatee][nCheckpoints - 1].fromBlock == blockNumber
        ) {
            checkpoints[delegatee][nCheckpoints - 1].votes = newVotes;
        } else {
            checkpoints[delegatee][nCheckpoints] = Checkpoint(
                blockNumber,
                newVotes
            );
            numCheckpoints[delegatee] = nCheckpoints + 1;
        }
        emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
    }

    function safe32(uint256 n, string memory errorMessage)
        internal
        pure
        returns (uint32)
    {
        require(n < 2**32, errorMessage);
        return uint32(n);
    }

    function safe96(uint256 n, string memory errorMessage)
        internal
        pure
        returns (uint96)
    {
        require(n < 2**96, errorMessage);
        return uint96(n);
    }

    function add96(
        uint96 a,
        uint96 b,
        string memory errorMessage
    ) internal pure returns (uint96) {
        uint96 c = a + b;
        require(c >= a, errorMessage);
        return c;
    }

    function sub96(
        uint96 a,
        uint96 b,
        string memory errorMessage
    ) internal pure returns (uint96) {
        require(b <= a, errorMessage);
        return a - b;
    }

    function getChainId() internal pure returns (uint256) {
        uint256 chainId;
        assembly {
            chainId := chainid()
        }
        return chainId;
    }
}

contract Comptroller is
    ComptrollerVXStorage,
    ComptrollerInterface,
    ComptrollerErrorReporter,
    ExponentialNoError
{
    event MarketListed(TqToken tqToken);

    event MarketEntered(TqToken tqToken, address account);

    event MarketExited(TqToken tqToken, address account);

    event NewCloseFactor(
        uint256 oldCloseFactorMantissa,
        uint256 newCloseFactorMantissa
    );

    event NewCollateralFactor(
        TqToken tqToken,
        uint256 oldCollateralFactorMantissa,
        uint256 newCollateralFactorMantissa
    );

    event NewLiquidationIncentive(
        uint256 oldLiquidationIncentiveMantissa,
        uint256 newLiquidationIncentiveMantissa
    );

    event NewPriceOracle(
        PriceOracle oldPriceOracle,
        PriceOracle newPriceOracle
    );

    event NewPauseGuardian(address oldPauseGuardian, address newPauseGuardian);

    event ActionPaused(string action, bool pauseState);

    event ActionPaused(TqToken tqToken, string action, bool pauseState);

    event SpeedUpdated(
        uint8 tokenType,
        TqToken indexed tqToken,
        uint256 newSpeed
    );

    event ContributorTranqSpeedUpdated(
        address indexed contributor,
        uint256 newSpeed
    );

    event DistributedBorrowerReward(
        uint8 indexed tokenType,
        TqToken indexed tqToken,
        address indexed borrower,
        uint256 tranqDelta,
        uint256 tranqBorrowIndex
    );

    event DistributedSupplierReward(
        uint8 indexed tokenType,
        TqToken indexed tqToken,
        address indexed borrower,
        uint256 tranqDelta,
        uint256 tranqBorrowIndex
    );

    event NewBorrowCap(TqToken indexed tqToken, uint256 newBorrowCap);

    event NewBorrowCapGuardian(
        address oldBorrowCapGuardian,
        address newBorrowCapGuardian
    );

    event TranqGranted(address recipient, uint256 amount);

    uint224 public constant initialIndexConstant = 1e36;

    uint256 internal constant closeFactorMinMantissa = 0.05e18;

    uint256 internal constant closeFactorMaxMantissa = 0.9e18;

    uint256 internal constant collateralFactorMaxMantissa = 0.9e18;

    uint8 public constant rewardTranq = 0;
    uint8 public constant rewardOne = 1;

    constructor() public {
        admin = msg.sender;
    }

    function getAssetsIn(address account)
        external
        view
        returns (TqToken[] memory)
    {
        TqToken[] memory assetsIn = accountAssets[account];
        return assetsIn;
    }

    function checkMembership(address account, TqToken tqToken)
        external
        view
        returns (bool)
    {
        return markets[address(tqToken)].accountMembership[account];
    }

    function enterMarkets(address[] memory tqTokens)
        public
        returns (uint256[] memory)
    {
        uint256 len = tqTokens.length;
        uint256[] memory results = new uint256[](len);
        for (uint256 i = 0; i < len; i++) {
            TqToken tqToken = TqToken(tqTokens[i]);
            results[i] = uint256(addToMarketInternal(tqToken, msg.sender));
        }
        return results;
    }

    function addToMarketInternal(TqToken tqToken, address borrower)
        internal
        returns (Error)
    {
        Market storage marketToJoin = markets[address(tqToken)];
        if (!marketToJoin.isListed) {
            return Error.MARKET_NOT_LISTED;
        }
        if (marketToJoin.accountMembership[borrower] == true) {
            return Error.NO_ERROR;
        }

        marketToJoin.accountMembership[borrower] = true;
        accountAssets[borrower].push(tqToken);
        emit MarketEntered(tqToken, borrower);
        return Error.NO_ERROR;
    }

    function exitMarket(address tqTokenAddress) external returns (uint256) {
        TqToken tqToken = TqToken(tqTokenAddress);

        (uint256 oErr, uint256 tokensHeld, uint256 amountOwed, ) = tqToken
            .getAccountSnapshot(msg.sender);
        require(oErr == 0, 'exitMarket: getAccountSnapshot failed');

        if (amountOwed != 0) {
            return
                fail(
                    Error.NONZERO_BORROW_BALANCE,
                    FailureInfo.EXIT_MARKET_BALANCE_OWED
                );
        }

        uint256 allowed = redeemAllowedInternal(
            tqTokenAddress,
            msg.sender,
            tokensHeld
        );
        if (allowed != 0) {
            return
                failOpaque(
                    Error.REJECTION,
                    FailureInfo.EXIT_MARKET_REJECTION,
                    allowed
                );
        }
        Market storage marketToExit = markets[address(tqToken)];

        if (!marketToExit.accountMembership[msg.sender]) {
            return uint256(Error.NO_ERROR);
        }

        delete marketToExit.accountMembership[msg.sender];

        TqToken[] memory userAssetList = accountAssets[msg.sender];
        uint256 len = userAssetList.length;
        uint256 assetIndex = len;
        for (uint256 i = 0; i < len; i++) {
            if (userAssetList[i] == tqToken) {
                assetIndex = i;
                break;
            }
        }

        assert(assetIndex < len);

        TqToken[] storage storedList = accountAssets[msg.sender];
        storedList[assetIndex] = storedList[storedList.length - 1];
        storedList.length--;
        emit MarketExited(tqToken, msg.sender);
        return uint256(Error.NO_ERROR);
    }

    function mintAllowed(
        address tqToken,
        address minter,
        uint256 mintAmount
    ) external returns (uint256) {
        require(!mintGuardianPaused[tqToken], 'mint is paused');

        mintAmount;
        if (!markets[tqToken].isListed) {
            return uint256(Error.MARKET_NOT_LISTED);
        }

        updateAndDistributeSupplierRewardsForToken(tqToken, minter);
        return uint256(Error.NO_ERROR);
    }

    function mintVerify(
        address tqToken,
        address minter,
        uint256 actualMintAmount,
        uint256 mintTokens
    ) external {
        tqToken;
        minter;
        actualMintAmount;
        mintTokens;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    function redeemAllowed(
        address tqToken,
        address redeemer,
        uint256 redeemTokens
    ) external returns (uint256) {
        uint256 allowed = redeemAllowedInternal(
            tqToken,
            redeemer,
            redeemTokens
        );
        if (allowed != uint256(Error.NO_ERROR)) {
            return allowed;
        }

        updateAndDistributeSupplierRewardsForToken(tqToken, redeemer);
        return uint256(Error.NO_ERROR);
    }

    function redeemAllowedInternal(
        address tqToken,
        address redeemer,
        uint256 redeemTokens
    ) internal view returns (uint256) {
        if (!markets[tqToken].isListed) {
            return uint256(Error.MARKET_NOT_LISTED);
        }

        if (!markets[tqToken].accountMembership[redeemer]) {
            return uint256(Error.NO_ERROR);
        }

        (
            Error err,
            ,
            uint256 shortfall
        ) = getHypotheticalAccountLiquidityInternal(
                redeemer,
                TqToken(tqToken),
                redeemTokens,
                0
            );
        if (err != Error.NO_ERROR) {
            return uint256(err);
        }
        if (shortfall > 0) {
            return uint256(Error.INSUFFICIENT_LIQUIDITY);
        }
        return uint256(Error.NO_ERROR);
    }

    function redeemVerify(
        address tqToken,
        address redeemer,
        uint256 redeemAmount,
        uint256 redeemTokens
    ) external {
        tqToken;
        redeemer;

        if (redeemTokens == 0 && redeemAmount > 0) {
            revert('redeemTokens zero');
        }
    }

    function borrowAllowed(
        address tqToken,
        address borrower,
        uint256 borrowAmount
    ) external returns (uint256) {
        require(!borrowGuardianPaused[tqToken], 'borrow is paused');
        if (!markets[tqToken].isListed) {
            return uint256(Error.MARKET_NOT_LISTED);
        }
        if (!markets[tqToken].accountMembership[borrower]) {
            require(msg.sender == tqToken, 'sender must be tqToken');

            Error err = addToMarketInternal(TqToken(msg.sender), borrower);
            if (err != Error.NO_ERROR) {
                return uint256(err);
            }

            assert(markets[tqToken].accountMembership[borrower]);
        }
        if (oracle.getUnderlyingPrice(TqToken(tqToken)) == 0) {
            return uint256(Error.PRICE_ERROR);
        }
        uint256 borrowCap = borrowCaps[tqToken];

        if (borrowCap != 0) {
            uint256 totalBorrows = TqToken(tqToken).totalBorrows();
            uint256 nextTotalBorrows = add_(totalBorrows, borrowAmount);
            require(nextTotalBorrows < borrowCap, 'market borrow cap reached');
        }
        (
            Error err,
            ,
            uint256 shortfall
        ) = getHypotheticalAccountLiquidityInternal(
                borrower,
                TqToken(tqToken),
                0,
                borrowAmount
            );
        if (err != Error.NO_ERROR) {
            return uint256(err);
        }
        if (shortfall > 0) {
            return uint256(Error.INSUFFICIENT_LIQUIDITY);
        }

        Exp memory borrowIndex = Exp({
            mantissa: TqToken(tqToken).borrowIndex()
        });
        updateAndDistributeBorrowerRewardsForToken(
            tqToken,
            borrower,
            borrowIndex
        );
        return uint256(Error.NO_ERROR);
    }

    function borrowVerify(
        address tqToken,
        address borrower,
        uint256 borrowAmount
    ) external {
        tqToken;
        borrower;
        borrowAmount;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    function repayBorrowAllowed(
        address tqToken,
        address payer,
        address borrower,
        uint256 repayAmount
    ) external returns (uint256) {
        payer;
        borrower;
        repayAmount;
        if (!markets[tqToken].isListed) {
            return uint256(Error.MARKET_NOT_LISTED);
        }

        Exp memory borrowIndex = Exp({
            mantissa: TqToken(tqToken).borrowIndex()
        });
        updateAndDistributeBorrowerRewardsForToken(
            tqToken,
            borrower,
            borrowIndex
        );
        return uint256(Error.NO_ERROR);
    }

    function repayBorrowVerify(
        address tqToken,
        address payer,
        address borrower,
        uint256 actualRepayAmount,
        uint256 borrowerIndex
    ) external {
        tqToken;
        payer;
        borrower;
        actualRepayAmount;
        borrowerIndex;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    function liquidateBorrowAllowed(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        address liquidator,
        address borrower,
        uint256 repayAmount
    ) external returns (uint256) {
        liquidator;
        if (
            !markets[tqTokenBorrowed].isListed ||
            !markets[tqTokenCollateral].isListed
        ) {
            return uint256(Error.MARKET_NOT_LISTED);
        }

        (Error err, , uint256 shortfall) = getAccountLiquidityInternal(
            borrower
        );
        if (err != Error.NO_ERROR) {
            return uint256(err);
        }
        if (shortfall == 0) {
            return uint256(Error.INSUFFICIENT_SHORTFALL);
        }

        uint256 borrowBalance = TqToken(tqTokenBorrowed).borrowBalanceStored(
            borrower
        );
        uint256 maxClose = mul_ScalarTruncate(
            Exp({mantissa: closeFactorMantissa}),
            borrowBalance
        );
        if (repayAmount > maxClose) {
            return uint256(Error.TOO_MUCH_REPAY);
        }
        return uint256(Error.NO_ERROR);
    }

    function liquidateBorrowVerify(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        address liquidator,
        address borrower,
        uint256 actualRepayAmount,
        uint256 seizeTokens
    ) external {
        tqTokenBorrowed;
        tqTokenCollateral;
        liquidator;
        borrower;
        actualRepayAmount;
        seizeTokens;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    function seizeAllowed(
        address tqTokenCollateral,
        address tqTokenBorrowed,
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external returns (uint256) {
        require(!seizeGuardianPaused, 'seize is paused');

        seizeTokens;
        if (
            !markets[tqTokenCollateral].isListed ||
            !markets[tqTokenBorrowed].isListed
        ) {
            return uint256(Error.MARKET_NOT_LISTED);
        }
        if (
            TqToken(tqTokenCollateral).comptroller() !=
            TqToken(tqTokenBorrowed).comptroller()
        ) {
            return uint256(Error.COMPTROLLER_MISMATCH);
        }

        updateAndDistributeSupplierRewardsForToken(tqTokenCollateral, borrower);
        updateAndDistributeSupplierRewardsForToken(
            tqTokenCollateral,
            liquidator
        );
        return uint256(Error.NO_ERROR);
    }

    function seizeVerify(
        address tqTokenCollateral,
        address tqTokenBorrowed,
        address liquidator,
        address borrower,
        uint256 seizeTokens
    ) external {
        tqTokenCollateral;
        tqTokenBorrowed;
        liquidator;
        borrower;
        seizeTokens;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    function transferAllowed(
        address tqToken,
        address src,
        address dst,
        uint256 transferTokens
    ) external returns (uint256) {
        require(!transferGuardianPaused, 'transfer is paused');

        uint256 allowed = redeemAllowedInternal(tqToken, src, transferTokens);
        if (allowed != uint256(Error.NO_ERROR)) {
            return allowed;
        }

        updateAndDistributeSupplierRewardsForToken(tqToken, src);
        updateAndDistributeSupplierRewardsForToken(tqToken, dst);
        return uint256(Error.NO_ERROR);
    }

    function transferVerify(
        address tqToken,
        address src,
        address dst,
        uint256 transferTokens
    ) external {
        tqToken;
        src;
        dst;
        transferTokens;

        if (false) {
            maxAssets = maxAssets;
        }
    }

    struct AccountLiquidityLocalVars {
        uint256 sumCollateral;
        uint256 sumBorrowPlusEffects;
        uint256 tqTokenBalance;
        uint256 borrowBalance;
        uint256 exchangeRateMantissa;
        uint256 oraclePriceMantissa;
        Exp collateralFactor;
        Exp exchangeRate;
        Exp oraclePrice;
        Exp tokensToDenom;
    }

    function getAccountLiquidity(address account)
        public
        view
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        (
            Error err,
            uint256 liquidity,
            uint256 shortfall
        ) = getHypotheticalAccountLiquidityInternal(account, TqToken(0), 0, 0);
        return (uint256(err), liquidity, shortfall);
    }

    function getAccountLiquidityInternal(address account)
        internal
        view
        returns (
            Error,
            uint256,
            uint256
        )
    {
        return
            getHypotheticalAccountLiquidityInternal(account, TqToken(0), 0, 0);
    }

    function getHypotheticalAccountLiquidity(
        address account,
        address tqTokenModify,
        uint256 redeemTokens,
        uint256 borrowAmount
    )
        public
        view
        returns (
            uint256,
            uint256,
            uint256
        )
    {
        (
            Error err,
            uint256 liquidity,
            uint256 shortfall
        ) = getHypotheticalAccountLiquidityInternal(
                account,
                TqToken(tqTokenModify),
                redeemTokens,
                borrowAmount
            );
        return (uint256(err), liquidity, shortfall);
    }

    function getHypotheticalAccountLiquidityInternal(
        address account,
        TqToken tqTokenModify,
        uint256 redeemTokens,
        uint256 borrowAmount
    )
        internal
        view
        returns (
            Error,
            uint256,
            uint256
        )
    {
        AccountLiquidityLocalVars memory vars;
        uint256 oErr;

        TqToken[] memory assets = accountAssets[account];
        for (uint256 i = 0; i < assets.length; i++) {
            TqToken asset = assets[i];

            (
                oErr,
                vars.tqTokenBalance,
                vars.borrowBalance,
                vars.exchangeRateMantissa
            ) = asset.getAccountSnapshot(account);
            if (oErr != 0) {
                return (Error.SNAPSHOT_ERROR, 0, 0);
            }
            vars.collateralFactor = Exp({
                mantissa: markets[address(asset)].collateralFactorMantissa
            });
            vars.exchangeRate = Exp({mantissa: vars.exchangeRateMantissa});

            vars.oraclePriceMantissa = oracle.getUnderlyingPrice(asset);
            if (vars.oraclePriceMantissa == 0) {
                return (Error.PRICE_ERROR, 0, 0);
            }
            vars.oraclePrice = Exp({mantissa: vars.oraclePriceMantissa});

            vars.tokensToDenom = mul_(
                mul_(vars.collateralFactor, vars.exchangeRate),
                vars.oraclePrice
            );

            vars.sumCollateral = mul_ScalarTruncateAddUInt(
                vars.tokensToDenom,
                vars.tqTokenBalance,
                vars.sumCollateral
            );

            vars.sumBorrowPlusEffects = mul_ScalarTruncateAddUInt(
                vars.oraclePrice,
                vars.borrowBalance,
                vars.sumBorrowPlusEffects
            );

            if (asset == tqTokenModify) {
                vars.sumBorrowPlusEffects = mul_ScalarTruncateAddUInt(
                    vars.tokensToDenom,
                    redeemTokens,
                    vars.sumBorrowPlusEffects
                );

                vars.sumBorrowPlusEffects = mul_ScalarTruncateAddUInt(
                    vars.oraclePrice,
                    borrowAmount,
                    vars.sumBorrowPlusEffects
                );
            }
        }

        if (vars.sumCollateral > vars.sumBorrowPlusEffects) {
            return (
                Error.NO_ERROR,
                vars.sumCollateral - vars.sumBorrowPlusEffects,
                0
            );
        } else {
            return (
                Error.NO_ERROR,
                0,
                vars.sumBorrowPlusEffects - vars.sumCollateral
            );
        }
    }

    function liquidateCalculateSeizeTokens(
        address tqTokenBorrowed,
        address tqTokenCollateral,
        uint256 actualRepayAmount
    ) external view returns (uint256, uint256) {
        uint256 priceBorrowedMantissa = oracle.getUnderlyingPrice(
            TqToken(tqTokenBorrowed)
        );
        uint256 priceCollateralMantissa = oracle.getUnderlyingPrice(
            TqToken(tqTokenCollateral)
        );
        if (priceBorrowedMantissa == 0 || priceCollateralMantissa == 0) {
            return (uint256(Error.PRICE_ERROR), 0);
        }

        uint256 exchangeRateMantissa = TqToken(tqTokenCollateral)
            .exchangeRateStored();
        uint256 seizeTokens;
        Exp memory numerator;
        Exp memory denominator;
        Exp memory ratio;
        numerator = mul_(
            Exp({mantissa: liquidationIncentiveMantissa}),
            Exp({mantissa: priceBorrowedMantissa})
        );
        denominator = mul_(
            Exp({mantissa: priceCollateralMantissa}),
            Exp({mantissa: exchangeRateMantissa})
        );
        ratio = div_(numerator, denominator);
        seizeTokens = mul_ScalarTruncate(ratio, actualRepayAmount);
        return (uint256(Error.NO_ERROR), seizeTokens);
    }

    function _setPriceOracle(PriceOracle newOracle) public returns (uint256) {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PRICE_ORACLE_OWNER_CHECK
                );
        }

        PriceOracle oldOracle = oracle;

        oracle = newOracle;

        emit NewPriceOracle(oldOracle, newOracle);
        return uint256(Error.NO_ERROR);
    }

    function _setCloseFactor(uint256 newCloseFactorMantissa)
        external
        returns (uint256)
    {
        require(msg.sender == admin, 'only admin can set close factor');
        uint256 oldCloseFactorMantissa = closeFactorMantissa;
        closeFactorMantissa = newCloseFactorMantissa;
        emit NewCloseFactor(oldCloseFactorMantissa, closeFactorMantissa);
        return uint256(Error.NO_ERROR);
    }

    function _setCollateralFactor(
        TqToken tqToken,
        uint256 newCollateralFactorMantissa
    ) external returns (uint256) {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_COLLATERAL_FACTOR_OWNER_CHECK
                );
        }

        Market storage market = markets[address(tqToken)];
        if (!market.isListed) {
            return
                fail(
                    Error.MARKET_NOT_LISTED,
                    FailureInfo.SET_COLLATERAL_FACTOR_NO_EXISTS
                );
        }
        Exp memory newCollateralFactorExp = Exp({
            mantissa: newCollateralFactorMantissa
        });

        Exp memory highLimit = Exp({mantissa: collateralFactorMaxMantissa});
        if (lessThanExp(highLimit, newCollateralFactorExp)) {
            return
                fail(
                    Error.INVALID_COLLATERAL_FACTOR,
                    FailureInfo.SET_COLLATERAL_FACTOR_VALIDATION
                );
        }

        if (
            newCollateralFactorMantissa != 0 &&
            oracle.getUnderlyingPrice(tqToken) == 0
        ) {
            return
                fail(
                    Error.PRICE_ERROR,
                    FailureInfo.SET_COLLATERAL_FACTOR_WITHOUT_PRICE
                );
        }

        uint256 oldCollateralFactorMantissa = market.collateralFactorMantissa;
        market.collateralFactorMantissa = newCollateralFactorMantissa;

        emit NewCollateralFactor(
            tqToken,
            oldCollateralFactorMantissa,
            newCollateralFactorMantissa
        );
        return uint256(Error.NO_ERROR);
    }

    function _setLiquidationIncentive(uint256 newLiquidationIncentiveMantissa)
        external
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_LIQUIDATION_INCENTIVE_OWNER_CHECK
                );
        }

        uint256 oldLiquidationIncentiveMantissa = liquidationIncentiveMantissa;

        liquidationIncentiveMantissa = newLiquidationIncentiveMantissa;

        emit NewLiquidationIncentive(
            oldLiquidationIncentiveMantissa,
            newLiquidationIncentiveMantissa
        );
        return uint256(Error.NO_ERROR);
    }

    function _supportMarket(TqToken tqToken) external returns (uint256) {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SUPPORT_MARKET_OWNER_CHECK
                );
        }
        if (markets[address(tqToken)].isListed) {
            return
                fail(
                    Error.MARKET_ALREADY_LISTED,
                    FailureInfo.SUPPORT_MARKET_EXISTS
                );
        }
        tqToken.isTqToken();

        markets[address(tqToken)] = Market({
            isListed: true,
            isTranqed: false,
            collateralFactorMantissa: 0
        });
        _addMarketInternal(address(tqToken));
        emit MarketListed(tqToken);
        return uint256(Error.NO_ERROR);
    }

    function _addMarketInternal(address tqToken) internal {
        for (uint256 i = 0; i < allMarkets.length; i++) {
            require(allMarkets[i] != TqToken(tqToken), 'market already added');
        }
        allMarkets.push(TqToken(tqToken));
    }

    function _setMarketBorrowCaps(
        TqToken[] calldata tqTokens,
        uint256[] calldata newBorrowCaps
    ) external {
        require(
            msg.sender == admin || msg.sender == borrowCapGuardian,
            'only admin or borrow cap guardian can set borrow caps'
        );
        uint256 numMarkets = tqTokens.length;
        uint256 numBorrowCaps = newBorrowCaps.length;
        require(
            numMarkets != 0 && numMarkets == numBorrowCaps,
            'invalid input'
        );
        for (uint256 i = 0; i < numMarkets; i++) {
            borrowCaps[address(tqTokens[i])] = newBorrowCaps[i];
            emit NewBorrowCap(tqTokens[i], newBorrowCaps[i]);
        }
    }

    function _setBorrowCapGuardian(address newBorrowCapGuardian) external {
        require(msg.sender == admin, 'only admin can set borrow cap guardian');

        address oldBorrowCapGuardian = borrowCapGuardian;

        borrowCapGuardian = newBorrowCapGuardian;

        emit NewBorrowCapGuardian(oldBorrowCapGuardian, newBorrowCapGuardian);
    }

    function _setPauseGuardian(address newPauseGuardian)
        public
        returns (uint256)
    {
        if (msg.sender != admin) {
            return
                fail(
                    Error.UNAUTHORIZED,
                    FailureInfo.SET_PAUSE_GUARDIAN_OWNER_CHECK
                );
        }

        address oldPauseGuardian = pauseGuardian;

        pauseGuardian = newPauseGuardian;

        emit NewPauseGuardian(oldPauseGuardian, pauseGuardian);
        return uint256(Error.NO_ERROR);
    }

    function _setMintPaused(TqToken tqToken, bool state) public returns (bool) {
        require(
            markets[address(tqToken)].isListed,
            'cannot pause a market that is not listed'
        );
        require(
            msg.sender == pauseGuardian || msg.sender == admin,
            'only pause guardian and admin can pause'
        );
        require(msg.sender == admin || state == true, 'only admin can unpause');
        mintGuardianPaused[address(tqToken)] = state;
        emit ActionPaused(tqToken, 'Mint', state);
        return state;
    }

    function _setBorrowPaused(TqToken tqToken, bool state)
        public
        returns (bool)
    {
        require(
            markets[address(tqToken)].isListed,
            'cannot pause a market that is not listed'
        );
        require(
            msg.sender == pauseGuardian || msg.sender == admin,
            'only pause guardian and admin can pause'
        );
        require(msg.sender == admin || state == true, 'only admin can unpause');
        borrowGuardianPaused[address(tqToken)] = state;
        emit ActionPaused(tqToken, 'Borrow', state);
        return state;
    }

    function _setTransferPaused(bool state) public returns (bool) {
        require(
            msg.sender == pauseGuardian || msg.sender == admin,
            'only pause guardian and admin can pause'
        );
        require(msg.sender == admin || state == true, 'only admin can unpause');
        transferGuardianPaused = state;
        emit ActionPaused('Transfer', state);
        return state;
    }

    function _setSeizePaused(bool state) public returns (bool) {
        require(
            msg.sender == pauseGuardian || msg.sender == admin,
            'only pause guardian and admin can pause'
        );
        require(msg.sender == admin || state == true, 'only admin can unpause');
        seizeGuardianPaused = state;
        emit ActionPaused('Seize', state);
        return state;
    }

    function _become(Unitroller unitroller) public {
        require(
            msg.sender == unitroller.admin(),
            'only unitroller admin can change brains'
        );
        require(
            unitroller._acceptImplementation() == 0,
            'change not authorized'
        );
    }

    function adminOrInitializing() internal view returns (bool) {
        return msg.sender == admin || msg.sender == comptrollerImplementation;
    }

    function setRewardSpeedInternal(
        uint8 rewardType,
        TqToken tqToken,
        uint256 newSpeed
    ) internal {
        uint256 currentRewardSpeed = rewardSpeeds[rewardType][address(tqToken)];
        if (currentRewardSpeed != 0) {
            Exp memory borrowIndex = Exp({mantissa: tqToken.borrowIndex()});
            updateRewardSupplyIndex(rewardType, address(tqToken));
            updateRewardBorrowIndex(rewardType, address(tqToken), borrowIndex);
        } else if (newSpeed != 0) {
            Market storage market = markets[address(tqToken)];
            require(market.isListed == true, 'tranq market is not listed');
            if (
                rewardSupplyState[rewardType][address(tqToken)].index == 0 &&
                rewardSupplyState[rewardType][address(tqToken)].timestamp == 0
            ) {
                rewardSupplyState[rewardType][
                    address(tqToken)
                ] = RewardMarketState({
                    index: initialIndexConstant,
                    timestamp: safe32(
                        getBlockTimestamp(),
                        'block timestamp exceeds 32 bits'
                    )
                });
            }
            if (
                rewardBorrowState[rewardType][address(tqToken)].index == 0 &&
                rewardBorrowState[rewardType][address(tqToken)].timestamp == 0
            ) {
                rewardBorrowState[rewardType][
                    address(tqToken)
                ] = RewardMarketState({
                    index: initialIndexConstant,
                    timestamp: safe32(
                        getBlockTimestamp(),
                        'block timestamp exceeds 32 bits'
                    )
                });
            }
        }
        if (currentRewardSpeed != newSpeed) {
            rewardSpeeds[rewardType][address(tqToken)] = newSpeed;
            emit SpeedUpdated(rewardType, tqToken, newSpeed);
        }
    }

    function updateRewardSupplyIndex(uint8 rewardType, address tqToken)
        internal
    {
        require(rewardType <= 1, 'rewardType is invalid');
        RewardMarketState storage supplyState = rewardSupplyState[rewardType][
            tqToken
        ];
        uint256 supplySpeed = rewardSpeeds[rewardType][tqToken];
        uint256 blockTimestamp = getBlockTimestamp();
        uint256 deltaTimestamps = sub_(
            blockTimestamp,
            uint256(supplyState.timestamp)
        );
        if (deltaTimestamps > 0 && supplySpeed > 0) {
            uint256 supplyTokens = TqToken(tqToken).totalSupply();
            uint256 tranqAccrued = mul_(deltaTimestamps, supplySpeed);
            Double memory ratio = supplyTokens > 0
                ? fraction(tranqAccrued, supplyTokens)
                : Double({mantissa: 0});
            Double memory index = add_(
                Double({mantissa: supplyState.index}),
                ratio
            );
            rewardSupplyState[rewardType][tqToken] = RewardMarketState({
                index: safe224(index.mantissa, 'new index exceeds 224 bits'),
                timestamp: safe32(
                    blockTimestamp,
                    'block timestamp exceeds 32 bits'
                )
            });
        } else if (deltaTimestamps > 0) {
            supplyState.timestamp = safe32(
                blockTimestamp,
                'block timestamp exceeds 32 bits'
            );
        }
    }

    function updateRewardBorrowIndex(
        uint8 rewardType,
        address tqToken,
        Exp memory marketBorrowIndex
    ) internal {
        require(rewardType <= 1, 'rewardType is invalid');
        RewardMarketState storage borrowState = rewardBorrowState[rewardType][
            tqToken
        ];
        uint256 borrowSpeed = rewardSpeeds[rewardType][tqToken];
        uint256 blockTimestamp = getBlockTimestamp();
        uint256 deltaTimestamps = sub_(
            blockTimestamp,
            uint256(borrowState.timestamp)
        );
        if (deltaTimestamps > 0 && borrowSpeed > 0) {
            uint256 borrowAmount = div_(
                TqToken(tqToken).totalBorrows(),
                marketBorrowIndex
            );
            uint256 tranqAccrued = mul_(deltaTimestamps, borrowSpeed);
            Double memory ratio = borrowAmount > 0
                ? fraction(tranqAccrued, borrowAmount)
                : Double({mantissa: 0});
            Double memory index = add_(
                Double({mantissa: borrowState.index}),
                ratio
            );
            rewardBorrowState[rewardType][tqToken] = RewardMarketState({
                index: safe224(index.mantissa, 'new index exceeds 224 bits'),
                timestamp: safe32(
                    blockTimestamp,
                    'block timestamp exceeds 32 bits'
                )
            });
        } else if (deltaTimestamps > 0) {
            borrowState.timestamp = safe32(
                blockTimestamp,
                'block timestamp exceeds 32 bits'
            );
        }
    }

    function updateAndDistributeSupplierRewardsForToken(
        address tqToken,
        address account
    ) internal {
        for (uint8 rewardType = 0; rewardType <= 1; rewardType++) {
            updateRewardSupplyIndex(rewardType, tqToken);
            distributeSupplierReward(rewardType, tqToken, account);
        }
    }

    function distributeSupplierReward(
        uint8 rewardType,
        address tqToken,
        address supplier
    ) internal {
        require(rewardType <= 1, 'rewardType is invalid');
        RewardMarketState storage supplyState = rewardSupplyState[rewardType][
            tqToken
        ];
        Double memory supplyIndex = Double({mantissa: supplyState.index});
        Double memory supplierIndex = Double({
            mantissa: rewardSupplierIndex[rewardType][tqToken][supplier]
        });
        rewardSupplierIndex[rewardType][tqToken][supplier] = supplyIndex
            .mantissa;
        if (supplierIndex.mantissa == 0 && supplyIndex.mantissa > 0) {
            supplierIndex.mantissa = initialIndexConstant;
        }
        Double memory deltaIndex = sub_(supplyIndex, supplierIndex);
        uint256 supplierTokens = TqToken(tqToken).balanceOf(supplier);
        uint256 supplierDelta = mul_(supplierTokens, deltaIndex);
        uint256 supplierAccrued = add_(
            rewardAccrued[rewardType][supplier],
            supplierDelta
        );
        rewardAccrued[rewardType][supplier] = supplierAccrued;
        emit DistributedSupplierReward(
            rewardType,
            TqToken(tqToken),
            supplier,
            supplierDelta,
            supplyIndex.mantissa
        );
    }

    function updateAndDistributeBorrowerRewardsForToken(
        address tqToken,
        address borrower,
        Exp memory marketBorrowIndex
    ) internal {
        for (uint8 rewardType = 0; rewardType <= 1; rewardType++) {
            updateRewardBorrowIndex(rewardType, tqToken, marketBorrowIndex);
            distributeBorrowerReward(
                rewardType,
                tqToken,
                borrower,
                marketBorrowIndex
            );
        }
    }

    function distributeBorrowerReward(
        uint8 rewardType,
        address tqToken,
        address borrower,
        Exp memory marketBorrowIndex
    ) internal {
        require(rewardType <= 1, 'rewardType is invalid');
        RewardMarketState storage borrowState = rewardBorrowState[rewardType][
            tqToken
        ];
        Double memory borrowIndex = Double({mantissa: borrowState.index});
        Double memory borrowerIndex = Double({
            mantissa: rewardBorrowerIndex[rewardType][tqToken][borrower]
        });
        rewardBorrowerIndex[rewardType][tqToken][borrower] = borrowIndex
            .mantissa;
        if (borrowerIndex.mantissa > 0) {
            Double memory deltaIndex = sub_(borrowIndex, borrowerIndex);
            uint256 borrowerAmount = div_(
                TqToken(tqToken).borrowBalanceStored(borrower),
                marketBorrowIndex
            );
            uint256 borrowerDelta = mul_(borrowerAmount, deltaIndex);
            uint256 borrowerAccrued = add_(
                rewardAccrued[rewardType][borrower],
                borrowerDelta
            );
            rewardAccrued[rewardType][borrower] = borrowerAccrued;
            emit DistributedBorrowerReward(
                rewardType,
                TqToken(tqToken),
                borrower,
                borrowerDelta,
                borrowIndex.mantissa
            );
        }
    }

    function claimReward(uint8 rewardType, address payable holder) public {
        return claimReward(rewardType, holder, allMarkets);
    }

    function claimReward(
        uint8 rewardType,
        address payable holder,
        TqToken[] memory tqTokens
    ) public {
        address payable[] memory holders = new address payable[](1);
        holders[0] = holder;
        claimReward(rewardType, holders, tqTokens, true, true);
    }

    function claimReward(
        uint8 rewardType,
        address payable[] memory holders,
        TqToken[] memory tqTokens,
        bool borrowers,
        bool suppliers
    ) public payable {
        require(rewardType <= 1, 'rewardType is invalid');
        for (uint256 i = 0; i < tqTokens.length; i++) {
            TqToken tqToken = tqTokens[i];
            require(
                markets[address(tqToken)].isListed,
                'market must be listed'
            );
            if (borrowers == true) {
                Exp memory borrowIndex = Exp({mantissa: tqToken.borrowIndex()});
                updateRewardBorrowIndex(
                    rewardType,
                    address(tqToken),
                    borrowIndex
                );
                for (uint256 j = 0; j < holders.length; j++) {
                    distributeBorrowerReward(
                        rewardType,
                        address(tqToken),
                        holders[j],
                        borrowIndex
                    );
                    rewardAccrued[rewardType][holders[j]] = grantRewardInternal(
                        rewardType,
                        holders[j],
                        rewardAccrued[rewardType][holders[j]]
                    );
                }
            }
            if (suppliers == true) {
                updateRewardSupplyIndex(rewardType, address(tqToken));
                for (uint256 j = 0; j < holders.length; j++) {
                    distributeSupplierReward(
                        rewardType,
                        address(tqToken),
                        holders[j]
                    );
                    rewardAccrued[rewardType][holders[j]] = grantRewardInternal(
                        rewardType,
                        holders[j],
                        rewardAccrued[rewardType][holders[j]]
                    );
                }
            }
        }
    }

    function grantRewardInternal(
        uint256 rewardType,
        address payable user,
        uint256 amount
    ) internal returns (uint256) {
        if (rewardType == 0) {
            Tranquil tranq = Tranquil(tranqAddress);
            uint256 tranqRemaining = tranq.balanceOf(address(this));
            if (amount > 0 && amount <= tranqRemaining) {
                tranq.transfer(user, amount);
                return 0;
            }
        } else if (rewardType == 1) {
            uint256 oneRemaining = address(this).balance;
            if (amount > 0 && amount <= oneRemaining) {
                user.transfer(amount);
                return 0;
            }
        }
        return amount;
    }

    function _grantTranq(address payable recipient, uint256 amount) public {
        require(adminOrInitializing(), 'only admin can grant tranq');
        uint256 amountLeft = grantRewardInternal(0, recipient, amount);
        require(amountLeft == 0, 'insufficient tranq for grant');
        emit TranqGranted(recipient, amount);
    }

    function _setRewardSpeed(
        uint8 rewardType,
        TqToken tqToken,
        uint256 rewardSpeed
    ) public {
        require(rewardType <= 1, 'rewardType is invalid');
        require(adminOrInitializing(), 'only admin can set reward speed');
        setRewardSpeedInternal(rewardType, tqToken, rewardSpeed);
    }

    function getAllMarkets() public view returns (TqToken[] memory) {
        return allMarkets;
    }

    function getBlockTimestamp() public view returns (uint256) {
        return block.timestamp;
    }

    function setTranqAddress(address newTranqAddress) public {
        require(msg.sender == admin);
        tranqAddress = newTranqAddress;
    }

    function() external payable {}
}
