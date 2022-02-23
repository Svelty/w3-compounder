// Sources flattened with hardhat v2.6.5 https://hardhat.org

// File contracts/EIP20Interface.sol

pragma solidity 0.5.17;

/**
 * @title ERC 20 Token Standard Interface
 *  https://eips.ethereum.org/EIPS/eip-20
 */
interface EIP20Interface {
    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function decimals() external view returns (uint8);

    /**
     * @notice Get the total number of tokens in circulation
     * @return The supply of tokens
     */
    function totalSupply() external view returns (uint256);

    /**
     * @notice Gets the balance of the specified address
     * @param owner The address from which the balance will be retrieved
     * @return The balance
     */
    function balanceOf(address owner) external view returns (uint256 balance);

    /**
     * @notice Transfer `amount` tokens from `msg.sender` to `dst`
     * @param dst The address of the destination account
     * @param amount The number of tokens to transfer
     * @return Whether or not the transfer succeeded
     */
    function transfer(address dst, uint256 amount)
        external
        returns (bool success);

    /**
     * @notice Transfer `amount` tokens from `src` to `dst`
     * @param src The address of the source account
     * @param dst The address of the destination account
     * @param amount The number of tokens to transfer
     * @return Whether or not the transfer succeeded
     */
    function transferFrom(
        address src,
        address dst,
        uint256 amount
    ) external returns (bool success);

    /**
     * @notice Approve `spender` to transfer up to `amount` from `src`
     * @dev This will overwrite the approval amount for `spender`
     *  and is subject to issues noted [here](https://eips.ethereum.org/EIPS/eip-20#approve)
     * @param spender The address of the account which may transfer tokens
     * @param amount The number of tokens that are approved (-1 means infinite)
     * @return Whether or not the approval succeeded
     */
    function approve(address spender, uint256 amount)
        external
        returns (bool success);

    /**
     * @notice Get the current allowance from `owner` for `spender`
     * @param owner The address of the account which owns the tokens to be spent
     * @param spender The address of the account which may transfer tokens
     * @return The number of tokens allowed to be spent (-1 means infinite)
     */
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

// File contracts/SafeMath.sol

pragma solidity 0.5.17;

// From https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/math/Math.sol
// Subject to the MIT license.

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, 'SafeMath: addition overflow');

        return c;
    }

    /**
     * @dev Returns the addition of two unsigned integers, reverting with custom message on overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, errorMessage);

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on underflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot underflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, 'SafeMath: subtraction underflow');
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on underflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot underflow.
     */
    function sub(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, 'SafeMath: multiplication overflow');

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, errorMessage);

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers.
     * Reverts on division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, 'SafeMath: division by zero');
    }

    /**
     * @dev Returns the integer division of two unsigned integers.
     * Reverts with custom message on division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, 'SafeMath: modulo by zero');
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(
        uint256 a,
        uint256 b,
        string memory errorMessage
    ) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

// File contracts/Staking/ReentrancyGuard.sol

pragma solidity 0.5.17;

/**
 * @dev Contract module that helps prevent reentrant calls to a function.
 *
 * Inheriting from `ReentrancyGuard` will make the {nonReentrant} modifier
 * available, which can be applied to functions to make sure there are no nested
 * (reentrant) calls to them.
 *
 * Note that because there is a single `nonReentrant` guard, functions marked as
 * `nonReentrant` may not call one another. This can be worked around by making
 * those functions `private`, and then adding `external` `nonReentrant` entry
 * points to them.
 *
 * TIP: If you would like to learn more about reentrancy and alternative ways
 * to protect against it, check out our blog post
 * https://blog.openzeppelin.com/reentrancy-after-istanbul/[Reentrancy After Istanbul].
 */
contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() public {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and make it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, 'ReentrancyGuard: reentrant call');

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

// File contracts/Staking/TranquilStakingProxyStorage.sol

pragma solidity 0.5.17;

contract TranquilStakingProxyStorage {
    // Current contract admin address
    address public admin;

    // Requested new admin for the contract
    address public pendingAdmin;

    // Current contract implementation address
    address public implementation;

    // Requested new contract implementation address
    address public pendingImplementation;
}

// File contracts/Staking/TranquilStakingProxy.sol

pragma solidity 0.5.17;

contract TranquilStakingProxy is ReentrancyGuard, TranquilStakingProxyStorage {
    constructor() public {
        admin = msg.sender;
    }

    /**
     * Request a new admin to be set for the contract.
     *
     * @param newAdmin New admin address
     */
    function setPendingAdmin(address newAdmin) public adminOnly {
        pendingAdmin = newAdmin;
    }

    /**
     * Accept admin transfer from the current admin to the new.
     */
    function acceptPendingAdmin() public {
        require(
            msg.sender == pendingAdmin && pendingAdmin != address(0),
            'Caller must be the pending admin'
        );

        admin = pendingAdmin;
        pendingAdmin = address(0);
    }

    /**
     * Request a new implementation to be set for the contract.
     *
     * @param newImplementation New contract implementation contract address
     */
    function setPendingImplementation(address newImplementation)
        public
        adminOnly
    {
        pendingImplementation = newImplementation;
    }

    /**
     * Accept pending implementation change
     */
    function acceptPendingImplementation() public {
        require(
            msg.sender == pendingImplementation &&
                pendingImplementation != address(0),
            'Only the pending implementation contract can call this'
        );

        implementation = pendingImplementation;
        pendingImplementation = address(0);
    }

    function() external payable {
        (bool success, ) = implementation.delegatecall(msg.data);

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

    /********************************************************
     *                                                      *
     *                      MODIFIERS                       *
     *                                                      *
     ********************************************************/

    modifier adminOnly() {
        require(msg.sender == admin, 'admin only');
        _;
    }
}

// File contracts/Staking/TranquilStakingStorage.sol

pragma solidity 0.5.17;

contract TranquilStakingStorage is TranquilStakingProxyStorage {
    uint256 constant nofStakingRewards = 2;
    uint256 constant REWARD_TRANQ = 0;
    uint256 constant REWARD_ONE = 1;

    // Address of the staked token.
    address public stakedTokenAddress;

    // Addresses of the ERC20 reward tokens
    mapping(uint256 => address) public rewardTokenAddresses;

    // Reward accrual speeds per reward token as tokens per second
    mapping(uint256 => uint256) public rewardSpeeds;

    // Unclaimed staking rewards per user and token
    mapping(address => mapping(uint256 => uint256)) public accruedReward;

    // Supplied tokens at stake per user
    mapping(address => uint256) public supplyAmount;

    // Sum of all supplied tokens at stake
    uint256 public totalSupplies;

    mapping(uint256 => uint256) public rewardIndex;
    mapping(address => mapping(uint256 => uint256)) public supplierRewardIndex;
    uint256 public accrualBlockTimestamp;
}

// File contracts/Staking/TranquilLockedStakingStorage.sol

pragma solidity 0.5.17;

contract TranquilLockedStakingStorage is TranquilStakingStorage {
    uint256 constant REWARD_TRANQ = 0;
    uint256 constant REWARD_ONE = 1;
    uint256 constant REWARD_WBTC = 2;
    uint256 constant REWARD_ETH = 3;
    uint256 constant REWARD_USDC = 4;
    uint256 constant REWARD_USDT = 5;

    // Total number of staking reward tokens;
    uint256 public rewardTokenCount;

    // Address of the staked token.
    address public stakedTokenAddress;

    // Addresses of the ERC20 reward tokens
    mapping(uint256 => address) public rewardTokenAddresses;

    // Reward accrual speeds per reward token as tokens per second
    mapping(uint256 => uint256) public rewardSpeeds;

    // Unclaimed staking rewards per user and token
    mapping(address => mapping(uint256 => uint256)) public accruedReward;

    // Supplied tokens at stake per user
    mapping(address => uint256) public supplyAmount;

    // Sum of all supplied tokens at stake
    uint256 public totalSupplies;

    mapping(uint256 => uint256) public rewardIndex;
    mapping(address => mapping(uint256 => uint256)) public supplierRewardIndex;
    uint256 public accrualBlockTimestamp;

    // Time that a deposit is locked for before it can be withdrawn.
    uint256 public lockDuration;

    struct LockedSupply {
        uint256 stakedTokenAmount;
        uint256 unlockTime;
    }

    // Locked deposits of the staked token per user
    mapping(address => LockedSupply[]) public lockedSupplies;

    // The amount of unlocked tokens per user.
    mapping(address => uint256) public unlockedSupplyAmount;

    // The percentage of staked tokens to burn if withdrawn early. Expressed as a mantissa.
    uint256 public earlyRedeemPenaltyMantissa;

    // Amount of tokens that were slashed through early redemption.
    uint256 public slashedTokenAmount;
}

// File contracts/Staking/TranquilLockedStaking.sol

pragma solidity 0.5.17;
pragma experimental ABIEncoderV2;

contract TranquilLockedStaking is
    ReentrancyGuard,
    TranquilLockedStakingStorage
{
    using SafeMath for uint256;

    constructor() public {
        admin = msg.sender;
    }

    /********************************************************
     *                                                      *
     *                   PUBLIC FUNCTIONS                   *
     *                                                      *
     ********************************************************/

    /**
     * Deposit and lock tokens into the staking contract.
     *
     * @param amount The amount of tokens to deposit
     */
    function deposit(uint256 amount) external nonReentrant {
        require(
            stakedTokenAddress != address(0),
            'Staked token address can not be zero'
        );

        EIP20Interface stakedToken = EIP20Interface(stakedTokenAddress);
        uint256 contractBalance = stakedToken.balanceOf(address(this));
        stakedToken.transferFrom(msg.sender, address(this), amount);
        uint256 depositedAmount = stakedToken.balanceOf(address(this)).sub(
            contractBalance
        );

        require(depositedAmount > 0, 'Zero deposit');

        distributeReward(msg.sender);

        totalSupplies = totalSupplies.add(depositedAmount);
        supplyAmount[msg.sender] = supplyAmount[msg.sender].add(
            depositedAmount
        );

        LockedSupply memory lockedSupply;
        lockedSupply.stakedTokenAmount = depositedAmount;
        lockedSupply.unlockTime = block.timestamp + lockDuration;
        lockedSupplies[msg.sender].push(lockedSupply);

        updateExpiredLocks(msg.sender);
    }

    /**
     * Redeem tokens from the contract.
     *
     * @param amount Redeem amount
     */
    function redeem(uint256 amount) external nonReentrant {
        require(
            stakedTokenAddress != address(0),
            'Staked token address can not be zero'
        );
        require(amount <= supplyAmount[msg.sender], 'Too large withdrawal');
        require(
            amount <= getUnlockedBalance(msg.sender),
            'Insufficient unlocked balance'
        );

        distributeReward(msg.sender);
        updateExpiredLocks(msg.sender);

        supplyAmount[msg.sender] = supplyAmount[msg.sender].sub(amount);
        unlockedSupplyAmount[msg.sender] = unlockedSupplyAmount[msg.sender].sub(
            amount
        );
        totalSupplies = totalSupplies.sub(amount);

        EIP20Interface stakedToken = EIP20Interface(stakedTokenAddress);
        stakedToken.transfer(msg.sender, amount);
    }

    /**
     * Redeems locked tokens before the unlock time with a penalty.
     *
     * @param amount Redeem amount
     */
    function redeemEarly(uint256 amount) external nonReentrant {
        require(
            stakedTokenAddress != address(0),
            'Staked token address can not be zero'
        );
        require(amount <= supplyAmount[msg.sender], 'Too large withdrawal');
        require(
            amount <= getLockedBalance(msg.sender),
            'Insufficient locked balance'
        );

        distributeReward(msg.sender);

        LockedSupply[] storage lockedSupplies = lockedSupplies[msg.sender];
        uint256 totalSupplyAmount = 0;
        for (uint256 i = 0; i < lockedSupplies.length; ++i) {
            if (totalSupplyAmount == amount) {
                break;
            }

            uint256 supplyAmount = 0;
            if (
                lockedSupplies[i].stakedTokenAmount <=
                amount - totalSupplyAmount
            ) {
                supplyAmount = lockedSupplies[i].stakedTokenAmount;
                delete lockedSupplies[i];
            } else {
                supplyAmount = amount - totalSupplyAmount;
                lockedSupplies[i].stakedTokenAmount -= supplyAmount;
            }

            totalSupplyAmount += supplyAmount;
        }
        updateExpiredLocks(msg.sender);

        supplyAmount[msg.sender] = supplyAmount[msg.sender].sub(amount);
        totalSupplies = totalSupplies.sub(amount);

        uint256 penaltyAmount = SafeMath.div(
            SafeMath.mul(amount, earlyRedeemPenaltyMantissa),
            1e18
        );
        uint256 amountAfterPenalty = amount - penaltyAmount;
        slashedTokenAmount += penaltyAmount;

        EIP20Interface stakedToken = EIP20Interface(stakedTokenAddress);
        stakedToken.transfer(msg.sender, amountAfterPenalty);
    }

    /**
     * Claim pending rewards from the staking contract by transferring them
     * to the requester.
     */
    function claimRewards() external nonReentrant {
        distributeReward(msg.sender);
        updateExpiredLocks(msg.sender);

        for (uint256 i = 0; i < rewardTokenCount; i += 1) {
            uint256 amount = accruedReward[msg.sender][i];

            if (i == REWARD_ONE) {
                claimOne(msg.sender, amount);
            } else {
                claimErc20(i, msg.sender, amount);
            }
        }
    }

    /**
     * Get the current amount of available rewards for claiming.
     *
     * @param user The user whose rewards to query
     * @param rewardToken Reward token whose rewards to query
     * @return Balance of claimable reward tokens
     */
    function getClaimableRewards(address user, uint256 rewardToken)
        external
        view
        returns (uint256)
    {
        require(rewardToken <= rewardTokenCount, 'Invalid reward token');

        uint256 decimalConversion = 36 +
            18 -
            getRewardTokenDecimals(rewardToken);
        uint256 rewardIndexDelta = rewardIndex[rewardToken].sub(
            supplierRewardIndex[user][rewardToken]
        );
        uint256 claimableReward = rewardIndexDelta
            .mul(supplyAmount[user])
            .div(10**decimalConversion)
            .add(accruedReward[user][rewardToken]);

        return claimableReward;
    }

    /**
     * Gets the individual locked deposit data.
     *
     * @param user The user whose balance to query
     */
    function getLockedSupplies(address user)
        external
        view
        returns (LockedSupply[] memory)
    {
        return lockedSupplies[user];
    }

    /**
     * Gets the amount of unlocked redeemable tokens to unstake.
     *
     * @param user The user whose balance to query
     */
    function getUnlockedBalance(address user) public view returns (uint256) {
        LockedSupply[] memory lockedSupplies = lockedSupplies[user];

        uint256 unlockedAmount = unlockedSupplyAmount[user];
        for (uint256 i = 0; i < lockedSupplies.length; ++i) {
            LockedSupply memory lockedSupply = lockedSupplies[i];
            if (block.timestamp >= lockedSupply.unlockTime) {
                unlockedAmount += lockedSupply.stakedTokenAmount;
            }
        }

        return unlockedAmount;
    }

    /**
     * Gets the amount of locked tokens.
     *
     * @param user The user whose balance to query
     */
    function getLockedBalance(address user) public view returns (uint256) {
        return supplyAmount[user] - getUnlockedBalance(user);
    }

    /**
     * Fallback function to accept ONE deposits.
     */
    function() external payable {}

    /********************************************************
     *                                                      *
     *               ADMIN-ONLY FUNCTIONS                   *
     *                                                      *
     ********************************************************/

    /**
     * Set the total number of reward tokens.
     *
     * @param newRewardTokenCount New total number of reward tokens
     */
    function setRewardTokenCount(uint256 newRewardTokenCount)
        external
        adminOnly
    {
        rewardTokenCount = newRewardTokenCount;
    }

    /**
     * Set the lock duration for staked tokens.
     *
     * @param newLockDuration New lock duration
     */
    function setLockDuration(uint256 newLockDuration) external adminOnly {
        lockDuration = newLockDuration;
    }

    /**
     * Set reward distribution speed.
     *
     * @param rewardToken Reward token speed to change
     * @param speed New reward speed
     */
    function setRewardSpeed(uint256 rewardToken, uint256 speed)
        external
        adminOnly
    {
        if (accrualBlockTimestamp != 0) {
            accrueReward();
        }

        rewardSpeeds[rewardToken] = speed;
    }

    /**
     * Set ERC20 reward token contract address.
     *
     * @param rewardToken Reward token address to set
     * @param rewardTokenAddress New contract address
     */
    function setRewardTokenAddress(
        uint256 rewardToken,
        address rewardTokenAddress
    ) external adminOnly {
        require(rewardToken != REWARD_ONE, 'Cannot set ONE address');
        rewardTokenAddresses[rewardToken] = rewardTokenAddress;
    }

    /**
     * Set the staked token contract address.
     *
     * @param newStakedTokenAddress New staked token contract address
     */
    function setStakedTokenAddress(address newStakedTokenAddress)
        external
        adminOnly
    {
        stakedTokenAddress = newStakedTokenAddress;
    }

    /**
     * Set the early redeem penalty.
     *
     * @param newEarlyRedeemPenaltyMantissa New early redeem penalty
     */
    function setEarlyRedeemPenalty(uint256 newEarlyRedeemPenaltyMantissa)
        external
        adminOnly
    {
        earlyRedeemPenaltyMantissa = newEarlyRedeemPenaltyMantissa;
    }

    /**
     * Accept this contract as the implementation for a proxy.
     *
     * @param proxy TranquilStakingProxy
     */
    function becomeImplementation(TranquilStakingProxy proxy) external {
        require(
            msg.sender == proxy.admin(),
            'Only proxy admin can change the implementation'
        );
        proxy.acceptPendingImplementation();
    }

    /**
     * Withdraw slashed tokens.
     *
     * @param amount The amount to withdraw
     */
    function withdrawSlashedTokens(uint256 amount) external adminOnly {
        require(
            amount <= slashedTokenAmount,
            'Withdraw amount exceeds slashed token amount'
        );
        EIP20Interface token = EIP20Interface(stakedTokenAddress);
        slashedTokenAmount = slashedTokenAmount.sub(amount);
        token.transfer(admin, amount);
    }

    /**
     * Emergency withdraw of the given token.
     *
     * @param tokenAddress The address of the token to withdraw
     * @param amount The amount to withdraw
     */
    function emergencyWithdraw(address tokenAddress, uint256 amount)
        external
        adminOnly
    {
        EIP20Interface token = EIP20Interface(tokenAddress);
        token.transfer(admin, amount);
    }

    /**
     * Emergency withdraw of the native ONE token.
     *
     * @param amount The amount to withdraw
     */
    function emergencyWithdrawNative(uint256 amount) external adminOnly {
        msg.sender.transfer(amount);
    }

    /********************************************************
     *                                                      *
     *                  INTERNAL FUNCTIONS                  *
     *                                                      *
     ********************************************************/

    /**
     * Updates and removes expired locked deposits.
     */
    function updateExpiredLocks(address user) internal {
        uint256 oldLockedBalance = getLockedBalance(user);

        LockedSupply[] storage lockedSupplies = lockedSupplies[user];
        uint256 firstLockedIndex = 0;
        for (uint256 i = 0; i < lockedSupplies.length; ++i) {
            if (block.timestamp < lockedSupplies[i].unlockTime) {
                break;
            }

            unlockedSupplyAmount[user] += lockedSupplies[i].stakedTokenAmount;
            delete lockedSupplies[i];
            firstLockedIndex++;
        }

        // Shift array to new length if elements were deleted.
        uint256 newArrayLength = lockedSupplies.length - firstLockedIndex;
        for (uint256 i = 0; i < newArrayLength; ++i) {
            lockedSupplies[i] = lockedSupplies[firstLockedIndex + i];
        }
        lockedSupplies.length = newArrayLength;

        require(
            oldLockedBalance == getLockedBalance(user),
            'Locked balance should be same before and after update.'
        );
    }

    /**
     * Update reward accrual state.
     *
     * @dev accrueReward() must be called every time the token balances
     *      or reward speeds change
     */
    function accrueReward() internal {
        uint256 blockTimestampDelta = block.timestamp.sub(
            accrualBlockTimestamp
        );
        accrualBlockTimestamp = block.timestamp;

        if (blockTimestampDelta == 0 || totalSupplies == 0) {
            return;
        }

        for (uint256 i = 0; i < rewardTokenCount; i += 1) {
            uint256 rewardSpeed = rewardSpeeds[i];
            if (rewardSpeed == 0) {
                continue;
            }

            uint256 accrued = rewardSpeeds[i].mul(blockTimestampDelta);
            uint256 accruedPerStakedToken = accrued.mul(1e36).div(
                totalSupplies
            );

            rewardIndex[i] = rewardIndex[i].add(accruedPerStakedToken);
        }
    }

    /**
     * Calculate accrued rewards for a single account based on the reward indexes.
     *
     * @param recipient Account for which to calculate accrued rewards
     */
    function distributeReward(address recipient) internal {
        accrueReward();

        for (uint256 i = 0; i < rewardTokenCount; i += 1) {
            uint256 decimalConversion = 36 + 18 - getRewardTokenDecimals(i);
            uint256 rewardIndexDelta = rewardIndex[i].sub(
                supplierRewardIndex[recipient][i]
            );
            uint256 accruedAmount = rewardIndexDelta
                .mul(supplyAmount[recipient])
                .div(10**decimalConversion);
            accruedReward[recipient][i] = accruedReward[recipient][i].add(
                accruedAmount
            );
            supplierRewardIndex[recipient][i] = rewardIndex[i];
        }
    }

    /**
     * Transfer ONE rewards from the contract to the reward recipient.
     *
     * @param recipient Address, whose ONE rewards are claimed
     * @param amount The amount of claimed ONE
     */
    function claimOne(address payable recipient, uint256 amount) internal {
        require(
            accruedReward[recipient][REWARD_ONE] <= amount,
            'Not enough accrued rewards'
        );

        accruedReward[recipient][REWARD_ONE] = accruedReward[recipient][
            REWARD_ONE
        ].sub(amount);
        recipient.transfer(amount);
    }

    /**
     * Transfer ERC20 rewards from the contract to the reward recipient.
     *
     * @param rewardToken ERC20 reward token which is claimed
     * @param recipient Address, whose rewards are claimed
     * @param amount The amount of claimed reward
     */
    function claimErc20(
        uint256 rewardToken,
        address recipient,
        uint256 amount
    ) internal {
        require(rewardToken != REWARD_ONE, 'Cannot use claimErc20 for ONE');
        require(
            accruedReward[recipient][rewardToken] <= amount,
            'Not enough accrued rewards'
        );
        require(
            rewardTokenAddresses[rewardToken] != address(0),
            'reward token address can not be zero'
        );

        EIP20Interface token = EIP20Interface(
            rewardTokenAddresses[rewardToken]
        );
        accruedReward[recipient][rewardToken] = accruedReward[recipient][
            rewardToken
        ].sub(amount);
        token.transfer(recipient, amount);
    }

    /**
     * Returns the decimals for a reward token.
     *
     * @param rewardToken Reward token to query
     */
    function getRewardTokenDecimals(uint256 rewardToken)
        internal
        view
        returns (uint256)
    {
        require(
            rewardToken == REWARD_ONE ||
                rewardTokenAddresses[rewardToken] != address(0),
            'Reward token address must be set'
        );

        if (rewardToken == REWARD_ONE) {
            return 18;
        }

        return EIP20Interface(rewardTokenAddresses[rewardToken]).decimals();
    }

    /********************************************************
     *                                                      *
     *                      MODIFIERS                       *
     *                                                      *
     ********************************************************/

    modifier adminOnly() {
        require(msg.sender == admin, 'admin only');
        _;
    }
}
