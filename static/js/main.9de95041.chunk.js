(this["webpackJsonp@uniswap/interface"] = this["webpackJsonp@uniswap/interface"] || []).push([
    [1], {
        112: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]')
        },
        164: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        165: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"bool","name":"value","type":"bool"}],"name":"AuthorizedCaller","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nextClaimDate","type":"uint256"}],"name":"ClaimRewardSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"poolName","type":"string"},{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"stakedToken","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"unstakeRewardTax","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakePeriod","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardTokensByPeriod","type":"uint256"}],"name":"PoolAddedSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"switchDate","type":"uint256"}],"name":"PoolSwitchedSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"rewardBalance","type":"uint256"}],"name":"RetrieveRewardSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardAddedSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tax","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nextClaimDate","type":"uint256"}],"name":"StakeTokenSuccessfully","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"poolIndex","type":"uint256"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnstakeTokenSuccessfully","type":"event"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addRewardToPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"countAuthorizedCallers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"poolName","type":"string"},{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"stakedToken","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"unstakeRewardTax","type":"uint256"},{"internalType":"uint256","name":"stakePeriod","type":"uint256"},{"internalType":"uint256","name":"rewardTokensByPeriod","type":"uint256"}],"name":"createPool","outputs":[{"components":[{"internalType":"string","name":"poolName","type":"string"},{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"stakedToken","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"unstakeRewardTax","type":"uint256"},{"internalType":"uint256","name":"stakePeriod","type":"uint256"},{"internalType":"uint256","name":"rewardTokensByPeriod","type":"uint256"}],"internalType":"struct LamboStake.Pool","name":"","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"estimatedMyRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"estimatedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getCountStakers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getMinStakersForFullReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getMinTotalStakedForFullReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getMinUserStakesForReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"getNextClaimDate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getRewardPool","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getRewardTokensByPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getStakePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getStakeTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getStakeTokenTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getTotalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getUnstakeRewardTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"getUnstakeTokenTax","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"getUserRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"getUserStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isAuthorizedCaller","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"listPools","outputs":[{"components":[{"internalType":"string","name":"poolName","type":"string"},{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"stakedToken","type":"address"},{"internalType":"address","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"unstakeRewardTax","type":"uint256"},{"internalType":"uint256","name":"stakePeriod","type":"uint256"},{"internalType":"uint256","name":"rewardTokensByPeriod","type":"uint256"}],"internalType":"struct LamboStake.Pool[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"resetPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retrieveBNB","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"retrieveMyRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"retrieveRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"retrieveRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retrieveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"bool","name":"value","type":"bool"}],"name":"setAuthorizedCallers","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"count","type":"uint256"}],"name":"setMinStakersForFullReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMinTotalStakedForFullReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setMinUserStakesForReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setRewardTokensByPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"stakeTaxpoolIndex","type":"uint256"},{"internalType":"uint256","name":"stakeTokenTax","type":"uint256"},{"internalType":"uint256","name":"unstakeTokenTax","type":"uint256"}],"name":"setStakeTaxPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"tax","type":"uint256"}],"name":"setUnstakeRewardTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"toDays","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"toHours","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"toMinutes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"}],"name":"unstakeMyTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"poolIndex","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"unstakeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        288: function(e) {
            e.exports = JSON.parse('{"name":"ScrappyInu Default List","timestamp":"2021-05-06T00:00:00Z","version":{"major":3,"minor":0,"patch":0},"tags":{},"logoURI":"https://pancakeswap.finance/logo.png","keywords":["ScrappyInu","default"],"tokens":[{"name":"WBNB Token","symbol":"WBNB","address":"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png"},{"name":"BUSD Token","symbol":"BUSD","address":"0xe9e7cea3dedca5984780bafc599bd69add087d56","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xe9e7cea3dedca5984780bafc599bd69add087d56.png"},{"name":"Ethereum Token","symbol":"ETH","address":"0x2170ed0880ac9a755fd29b2688956bd959f933f8","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x2170ed0880ac9a755fd29b2688956bd959f933f8.png"},{"name":"BTCB Token","symbol":"BTCB","address":"0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c.png"},{"name":"Tether USD","symbol":"USDT","address":"0x55d398326f99059ff775485246999027b3197955","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x55d398326f99059ff775485246999027b3197955.png"},{"name":"PancakeSwap Token","symbol":"CAKE","address":"0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82.png"},{"name":"Venus","symbol":"XVS","address":"0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63.png"},{"name":"VAI Stablecoin","symbol":"VAI","address":"0x4bd17003473389a42daf6a0a729f6fdb328bbbd7","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x4bd17003473389a42daf6a0a729f6fdb328bbbd7.png"},{"name":"Pancake Bunny","symbol":"BUNNY","address":"0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51.png"},{"name":"ScrappyInu","symbol":"ScrappyInu","address":"0x123c79c9fc5da0878dbe51a57d6754cb017343df","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x123c79c9fc5da0878dbe51a57d6754cb017343df.png"},{"name":"Alpaca","symbol":"ALPACA","address":"0x8f0528ce5ef7b51152a59745befdd91d97091d2f","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x8f0528ce5ef7b51152a59745befdd91d97091d2f.png"},{"name":"Belt","symbol":"BELT","address":"0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png"},{"name":"TokoCrypto","symbol":"TKO","address":"0x9f589e3eabe42ebc94a44727b3f3531c0c877809","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebc94a44727b3f3531c0c877809.png"},{"name":"Nerve Finance","symbol":"NRV","address":"0x42f6f551ae042cbe50c739158b4f0cac0edb9096","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0x42f6f551ae042cbe50c739158b4f0cac0edb9096.png"},{"name":"Ellipsis","symbol":"EPS","address":"0xa7f552078dcc247c2684336020c03648500c6d9f","chainId":56,"decimals":18,"logoURI":"https://pancakeswap.finance/images/tokens/0xa7f552078dcc247c2684336020c03648500c6d9f.png"}]}')
        },
        289: function(e) {
            e.exports = JSON.parse('{"name":"Unsupported Tokens","timestamp":"2021-01-05T20:47:02.923Z","version":{"major":1,"minor":0,"patch":0},"tags":{},"logoURI":"ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir","keywords":["ScrappyInu","unsupported"],"tokens":[]}')
        },
        294: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"bytes32[]","name":"_codes","type":"bytes32[]"},{"internalType":"address[]","name":"_implementations","type":"address[]"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"code","type":"bytes32"}],"name":"CodeAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"ImplementationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_newOwner","type":"address"}],"name":"OwnerChanged","type":"event"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"acceptedCodes","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"acceptedImplementations","outputs":[{"internalType":"bool","name":"exists","type":"bool"},{"internalType":"uint128","name":"index","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_code","type":"bytes32"}],"name":"addCode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_argentWallet","type":"address"}],"name":"addCodeAndImplementationFromWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_impl","type":"address"}],"name":"addImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getCodes","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getImplementations","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_wallet","type":"address"}],"name":"isArgentWallet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')
        },
        295: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_ens","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"uint256","name":"contentType","type":"uint256"}],"name":"ABIChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"a","type":"address"}],"name":"AddrChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"coinType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"newAddress","type":"bytes"}],"name":"AddressChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"target","type":"address"},{"indexed":false,"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"AuthorisationChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"hash","type":"bytes"}],"name":"ContenthashChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"},{"indexed":false,"internalType":"bytes","name":"record","type":"bytes"}],"name":"DNSRecordChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes","name":"name","type":"bytes"},{"indexed":false,"internalType":"uint16","name":"resource","type":"uint16"}],"name":"DNSRecordDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"DNSZoneCleared","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"indexed":false,"internalType":"address","name":"implementer","type":"address"}],"name":"InterfaceChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"NameChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"x","type":"bytes32"},{"indexed":false,"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"PubkeyChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"string","name":"indexedKey","type":"string"},{"indexed":false,"internalType":"string","name":"key","type":"string"}],"name":"TextChanged","type":"event"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentTypes","type":"uint256"}],"name":"ABI","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"addr","outputs":[{"internalType":"address payable","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"authorisations","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"clearDNSZone","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"contenthash","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"},{"internalType":"uint16","name":"resource","type":"uint16"}],"name":"dnsRecord","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"name","type":"bytes32"}],"name":"hasDNSRecords","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"interfaceImplementer","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"pubkey","outputs":[{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"contentType","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setABI","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint256","name":"coinType","type":"uint256"},{"internalType":"bytes","name":"a","type":"bytes"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"a","type":"address"}],"name":"setAddr","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"target","type":"address"},{"internalType":"bool","name":"isAuthorised","type":"bool"}],"name":"setAuthorisation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"hash","type":"bytes"}],"name":"setContenthash","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"setDNSRecords","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes4","name":"interfaceID","type":"bytes4"},{"internalType":"address","name":"implementer","type":"address"}],"name":"setInterface","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"name","type":"string"}],"name":"setName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"x","type":"bytes32"},{"internalType":"bytes32","name":"y","type":"bytes32"}],"name":"setPubkey","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"},{"internalType":"string","name":"value","type":"string"}],"name":"setText","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"string","name":"key","type":"string"}],"name":"text","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        296: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract ENS","name":"_old","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"label","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"NewOwner","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"resolver","type":"address"}],"name":"NewResolver","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"NewTTL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"node","type":"bytes32"},{"indexed":false,"internalType":"address","name":"owner","type":"address"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"old","outputs":[{"internalType":"contract ENS","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"recordExists","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"resolver","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"address","name":"resolver","type":"address"}],"name":"setResolver","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"}],"name":"setSubnodeOwner","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"bytes32","name":"label","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"resolver","type":"address"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setSubnodeRecord","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"},{"internalType":"uint64","name":"ttl","type":"uint64"}],"name":"setTTL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes32","name":"node","type":"bytes32"}],"name":"ttl","outputs":[{"internalType":"uint64","name":"","type":"uint64"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        297: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]')
        },
        298: function(e) {
            e.exports = JSON.parse('[{"constant":true,"inputs":[{"name":"owner","type":"address"}],"name":"nonces","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"}]')
        },
        313: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"components":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"_transactions","type":"tuple[]"}],"name":"wc_multiCall","outputs":[{"internalType":"bytes[]","name":"","type":"bytes[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_msgHash","type":"bytes32"},{"internalType":"bytes","name":"_signature","type":"bytes"}],"name":"isValidSignature","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"view","type":"function"}]')
        },
        370: function(e, t) {},
        394: function(e, t) {},
        399: function(e, t, n) {
            var i = {
                "./af-ZA.po": [608, 8],
                "./ar-SA.po": [609, 9],
                "./ca-ES.po": [610, 10],
                "./cs-CZ.po": [611, 11],
                "./da-DK.po": [612, 12],
                "./de-DE.po": [613, 13],
                "./el-GR.po": [614, 14],
                "./en-US.po": [615, 15],
                "./es-ES.po": [616, 16],
                "./fi-FI.po": [617, 17],
                "./fr-FR.po": [618, 18],
                "./he-IL.po": [619, 19],
                "./hu-HU.po": [620, 20],
                "./id-ID.po": [621, 21],
                "./it-IT.po": [622, 22],
                "./ja-JP.po": [623, 23],
                "./ko-KR.po": [624, 24],
                "./nl-NL.po": [625, 25],
                "./no-NO.po": [626, 26],
                "./pl-PL.po": [627, 27],
                "./pt-BR.po": [628, 28],
                "./pt-PT.po": [629, 29],
                "./ro-RO.po": [630, 30],
                "./ru-RU.po": [631, 31],
                "./sr-SP.po": [632, 32],
                "./sv-SE.po": [633, 33],
                "./tr-TR.po": [634, 34],
                "./uk-UA.po": [635, 35],
                "./vi-VN.po": [636, 36],
                "./zh-CN.po": [637, 37],
                "./zh-TW.po": [638, 38]
            };

            function r(e) {
                if (!n.o(i, e)) return Promise.resolve().then((function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = i[e],
                    r = t[0];
                return n.e(t[1]).then((function() {
                    return n.t(r, 7)
                }))
            }
            r.keys = function() {
                return Object.keys(i)
            }, r.id = 399, e.exports = r
        },
        603: function(e, t, n) {
            "use strict";
            n.r(t);
            n(330), n(331);
            var i, r, o = n(48),
                a = n(1),
                c = n.n(a),
                s = n(68),
                u = n(107),
                d = n.n(u),
                l = n(34),
                b = n(102),
                p = n(39),
                f = n(4),
                j = n(10),
                h = n(154),
                m = n(14),
                x = n(677),
                v = n(283),
                O = n(155),
                g = n(284),
                y = n.p + "static/media/logo.81a56970.svg";
            ! function(e) {
                e[e.MAINNET = 56] = "MAINNET", e[e.TESTNET = 97] = "TESTNET"
            }(r || (r = {}));
            var w, k, C = [r.MAINNET, r.TESTNET],
                T = [r.MAINNET, r.TESTNET],
                I = (i = {}, Object(m.a)(i, r.MAINNET, {
                    docs: "https://docs.binance.org/",
                    explorer: "https://bscscan.com/",
                    infoLink: "https://poocoin.app/tokens/0x123c79c9fc5da0878dbe51a57d6754cb017343df",
                    label: "Mainnet"
                }), Object(m.a)(i, r.TESTNET, {
                    docs: "https://docs.uniswap.org/",
                    explorer: "https://testnet.bscscan.com/",
                    infoLink: "https://poocoin.app/tokens/0x123c79c9fc5da0878dbe51a57d6754cb017343df",
                    label: "Testnet"
                }), i),
                A = n(15),
                E = n(6),
                S = n.n(E),
                N = n(63),
                R = n(25),
                U = n(13),
                B = n(18),
                M = n(19),
                P = n(134),
                L = n(82),
                z = n(17),
                D = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n(e, i, r) {
                        var o;
                        return Object(U.a)(this, n), (o = t.call(this, e)).code = i, o.data = r, o
                    }
                    return n
                }(Object(P.a)(Error)),
                W = function e(t, n, i) {
                    var r = this;
                    Object(U.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(R.a)(S.a.mark((function e() {
                        var t, n, i, o, a, c, s, u, d, l, b, p, f, j;
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return console.debug("Clearing batch", r.batch), t = r.batch, r.batch = [], r.batchTimeoutId = null, e.prev = 4, e.next = 7, fetch(r.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(t.map((function(e) {
                                            return e.request
                                        })))
                                    });
                                case 7:
                                    n = e.sent, e.next = 14;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(4), t.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 14:
                                    if (n.ok) {
                                        e.next = 17;
                                        break
                                    }
                                    return t.forEach((function(e) {
                                        return (0, e.reject)(new D("".concat(n.status, ": ").concat(n.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 17:
                                    return e.prev = 17, e.next = 20, n.json();
                                case 20:
                                    i = e.sent, e.next = 27;
                                    break;
                                case 23:
                                    return e.prev = 23, e.t1 = e.catch(17), t.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 27:
                                    o = t.reduce((function(e, t) {
                                        return e[t.request.id] = t, e
                                    }), {}), a = Object(N.a)(i);
                                    try {
                                        for (a.s(); !(c = a.n()).done;) s = c.value, u = o[s.id], d = u.resolve, l = u.reject, b = u.request.method, "error" in s ? l(new D(null === s || void 0 === s || null === (p = s.error) || void 0 === p ? void 0 : p.message, null === s || void 0 === s || null === (f = s.error) || void 0 === f ? void 0 : f.code, null === s || void 0 === s || null === (j = s.error) || void 0 === j ? void 0 : j.data)) : "result" in s && d ? d(s.result) : l(new D("Received unexpected JSON-RPC response to ".concat(b, " request."), -32e3, s))
                                    } catch (h) {
                                        a.e(h)
                                    } finally {
                                        a.f()
                                    }
                                case 30:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 10],
                            [17, 23]
                        ])
                    }))), this.sendAsync = function(e, t) {
                        r.request(e.method, e.params).then((function(n) {
                            return t(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: n
                            })
                        })).catch((function(e) {
                            return t(e, null)
                        }))
                    }, this.request = function() {
                        var e = Object(R.a)(S.a.mark((function e(t, n) {
                            var i, o;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof t) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", r.request(t.method, t.params));
                                    case 2:
                                        if ("eth_chainId" !== t) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(r.chainId.toString(16)));
                                    case 4:
                                        return o = new Promise((function(e, i) {
                                            r.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: r.nextId++,
                                                    method: t,
                                                    params: n
                                                },
                                                resolve: e,
                                                reject: i
                                            })
                                        })), r.batchTimeoutId = null !== (i = r.batchTimeoutId) && void 0 !== i ? i : setTimeout(r.clearBatch, r.batchWaitTimeMs), e.abrupt("return", o);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = t, this.url = n;
                    var o = new URL(n);
                    this.host = o.host, this.path = o.pathname, this.batchWaitTimeMs = null !== i && void 0 !== i ? i : 50
                },
                q = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n(e) {
                        var i, r = e.urls,
                            o = e.defaultChainId;
                        return Object(U.a)(this, n), Object(z.default)(o || 1 === Object.keys(r).length, "defaultChainId is a required argument with >1 url"), (i = t.call(this, {
                            supportedChainIds: Object.keys(r).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = void 0, i.currentChainId = void 0, i.currentChainId = o || Number(Object.keys(r)[0]), i.providers = Object.keys(r).reduce((function(e, t) {
                            return e[Number(t)] = new W(Number(t), r[Number(t)]), e
                        }), {}), i
                    }
                    return Object(A.a)(n, [{
                        key: "provider",
                        get: function() {
                            return this.providers[this.currentChainId]
                        }
                    }, {
                        key: "activate",
                        value: function() {
                            var e = Object(R.a)(S.a.mark((function e() {
                                return S.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(R.a)(S.a.mark((function e() {
                                return S.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(R.a)(S.a.mark((function e() {
                                return S.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(R.a)(S.a.mark((function e() {
                                return S.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {}
                    }]), n
                }(L.AbstractConnector),
                F = (w = {}, Object(m.a)(w, r.MAINNET, "".concat("https://bsc-dataseed1.defibit.io")), Object(m.a)(w, r.TESTNET, "https://data-seed-prebsc-2-s1.binance.org:8545/"), w),
                Y = new q({
                    urls: F,
                    defaultChainId: r.MAINNET
                });

            function V() {
                var e;
                return k = null !== (e = k) && void 0 !== e ? e : new x.a(Y.provider)
            }
            var _ = new v.a({
                    supportedChainIds: C
                }),
                H = new h.SafeAppConnector,
                Q = new O.a({
                    supportedChainIds: C,
                    rpc: F,
                    bridge: "https://uniswap.bridge.walletconnect.org",
                    qrcode: !0,
                    pollingInterval: 15e3
                }),
                G = new g.a({
                    url: F[r.MAINNET],
                    appName: "ScrappyInu",
                    appLogoUrl: y
                }),
                J = n(8),
                K = n(3),
                X = n.n(K),
                Z = "NETWORK",
                $ = 1800,
                ee = X.a.BigInt(604800),
                te = X.a.BigInt(31536e3),
                ne = X.a.BigInt(0),
                ie = X.a.BigInt(1e4),
                re = new J.Percent(X.a.BigInt(1), ie),
                oe = new J.Percent(X.a.BigInt(100), ie),
                ae = new J.Percent(X.a.BigInt(300), ie),
                ce = new J.Percent(X.a.BigInt(500), ie),
                se = new J.Percent(X.a.BigInt(1e3), ie),
                ue = new J.Percent(X.a.BigInt(1500), ie),
                de = new J.Percent(X.a.BigInt(50), ie),
                le = new J.Percent("0"),
                be = new J.Percent("1"),
                pe = window && "app.ScrappyInu.org" === window.location.hostname;

            function fe() {
                var e = Object(o.useWeb3React)(),
                    t = Object(o.useWeb3React)(Z);
                return e.active ? e : t
            }
            var je = n(0),
                he = ["0x7F367cC41522cE07553e823bf3be79A889DEbe1B", "0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b", "0x901bb9583b24D97e995513C6778dc6888AB6870e", "0xA7e5d5A720f06526557c513402f2e6B5fA20b008", "0x8576aCC5C05D6Ce88f4e49bf65BdF0C62F91353C"];

            function me(e) {
                var t = e.children,
                    n = fe().account;
                return Object(a.useMemo)((function() {
                    return Boolean(n && -1 !== he.indexOf(n))
                }), [n]) ? Object(je.jsx)("div", {
                    children: Object(je.jsx)(f.b, {
                        id: "Blocked address"
                    })
                }) : Object(je.jsx)(je.Fragment, {
                    children: t
                })
            }
            var xe, ve, Oe, ge, ye, we = n(24),
                ke = ["en-US", "af-ZA", "ar-SA", "ca-ES", "cs-CZ", "da-DK", "de-DE", "el-GR", "es-ES", "fi-FI", "fr-FR", "he-IL", "hu-HU", "id-ID", "it-IT", "ja-JP", "ko-KR", "nl-NL", "no-NO", "pl-PL", "pt-BR", "pt-PT", "ro-RO", "ru-RU", "sr-SP", "sv-SE", "tr-TR", "uk-UA", "vi-VN", "zh-CN", "zh-TW"],
                Ce = "en-US",
                Te = {
                    "af-ZA": "Afrikaans",
                    "ar-SA": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                    "ca-ES": "Catal\xe0",
                    "cs-CZ": "\u010de\u0161tina",
                    "da-DK": "dansk",
                    "de-DE": "Deutsch",
                    "el-GR": "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                    "en-US": "English",
                    "es-ES": "Espa\xf1ol",
                    "fi-FI": "Suomalainen",
                    "fr-FR": "fran\xe7ais",
                    "he-IL": "\u05e2\u05b4\u05d1\u05e8\u05b4\u05d9\u05ea",
                    "hu-HU": "Magyar",
                    "id-ID": "bahasa Indonesia",
                    "it-IT": "Italiano",
                    "ja-JP": "\u65e5\u672c\u8a9e",
                    "ko-KR": "\ud55c\uad6d\uc5b4",
                    "nl-NL": "Nederlands",
                    "no-NO": "norsk",
                    "pl-PL": "Polskie",
                    "pt-BR": "portugu\xeas",
                    "pt-PT": "portugu\xeas",
                    "ro-RO": "Rom\xe2n\u0103",
                    "ru-RU": "\u0440\u0443\u0441\u0441\u043a\u0438\u0439",
                    "sr-SP": "\u0421\u0440\u043f\u0441\u043a\u0438",
                    "sv-SE": "svenska",
                    "tr-TR": "T\xfcrk\xe7e",
                    "uk-UA": "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0438\u0439",
                    "vi-VN": "Ti\u1ebfng Vi\u1ec7t",
                    "zh-CN": "\u4e2d\u6587 ( \u4e2d\u56fd )",
                    "zh-TW": "\u4e2d\u6587 ( \u53f0\u7063 )"
                },
                Ie = n(46),
                Ae = n(162),
                Ee = n.n(Ae),
                Se = function() {
                    return Object(b.c)()
                },
                Ne = b.d;
            var Re, Ue, Be, Me, Pe = (xe = {}, Object(m.a)(xe, r.MAINNET, "0x123c79c9fc5da0878dbe51a57d6754cb017343df"), Object(m.a)(xe, r.TESTNET, "0x0a3e884850c9320bc387123ac7e543229ec3d84d"), xe),
                Le = (ve = {}, Object(m.a)(ve, r.MAINNET, "0xF7bbE3359443565954b0daC61756931581F3699C"), Object(m.a)(ve, r.TESTNET, "0xa68e07488BA76d92cb510c3ea775826F90558087"), ve),
                ze = (Oe = {}, Object(m.a)(Oe, r.MAINNET, "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"), Object(m.a)(Oe, r.TESTNET, "0x6725F303b657a9451d8BA641348b6761A6CC7a17"), Oe),
                De = (ge = {}, Object(m.a)(ge, r.MAINNET, "0x10ED43C718714eb63d5aA57B78B54704E256024E"), Object(m.a)(ge, r.TESTNET, "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"), ge),
                We = (ye = {}, Object(m.a)(ye, r.MAINNET, "0xd93D3Ba696271F327F72e90397606B60b0059f24"), Object(m.a)(ye, r.TESTNET, "0x8d5d89716A126ba954acd66cC04DD9A5Aa380AcC"), ye),
                qe = (function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    T.concat(t).reduce((function(t, n) {
                        return t[n] = e, t
                    }), {})
                }("0x1a9C8182C09F50C8318d769245beA52c32BE35BC"), Object(m.a)({}, r.MAINNET, "0x090D4613473dEE047c3f2706764f49E0821D256e")),
                Fe = Object(m.a)({}, r.MAINNET, "0xeca4B0bDBf7c55E9b7925919d03CbF8Dc82537E8"),
                Ye = {},
                Ve = Object(m.a)({}, r.MAINNET, "0x65770b5283117639760beA3F867b69b3697a91dd"),
                _e = n(33),
                He = n(12),
                Qe = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n(e) {
                        return Object(U.a)(this, n), t.call(this, e, 18, "BNB", "Binance Coin")
                    }
                    return Object(A.a)(n, [{
                        key: "wrapped",
                        get: function() {
                            var e = J.WETH9[this.chainId];
                            return Object(z.default)(!!e, "WRAPPED"), e
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return e.isNative && e.chainId === this.chainId
                        }
                    }], [{
                        key: "onChain",
                        value: function(e) {
                            var t;
                            return null !== (t = this._etherCache[e]) && void 0 !== t ? t : this._etherCache[e] = new n(e)
                        }
                    }]), n
                }(J.NativeCurrency);
            Qe._etherCache = {};
            var Ge, Je, Ke = (Re = {}, Object(m.a)(Re, r.MAINNET, new J.Token(r.MAINNET, "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56", 18, "BUSD", "Binance USD")), Object(m.a)(Re, r.TESTNET, new J.Token(r.TESTNET, "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee", 18, "BUSD", "Binance USD")), Re),
                Xe = new J.Token(r.MAINNET, "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3", 18, "DAI", "Dai Stablecoin"),
                Ze = (Ue = {}, Object(m.a)(Ue, r.MAINNET, new J.Token(r.MAINNET, "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d", 18, "USDC", "Binance-Peg USD Coin")), Object(m.a)(Ue, r.TESTNET, new J.Token(r.TESTNET, "0x64544969ed7ebf5f083679233325356ebe738930", 18, "USDC", "Binance-Peg USD Coin")), Ue),
                $e = new J.Token(r.MAINNET, "0x55d398326f99059fF775485246999027B3197955", 18, "USDT", "Tether USD"),
                et = new J.Token(r.MAINNET, "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c", 18, "BTCB", "Binance BTC"),
                tt = new J.Token(r.MAINNET, "0x23396cF899Ca06c4472205fC903bDB4de249D6fC", 18, "UST", "Wrapped UST Token"),
                nt = new J.Token(r.MAINNET, "0x2170Ed0880ac9A755fd29B2688956BD959F933F8", 18, "ETH", "Binance-Peg Ethereum Token"),
                it = (Be = {}, Object(m.a)(Be, r.MAINNET, new J.Token(r.MAINNET, Pe[r.MAINNET], 18, "ScrappyInu", "ScrappyInu")), Object(m.a)(Be, r.TESTNET, new J.Token(r.TESTNET, Pe[r.TESTNET], 18, "ScrappyInu", "ScrappyInu")), Be),
                rt = Object(He.a)(Object(He.a)({}, J.WETH9), {}, (Me = {}, Object(m.a)(Me, r.MAINNET, new J.Token(r.MAINNET, "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", 18, "WBNB", "Wrapped BNB")), Object(m.a)(Me, r.TESTNET, new J.Token(r.TESTNET, "0xae13d989dac2f0debff460ac112a837c89baa7cd", 18, "WBNB", "Wrapped BNB")), Me)),
                ot = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n() {
                        return Object(U.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(A.a)(n, [{
                        key: "wrapped",
                        get: function() {
                            if (this.chainId in rt) return rt[this.chainId];
                            throw new Error("Unsupported chain ID")
                        }
                    }], [{
                        key: "onChain",
                        value: function(e) {
                            var t;
                            return null !== (t = this._cachedEther[e]) && void 0 !== t ? t : this._cachedEther[e] = new n(e)
                        }
                    }]), n
                }(Qe);
            ot._cachedEther = {};
            var at = Object.fromEntries(Object.entries(rt).map((function(e) {
                    var t = Object(j.a)(e, 2);
                    return [t[0],
                        [t[1]]
                    ]
                }))),
                ct = Object(He.a)(Object(He.a)({}, at), {}, Object(m.a)({}, r.MAINNET, [].concat(Object(_e.a)(at[r.MAINNET]), [$e, et, tt, nt, Ze[r.MAINNET]]))),
                st = Object(m.a)({}, r.MAINNET, {}),
                ut = Object(m.a)({}, r.MAINNET, {}),
                dt = (Ge = {}, Object(m.a)(Ge, r.MAINNET, [ot.onChain(r.MAINNET), Xe, Ze[r.MAINNET], $e, et, rt[r.MAINNET], it[r.MAINNET]]), Object(m.a)(Ge, r.TESTNET, [ot.onChain(r.TESTNET), rt[r.TESTNET], it[r.TESTNET], Ze[r.TESTNET]]), Ge),
                lt = (Je = {}, Object(m.a)(Je, r.MAINNET, [].concat(Object(_e.a)(at[r.MAINNET]), [Xe, Ke[r.MAINNET], $e])), Object(m.a)(Je, r.TESTNET, [].concat(Object(_e.a)(at[r.TESTNET]), [Ke[r.TESTNET]])), Je),
                bt = Object(m.a)({}, r.MAINNET, [
                    [new J.Token(r.MAINNET, "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643", 8, "cDAI", "Compound Dai"), new J.Token(r.MAINNET, "0x39AA39c021dfbaE8faC545936693aC917d5E7563", 8, "cUSDC", "Compound USD Coin")],
                    [Ze[r.MAINNET], $e],
                    [Xe, $e]
                ]),
                pt = n(180),
                ft = n(62),
                jt = n(26),
                ht = n(646),
                mt = n(81);

            function xt(e) {
                try {
                    return Object(jt.getAddress)(e)
                } catch (t) {
                    return !1
                }
            }

            function vt(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    n = xt(e);
                if (!n) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(n.substring(0, t + 2), "...").concat(n.substring(42 - t))
            }

            function Ot(e, t, n, i) {
                if (!xt(e) || e === ht.a) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return new mt.a(e, t, function(e, t) {
                    return t ? function(e, t) {
                        return e.getSigner(t).connectUnchecked()
                    }(e, t) : e
                }(n, i))
            }
            var gt = function() {
                return !0
            };

            function yt(e) {
                var t = xt(e);
                if (t) {
                    var n = t.toLowerCase();
                    return function(e) {
                        return "isToken" in e ? t === e.address : n === e.address.toLowerCase()
                    }
                }
                var i = e.toLowerCase().split(/\s+/).filter((function(e) {
                    return e.length > 0
                }));
                if (0 === i.length) return gt;
                var r = function(e) {
                    var t = e.toLowerCase().split(/\s+/).filter((function(e) {
                        return e.length > 0
                    }));
                    return i.every((function(e) {
                        return 0 === e.length || t.some((function(t) {
                            return t.startsWith(e) || t.endsWith(e)
                        }))
                    }))
                };
                return function(e) {
                    var t = e.name,
                        n = e.symbol;
                    return Boolean(n && r(n) || t && r(t))
                }
            }
            var wt = n(288),
                kt = [],
                Ct = ["https://tokens.pancakeswap.finance/pancakeswap-extended.json", "https://tokens.pancakeswap.finance/pancakeswap-top-100.json"].concat(kt),
                Tt = [],
                It = Ct.reduce((function(e, t, n) {
                    return e[t] = n + 1, e
                }), {});

            function At(e, t) {
                return It[e] && It[t] ? It[e] - It[t] : 0
            }
            var Et = n(289),
                St = function() {
                    function e(t, n) {
                        Object(U.a)(this, e), this.isNative = !1, this.isToken = !0, this.list = void 0, this.tokenInfo = void 0, this._checksummedAddress = null, this._tags = null, this.tokenInfo = t, this.list = n
                    }
                    return Object(A.a)(e, [{
                        key: "address",
                        get: function() {
                            if (this._checksummedAddress) return this._checksummedAddress;
                            var e = xt(this.tokenInfo.address);
                            if (!e) throw new Error("Invalid token address: ".concat(this.tokenInfo.address));
                            return this._checksummedAddress = e
                        }
                    }, {
                        key: "chainId",
                        get: function() {
                            return this.tokenInfo.chainId
                        }
                    }, {
                        key: "decimals",
                        get: function() {
                            return this.tokenInfo.decimals
                        }
                    }, {
                        key: "name",
                        get: function() {
                            return this.tokenInfo.name
                        }
                    }, {
                        key: "symbol",
                        get: function() {
                            return this.tokenInfo.symbol
                        }
                    }, {
                        key: "logoURI",
                        get: function() {
                            return this.tokenInfo.logoURI
                        }
                    }, {
                        key: "tags",
                        get: function() {
                            if (null !== this._tags) return this._tags;
                            if (!this.tokenInfo.tags) return this._tags = [];
                            var e = this.list.tags;
                            return this._tags = e ? this.tokenInfo.tags.map((function(t) {
                                return Object(He.a)(Object(He.a)({}, e[t]), {}, {
                                    id: t
                                })
                            })) : []
                        }
                    }, {
                        key: "equals",
                        value: function(e) {
                            return e.chainId === this.chainId && e.isToken && e.address.toLowerCase() === this.address.toLowerCase()
                        }
                    }, {
                        key: "sortsBefore",
                        value: function(e) {
                            if (this.equals(e)) throw new Error("Addresses should not be equal");
                            return this.address.toLowerCase() < e.address.toLowerCase()
                        }
                    }, {
                        key: "wrapped",
                        get: function() {
                            return this
                        }
                    }]), e
                }(),
                Nt = "undefined" !== typeof WeakMap ? new WeakMap : null;

            function Rt(e) {
                var t = null === Nt || void 0 === Nt ? void 0 : Nt.get(e);
                if (t) return t;
                var n = e.tokens.reduce((function(t, n) {
                    var i, r = new St(n, e);
                    return void 0 !== (null === (i = t[r.chainId]) || void 0 === i ? void 0 : i[r.address]) ? (console.error("Duplicate token! ".concat(r.address)), t) : (t[r.chainId] || (t[r.chainId] = {}), t[r.chainId][r.address] = {
                        token: r,
                        list: e
                    }, t)
                }), {});
                return null === Nt || void 0 === Nt || Nt.set(e, n), n
            }
            var Ut = Rt(wt);

            function Bt() {
                return Ne((function(e) {
                    return e.lists.byUrl
                }))
            }

            function Mt(e, t) {
                return Object.keys(Object.keys(e).concat(Object.keys(t)).reduce((function(e, t) {
                    return e[t] = !0, e
                }), {})).map((function(e) {
                    return parseInt(e)
                })).reduce((function(n, i) {
                    return n[i] = Object(He.a)(Object(He.a)({}, t[i]), e[i]), n
                }), {})
            }

            function Pt(e) {
                var t = Bt();
                return Object(a.useMemo)((function() {
                    return e ? e.slice().sort(At).reduce((function(e, n) {
                        var i, r = null === (i = t[n]) || void 0 === i ? void 0 : i.current;
                        if (!r) return e;
                        try {
                            return Mt(e, Rt(r))
                        } catch (o) {
                            return console.error("Could not show token list due to error", o), e
                        }
                    }), {}) : {}
                }), [t, e])
            }

            function Lt() {
                var e;
                return null === (e = Ne((function(e) {
                    return e.lists.activeListUrls
                }))) || void 0 === e ? void 0 : e.filter((function(e) {
                    return !kt.includes(e)
                }))
            }

            function zt() {
                var e = Bt(),
                    t = Lt();
                return Object.keys(e).filter((function(e) {
                    return !(null === t || void 0 === t ? void 0 : t.includes(e)) && !kt.includes(e)
                }))
            }

            function Dt() {
                return Mt(Pt(Lt()), Ut)
            }
            var Wt, qt = n(35),
                Ft = n(22);
            ! function(e) {
                e[e.WALLET = 0] = "WALLET", e[e.SETTINGS = 1] = "SETTINGS", e[e.ADDRESS_CLAIM = 2] = "ADDRESS_CLAIM", e[e.MENU = 3] = "MENU", e[e.DELEGATE = 4] = "DELEGATE", e[e.VOTE = 5] = "VOTE", e[e.POOL_OVERVIEW_OPTIONS = 6] = "POOL_OVERVIEW_OPTIONS", e[e.ARBITRUM_OPTIONS = 7] = "ARBITRUM_OPTIONS"
            }(Wt || (Wt = {}));
            var Yt = Object(Ft.b)("application/updateChainId"),
                Vt = Object(Ft.b)("application/updateBlockNumber"),
                _t = Object(Ft.b)("application/setOpenModal"),
                Ht = Object(Ft.b)("application/addPopup"),
                Qt = Object(Ft.b)("application/removePopup");

            function Gt() {
                var e = fe().chainId;
                return Ne((function(t) {
                    return t.application.blockNumber[null !== e && void 0 !== e ? e : -1]
                }))
            }

            function Jt(e) {
                return Ne((function(e) {
                    return e.application.openModal
                })) === e
            }

            function Kt(e) {
                var t = Jt(e),
                    n = Se();
                return Object(a.useCallback)((function() {
                    return n(_t(t ? null : e))
                }), [n, e, t])
            }

            function Xt() {
                return Kt(Wt.WALLET)
            }
            var Zt = Object(Ft.b)("multicall/addMulticallListeners"),
                $t = Object(Ft.b)("multicall/removeMulticallListeners"),
                en = Object(Ft.b)("multicall/fetchingMulticallResults"),
                tn = Object(Ft.b)("multicall/errorFetchingMulticallResults"),
                nn = Object(Ft.b)("multicall/updateMulticallResults");

            function rn(e) {
                var t = "".concat(e.address, "-").concat(e.callData);
                if (e.gasRequired) {
                    if (!Number.isSafeInteger(e.gasRequired)) throw new Error("Invalid number: ".concat(e.gasRequired));
                    t += "-".concat(e.gasRequired)
                }
                return t
            }

            function on(e) {
                var t = e.split("-");
                if (![2, 3].includes(t.length)) throw new Error("Invalid call key: ".concat(e));
                return Object(He.a)({
                    address: t[0],
                    callData: t[1]
                }, t[2] ? {
                    gasRequired: Number.parseInt(t[2])
                } : {})
            }

            function an(e) {
                return qt.a.isBigNumber(e) || -1 !== ["string", "number"].indexOf(typeof e)
            }

            function cn(e) {
                return void 0 === e || Array.isArray(e) && e.every((function(e) {
                    return an(e) || Array.isArray(e) && e.every(an)
                }))
            }
            var sn = {
                    valid: !1,
                    blockNumber: void 0,
                    data: void 0
                },
                un = {
                    blocksPerFetch: 1 / 0
                };

            function dn(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        blocksPerFetch: 1
                    },
                    n = t.blocksPerFetch,
                    i = fe(),
                    r = i.chainId,
                    o = Ne((function(e) {
                        return e.multicall.callResults
                    })),
                    c = Se(),
                    s = Object(a.useMemo)((function() {
                        var t, n, i;
                        return JSON.stringify(null !== (t = null === e || void 0 === e || null === (n = e.filter((function(e) {
                            return Boolean(e)
                        }))) || void 0 === n || null === (i = n.map(rn)) || void 0 === i ? void 0 : i.sort()) && void 0 !== t ? t : [])
                    }), [e]);
                return Object(a.useEffect)((function() {
                    var e = JSON.parse(s);
                    if (r && 0 !== e.length) {
                        var t = e.map((function(e) {
                            return on(e)
                        }));
                        return c(Zt({
                                chainId: r,
                                calls: t,
                                options: {
                                    blocksPerFetch: n
                                }
                            })),
                            function() {
                                c($t({
                                    chainId: r,
                                    calls: t,
                                    options: {
                                        blocksPerFetch: n
                                    }
                                }))
                            }
                    }
                }), [r, c, n, s]), Object(a.useMemo)((function() {
                    return e.map((function(e) {
                        var t;
                        if (!r || !e) return sn;
                        var n, i = null === (t = o[r]) || void 0 === t ? void 0 : t[rn(e)];
                        return (null === i || void 0 === i ? void 0 : i.data) && "0x" !== (null === i || void 0 === i ? void 0 : i.data) && (n = i.data), {
                            valid: !0,
                            data: n,
                            blockNumber: null === i || void 0 === i ? void 0 : i.blockNumber
                        }
                    }))
                }), [o, e, r])
            }
            var ln = {
                    valid: !1,
                    result: void 0,
                    loading: !1,
                    syncing: !1,
                    error: !1
                },
                bn = {
                    valid: !0,
                    result: void 0,
                    loading: !0,
                    syncing: !0,
                    error: !1
                };

            function pn(e, t, n, i) {
                if (!e) return ln;
                var r = e.valid,
                    o = e.data,
                    a = e.blockNumber;
                if (!r) return ln;
                if (r && !a) return bn;
                if (!t || !n || !i) return bn;
                var c = o && o.length > 2,
                    s = (null !== a && void 0 !== a ? a : 0) < i,
                    u = void 0;
                if (c && o) try {
                    u = t.decodeFunctionResult(n, o)
                } catch (d) {
                    return console.debug("Result data parsing failed", n, o), {
                        valid: !0,
                        loading: !1,
                        error: !0,
                        syncing: s,
                        result: u
                    }
                }
                return {
                    valid: !0,
                    loading: !1,
                    syncing: s,
                    result: u,
                    error: !c
                }
            }

            function fn(e, t, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    r = Object(a.useMemo)((function() {
                        var n;
                        return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                    }), [e, t]),
                    o = null === i || void 0 === i ? void 0 : i.blocksPerFetch,
                    c = null === i || void 0 === i ? void 0 : i.gasRequired,
                    s = Object(a.useMemo)((function() {
                        return e && r && (null === n || void 0 === n ? void 0 : n.length) > 0 && n.every((function(e) {
                            return cn(e)
                        })) ? n.map((function(t) {
                            return Object(He.a)({
                                address: e.address,
                                callData: e.interface.encodeFunctionData(r, t)
                            }, c ? {
                                gasRequired: c
                            } : {})
                        })) : []
                    }), [e, r, n, c]),
                    u = dn(s, o ? {
                        blocksPerFetch: o
                    } : void 0),
                    d = Gt();
                return Object(a.useMemo)((function() {
                    return u.map((function(t) {
                        return pn(t, null === e || void 0 === e ? void 0 : e.interface, r, d)
                    }))
                }), [r, e, u, d])
            }

            function jn(e, t, n, i, r) {
                var o = Object(a.useMemo)((function() {
                        return t.getFunction(n)
                    }), [t, n]),
                    c = null === r || void 0 === r ? void 0 : r.blocksPerFetch,
                    s = null === r || void 0 === r ? void 0 : r.gasRequired,
                    u = Object(a.useMemo)((function() {
                        return o && cn(i) ? t.encodeFunctionData(o, i) : void 0
                    }), [i, t, o]),
                    d = dn(Object(a.useMemo)((function() {
                        return o && e && e.length > 0 && u ? e.map((function(e) {
                            return e && u ? Object(He.a)({
                                address: e,
                                callData: u
                            }, s ? {
                                gasRequired: s
                            } : {}) : void 0
                        })) : []
                    }), [e, u, o, s]), c ? {
                        blocksPerFetch: c
                    } : void 0),
                    l = Gt();
                return Object(a.useMemo)((function() {
                    return d.map((function(e) {
                        return pn(e, t, o, l)
                    }))
                }), [o, d, t, l])
            }

            function hn(e, t, n, i) {
                var r = Object(a.useMemo)((function() {
                        var n;
                        return null === e || void 0 === e || null === (n = e.interface) || void 0 === n ? void 0 : n.getFunction(t)
                    }), [e, t]),
                    o = null === i || void 0 === i ? void 0 : i.blocksPerFetch,
                    c = null === i || void 0 === i ? void 0 : i.gasRequired,
                    s = dn(Object(a.useMemo)((function() {
                        return e && r && cn(n) ? [Object(He.a)({
                            address: e.address,
                            callData: e.interface.encodeFunctionData(r, n)
                        }, c ? {
                            gasRequired: c
                        } : {})] : []
                    }), [e, r, n, c]), o ? {
                        blocksPerFetch: o
                    } : void 0)[0],
                    u = Gt();
                return Object(a.useMemo)((function() {
                    return pn(s, null === e || void 0 === e ? void 0 : e.interface, r, u)
                }), [s, e, r, u])
            }
            var mn = n(90),
                xn = n(112),
                vn = n(164),
                On = (n(290), n(291)),
                gn = n(113),
                yn = n(292),
                wn = n(293),
                kn = n(165),
                Cn = n(294),
                Tn = n(295),
                In = n(296),
                An = n(297),
                En = n(298);

            function Sn(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = fe(),
                    r = i.library,
                    o = i.account,
                    c = i.chainId;
                return Object(a.useMemo)((function() {
                    if (!e || !t || !r || !c) return null;
                    var i;
                    if (!(i = "string" === typeof e ? e : e[c])) return null;
                    try {
                        return Ot(i, t, r, n && o ? o : void 0)
                    } catch (a) {
                        return console.error("Failed to get contract", a), null
                    }
                }), [e, t, r, c, n, o])
            }

            function Nn(e, t) {
                return Sn(e, xn, t)
            }

            function Rn(e) {
                return Sn(Ye, In, e)
            }

            function Un(e, t) {
                return Sn(e, Tn, t)
            }

            function Bn() {
                return Sn(De, yn.a, !0)
            }

            function Mn() {
                return Sn(Le, wn.a, !1)
            }

            function Pn(e) {
                return Sn(We, kn, e)
            }
            var Ln = new mn.b(xn),
                zn = new mn.b(vn);

            function Dn(e, t) {
                var n = fe().chainId,
                    i = mi();
                return Object(a.useMemo)((function() {
                    var r;
                    if (!n) return {};
                    var o = Object.keys(null !== (r = e[n]) && void 0 !== r ? r : {}).reduce((function(t, i) {
                        return t[i] = e[n][i].token, t
                    }), {});
                    return t ? i.reduce((function(e, t) {
                        return e[t.address] = t, e
                    }), Object(He.a)({}, o)) : o
                }), [n, i, e, t])
            }

            function Wn() {
                return Dn(Dt(), !0)
            }

            function qn() {
                return Dn(function() {
                    var e = Object(a.useMemo)((function() {
                            return pe ? Rt(Et) : {}
                        }), []),
                        t = Pt(kt);
                    return Object(a.useMemo)((function() {
                        return Mt(e, t)
                    }), [e, t])
                }(), !1)
            }

            function Fn(e) {
                var t = mi();
                return !!e && !!t.find((function(t) {
                    return e.equals(t)
                }))
            }
            var Yn = /^0x[a-fA-F0-9]{64}$/;

            function Vn(e, t, n) {
                return e && e.length > 0 ? e : t && Yn.test(t) && 0 === Object(ft.arrayify)(t)[31] ? Object(pt.b)(t) : n
            }

            function _n(e) {
                var t, n = fe().chainId,
                    i = null !== (t = null === e || void 0 === e ? void 0 : e.map((function(e) {
                        return xt(e) || void 0
                    }))) && void 0 !== t ? t : [],
                    r = jn(i, Ln, "name", void 0, un),
                    o = jn(i, zn, "name", void 0, un),
                    c = jn(i, Ln, "symbol", void 0, un),
                    s = jn(i, zn, "symbol", void 0, un),
                    u = jn(i, Ln, "decimals", void 0, un);
                return Object(a.useMemo)((function() {
                    if (n) return i.map((function(e, t) {
                        var i, a, d, l, b, p, f, j;
                        return !u[t] || u[t].loading || c[t].loading || r[t].loading ? null : (null === (i = u[t]) || void 0 === i || null === (a = i.result) || void 0 === a ? void 0 : a[0]) && e ? new J.Token(n, e, null === (d = u[t]) || void 0 === d || null === (l = d.result) || void 0 === l ? void 0 : l[0], Vn(null === (b = c[t].result) || void 0 === b ? void 0 : b[0], null === (p = s[t].result) || void 0 === p ? void 0 : p[0], "UNKNOWN"), Vn(null === (f = r[t].result) || void 0 === f ? void 0 : f[0], null === (j = o[t].result) || void 0 === j ? void 0 : j[0], "Unknown Token")) : void 0
                    }))
                }), [i, n, u, c, s, r, o])
            }

            function Hn(e) {
                var t = fe().chainId,
                    n = Wn(),
                    i = xt(e),
                    r = Nn(i || void 0, !1),
                    o = function(e, t) {
                        return Sn(e, vn, t)
                    }(i || void 0, !1),
                    c = i ? n[i] : void 0,
                    s = hn(c ? void 0 : r, "name", void 0, un),
                    u = hn(c ? void 0 : o, "name", void 0, un),
                    d = hn(c ? void 0 : r, "symbol", void 0, un),
                    l = hn(c ? void 0 : o, "symbol", void 0, un),
                    b = hn(c ? void 0 : r, "decimals", void 0, un);
                return Object(a.useMemo)((function() {
                    if (c) return c;
                    if (t && i) {
                        if (b.loading || d.loading || s.loading) return null;
                        var e, n, r, o;
                        if (b.result) return new J.Token(t, i, b.result[0], Vn(null === (e = d.result) || void 0 === e ? void 0 : e[0], null === (n = l.result) || void 0 === n ? void 0 : n[0], "UNKNOWN"), Vn(null === (r = s.result) || void 0 === r ? void 0 : r[0], null === (o = u.result) || void 0 === o ? void 0 : o[0], "Unknown Token"))
                    }
                }), [i, t, b.loading, b.result, d.loading, d.result, l.result, c, s.loading, s.result, u.result])
            }

            function Qn(e) {
                var t, n = fe().chainId,
                    i = "BNB" === (null === e || void 0 === e ? void 0 : e.toUpperCase()),
                    r = Hn(i ? void 0 : e),
                    o = Object(a.useMemo)((function() {
                        return n ? ot.onChain(n) : void 0
                    }), [n]),
                    c = n ? rt[n] : void 0;
                return (null === c || void 0 === c || null === (t = c.address) || void 0 === t ? void 0 : t.toLowerCase()) === (null === e || void 0 === e ? void 0 : e.toLowerCase()) ? c : i ? o : r
            }
            var Gn = Object(Ft.b)("user/updateMatchesDarkMode"),
                Jn = Object(Ft.b)("user/updateArbitrumAlphaAcknowledged"),
                Kn = Object(Ft.b)("user/updateUserDarkMode"),
                Xn = Object(Ft.b)("user/updateUserExpertMode"),
                Zn = Object(Ft.b)("user/updateUserLocale"),
                $n = Object(Ft.b)("user/updateUserSingleHopOnly"),
                ei = Object(Ft.b)("user/hideClosedPositions"),
                ti = Object(Ft.b)("user/updateUserSlippageTolerance"),
                ni = Object(Ft.b)("user/updateUserDeadline"),
                ii = Object(Ft.b)("user/addSerializedToken"),
                ri = Object(Ft.b)("user/removeSerializedToken"),
                oi = Object(Ft.b)("user/addSerializedPair"),
                ai = Object(Ft.b)("user/removeSerializedPair");

            function ci(e) {
                return {
                    chainId: e.chainId,
                    address: e.address,
                    decimals: e.decimals,
                    symbol: e.symbol,
                    name: e.name
                }
            }

            function si(e) {
                return new J.Token(e.chainId, e.address, e.decimals, e.symbol, e.name)
            }

            function ui() {
                var e = Ne((function(e) {
                        var t = e.user,
                            n = t.matchesDarkMode;
                        return {
                            userDarkMode: t.userDarkMode,
                            matchesDarkMode: n
                        }
                    }), b.b),
                    t = e.userDarkMode,
                    n = e.matchesDarkMode;
                return null === t ? n : t
            }

            function di() {
                var e = Se(),
                    t = ui(),
                    n = Object(a.useCallback)((function() {
                        e(Kn({
                            userDarkMode: !t
                        }))
                    }), [t, e]);
                return [t, n]
            }

            function li() {
                return Ne((function(e) {
                    return e.user.userLocale
                }))
            }

            function bi() {
                return Ne((function(e) {
                    return e.user.userExpertMode
                }))
            }

            function pi() {
                var e = Se(),
                    t = bi(),
                    n = Object(a.useCallback)((function() {
                        e(Xn({
                            userExpertMode: !t
                        }))
                    }), [t, e]);
                return [t, n]
            }

            function fi() {
                var e = Se();
                return [Ne((function(e) {
                    return e.user.userSingleHopOnly
                })), Object(a.useCallback)((function(t) {
                    e($n({
                        userSingleHopOnly: t
                    }))
                }), [e])]
            }

            function ji() {
                var e = Ne((function(e) {
                    return e.user.userSlippageTolerance
                }));
                return Object(a.useMemo)((function() {
                    return "auto" === e ? "auto" : new J.Percent(e, 1e4)
                }), [e])
            }

            function hi(e) {
                var t = ji();
                return Object(a.useMemo)((function() {
                    return "auto" === t ? e : t
                }), [t, e])
            }

            function mi() {
                var e = fe().chainId,
                    t = Ne((function(e) {
                        return e.user.tokens
                    }));
                return Object(a.useMemo)((function() {
                    var n;
                    return e ? Object.values(null !== (n = null === t || void 0 === t ? void 0 : t[e]) && void 0 !== n ? n : {}).map(si) : []
                }), [t, e])
            }

            function xi(e) {
                return {
                    token0: ci(e.token0),
                    token1: ci(e.token1)
                }
            }

            function vi(e) {
                var t = Object(j.a)(e, 2),
                    n = t[0],
                    i = t[1];
                if (n.chainId !== i.chainId) throw new Error("Not matching chain IDs");
                if (n.equals(i)) throw new Error("Tokens cannot be equal");
                if (!ze[n.chainId]) throw new Error("No V2 factory address on this chain");
                return new J.Token(n.chainId, Object(Ie.computePairAddress)({
                    factoryAddress: ze[n.chainId],
                    tokenA: n,
                    tokenB: i
                }), 18, "ScrappyInu-LP", "ScrappyInu Liquidity")
            }
            var Oi = n(114),
                gi = n(43);

            function yi() {
                var e = Object(gi.g)().search;
                return Object(a.useMemo)((function() {
                    return e && e.length > 1 ? Object(Oi.parse)(e, {
                        parseArrays: !1,
                        ignoreQueryPrefix: !0
                    }) : {}
                }), [e])
            }

            function wi(e) {
                var t = e.toLowerCase();
                return ke.find((function(e) {
                    return e.toLowerCase() === t || e.split("-")[0] === t
                }))
            }

            function ki() {
                var e = yi(),
                    t = function() {
                        var e = Se();
                        return [li(), Object(a.useCallback)((function(t) {
                            e(Zn({
                                userLocale: t
                            }))
                        }), [e])]
                    }(),
                    n = Object(j.a)(t, 2),
                    i = n[0],
                    r = n[1];
                Object(a.useEffect)((function() {
                    var t = "string" === typeof e.lng ? wi(e.lng) : void 0;
                    t && t !== i && r(t)
                }), [e.lng, r, i])
            }

            function Ci() {
                var e = li();
                return Object(a.useMemo)((function() {
                    return Ce
                }), [e])
            }
            var Ti = n(36),
                Ii = {
                    "af-ZA": Ti.a,
                    "ar-SA": Ti.b,
                    "ca-ES": Ti.c,
                    "cs-CZ": Ti.d,
                    "da-DK": Ti.e,
                    "de-DE": Ti.f,
                    "el-GR": Ti.g,
                    "en-US": Ti.h,
                    "es-ES": Ti.i,
                    "fi-FI": Ti.j,
                    "fr-FR": Ti.k,
                    "he-IL": Ti.l,
                    "hu-HU": Ti.m,
                    "id-ID": Ti.n,
                    "it-IT": Ti.o,
                    "ja-JP": Ti.p,
                    "ko-KR": Ti.q,
                    "nl-NL": Ti.r,
                    "no-NO": Ti.s,
                    "pl-PL": Ti.t,
                    "pt-BR": Ti.u,
                    "pt-PT": Ti.u,
                    "ro-RO": Ti.v,
                    "ru-RU": Ti.w,
                    "sr-SP": Ti.x,
                    "sv-SE": Ti.y,
                    "tr-TR": Ti.z,
                    "uk-UA": Ti.A,
                    "vi-VN": Ti.B,
                    "zh-CN": Ti.C,
                    "zh-TW": Ti.C
                };

            function Ai() {
                return (Ai = Object(R.a)(S.a.mark((function e(t) {
                    var i, r;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, n(399)("./".concat(t, ".po"));
                            case 2:
                                i = e.sent, r = i.messages, we.a.loadLocaleData(t, {
                                    plurals: function() {
                                        return Ii[t]
                                    }
                                }), we.a.load(t, r), we.a.activate(t);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ei(e) {
                var t = e.children;
                ki();
                var n = Ci(),
                    i = Object(a.useState)(!1),
                    r = Object(j.a)(i, 2),
                    o = r[0],
                    c = r[1];
                return Object(a.useEffect)((function() {
                    (function(e) {
                        return Ai.apply(this, arguments)
                    })(n).then((function() {
                        c(!0)
                    })).catch((function(e) {
                        console.error("Failed to activate locale", n, e)
                    }))
                }), [n]), o ? Object(je.jsx)(f.a, {
                    forceRenderOnLocaleChange: !1,
                    i18n: we.a,
                    children: t
                }) : null
            }
            var Si = n(21),
                Ni = n(2);

            function Ri() {
                return function() {
                    var e = Se(),
                        t = yi().ape;
                    Object(a.useEffect)((function() {
                        "string" === typeof t && ("" !== t && "true" !== t.toLowerCase() || e(Xn({
                            userExpertMode: !0
                        })))
                    }))
                }(), null
            }

            function Ui(e) {
                var t = e.location,
                    n = t.pathname,
                    i = t.search;
                return Object(a.useEffect)((function() {
                    l.a.pageview("".concat(n).concat(i))
                }), [n, i]), null
            }
            var Bi = n(208),
                Mi = Object(Ft.c)({
                    chainId: null,
                    blockNumber: {},
                    popupList: [],
                    openModal: null
                }, (function(e) {
                    return e.addCase(Yt, (function(e, t) {
                        var n = t.payload.chainId;
                        e.chainId = n
                    })).addCase(Vt, (function(e, t) {
                        var n = t.payload,
                            i = n.chainId,
                            r = n.blockNumber;
                        "number" !== typeof e.blockNumber[i] ? e.blockNumber[i] = r : e.blockNumber[i] = Math.max(r, e.blockNumber[i])
                    })).addCase(_t, (function(e, t) {
                        e.openModal = t.payload
                    })).addCase(Ht, (function(e, t) {
                        var n = t.payload,
                            i = n.content,
                            r = n.key,
                            o = n.removeAfterMs,
                            a = void 0 === o ? 25e3 : o;
                        e.popupList = (r ? e.popupList.filter((function(e) {
                            return e.key !== r
                        })) : e.popupList).concat([{
                            key: r || Object(Ft.e)(),
                            show: !0,
                            content: i,
                            removeAfterMs: a
                        }])
                    })).addCase(Qt, (function(e, t) {
                        var n = t.payload.key;
                        e.popupList.forEach((function(e) {
                            e.key === n && (e.show = !1)
                        }))
                    }))
                })),
                Pi = Object(Ft.b)("global/updateVersion"),
                Li = function() {
                    return (new Date).getTime()
                };

            function zi(e, t) {
                return "".concat(e, ";").concat(t)
            }
            var Di, Wi = {
                    arbitrumAlphaAcknowledged: !1,
                    userDarkMode: !0,
                    matchesDarkMode: !1,
                    userExpertMode: !1,
                    userLocale: null,
                    userSingleHopOnly: !1,
                    userHideClosedPositions: !1,
                    userSlippageTolerance: "auto",
                    userSlippageToleranceHasBeenMigratedToAuto: !0,
                    userDeadline: $,
                    tokens: {},
                    pairs: {},
                    timestamp: Li(),
                    URLWarningVisible: !0
                },
                qi = Object(Ft.c)(Wi, (function(e) {
                    return e.addCase(Pi, (function(e) {
                        "number" !== typeof e.userSlippageTolerance || !Number.isInteger(e.userSlippageTolerance) || e.userSlippageTolerance < 0 || e.userSlippageTolerance > 5e3 ? e.userSlippageTolerance = "auto" : e.userSlippageToleranceHasBeenMigratedToAuto || -1 === [10, 50, 100].indexOf(e.userSlippageTolerance) || (e.userSlippageTolerance = "auto", e.userSlippageToleranceHasBeenMigratedToAuto = !0), ("number" !== typeof e.userDeadline || !Number.isInteger(e.userDeadline) || e.userDeadline < 60 || e.userDeadline > 10800) && (e.userDeadline = $), e.lastUpdateVersionTimestamp = Li()
                    })).addCase(Kn, (function(e, t) {
                        e.userDarkMode = t.payload.userDarkMode, e.timestamp = Li()
                    })).addCase(Gn, (function(e, t) {
                        e.matchesDarkMode = t.payload.matchesDarkMode, e.timestamp = Li()
                    })).addCase(Jn, (function(e, t) {
                        e.arbitrumAlphaAcknowledged = t.payload.arbitrumAlphaAcknowledged
                    })).addCase(Xn, (function(e, t) {
                        e.userExpertMode = t.payload.userExpertMode, e.timestamp = Li()
                    })).addCase(Zn, (function(e, t) {
                        e.userLocale = t.payload.userLocale, e.timestamp = Li()
                    })).addCase(ti, (function(e, t) {
                        e.userSlippageTolerance = t.payload.userSlippageTolerance, e.timestamp = Li()
                    })).addCase(ni, (function(e, t) {
                        e.userDeadline = t.payload.userDeadline, e.timestamp = Li()
                    })).addCase($n, (function(e, t) {
                        e.userSingleHopOnly = t.payload.userSingleHopOnly
                    })).addCase(ei, (function(e, t) {
                        e.userHideClosedPositions = t.payload.userHideClosedPositions
                    })).addCase(ii, (function(e, t) {
                        var n = t.payload.serializedToken;
                        e.tokens || (e.tokens = {}), e.tokens[n.chainId] = e.tokens[n.chainId] || {}, e.tokens[n.chainId][n.address] = n, e.timestamp = Li()
                    })).addCase(ri, (function(e, t) {
                        var n = t.payload,
                            i = n.address,
                            r = n.chainId;
                        e.tokens || (e.tokens = {}), e.tokens[r] = e.tokens[r] || {}, delete e.tokens[r][i], e.timestamp = Li()
                    })).addCase(oi, (function(e, t) {
                        var n = t.payload.serializedPair;
                        if (n.token0.chainId === n.token1.chainId && n.token0.address !== n.token1.address) {
                            var i = n.token0.chainId;
                            e.pairs[i] = e.pairs[i] || {}, e.pairs[i][zi(n.token0.address, n.token1.address)] = n
                        }
                        e.timestamp = Li()
                    })).addCase(ai, (function(e, t) {
                        var n = t.payload,
                            i = n.chainId,
                            r = n.tokenAAddress,
                            o = n.tokenBAddress;
                        e.pairs[i] && (delete e.pairs[i][zi(r, o)], delete e.pairs[i][zi(o, r)]), e.timestamp = Li()
                    }))
                })),
                Fi = Object(Ft.b)("transactions/addTransaction"),
                Yi = Object(Ft.b)("transactions/clearAllTransactions"),
                Vi = Object(Ft.b)("transactions/finalizeTransaction"),
                _i = Object(Ft.b)("transactions/checkedTransaction"),
                Hi = function() {
                    return (new Date).getTime()
                },
                Qi = Object(Ft.c)({}, (function(e) {
                    return e.addCase(Fi, (function(e, t) {
                        var n, i, r = t.payload,
                            o = r.chainId,
                            a = r.from,
                            c = r.hash,
                            s = r.approval,
                            u = r.summary,
                            d = r.claim;
                        if (null === (n = e[o]) || void 0 === n ? void 0 : n[c]) throw Error("Attempted to add existing transaction.");
                        var l = null !== (i = e[o]) && void 0 !== i ? i : {};
                        l[c] = {
                            hash: c,
                            approval: s,
                            summary: u,
                            claim: d,
                            from: a,
                            addedTime: Hi()
                        }, e[o] = l
                    })).addCase(Yi, (function(e, t) {
                        var n = t.payload.chainId;
                        e[n] && (e[n] = {})
                    })).addCase(_i, (function(e, t) {
                        var n, i = t.payload,
                            r = i.chainId,
                            o = i.hash,
                            a = i.blockNumber,
                            c = null === (n = e[r]) || void 0 === n ? void 0 : n[o];
                        c && (c.lastCheckedBlockNumber ? c.lastCheckedBlockNumber = Math.max(a, c.lastCheckedBlockNumber) : c.lastCheckedBlockNumber = a)
                    })).addCase(Vi, (function(e, t) {
                        var n, i = t.payload,
                            r = i.hash,
                            o = i.chainId,
                            a = i.receipt,
                            c = null === (n = e[o]) || void 0 === n ? void 0 : n[r];
                        c && (c.receipt = a, c.confirmedTime = Hi())
                    }))
                }));
            ! function(e) {
                e.INPUT = "INPUT", e.OUTPUT = "OUTPUT"
            }(Di || (Di = {}));
            var Gi, Ji, Ki = Object(Ft.b)("swap/selectCurrency"),
                Xi = Object(Ft.b)("swap/switchCurrencies"),
                Zi = Object(Ft.b)("swap/typeInput"),
                $i = Object(Ft.b)("swap/replaceSwapState"),
                er = Object(Ft.b)("swap/setRecipient"),
                tr = (Gi = {
                    independentField: Di.INPUT,
                    typedValue: ""
                }, Object(m.a)(Gi, Di.INPUT, {
                    currencyId: ""
                }), Object(m.a)(Gi, Di.OUTPUT, {
                    currencyId: ""
                }), Object(m.a)(Gi, "recipient", null), Gi),
                nr = Object(Ft.c)(tr, (function(e) {
                    return e.addCase($i, (function(e, t) {
                        var n, i = t.payload,
                            r = i.typedValue,
                            o = i.recipient,
                            a = i.field,
                            c = i.inputCurrencyId,
                            s = i.outputCurrencyId;
                        return n = {}, Object(m.a)(n, Di.INPUT, {
                            currencyId: c
                        }), Object(m.a)(n, Di.OUTPUT, {
                            currencyId: s
                        }), Object(m.a)(n, "independentField", a), Object(m.a)(n, "typedValue", r), Object(m.a)(n, "recipient", o), n
                    })).addCase(Ki, (function(e, t) {
                        var n, i = t.payload,
                            r = i.currencyId,
                            o = i.field,
                            a = o === Di.INPUT ? Di.OUTPUT : Di.INPUT;
                        return r === e[a].currencyId ? Object(He.a)(Object(He.a)({}, e), {}, (n = {
                            independentField: e.independentField === Di.INPUT ? Di.OUTPUT : Di.INPUT
                        }, Object(m.a)(n, o, {
                            currencyId: r
                        }), Object(m.a)(n, a, {
                            currencyId: e[o].currencyId
                        }), n)) : Object(He.a)(Object(He.a)({}, e), {}, Object(m.a)({}, o, {
                            currencyId: r
                        }))
                    })).addCase(Xi, (function(e) {
                        var t;
                        return Object(He.a)(Object(He.a)({}, e), {}, (t = {
                            independentField: e.independentField === Di.INPUT ? Di.OUTPUT : Di.INPUT
                        }, Object(m.a)(t, Di.INPUT, {
                            currencyId: e[Di.OUTPUT].currencyId
                        }), Object(m.a)(t, Di.OUTPUT, {
                            currencyId: e[Di.INPUT].currencyId
                        }), t))
                    })).addCase(Zi, (function(e, t) {
                        var n = t.payload,
                            i = n.field,
                            r = n.typedValue;
                        return Object(He.a)(Object(He.a)({}, e), {}, {
                            independentField: i,
                            typedValue: r
                        })
                    })).addCase(er, (function(e, t) {
                        var n = t.payload.recipient;
                        e.recipient = n
                    }))
                }));
            ! function(e) {
                e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(Ji || (Ji = {}));
            var ir, rr = Object(Ft.b)("mint/typeInputMint"),
                or = Object(Ft.b)("mint/resetMintState"),
                ar = {
                    independentField: Ji.CURRENCY_A,
                    typedValue: "",
                    otherTypedValue: "",
                    startPriceTypedValue: "",
                    leftRangeTypedValue: "",
                    rightRangeTypedValue: ""
                },
                cr = Object(Ft.c)(ar, (function(e) {
                    return e.addCase(or, (function() {
                        return ar
                    })).addCase(rr, (function(e, t) {
                        var n = t.payload,
                            i = n.field,
                            r = n.typedValue;
                        return n.noLiquidity ? i === e.independentField ? Object(He.a)(Object(He.a)({}, e), {}, {
                            independentField: i,
                            typedValue: r
                        }) : Object(He.a)(Object(He.a)({}, e), {}, {
                            independentField: i,
                            typedValue: r,
                            otherTypedValue: e.typedValue
                        }) : Object(He.a)(Object(He.a)({}, e), {}, {
                            independentField: i,
                            typedValue: r,
                            otherTypedValue: ""
                        })
                    }))
                })),
                sr = n(77),
                ur = {
                    pending: Object(Ft.b)("lists/fetchTokenList/pending"),
                    fulfilled: Object(Ft.b)("lists/fetchTokenList/fulfilled"),
                    rejected: Object(Ft.b)("lists/fetchTokenList/rejected")
                },
                dr = Object(Ft.b)("lists/addList"),
                lr = Object(Ft.b)("lists/removeList"),
                br = Object(Ft.b)("lists/enableList"),
                pr = Object(Ft.b)("lists/disableList"),
                fr = Object(Ft.b)("lists/acceptListUpdate"),
                jr = {
                    error: null,
                    current: null,
                    loadingRequestId: null,
                    pendingUpdate: null
                },
                hr = {
                    lastInitializedDefaultListOfLists: Ct,
                    byUrl: Object(He.a)({}, Ct.concat(kt).reduce((function(e, t) {
                        return e[t] = jr, e
                    }), {})),
                    activeListUrls: Tt
                },
                mr = Object(Ft.c)(hr, (function(e) {
                    return e.addCase(ur.pending, (function(e, t) {
                        var n = t.payload,
                            i = n.requestId,
                            r = n.url;
                        e.byUrl[r] = Object(He.a)(Object(He.a)({}, e.byUrl[r]), {}, {
                            current: null,
                            pendingUpdate: null,
                            loadingRequestId: i,
                            error: null
                        })
                    })).addCase(ur.fulfilled, (function(e, t) {
                        var n, i, r = t.payload,
                            o = r.requestId,
                            a = r.tokenList,
                            c = r.url,
                            s = null === (n = e.byUrl[c]) || void 0 === n ? void 0 : n.current,
                            u = null === (i = e.byUrl[c]) || void 0 === i ? void 0 : i.loadingRequestId;
                        if (s) {
                            if (Object(sr.b)(s.version, a.version) === sr.a.NONE) return;
                            null !== u && u !== o || (e.byUrl[c] = Object(He.a)(Object(He.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: s,
                                pendingUpdate: a
                            }))
                        } else {
                            var d;
                            if (Tt.includes(c)) null === (d = e.activeListUrls) || void 0 === d || d.push(c);
                            e.byUrl[c] = Object(He.a)(Object(He.a)({}, e.byUrl[c]), {}, {
                                loadingRequestId: null,
                                error: null,
                                current: a,
                                pendingUpdate: null
                            })
                        }
                    })).addCase(ur.rejected, (function(e, t) {
                        var n, i = t.payload,
                            r = i.url,
                            o = i.requestId,
                            a = i.errorMessage;
                        (null === (n = e.byUrl[r]) || void 0 === n ? void 0 : n.loadingRequestId) === o && (e.byUrl[r] = Object(He.a)(Object(He.a)({}, e.byUrl[r]), {}, {
                            loadingRequestId: null,
                            error: a,
                            current: null,
                            pendingUpdate: null
                        }))
                    })).addCase(dr, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = jr)
                    })).addCase(lr, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] && delete e.byUrl[n], e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                            return e !== n
                        })))
                    })).addCase(br, (function(e, t) {
                        var n = t.payload;
                        e.byUrl[n] || (e.byUrl[n] = jr), e.activeListUrls && !e.activeListUrls.includes(n) && e.activeListUrls.push(n), e.activeListUrls || (e.activeListUrls = [n])
                    })).addCase(pr, (function(e, t) {
                        var n = t.payload;
                        e.activeListUrls && e.activeListUrls.includes(n) && (e.activeListUrls = e.activeListUrls.filter((function(e) {
                            return e !== n
                        })))
                    })).addCase(fr, (function(e, t) {
                        var n, i = t.payload;
                        if (!(null === (n = e.byUrl[i]) || void 0 === n ? void 0 : n.pendingUpdate)) throw new Error("accept list update called without pending update");
                        e.byUrl[i] = Object(He.a)(Object(He.a)({}, e.byUrl[i]), {}, {
                            pendingUpdate: null,
                            current: e.byUrl[i].pendingUpdate
                        })
                    })).addCase(Pi, (function(e) {
                        if (e.lastInitializedDefaultListOfLists) {
                            if (e.lastInitializedDefaultListOfLists) {
                                var t = e.lastInitializedDefaultListOfLists.reduce((function(e, t) {
                                        return e.add(t)
                                    }), new Set),
                                    n = Ct.reduce((function(e, t) {
                                        return e.add(t)
                                    }), new Set);
                                Ct.forEach((function(n) {
                                    t.has(n) || (e.byUrl[n] = jr)
                                })), e.lastInitializedDefaultListOfLists.forEach((function(t) {
                                    n.has(t) || delete e.byUrl[t]
                                }))
                            }
                        } else e.byUrl = hr.byUrl, e.activeListUrls = hr.activeListUrls;
                        e.lastInitializedDefaultListOfLists = Ct, e.activeListUrls || (e.activeListUrls = Tt, Tt.map((function(t) {
                            return e.byUrl[t] || (e.byUrl[t] = jr), !0
                        })))
                    }))
                }));
            ! function(e) {
                e.LIQUIDITY_PERCENT = "LIQUIDITY_PERCENT", e.LIQUIDITY = "LIQUIDITY", e.CURRENCY_A = "CURRENCY_A", e.CURRENCY_B = "CURRENCY_B"
            }(ir || (ir = {}));
            var xr = Object(Ft.b)("burn/typeInputBurn"),
                vr = {
                    independentField: ir.LIQUIDITY_PERCENT,
                    typedValue: "0"
                },
                Or = Object(Ft.c)(vr, (function(e) {
                    return e.addCase(xr, (function(e, t) {
                        var n = t.payload,
                            i = n.field,
                            r = n.typedValue;
                        return Object(He.a)(Object(He.a)({}, e), {}, {
                            independentField: i,
                            typedValue: r
                        })
                    }))
                }));

            function gr(e) {
                var t, n, i, r;
                return "".concat(null !== (t = e.address) && void 0 !== t ? t : "", ":").concat(null !== (n = null === (i = e.topics) || void 0 === i || null === (r = i.map((function(e) {
                    return e ? Array.isArray(e) ? e.join(";") : e : "\0"
                }))) || void 0 === r ? void 0 : r.join("-")) && void 0 !== n ? n : "")
            }
            var yr = Object(Ft.d)({
                    name: "logs",
                    initialState: {},
                    reducers: {
                        addListener: function(e, t) {
                            var n = t.payload,
                                i = n.chainId,
                                r = n.filter;
                            e[i] || (e[i] = {});
                            var o = gr(r);
                            e[i][o] ? e[i][o].listeners++ : e[i][o] = {
                                listeners: 1
                            }
                        },
                        fetchingLogs: function(e, t) {
                            var n = t.payload,
                                i = n.chainId,
                                r = n.filters,
                                o = n.blockNumber;
                            if (e[i]) {
                                var a, c = Object(N.a)(r);
                                try {
                                    for (c.s(); !(a = c.n()).done;) {
                                        var s = gr(a.value);
                                        e[i][s] && (e[i][s].fetchingBlockNumber = o)
                                    }
                                } catch (u) {
                                    c.e(u)
                                } finally {
                                    c.f()
                                }
                            }
                        },
                        fetchedLogs: function(e, t) {
                            var n = t.payload,
                                i = n.chainId,
                                r = n.filter,
                                o = n.results;
                            if (e[i]) {
                                var a = gr(r),
                                    c = e[i][a];
                                !c || c.results && c.results.blockNumber > o.blockNumber || (c.results = o)
                            }
                        },
                        fetchedLogsError: function(e, t) {
                            var n = t.payload,
                                i = n.chainId,
                                r = n.filter,
                                o = n.blockNumber;
                            if (e[i]) {
                                var a = gr(r),
                                    c = e[i][a];
                                !c || c.results && c.results.blockNumber > o || (c.results = {
                                    blockNumber: o,
                                    error: !0
                                })
                            }
                        },
                        removeListener: function(e, t) {
                            var n = t.payload,
                                i = n.chainId,
                                r = n.filter;
                            if (e[i]) {
                                var o = gr(r);
                                e[i][o] && e[i][o].listeners--
                            }
                        }
                    }
                }),
                wr = yr.reducer,
                kr = yr.actions,
                Cr = (kr.addListener, kr.removeListener, kr.fetchedLogs),
                Tr = kr.fetchedLogsError,
                Ir = kr.fetchingLogs,
                Ar = Object(Ft.c)({
                    callResults: {}
                }, (function(e) {
                    return e.addCase(Zt, (function(e, t) {
                        var n, i = t.payload,
                            r = i.calls,
                            o = i.chainId,
                            a = i.options.blocksPerFetch,
                            c = e.callListeners ? e.callListeners : e.callListeners = {};
                        c[o] = null !== (n = c[o]) && void 0 !== n ? n : {}, r.forEach((function(e) {
                            var t, n, i = rn(e);
                            c[o][i] = null !== (t = c[o][i]) && void 0 !== t ? t : {}, c[o][i][a] = (null !== (n = c[o][i][a]) && void 0 !== n ? n : 0) + 1
                        }))
                    })).addCase($t, (function(e, t) {
                        var n = t.payload,
                            i = n.chainId,
                            r = n.calls,
                            o = n.options.blocksPerFetch,
                            a = e.callListeners ? e.callListeners : e.callListeners = {};
                        a[i] && r.forEach((function(e) {
                            var t = rn(e);
                            a[i][t] && a[i][t][o] && (1 === a[i][t][o] ? delete a[i][t][o] : a[i][t][o]--)
                        }))
                    })).addCase(en, (function(e, t) {
                        var n, i = t.payload,
                            r = i.chainId,
                            o = i.fetchingBlockNumber,
                            a = i.calls;
                        e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}, a.forEach((function(t) {
                            var n = rn(t),
                                i = e.callResults[r][n];
                            if (i) {
                                var a;
                                if ((null !== (a = i.fetchingBlockNumber) && void 0 !== a ? a : 0) >= o) return;
                                e.callResults[r][n].fetchingBlockNumber = o
                            } else e.callResults[r][n] = {
                                fetchingBlockNumber: o
                            }
                        }))
                    })).addCase(tn, (function(e, t) {
                        var n, i = t.payload,
                            r = i.fetchingBlockNumber,
                            o = i.chainId,
                            a = i.calls;
                        e.callResults[o] = null !== (n = e.callResults[o]) && void 0 !== n ? n : {}, a.forEach((function(t) {
                            var n = rn(t),
                                i = e.callResults[o][n];
                            i && "number" === typeof i.fetchingBlockNumber && i.fetchingBlockNumber <= r && (delete i.fetchingBlockNumber, i.data = null, i.blockNumber = r)
                        }))
                    })).addCase(nn, (function(e, t) {
                        var n, i = t.payload,
                            r = i.chainId,
                            o = i.results,
                            a = i.blockNumber;
                        e.callResults[r] = null !== (n = e.callResults[r]) && void 0 !== n ? n : {}, Object.keys(o).forEach((function(t) {
                            var n, i = e.callResults[r][t];
                            (null !== (n = null === i || void 0 === i ? void 0 : i.blockNumber) && void 0 !== n ? n : 0) > a || (e.callResults[r][t] = {
                                data: o[t],
                                blockNumber: a
                            })
                        }))
                    }))
                })),
                Er = ["user", "transactions", "lists"],
                Sr = Object(Ft.a)({
                    reducer: {
                        application: Mi,
                        user: qi,
                        transactions: Qi,
                        swap: nr,
                        mint: cr,
                        burn: Or,
                        multicall: Ar,
                        lists: mr,
                        logs: wr
                    },
                    middleware: function(e) {
                        return e({
                            thunk: !0
                        }).concat(Object(Bi.save)({
                            states: Er,
                            debounce: 1e3
                        }))
                    },
                    preloadedState: Object(Bi.load)({
                        states: Er,
                        disableWarnings: !1
                    })
                });
            Sr.dispatch(Pi());
            var Nr = Sr,
                Rr = n(31),
                Ur = n(16),
                Br = n(648),
                Mr = n(649),
                Pr = n(650),
                Lr = n(651),
                zr = {
                    "bscscan.com": !0,
                    "testnet.bscscan.com": !0
                };
            var Dr, Wr, qr, Fr, Yr, Vr = ["target", "href", "rel"],
                _r = ["target", "href", "rel"],
                Hr = Ni.default.button.withConfig({
                    componentId: "sc-1cchcrx-0"
                })(["outline:none;border:none;font-size:inherit;padding:0;margin:0;background:none;cursor:pointer;:hover{opacity:0.7;}:focus{text-decoration:underline;}"]),
                Qr = Object(Ni.default)(Br.a).withConfig({
                    componentId: "sc-1cchcrx-1"
                })(["cursor:pointer;"]),
                Gr = Ni.default.div.withConfig({
                    componentId: "sc-1cchcrx-2"
                })(["display:flex;align-items:center;justify-content:center;width:", ";height:", ";margin-right:", ";margin-left:", ";& > *{stroke:", ";}"], (function(e) {
                    var t = e.size;
                    return null !== t && void 0 !== t ? t : "20px"
                }), (function(e) {
                    var t = e.size;
                    return null !== t && void 0 !== t ? t : "20px"
                }), (function(e) {
                    var t = e.marginRight;
                    return null !== t && void 0 !== t ? t : 0
                }), (function(e) {
                    var t = e.marginLeft;
                    return null !== t && void 0 !== t ? t : 0
                }), (function(e) {
                    var t = e.theme,
                        n = e.stroke;
                    return null !== n && void 0 !== n ? n : t.blue1
                })),
                Jr = Ni.default.button.withConfig({
                    componentId: "sc-1cchcrx-3"
                })(["border:none;text-decoration:none;background:none;cursor:", ";color:", ";font-weight:500;:hover{text-decoration:", ";}:focus{outline:none;text-decoration:", ";}:active{text-decoration:none;}"], (function(e) {
                    return e.disabled ? "default" : "pointer"
                }), (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.text2 : t.primary1
                }), (function(e) {
                    return e.disabled ? null : "underline"
                }), (function(e) {
                    return e.disabled ? null : "underline"
                })),
                Kr = Object(Ni.default)(p.b).withConfig({
                    componentId: "sc-1cchcrx-4"
                })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(e) {
                    return e.theme.primary1
                })),
                Xr = Ni.default.a.withConfig({
                    componentId: "sc-1cchcrx-5"
                })(["text-decoration:none;cursor:pointer;color:", ";font-weight:500;:hover{text-decoration:underline;}:focus{outline:none;text-decoration:underline;}:active{text-decoration:none;}"], (function(e) {
                    return e.theme.primary1
                })),
                Zr = Ni.default.a.withConfig({
                    componentId: "sc-1cchcrx-6"
                })(["text-decoration:none;cursor:pointer;align-items:center;justify-content:center;display:flex;:hover{text-decoration:none;opacity:0.7;}:focus{outline:none;text-decoration:none;}:active{text-decoration:none;}"]),
                $r = Object(Ni.default)(Mr.a).withConfig({
                    componentId: "sc-1cchcrx-7"
                })(["height:16px;width:18px;margin-left:10px;stroke:", ";"], (function(e) {
                    return e.theme.blue1
                })),
                eo = Object(Ni.default)(Pr.a).withConfig({
                    componentId: "sc-1cchcrx-8"
                })(["height:16px;width:18px;margin-left:10px;stroke:", ";cursor:pointer;align-items:center;justify-content:center;display:flex;:hover{opacity:0.7;}"], (function(e) {
                    return e.theme.text3
                })),
                to = Object(Ni.keyframes)(Dr || (Dr = Object(Si.a)(["\n  0% {\n    transform: perspective(1000px) rotateY(0deg);\n  }\n\n  100% {\n    transform: perspective(1000px) rotateY(360deg);\n  }\n"]))),
                no = Ni.default.img.withConfig({
                    componentId: "sc-1cchcrx-9"
                })(["animation:", " 5s cubic-bezier(0.83,0,0.17,1) infinite;padding:2rem 0 0 0;filter:drop-shadow(0px 2px 4px rgba(0,0,0,0.15));"], to);

            function io(e) {
                var t = e.currentTarget,
                    n = t.target,
                    i = function(e) {
                        try {
                            var t = new URL(e);
                            if (zr[t.hostname]) {
                                var n = t.pathname.split("/").map((function(e) {
                                    return /0x[a-fA-F0-9]+/.test(e) ? "***" : e
                                })).join("/");
                                return "".concat(t.protocol, "//").concat(t.hostname).concat(n)
                            }
                            return e
                        } catch (i) {
                            return e
                        }
                    }(t.href);
                "_blank" === n || e.ctrlKey || e.metaKey ? l.a.outboundLink({
                    label: i
                }, (function() {
                    console.debug("Fired outbound link event", i)
                })) : (e.preventDefault(), l.a.outboundLink({
                    label: i
                }, (function() {
                    window.location.href = i
                })))
            }

            function ro(e) {
                var t = e.target,
                    n = void 0 === t ? "_blank" : t,
                    i = e.href,
                    r = e.rel,
                    o = void 0 === r ? "noopener noreferrer" : r,
                    a = Object(Rr.a)(e, Vr);
                return Object(je.jsx)(Xr, Object(He.a)({
                    target: n,
                    rel: o,
                    href: i,
                    onClick: io
                }, a))
            }

            function oo(e) {
                var t = e.target,
                    n = void 0 === t ? "_blank" : t,
                    i = e.href,
                    r = e.rel,
                    o = void 0 === r ? "noopener noreferrer" : r,
                    a = Object(Rr.a)(e, _r);
                return Object(je.jsx)(Zr, Object(He.a)(Object(He.a)({
                    target: n,
                    rel: o,
                    href: i,
                    onClick: io
                }, a), {}, {
                    children: Object(je.jsx)($r, {})
                }))
            }
            var ao = Object(Ni.keyframes)(Wr || (Wr = Object(Si.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                co = Ni.default.img.withConfig({
                    componentId: "sc-1cchcrx-10"
                })(["animation:2s ", " linear infinite;width:16px;height:16px;"], ao);
            Object(Ni.default)(Kr).withConfig({
                componentId: "sc-1cchcrx-11"
            })(["color:", ";"], (function(e) {
                return e.theme.text1
            }));
            var so, uo, lo, bo, po = Object(Ni.default)(co).withConfig({
                    componentId: "sc-1cchcrx-12"
                })(["height:", ";width:", ";"], (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                fo = Ni.default.span.withConfig({
                    componentId: "sc-1cchcrx-13"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(qr || (qr = Object(Si.a)(["\n    display: none;\n  "])))
                })),
                jo = (Ni.default.span.withConfig({
                    componentId: "sc-1cchcrx-14"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(Fr || (Fr = Object(Si.a)(["\n    display: none;\n  "])))
                })), Ni.default.span.withConfig({
                    componentId: "sc-1cchcrx-15"
                })(["display:none;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Yr || (Yr = Object(Si.a)(["\n    display: block;\n  "])))
                })), ["error"]),
                ho = {
                    upToExtraSmall: 500,
                    upToSmall: 720,
                    upToMedium: 960,
                    upToLarge: 1280
                },
                mo = Object.keys(ho).reduce((function(e, t) {
                    return e[t] = function(e, n, i) {
                        return Object(Ni.css)(so || (so = Object(Si.a)(["\n      @media (max-width: ", "px) {\n        ", "\n      }\n    "])), ho[t], Object(Ni.css)(e, n, i))
                    }, e
                }), {});

            function xo(e) {
                var t = e.children,
                    n = ui(),
                    i = Object(a.useMemo)((function() {
                        return function(e) {
                            return Object(He.a)(Object(He.a)({}, function(e) {
                                return {
                                    white: "#FFFFFF",
                                    black: "#000000",
                                    text1: e ? "#FFFFFF" : "#000000",
                                    text2: e ? "#C3C5CB" : "#565A69",
                                    text3: e ? "#8F96AC" : "#6E727D",
                                    text4: e ? "#B2B9D2" : "#C3C5CB",
                                    text5: e ? "#222429" : "#EDEEF2",
                                    bg0: e ? "#070812" : "#FFF",
                                    bg1: e ? "#11131E" : "#F7F8FA",
                                    bg2: e ? "#222429" : "#EDEEF2",
                                    bg3: e ? "#40444F" : "#CED0D9",
                                    bg4: e ? "#565A69" : "#888D9B",
                                    bg5: e ? "#6C7284" : "#888D9B",
                                    bg6: e ? "#1A2028" : "#6C7284",
                                    modalBG: e ? "rgba(0,0,0,.425)" : "rgba(0,0,0,0.3)",
                                    advancedBG: e ? "rgba(0,0,0,0.1)" : "rgba(255,255,255,0.6)",
                                    primary1: e ? "#e0003b" : "#E8006F",
                                    primary2: e ? "#3680E7" : "#FF8CC3",
                                    primary3: e ? "#e0003b" : "#FF99C9",
                                    primary4: e ? "#e0003b70" : "#F6DDE8",
                                    primary5: e ? "#e0003b20" : "#FDEAF1",
                                    primaryText1: e ? "#e0003b" : "#D50066",
                                    secondary1: e ? "#e0003b" : "#E8006F",
                                    secondary2: e ? "#17000b26" : "#F6DDE8",
                                    secondary3: e ? "#17000b26" : "#FDEAF1",
                                    red1: e ? "#FF4343" : "#DA2D2B",
                                    red2: e ? "#F82D3A" : "#DF1F38",
                                    red3: "#D60000",
                                    green1: e ? "#27AE60" : "#007D35",
                                    yellow1: "#E3A507",
                                    yellow2: "#FF8F00",
                                    yellow3: "#F3B71E",
                                    blue1: e ? "#e0003b" : "#0068FC",
                                    blue2: e ? "#5199FF" : "#0068FC",
                                    error: e ? "#FD4040" : "#DF1F38",
                                    success: e ? "#27AE60" : "#007D35",
                                    warning: "#FF8F00",
                                    blue4: e ? "#153d6f70" : "#C4D9F8"
                                }
                            }(e)), {}, {
                                grids: {
                                    sm: 8,
                                    md: 12,
                                    lg: 24
                                },
                                shadow1: e ? "#000" : "#2F80ED",
                                mediaWidth: mo,
                                flexColumnNoWrap: Object(Ni.css)(uo || (uo = Object(Si.a)(["\n      display: flex;\n      flex-flow: column nowrap;\n    "]))),
                                flexRowNoWrap: Object(Ni.css)(lo || (lo = Object(Si.a)(["\n      display: flex;\n      flex-flow: row nowrap;\n    "])))
                            })
                        }(n)
                    }), [n]);
                return Object(je.jsx)(Ni.ThemeProvider, {
                    theme: i,
                    children: t
                })
            }
            var vo = Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-18nh1jk-0"
                })(["color:", ";"], (function(e) {
                    var t = e.color;
                    return e.theme[t]
                })),
                Oo = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "text2"
                    }, e))
                },
                go = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "primary1"
                    }, e))
                },
                yo = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 600,
                        color: "text1"
                    }, e))
                },
                wo = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "text1"
                    }, e))
                },
                ko = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "white"
                    }, e))
                },
                Co = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 400,
                        fontSize: 16,
                        color: "text1"
                    }, e))
                },
                To = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 600,
                        fontSize: 24
                    }, e))
                },
                Io = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        fontSize: 20
                    }, e))
                },
                Ao = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 400,
                        fontSize: 14
                    }, e))
                },
                Eo = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        fontSize: 11
                    }, e))
                },
                So = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "blue1"
                    }, e))
                },
                No = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: "text3"
                    }, e))
                },
                Ro = function(e) {
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        fontSize: 12,
                        fontStyle: "italic",
                        color: "text2"
                    }, e))
                },
                Uo = function(e) {
                    var t = e.error,
                        n = Object(Rr.a)(e, jo);
                    return Object(je.jsx)(vo, Object(He.a)({
                        fontWeight: 500,
                        color: t ? "red1" : "text2"
                    }, n))
                },
                Bo = Object(Ni.createGlobalStyle)(bo || (bo = Object(Si.a)(["\nhtml {\n  color: ", ";\n  background-color: ", " !important;\n}\n\na {\n color: ", ";\n}\n"])), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.blue1
                })),
                Mo = Ni.default.div.withConfig({
                    componentId: "sc-1kykgp9-0"
                })(["display:flex;flex-direction:column;justify-content:flex-start;"]),
                Po = Object(Ni.default)(Mo).withConfig({
                    componentId: "sc-1kykgp9-1"
                })(["width:100%;align-items:center;"]),
                Lo = Ni.default.div.withConfig({
                    componentId: "sc-1kykgp9-2"
                })(["display:grid;grid-auto-rows:auto;grid-row-gap:", ";justify-items:", ";"], (function(e) {
                    var t = e.gap;
                    return ("sm" === t ? "8px" : "md" === t && "12px") || "lg" === t && "24px" || t
                }), (function(e) {
                    var t = e.justify;
                    return t && t
                })),
                zo = Mo,
                Do = n(302);
            var Wo = n(116),
                qo = Object(Ni.default)(Wo.Box).withConfig({
                    componentId: "sc-nrd8cx-0"
                })(["width:", ";display:flex;padding:0;align-items:", ";justify-content:", ";padding:", ";border:", ";border-radius:", ";"], (function(e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function(e) {
                    var t = e.align;
                    return null !== t && void 0 !== t ? t : "center"
                }), (function(e) {
                    var t = e.justify;
                    return null !== t && void 0 !== t ? t : "flex-start"
                }), (function(e) {
                    return e.padding
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.borderRadius
                })),
                Fo = Object(Ni.default)(qo).withConfig({
                    componentId: "sc-nrd8cx-1"
                })(["justify-content:space-between;"]),
                Yo = Ni.default.div.withConfig({
                    componentId: "sc-nrd8cx-2"
                })(["display:flex;align-items:flex-end;"]),
                Vo = Object(Ni.default)(qo).withConfig({
                    componentId: "sc-nrd8cx-3"
                })(["flex-wrap:wrap;margin:", ";justify-content:", ";& > *{margin:", " !important;}"], (function(e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                }), (function(e) {
                    var t = e.justify;
                    return t && t
                }), (function(e) {
                    return e.gap
                })),
                _o = Object(Ni.default)(qo).withConfig({
                    componentId: "sc-nrd8cx-4"
                })(["width:fit-content;margin:", ";"], (function(e) {
                    var t = e.gap;
                    return t && "-".concat(t)
                })),
                Ho = qo,
                Qo = Ni.default.div.withConfig({
                    componentId: "sc-n7dgia-0"
                })(["display:flex;flex-direction:column;width:100%;align-items:center;z-index:1;"]),
                Go = Ni.default.div.withConfig({
                    componentId: "sc-n7dgia-1"
                })(["padding:1rem;width:100%;white-space:;"]),
                Jo = Ni.default.div.withConfig({
                    componentId: "sc-n7dgia-2"
                })(["background:", ";overflow:auto;white-space:pre;box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:24px;padding:18px 24px;color:", ";"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.text1
                })),
                Ko = Ni.default.div.withConfig({
                    componentId: "sc-n7dgia-3"
                })(["color:", ";padding:6px 24px;"], (function(e) {
                    return e.theme.blue1
                })),
                Xo = Ni.default.div.withConfig({
                    componentId: "sc-n7dgia-4"
                })(["padding:6px 24px;"]),
                Zo = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n(e) {
                        var i;
                        return Object(U.a)(this, n), (i = t.call(this, e)).state = {
                            error: null
                        }, i
                    }
                    return Object(A.a)(n, [{
                        key: "componentDidCatch",
                        value: function(e, t) {
                            l.a.exception(Object(He.a)(Object(He.a)(Object(He.a)({}, e), t), {}, {
                                fatal: !0
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.state.error;
                            if (null !== e) {
                                var t = encodeURIComponent(function(e) {
                                    var t = function() {
                                            var e = window.location.hash;
                                            if (!e.startsWith("#/")) return null;
                                            switch (e.substring(2).split(/[\/\\?]/)[0]) {
                                                case "swap":
                                                    return "swap";
                                                case "add":
                                                    return "mint";
                                                case "remove":
                                                    return "burn"
                                            }
                                            return null
                                        }(),
                                        n = new Do.UAParser(window.navigator.userAgent).getResult();
                                    return "## URL\n\n".concat(window.location.href, "\n\n").concat(t ? "## `".concat(t, "` state\n\n```json\n").concat(JSON.stringify(Nr.getState()[t], null, 2), "\n```\n") : "", "\n").concat(e.name && "## Error\n\n```\n".concat(e.name).concat(e.message && ": ".concat(e.message), "\n```\n"), "\n").concat(e.stack && "## Stacktrace\n\n```\n".concat(e.stack, "\n```\n"), "\n").concat(n && "## Device data\n\n```json\n".concat(JSON.stringify(n, null, 2), "\n```\n"), "\n")
                                }(e));
                                return Object(je.jsx)(Qo, {
                                    children: Object(je.jsx)(Go, {
                                        children: Object(je.jsxs)(Lo, {
                                            gap: "md",
                                            children: [Object(je.jsx)(Xo, {
                                                children: Object(je.jsx)(yo, {
                                                    fontSize: 24,
                                                    fontWeight: 600,
                                                    children: Object(je.jsx)(f.b, {
                                                        id: "Something went wrong"
                                                    })
                                                })
                                            }), Object(je.jsx)(Jo, {
                                                children: Object(je.jsx)("code", {
                                                    children: Object(je.jsx)(Oo, {
                                                        fontSize: 10,
                                                        children: e.stack
                                                    })
                                                })
                                            }), Object(je.jsxs)(Vo, {
                                                children: [Object(je.jsx)(Ko, {
                                                    children: Object(je.jsx)(ro, {
                                                        id: "create-github-issue-link",
                                                        href: "https://github.com/Uniswap/uniswap-interface/issues/new?assignees=&labels=bug&body=".concat(t, "&title=").concat(encodeURIComponent("Crash report: `".concat(e.name).concat(e.message && ": ".concat(e.message), "`"))),
                                                        target: "_blank",
                                                        children: Object(je.jsxs)(go, {
                                                            fontSize: 16,
                                                            children: [Object(je.jsx)(f.b, {
                                                                id: "Create an issue on GitHub"
                                                            }), Object(je.jsx)("span", {
                                                                children: "\u2197"
                                                            })]
                                                        })
                                                    })
                                                }), Object(je.jsx)(Ko, {
                                                    children: Object(je.jsx)(ro, {
                                                        id: "get-support-on-discord",
                                                        href: "https://discord.gg/FCfyBSbCU5",
                                                        target: "_blank",
                                                        children: Object(je.jsxs)(go, {
                                                            fontSize: 16,
                                                            children: [Object(je.jsx)(f.b, {
                                                                id: "Get support on Discord"
                                                            }), Object(je.jsx)("span", {
                                                                children: "\u2197"
                                                            })]
                                                        })
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })
                            }
                            return this.props.children
                        }
                    }], [{
                        key: "getDerivedStateFromError",
                        value: function(e) {
                            return {
                                error: e
                            }
                        }
                    }]), n
                }(c.a.Component);
            var $o = n(314),
                ea = n(23);

            function ta() {
                var e = fe(),
                    t = e.chainId,
                    n = e.account,
                    i = Se();
                return Object(a.useCallback)((function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = r.summary,
                        a = r.approval,
                        c = r.claim;
                    if (n && t) {
                        var s = e.hash;
                        if (!s) throw Error("No transaction hash found.");
                        i(Fi({
                            hash: s,
                            from: n,
                            chainId: t,
                            approval: a,
                            summary: o,
                            claim: c
                        }))
                    }
                }), [i, t, n])
            }

            function na() {
                var e, t = fe().chainId,
                    n = Ne((function(e) {
                        return e.transactions
                    }));
                return t && null !== (e = n[t]) && void 0 !== e ? e : {}
            }

            function ia(e) {
                return (new Date).getTime() - e.addedTime < 864e5
            }

            function ra(e) {
                return /^0x0*$/.test(e)
            }

            function oa(e, t) {
                var n = Object(a.useState)(e),
                    i = Object(j.a)(n, 2),
                    r = i[0],
                    o = i[1];
                return Object(a.useEffect)((function() {
                    var n = setTimeout((function() {
                        o(e)
                    }), t);
                    return function() {
                        clearTimeout(n)
                    }
                }), [e, t]), r
            }

            function aa(e) {
                var t, n, i, r = oa(e, 200),
                    o = Object(a.useMemo)((function() {
                        if (!r) return [void 0];
                        try {
                            return r ? [Object(ft.namehash)(r)] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [r]),
                    c = hn(Rn(!1), "resolver", o),
                    s = null === (t = c.result) || void 0 === t ? void 0 : t[0],
                    u = hn(Un(s && !ra(s) ? s : void 0, !1), "addr", o),
                    d = r !== e;
                return {
                    address: d ? null : null !== (n = null === (i = u.result) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : null,
                    loading: d || c.loading || u.loading
                }
            }

            function ca(e) {
                var t, n, i, r = oa(e, 200),
                    o = Object(a.useMemo)((function() {
                        if (!r || !xt(r)) return [void 0];
                        try {
                            return r ? [Object(ft.namehash)("".concat(r.toLowerCase().substr(2), ".addr.reverse"))] : [void 0]
                        } catch (e) {
                            return [void 0]
                        }
                    }), [r]),
                    c = hn(Rn(!1), "resolver", o),
                    s = null === (t = c.result) || void 0 === t ? void 0 : t[0],
                    u = hn(Un(s && !ra(s) ? s : void 0, !1), "name", o),
                    d = r !== e;
                return {
                    ENSName: d ? null : null !== (n = null === (i = u.result) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : null,
                    loading: d || c.loading || u.loading
                }
            }

            function sa(e) {
                var t = xt(e),
                    n = ca(t || void 0),
                    i = aa(e);
                return {
                    loading: n.loading || i.loading,
                    address: t || i.address,
                    name: n.ENSName ? n.ENSName : !t && i.address && e || null
                }
            }
            var ua = n(80),
                da = new J.Percent(500, 1e4),
                la = new J.Percent(500, 1e4);

            function ba(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : le;
                if (e && !t) return !1;
                if (t && !e) return !0;
                if (e && t) {
                    if (e.tradeType !== t.tradeType || !e.inputAmount.currency.equals(t.inputAmount.currency) || !t.outputAmount.currency.equals(t.outputAmount.currency)) throw new Error("Comparing incomparable trades");
                    return n.equalTo(le) ? e.executionPrice.lessThan(t.executionPrice) : e.executionPrice.asFraction.multiply(n.add(be)).lessThan(t.executionPrice)
                }
            }
            var pa, fa = new mn.b(gn.a);

            function ja(e) {
                var t = Object(a.useMemo)((function() {
                        return e.map((function(e) {
                            var t = Object(j.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            return [null === n || void 0 === n ? void 0 : n.wrapped, null === i || void 0 === i ? void 0 : i.wrapped]
                        }))
                    }), [e]),
                    n = jn(Object(a.useMemo)((function() {
                        return t.map((function(e) {
                            var t = Object(j.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            return n && i && n.chainId === i.chainId && !n.equals(i) && ze[n.chainId] ? Object(Ie.computePairAddress)({
                                factoryAddress: ze[n.chainId],
                                tokenA: n,
                                tokenB: i
                            }) : void 0
                        }))
                    }), [t]), fa, "getReserves");
                return Object(a.useMemo)((function() {
                    return n.map((function(e, n) {
                        var i = e.result,
                            r = e.loading,
                            o = t[n][0],
                            a = t[n][1];
                        if (r) return [pa.LOADING, null];
                        if (!o || !a || o.equals(a)) return [pa.INVALID, null];
                        if (!i) return [pa.NOT_EXISTS, null];
                        var c = i.reserve0,
                            s = i.reserve1,
                            u = o.sortsBefore(a) ? [o, a] : [a, o],
                            d = Object(j.a)(u, 2),
                            l = d[0],
                            b = d[1];
                        return [pa.EXISTS, new Ie.Pair(J.CurrencyAmount.fromRawAmount(l, c.toString()), J.CurrencyAmount.fromRawAmount(b, s.toString()))]
                    }))
                }), [n, t])
            }

            function ha(e, t) {
                return ja(Object(a.useMemo)((function() {
                    return [
                        [e, t]
                    ]
                }), [e, t]))[0]
            }

            function ma(e, t) {
                var n = ja(function(e, t) {
                    var n = fe().chainId,
                        i = n ? [null === e || void 0 === e ? void 0 : e.wrapped, null === t || void 0 === t ? void 0 : t.wrapped] : [void 0, void 0],
                        r = Object(j.a)(i, 2),
                        o = r[0],
                        c = r[1],
                        s = Object(a.useMemo)((function() {
                            var e, t, i, r, a;
                            if (!n) return [];
                            var s = null !== (e = ct[n]) && void 0 !== e ? e : [],
                                u = o && null !== (t = null === (i = st[n]) || void 0 === i ? void 0 : i[o.address]) && void 0 !== t ? t : [],
                                d = c && null !== (r = null === (a = st[n]) || void 0 === a ? void 0 : a[c.address]) && void 0 !== r ? r : [];
                            return [].concat(Object(_e.a)(s), Object(_e.a)(u), Object(_e.a)(d))
                        }), [n, o, c]),
                        u = Object(a.useMemo)((function() {
                            return Ee()(s, (function(e) {
                                return s.map((function(t) {
                                    return [e, t]
                                }))
                            }))
                        }), [s]);
                    return Object(a.useMemo)((function() {
                        return o && c ? [
                            [o, c]
                        ].concat(Object(_e.a)(s.map((function(e) {
                            return [o, e]
                        }))), Object(_e.a)(s.map((function(e) {
                            return [c, e]
                        }))), Object(_e.a)(u)).filter((function(e) {
                            return Boolean(e[0] && e[1])
                        })).filter((function(e) {
                            var t = Object(j.a)(e, 2),
                                n = t[0],
                                i = t[1];
                            return n.address !== i.address
                        })).filter((function(e) {
                            var t = Object(j.a)(e, 2),
                                i = t[0],
                                r = t[1];
                            if (!n) return !0;
                            var o = ut[n],
                                a = null === o || void 0 === o ? void 0 : o[i.address],
                                c = null === o || void 0 === o ? void 0 : o[r.address];
                            return !a && !c || !(a && !a.find((function(e) {
                                return r.equals(e)
                            }))) && !(c && !c.find((function(e) {
                                return i.equals(e)
                            })))
                        })) : []
                    }), [o, c, s, u, n])
                }(e, t));
                return Object(a.useMemo)((function() {
                    return Object.values(n.filter((function(e) {
                        return Boolean(e[0] === pa.EXISTS && e[1])
                    })).reduce((function(e, t) {
                        var n, i = Object(j.a)(t, 2)[1];
                        return e[i.liquidityToken.address] = null !== (n = e[i.liquidityToken.address]) && void 0 !== n ? n : i, e
                    }), {}))
                }), [n])
            }! function(e) {
                e[e.LOADING = 0] = "LOADING", e[e.NOT_EXISTS = 1] = "NOT_EXISTS", e[e.EXISTS = 2] = "EXISTS", e[e.INVALID = 3] = "INVALID"
            }(pa || (pa = {}));

            function xa(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = n.maxHops,
                    r = void 0 === i ? 3 : i,
                    o = ma(e, null === t || void 0 === t ? void 0 : t.currency);
                return Object(a.useMemo)((function() {
                    if (e && t && o.length > 0) {
                        var n;
                        if (1 === r) return null !== (n = Ie.Trade.bestTradeExactOut(o, e, t, {
                            maxHops: 1,
                            maxNumResults: 1
                        })[0]) && void 0 !== n ? n : null;
                        for (var i = null, a = 1; a <= r; a++) {
                            var c, s = null !== (c = Ie.Trade.bestTradeExactOut(o, e, t, {
                                maxHops: a,
                                maxNumResults: 1
                            })[0]) && void 0 !== c ? c : null;
                            ba(i, s, de) && (i = s)
                        }
                        return i
                    }
                    return null
                }), [e, t, o, r])
            }

            function va() {
                return Ne((function(e) {
                    return e.swap
                }))
            }

            function Oa(e, t) {
                if (e && t) try {
                    var n = Object(ua.parseUnits)(e, t.decimals).toString();
                    if ("0" !== n) return J.CurrencyAmount.fromRawAmount(t, X.a.BigInt(n))
                } catch (i) {
                    console.debug('Failed to parse input amount: "'.concat(e, '"'), i)
                }
            }
            var ga = {
                "0xBCfCcbde45cE874adCB698cC183deBcF17952812": !0,
                "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a": !0,
                "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F": !0
            };

            function ya(e, t) {
                return e.route.path.some((function(e) {
                    return e.address === t
                })) || e instanceof Ie.Trade && e.route.pairs.some((function(e) {
                    return e.liquidityToken.address === t
                }))
            }

            function wa() {
                var e, t, n, i, r, o, c, s, u = fe().account,
                    d = fi(),
                    l = Object(j.a)(d, 1)[0],
                    b = va(),
                    p = b.independentField,
                    f = b.typedValue,
                    h = b[Di.INPUT].currencyId,
                    x = b[Di.OUTPUT].currencyId,
                    v = b.recipient,
                    O = Qn(h),
                    g = Qn(x),
                    y = sa(null !== v && void 0 !== v ? v : void 0),
                    w = null !== (e = null === v ? u : y.address) && void 0 !== e ? e : null,
                    k = La(null !== u && void 0 !== u ? u : void 0, [null !== O && void 0 !== O ? O : void 0, null !== g && void 0 !== g ? g : void 0]),
                    C = p === Di.INPUT,
                    T = Oa(f, null !== (t = C ? O : g) && void 0 !== t ? t : void 0),
                    I = function(e, t) {
                        var n = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).maxHops,
                            i = void 0 === n ? 3 : n,
                            r = ma(null === e || void 0 === e ? void 0 : e.currency, t);
                        return Object(a.useMemo)((function() {
                            if (e && t && r.length > 0) {
                                var n;
                                if (1 === i) return null !== (n = Ie.Trade.bestTradeExactIn(r, e, t, {
                                    maxHops: 1,
                                    maxNumResults: 1
                                })[0]) && void 0 !== n ? n : null;
                                for (var o = null, a = 1; a <= i; a++) {
                                    var c, s = null !== (c = Ie.Trade.bestTradeExactIn(r, e, t, {
                                        maxHops: a,
                                        maxNumResults: 1
                                    })[0]) && void 0 !== c ? c : null;
                                    ba(o, s, de) && (o = s)
                                }
                                return o
                            }
                            return null
                        }), [r, e, t, i])
                    }(C ? T : void 0, null !== g && void 0 !== g ? g : void 0, {
                        maxHops: l ? 1 : void 0
                    }),
                    A = xa(null !== O && void 0 !== O ? O : void 0, C ? void 0 : T, {
                        maxHops: l ? 1 : void 0
                    }),
                    E = null !== (n = C ? I : A) && void 0 !== n ? n : void 0,
                    S = (i = {}, Object(m.a)(i, Di.INPUT, k[0]), Object(m.a)(i, Di.OUTPUT, k[1]), i),
                    N = (r = {}, Object(m.a)(r, Di.INPUT, null !== O && void 0 !== O ? O : void 0), Object(m.a)(r, Di.OUTPUT, null !== g && void 0 !== g ? g : void 0), r);
                (u || (o = we.a._("Connect Wallet")), T) || (o = null !== (c = o) && void 0 !== c ? c : we.a._("Enter an amount"));
                N[Di.INPUT] && N[Di.OUTPUT] || (o = null !== (s = o) && void 0 !== s ? s : we.a._("Select a token"));
                var R, U, B = xt(w);
                w && B ? (ga[B] || I && ya(I, B) || A && ya(A, B)) && (o = null !== (R = o) && void 0 !== R ? R : we.a._("Invalid recipient")) : o = null !== (U = o) && void 0 !== U ? U : we.a._("Enter a recipient");
                var M, P = (M = E, hi(Object(a.useMemo)((function() {
                        return M ? da : la
                    }), [M]))),
                    L = [S[Di.INPUT], null === E || void 0 === E ? void 0 : E.maximumAmountIn(P)],
                    z = L[0],
                    D = L[1];
                return z && D && z.lessThan(D) && (o = we.a._("Insufficient {0} balance", {
                    0: D.currency.symbol
                })), {
                    currencies: N,
                    currencyBalances: S,
                    parsedAmount: T,
                    inputError: o,
                    v2Trade: E,
                    toggledTrade: E,
                    allowedSlippage: P
                }
            }

            function ka(e) {
                if ("string" === typeof e) {
                    var t = xt(e);
                    if (t) return t;
                    if ("BNB" === e.toUpperCase()) return "BNB"
                }
                return ""
            }
            var Ca = /^[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)?$/,
                Ta = /^0x[a-fA-F0-9]{40}$/;

            function Ia(e) {
                var t, n = ka(e.inputCurrency),
                    i = ka(e.outputCurrency);
                "" === n && "" === i ? (n = "BNB", i = Pe[r.MAINNET]) : n === i && (i = "");
                var o, a = function(e) {
                    return "string" !== typeof e ? null : xt(e) || (Ca.test(e) || Ta.test(e) ? e : null)
                }(e.recipient);
                return t = {}, Object(m.a)(t, Di.INPUT, {
                    currencyId: n
                }), Object(m.a)(t, Di.OUTPUT, {
                    currencyId: i
                }), Object(m.a)(t, "typedValue", "string" !== typeof(o = e.exactAmount) || isNaN(parseFloat(o)) ? "" : o), Object(m.a)(t, "independentField", function(e) {
                    return "string" === typeof e && "output" === e.toLowerCase() ? Di.OUTPUT : Di.INPUT
                }(e.exactField)), Object(m.a)(t, "recipient", a), t
            }

            function Aa() {
                var e, t;
                return null === (e = hn(Mn(), "getCurrentBlockTimestamp")) || void 0 === e || null === (t = e.result) || void 0 === t ? void 0 : t[0]
            }
            var Ea = new mn.b(gn.a),
                Sa = (new mn.b(kn), 1600387200);

            function Na() {
                var e = fe(),
                    t = e.chainId,
                    n = e.account,
                    i = Pn(),
                    r = (Aa(), hn(i, "listPools")),
                    o = Object(a.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = r.result) || void 0 === t ? void 0 : t[0].reduce((function(e, t) {
                            return e[0].push([t[1], null !== n && void 0 !== n ? n : void 0]), e[1].push([t[1]]), e
                        }), [
                            [],
                            []
                        ])) && void 0 !== e ? e : [
                            [],
                            []
                        ]
                    }), [r, n]),
                    c = Object(j.a)(o, 2),
                    s = c[0],
                    u = c[1],
                    d = fn(i, "getUserStakes", null !== s && void 0 !== s ? s : []),
                    l = fn(i, "getTotalStaked", null !== u && void 0 !== u ? u : []),
                    b = fn(i, "getRewardPool", null !== u && void 0 !== u ? u : []),
                    p = fn(i, "estimatedRewards", null !== s && void 0 !== s ? s : []),
                    f = fn(i, "getUserRewards", null !== s && void 0 !== s ? s : []),
                    h = fn(i, "getMinStakersForFullReward", null !== u && void 0 !== u ? u : []),
                    m = fn(i, "getMinTotalStakedForFullReward", null !== u && void 0 !== u ? u : []),
                    x = fn(i, "getCountStakers", null !== u && void 0 !== u ? u : []),
                    v = Object(a.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = r.result) || void 0 === t ? void 0 : t[0].map((function(e) {
                            return e[2]
                        }))) && void 0 !== e ? e : []
                    }), [r]),
                    O = Object(a.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = r.result) || void 0 === t ? void 0 : t[0].map((function(e) {
                            return e[3]
                        }))) && void 0 !== e ? e : []
                    }), [r]),
                    g = _n(v),
                    y = _n(O),
                    w = jn(v, Ea, "token0", void 0, un),
                    k = jn(v, Ea, "token1", void 0, un),
                    C = _n(w.map((function(e) {
                        var t, n;
                        return null !== (t = null === (n = e.result) || void 0 === n ? void 0 : n[0]) && void 0 !== t ? t : void 0
                    }))),
                    T = _n(k.map((function(e) {
                        var t, n;
                        return null !== (t = null === (n = e.result) || void 0 === n ? void 0 : n[0]) && void 0 !== t ? t : void 0
                    })));
                return Object(a.useMemo)((function() {
                    var e;
                    if (t && (null === (e = r.result) || void 0 === e ? void 0 : e[0])) {
                        for (var n = [], i = 0; null !== (o = i < (null === (a = r.result) || void 0 === a ? void 0 : a[0].length)) && void 0 !== o && o; i++) {
                            var o, a, c, s, u, j, v, O, w, k, I, A, E, S, N, R, U, B, M, P, L, z, D, W, q, F, Y, V, _, H, Q, G, K, Z, $ = d[i],
                                ee = l[i],
                                ne = b[i],
                                ie = p[i],
                                re = f[i],
                                oe = h[i],
                                ae = m[i],
                                ce = x[i],
                                se = null === C || void 0 === C ? void 0 : C[i],
                                ue = null === T || void 0 === T ? void 0 : T[i],
                                de = null === g || void 0 === g ? void 0 : g[i],
                                le = null === y || void 0 === y ? void 0 : y[i];
                            if (de && le) {
                                var be = function(e, t, n, i) {
                                        return J.CurrencyAmount.fromRawAmount(e, X.a.greaterThan(n.quotient, X.a.BigInt(0)) ? X.a.divide(X.a.multiply(i.quotient, t.quotient), n.quotient) : X.a.BigInt(0))
                                    },
                                    pe = X.a.divide(X.a.BigInt(null !== (c = null === ae || void 0 === ae || null === (s = ae.result) || void 0 === s ? void 0 : s[0]) && void 0 !== c ? c : 1), X.a.BigInt((null === ee || void 0 === ee || null === (u = ee.result) || void 0 === u ? void 0 : u[0].eq(0)) ? 1 : null !== (j = null === ee || void 0 === ee || null === (v = ee.result) || void 0 === v ? void 0 : v[0]) && void 0 !== j ? j : 1));
                                X.a.lessThan(pe, X.a.BigInt(1)) && (pe = X.a.BigInt(1));
                                var fe = X.a.divide(X.a.BigInt(null !== (O = null === oe || void 0 === oe || null === (w = oe.result) || void 0 === w ? void 0 : w[0]) && void 0 !== O ? O : 1), X.a.BigInt((null === ce || void 0 === ce || null === (k = ce.result) || void 0 === k ? void 0 : k[0].eq(0)) ? 1 : null !== (I = null === ce || void 0 === ce || null === (A = ce.result) || void 0 === A ? void 0 : A[0]) && void 0 !== I ? I : 1));
                                X.a.lessThan(fe, X.a.BigInt(1)) && (fe = X.a.BigInt(1));
                                var je = X.a.multiply(fe, pe),
                                    he = X.a.divide(X.a.BigInt(null === (E = r.result) || void 0 === E ? void 0 : E[0][i][6]), X.a.BigInt(null === (S = r.result) || void 0 === S ? void 0 : S[0][i][5]));
                                he = X.a.multiply(he, te), he = X.a.multiply(he, X.a.BigInt(1e4)), he = X.a.divide(he, je), he = X.a.divide(he, X.a.BigInt((null === ee || void 0 === ee || null === (N = ee.result) || void 0 === N ? void 0 : N[0].eq(0)) ? 1 : null !== (R = null === ee || void 0 === ee || null === (U = ee.result) || void 0 === U ? void 0 : U[0]) && void 0 !== R ? R : 1)), he = X.a.subtract(he, X.a.BigInt(1)), !(null === ee || void 0 === ee || null === (B = ee.result) || void 0 === B ? void 0 : B[0].eq(0)) && (null === ee || void 0 === ee || null === (M = ee.result) || void 0 === M ? void 0 : M[0]) || (he = X.a.multiply(he, X.a.BigInt(10)));
                                var me = new J.Fraction(he, 100),
                                    xe = J.CurrencyAmount.fromRawAmount(de, X.a.BigInt(null !== (P = null === $ || void 0 === $ || null === (L = $.result) || void 0 === L ? void 0 : L[0]) && void 0 !== P ? P : 0)),
                                    ve = J.CurrencyAmount.fromRawAmount(de, X.a.BigInt(null !== (z = null === ee || void 0 === ee || null === (D = ee.result) || void 0 === D ? void 0 : D[0]) && void 0 !== z ? z : 0)),
                                    Oe = J.CurrencyAmount.fromFractionalAmount(le, X.a.BigInt(null === (W = r.result) || void 0 === W ? void 0 : W[0][i][6]), X.a.BigInt(null === (q = r.result) || void 0 === q ? void 0 : q[0][i][5])).divide(je),
                                    ge = se && ue ? [se, ue] : void 0,
                                    ye = J.CurrencyAmount.fromRawAmount(le, X.a.BigInt(null !== (F = null === ie || void 0 === ie || null === (Y = ie.result) || void 0 === Y ? void 0 : Y[0]) && void 0 !== F ? F : 0)),
                                    we = J.CurrencyAmount.fromRawAmount(le, X.a.BigInt(null !== (V = null === re || void 0 === re || null === (_ = re.result) || void 0 === _ ? void 0 : _[0]) && void 0 !== V ? V : 0));
                                n.push({
                                    poolIndex: null !== (H = null === (Q = r.result) || void 0 === Q || null === (G = Q[0][i][1]) || void 0 === G ? void 0 : G.toNumber()) && void 0 !== H ? H : 0,
                                    stakedPairTokens: ge,
                                    stakedToken: de,
                                    rewardToken: le,
                                    unclaimedAmount: ye,
                                    claimedAmount: we,
                                    rewardRate: J.CurrencyAmount.fromRawAmount(le, X.a.BigInt(0)),
                                    apy: me,
                                    stakedAmount: xe,
                                    totalStakedAmount: ve,
                                    totalRewardRate: Oe,
                                    userRewardRate: be(le, xe, ve, Oe),
                                    getHypotheticalRewardRate: be,
                                    open: (null !== (K = null === ne || void 0 === ne || null === (Z = ne.result) || void 0 === Z ? void 0 : Z[0]) && void 0 !== K ? K : 0) > 0
                                })
                            }
                        }
                        return n
                    }
                }), [r])
            }

            function Ra() {
                var e = fe().chainId,
                    t = e ? it[e] : void 0,
                    n = Na();
                return Object(a.useMemo)((function() {
                    var e;
                    if (t) return null !== (e = null === n || void 0 === n ? void 0 : n.reduce((function(e, t) {
                        return e.add(t.unclaimedAmount)
                    }), J.CurrencyAmount.fromRawAmount(t, "0"))) && void 0 !== e ? e : J.CurrencyAmount.fromRawAmount(t, "0")
                }), [n, t])
            }

            function Ua(e) {
                var t = fe().chainId,
                    n = Mn(),
                    i = Object(a.useMemo)((function() {
                        return e ? e.map(xt).filter((function(e) {
                            return !1 !== e
                        })).sort() : []
                    }), [e]),
                    r = fn(n, "getEthBalance", i.map((function(e) {
                        return [e]
                    })));
                return Object(a.useMemo)((function() {
                    return i.reduce((function(e, n, i) {
                        var o, a, c = null === r || void 0 === r || null === (o = r[i]) || void 0 === o || null === (a = o.result) || void 0 === a ? void 0 : a[0];
                        return c && t && (e[n] = J.CurrencyAmount.fromRawAmount(J.Ether.onChain(t), X.a.BigInt(c.toString()))), e
                    }), {})
                }), [i, t, r])
            }

            function Ba(e, t) {
                var n = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                            return !1 !== xt(null === e || void 0 === e ? void 0 : e.address)
                        }))) && void 0 !== e ? e : []
                    }), [t]),
                    i = jn(Object(a.useMemo)((function() {
                        return n.map((function(e) {
                            return e.address
                        }))
                    }), [n]), new mn.b(xn), "balanceOf", [e], {
                        gasRequired: 1e6
                    }),
                    r = Object(a.useMemo)((function() {
                        return i.some((function(e) {
                            return e.loading
                        }))
                    }), [i]);
                return [Object(a.useMemo)((function() {
                    return e && n.length > 0 ? n.reduce((function(e, t, n) {
                        var r, o, a = null === i || void 0 === i || null === (r = i[n]) || void 0 === r || null === (o = r.result) || void 0 === o ? void 0 : o[0],
                            c = a ? X.a.BigInt(a.toString()) : void 0;
                        return c && (e[t.address] = J.CurrencyAmount.fromRawAmount(t, c)), e
                    }), {}) : {}
                }), [e, n, i]), r]
            }

            function Ma(e, t) {
                return Ba(e, t)[0]
            }

            function Pa(e, t) {
                var n = Ma(e, [t]);
                if (t) return n[t.address]
            }

            function La(e, t) {
                var n = Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.filter((function(e) {
                            var t;
                            return null !== (t = null === e || void 0 === e ? void 0 : e.isToken) && void 0 !== t && t
                        }))) && void 0 !== e ? e : []
                    }), [t]),
                    i = Ma(e, n),
                    r = Ua(Object(a.useMemo)((function() {
                        var e;
                        return null !== (e = null === t || void 0 === t ? void 0 : t.some((function(e) {
                            return null === e || void 0 === e ? void 0 : e.isNative
                        }))) && void 0 !== e && e
                    }), [t]) ? [e] : []);
                return Object(a.useMemo)((function() {
                    var n;
                    return null !== (n = null === t || void 0 === t ? void 0 : t.map((function(t) {
                        if (e && t) return t.isToken ? i[t.address] : t.isNative ? r[e] : void 0
                    }))) && void 0 !== n ? n : []
                }), [e, t, r, i])
            }

            function za(e, t) {
                return La(e, [t])[0]
            }
            var Da, Wa, qa, Fa = n.p + "static/media/logo_white.81a56970.svg",
                Ya = n(652),
                Va = n(653),
                _a = n(654),
                Ha = n(655),
                Qa = n(656),
                Ga = n(657),
                Ja = ["title", "titleId"];

            function Ka() {
                return (Ka = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Xa(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function Za(e, t) {
                var n = e.title,
                    i = e.titleId,
                    r = Xa(e, Ja);
                return a.createElement("svg", Ka({
                    width: 24,
                    height: 24,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, r), n ? a.createElement("title", {
                    id: i
                }, n) : null, Da || (Da = a.createElement("path", {
                    d: "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })), Wa || (Wa = a.createElement("path", {
                    d: "M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })), qa || (qa = a.createElement("path", {
                    d: "M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",
                    stroke: "black",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })))
            }
            var $a = a.forwardRef(Za);
            n.p;

            function ec(e, t) {
                var n = Object(a.useRef)(t);
                Object(a.useEffect)((function() {
                    n.current = t
                }), [t]), Object(a.useEffect)((function() {
                    var t = function(t) {
                        var i, r;
                        null !== (i = null === (r = e.current) || void 0 === r ? void 0 : r.contains(t.target)) && void 0 !== i && i || n.current && n.current()
                    };
                    return document.addEventListener("mousedown", t),
                        function() {
                            document.removeEventListener("mousedown", t)
                        }
                }), [e])
            }

            function tc(e) {
                var t = Object(gi.g)(),
                    n = yi(),
                    i = Ci();
                return Object(a.useMemo)((function() {
                    return e ? {
                        to: Object(He.a)(Object(He.a)({}, t), {}, {
                            search: Object(Oi.stringify)(Object(He.a)(Object(He.a)({}, n), {}, {
                                lng: e
                            }))
                        }),
                        onClick: function() {
                            l.a.event({
                                category: "Localization",
                                action: "Switch Locale",
                                label: "".concat(i, " -> ").concat(e)
                            })
                        }
                    } : {}
                }), [t, n, i, e])
            }
            var nc, ic, rc, oc;
            ! function(e) {
                e.LEFT = "LEFT", e.RIGHT = "RIGHT"
            }(oc || (oc = {}));
            var ac = Object(Ni.default)($a).withConfig({
                    componentId: "sc-12ipqmu-0"
                })(["path{stroke:", ";}"], (function(e) {
                    return e.theme.text1
                })),
                cc = Ni.default.button.withConfig({
                    componentId: "sc-12ipqmu-1"
                })(["width:100%;height:100%;border:none;background-color:transparent;margin:0;padding:0;height:38px;background-color:", ";border:1px solid ", ";padding:0.15rem 0.5rem;border-radius:12px;:hover,:focus{cursor:pointer;outline:none;border:1px solid ", ";}svg{margin-top:2px;}"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.bg3
                })),
                sc = Ni.default.div.withConfig({
                    componentId: "sc-12ipqmu-2"
                })(["margin-left:0.5rem;display:flex;justify-content:center;align-items:center;position:relative;border:none;text-align:left;"]),
                uc = Ni.default.span.withConfig({
                    componentId: "sc-12ipqmu-3"
                })(["min-width:196px;max-height:350px;overflow:auto;background-color:", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border:1px solid ", ";border-radius:12px;padding:0.5rem;display:flex;flex-direction:column;font-size:16px;position:absolute;top:3rem;z-index:100;", ";", ";"], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    var t = e.flyoutAlignment;
                    return (void 0 === t ? oc.RIGHT : t) === oc.RIGHT ? Object(Ni.css)(nc || (nc = Object(Si.a)(["\n          right: 0rem;\n        "]))) : Object(Ni.css)(ic || (ic = Object(Si.a)(["\n          left: 0rem;\n        "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(rc || (rc = Object(Si.a)(["\n    bottom: unset;\n    right: 0;\n    left: unset;\n  "])))
                })),
                dc = Object(Ni.default)(ro).withConfig({
                    componentId: "sc-12ipqmu-4"
                })(["display:flex;flex:1;flex-direction:row;align-items:center;padding:0.5rem 0.5rem;justify-content:space-between;color:", ";:hover{color:", ";cursor:pointer;text-decoration:none;}"], (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    return e.theme.text1
                })),
                lc = Object(Ni.default)(p.b).withConfig({
                    componentId: "sc-12ipqmu-5"
                })(["flex:1;padding:0.5rem 0.5rem;color:", ";:hover{color:", ";cursor:pointer;text-decoration:none;}> svg{margin-right:8px;}"], (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    return e.theme.text1
                })),
                bc = Object(Ni.default)(lc).withConfig({
                    componentId: "sc-12ipqmu-6"
                })(["display:flex;flex-direction:row;align-items:center;padding:0.5rem 0.5rem;justify-content:space-between;text-decoration:none;:hover{color:", ";cursor:pointer;text-decoration:none;}"], (function(e) {
                    return e.theme.text1
                })),
                pc = Ni.default.button.withConfig({
                    componentId: "sc-12ipqmu-7"
                })(["background-color:transparent;margin:0;padding:0;border:none;display:flex;flex:1;flex-direction:row;align-items:center;padding:0.5rem 0.5rem;justify-content:space-between;font-size:1rem;font-weight:500;color:", ";:hover{color:", ";cursor:pointer;text-decoration:none;}"], (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    return e.theme.text1
                }));

            function fc(e) {
                var t = e.locale,
                    n = e.active,
                    i = e.key,
                    r = tc(t),
                    o = r.to,
                    a = r.onClick;
                return o ? Object(je.jsxs)(bc, {
                    onClick: a,
                    to: o,
                    children: [Object(je.jsx)("div", {
                        children: Te[t]
                    }), n && Object(je.jsx)(Ya.a, {
                        opacity: .6,
                        size: 16
                    })]
                }, i) : null
            }

            function jc(e) {
                var t = e.close,
                    n = Ci();
                return Object(je.jsxs)(uc, {
                    children: [Object(je.jsx)(pc, {
                        onClick: t,
                        children: Object(je.jsx)(Va.a, {
                            size: 16
                        })
                    }), ke.map((function(e) {
                        return Object(je.jsx)(fc, {
                            locale: e,
                            active: n === e
                        }, e)
                    }))]
                })
            }

            function hc() {
                var e = fe(),
                    t = (e.account, e.chainId),
                    n = Object(a.useRef)(),
                    i = Jt(Wt.MENU),
                    o = Kt(Wt.MENU);
                ec(n, i ? o : void 0);
                Kt(Wt.ADDRESS_CLAIM);
                var c = I[t || r.MAINNET].infoLink,
                    s = di(),
                    u = Object(j.a)(s, 2),
                    d = (u[0], u[1], Object(a.useState)("main")),
                    l = Object(j.a)(d, 2),
                    b = l[0],
                    p = l[1];
                return Object(a.useEffect)((function() {
                    p("main")
                }), [i]), Object(je.jsxs)(sc, {
                    ref: n,
                    children: [Object(je.jsx)(cc, {
                        onClick: o,
                        children: Object(je.jsx)(ac, {})
                    }), i && function() {
                        switch (b) {
                            case "lang":
                                return Object(je.jsx)(jc, {
                                    close: function() {
                                        return p("main")
                                    }
                                });
                            case "main":
                            default:
                                return Object(je.jsxs)(uc, {
                                    children: [Object(je.jsxs)(dc, {
                                        href: "http://Www.scrappyinu.live/ ",
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(f.b, {
                                                id: "Home"
                                            })
                                        }), Object(je.jsx)(_a.a, {
                                            opacity: .6,
                                            size: 16
                                        })]
                                    }), Object(je.jsxs)(dc, {
                                        href: "https://twitter.com/scrappy_inu?s=21&t=ZlHpLkB9qCirKCCrQLhJsg ",
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(f.b, {
                                                id: "Twitter"
                                            })
                                        }), Object(je.jsx)(Ha.a, {
                                            opacity: .6,
                                            size: 16
                                        })]
                                    }), Object(je.jsxs)(dc, {
                                        href: "https://t.me/scrappyinu",
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(f.b, {
                                                id: "Telegram"
                                            })
                                        }), Object(je.jsx)(Qa.a, {
                                            opacity: .6,
                                            size: 16
                                        })]
                                    }), Object(je.jsxs)(dc, {
                                        href: c,
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(f.b, {
                                                id: "Analytics"
                                            })
                                        }), Object(je.jsx)(Ga.a, {
                                            opacity: .6,
                                            size: 16
                                        })]
                                    })]
                                })
                        }
                    }()]
                })
            }
            Object(Ni.default)(uc).withConfig({
                componentId: "sc-12ipqmu-8"
            })(["top:3rem !important;"]), Object(Ni.default)(lc).withConfig({
                componentId: "sc-12ipqmu-9"
            })(["width:max-content;text-decoration:none;"]), Object(Ni.default)(dc).withConfig({
                componentId: "sc-12ipqmu-10"
            })(["width:max-content;text-decoration:none;"]);
            var mc, xc, vc, Oc, gc, yc = n(86),
                wc = n(214),
                kc = n(303),
                Cc = ["minHeight", "maxHeight", "mobile", "isOpen"],
                Tc = Object(yc.a)(wc.b),
                Ic = Object(Ni.default)(Tc).withConfig({
                    componentId: "sc-jajvtp-0"
                })(["&[data-reach-dialog-overlay]{z-index:2;background-color:transparent;overflow:hidden;display:flex;align-items:center;justify-content:center;background-color:", ";}"], (function(e) {
                    return e.theme.modalBG
                })),
                Ac = Object(yc.a)(wc.a),
                Ec = Object(Ni.default)((function(e) {
                    e.minHeight, e.maxHeight, e.mobile, e.isOpen;
                    var t = Object(Rr.a)(e, Cc);
                    return Object(je.jsx)(Ac, Object(He.a)({}, t))
                })).attrs({
                    "aria-label": "dialog"
                }).withConfig({
                    componentId: "sc-jajvtp-1"
                })(["overflow-y:auto;&[data-reach-dialog-content]{margin:0 0 2rem 0;background-color:", ";border:1px solid ", ";box-shadow:0 4px 8px 0 ", ";padding:0px;width:50vw;overflow-y:auto;overflow-x:hidden;align-self:", ";max-width:420px;", " ", " display:flex;border-radius:20px;", " ", "}"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.c)(.95, t.shadow1)
                }), (function(e) {
                    return e.mobile ? "flex-end" : "center"
                }), (function(e) {
                    var t = e.maxHeight;
                    return t && Object(Ni.css)(mc || (mc = Object(Si.a)(["\n        max-height: ", "vh;\n      "])), t)
                }), (function(e) {
                    var t = e.minHeight;
                    return t && Object(Ni.css)(xc || (xc = Object(Si.a)(["\n        min-height: ", "vh;\n      "])), t)
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(vc || (vc = Object(Si.a)(["\n      width: 65vw;\n      margin: 0;\n    "])))
                }), (function(e) {
                    var t = e.theme,
                        n = e.mobile;
                    return t.mediaWidth.upToSmall(Oc || (Oc = Object(Si.a)(["\n      width:  85vw;\n      ", "\n    "])), n && Object(Ni.css)(gc || (gc = Object(Si.a)(["\n          width: 100vw;\n          border-radius: 20px;\n          border-bottom-left-radius: 0;\n          border-bottom-right-radius: 0;\n        "]))))
                }));

            function Sc(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    i = e.minHeight,
                    r = void 0 !== i && i,
                    o = e.maxHeight,
                    a = void 0 === o ? 90 : o,
                    c = e.initialFocusRef,
                    u = e.children,
                    d = Object(yc.c)(t, null, {
                        config: {
                            duration: 200
                        },
                        from: {
                            opacity: 0
                        },
                        enter: {
                            opacity: 1
                        },
                        leave: {
                            opacity: 0
                        }
                    }),
                    l = Object(yc.b)((function() {
                        return {
                            y: 0,
                            config: {
                                mass: 1,
                                tension: 210,
                                friction: 20
                            }
                        }
                    })),
                    b = Object(j.a)(l, 2),
                    p = b[0].y,
                    f = b[1],
                    h = Object(kc.a)({
                        onDrag: function(e) {
                            f({
                                y: e.down ? e.movement[1] : 0
                            }), (e.movement[1] > 300 || e.velocity > 3 && e.direction[1] > 0) && n()
                        }
                    });
                return Object(je.jsx)(je.Fragment, {
                    children: d.map((function(e) {
                        var t = e.item,
                            i = e.key,
                            o = e.props;
                        return t && Object(je.jsx)(Ic, {
                            style: o,
                            onDismiss: n,
                            initialFocusRef: c,
                            unstable_lockFocusAcrossFrames: !1,
                            children: Object(je.jsxs)(Ec, Object(He.a)(Object(He.a)({}, s.isMobile ? Object(He.a)(Object(He.a)({}, h()), {}, {
                                style: {
                                    transform: p.interpolate((function(e) {
                                        return "translateY(".concat(e > 0 ? e : 0, "px)")
                                    }))
                                }
                            }) : {}), {}, {
                                "aria-label": "dialog content",
                                minHeight: r,
                                maxHeight: a,
                                mobile: s.isMobile,
                                children: [!c && s.isMobile ? Object(je.jsx)("div", {
                                    tabIndex: 1
                                }) : null, u]
                            }))
                        }, i)
                    }))
                })
            }
            var Nc = n(662),
                Rc = n.p + "static/media/coinbase.svg",
                Uc = n.p + "static/media/walletConnectIcon.304e3277.svg",
                Bc = new J.Token(r.MAINNET, Ve[r.MAINNET], 0);
            var Mc = n(658);

            function Pc() {
                return Object(a.useContext)(Ni.ThemeContext)
            }
            var Lc = ["confirmed", "altDisabledStyle"],
                zc = ["error"],
                Dc = ["disabled", "children"],
                Wc = Object(Ni.default)(Wo.Button).withConfig({
                    componentId: "sc-fwrjc2-0"
                })(["padding:", ";width:", ";font-weight:500;text-align:center;border-radius:", ";outline:none;border:1px solid transparent;color:white;text-decoration:none;display:flex;justify-content:center;flex-wrap:nowrap;align-items:center;cursor:pointer;position:relative;z-index:1;&:disabled{cursor:auto;pointer-events:none;}will-change:transform;transition:transform 450ms ease;transform:perspective(1px) translateZ(0);> *{user-select:none;}> a{text-decoration:none;}"], (function(e) {
                    var t = e.padding;
                    return null !== t && void 0 !== t ? t : "16px"
                }), (function(e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function(e) {
                    var t = e.$borderRadius;
                    return null !== t && void 0 !== t ? t : "20px"
                })),
                qc = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-1"
                })(["background-color:", ";color:white;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:disabled{background-color:", ";color:", ";cursor:auto;box-shadow:none;border:1px solid transparent;outline:none;}"], (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.primary1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.primary1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.primary1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.primary1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.primary1)
                }), (function(e) {
                    var t = e.theme,
                        n = e.altDisabledStyle,
                        i = e.disabled;
                    return n && i ? t.primary1 : t.bg2
                }), (function(e) {
                    return e.theme.text2
                })),
                Fc = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-2"
                })(["background-color:", ";color:", ";font-size:16px;font-weight:500;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}:disabled{opacity:0.4;:hover{cursor:auto;background-color:", ";box-shadow:none;border:1px solid transparent;outline:none;}}"], (function(e) {
                    return e.theme.primary5
                }), (function(e) {
                    return e.theme.primaryText1
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.03, t.primary5)
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.03, t.primary5)
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.03, t.primary5)
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.05, t.primary5)
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.05, t.primary5)
                }), (function(e) {
                    return e.theme.primary5
                })),
                Yc = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-3"
                })(["background-color:", ";color:", ";font-size:16px;font-weight:500;&:hover{background-color:", ";}&:active{background-color:", ";}"], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.05, t.bg2)
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && Object(ea.a)(.1, t.bg2)
                })),
                Vc = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-4"
                })(["border:1px solid ", ";color:", ";background-color:transparent;font-size:16px;border-radius:12px;padding:", ";&:focus{box-shadow:0 0 0 1pt ", ";border:1px solid ", ";}&:hover{border:1px solid ", ";}&:active{box-shadow:0 0 0 1pt ", ";border:1px solid ", ";}&:disabled{opacity:50%;cursor:auto;}a:hover{text-decoration:none;}"], (function(e) {
                    return e.theme.primary4
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var t = e.padding;
                    return t || "10px"
                }), (function(e) {
                    return e.theme.primary4
                }), (function(e) {
                    return e.theme.primary3
                }), (function(e) {
                    return e.theme.primary3
                }), (function(e) {
                    return e.theme.primary4
                }), (function(e) {
                    return e.theme.primary3
                })),
                _c = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-5"
                })(["border:1px solid ", ";background-color:transparent;color:", ";&:focus{box-shadow:0 0 0 1px ", ";}&:hover{box-shadow:0 0 0 1px ", ";}&:active{box-shadow:0 0 0 1px ", ";}&:disabled{opacity:50%;cursor:auto;}"], (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.bg4
                })),
                Hc = (Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-6"
                })(["background-color:", ";color:white;&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:disabled{background-color:", ";opacity:50%;cursor:auto;}"], (function(e) {
                    return e.theme.yellow3
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.yellow3)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.yellow3)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.yellow3)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.yellow3)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.yellow3)
                }), (function(e) {
                    return e.theme.yellow3
                })), Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-7"
                })(["background-color:transparent;color:", ";display:flex;justify-content:center;align-items:center;&:focus{text-decoration:underline;}&:hover{text-decoration:none;}&:active{text-decoration:none;}&:disabled{opacity:50%;cursor:auto;}"], (function(e) {
                    return e.theme.primary1
                }))),
                Qc = (Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-8"
                })(["padding:0;width:fit-content;background:none;text-decoration:none;&:focus{text-decoration:underline;}&:hover{opacity:0.9;}&:active{text-decoration:underline;}&:disabled{opacity:50%;cursor:auto;}"]), Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-9"
                })(["background-color:", ";color:", ";&:disabled{background-color:", ";color:", ";cursor:auto;}"], (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text2
                }))),
                Gc = Object(Ni.default)(Wc).withConfig({
                    componentId: "sc-fwrjc2-10"
                })(["background-color:", ";border:1px solid ", ";&:focus{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:hover{background-color:", ";}&:active{box-shadow:0 0 0 1pt ", ";background-color:", ";}&:disabled{opacity:50%;cursor:auto;box-shadow:none;background-color:", ";border:1px solid ", ";}"], (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.red1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.red1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.red1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.red1)
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.red1)
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }));

            function Jc(e) {
                var t = e.confirmed,
                    n = e.altDisabledStyle,
                    i = Object(Rr.a)(e, Lc);
                return t ? Object(je.jsx)(Qc, Object(He.a)({}, i)) : Object(je.jsx)(qc, Object(He.a)(Object(He.a)({}, i), {}, {
                    altDisabledStyle: n
                }))
            }

            function Kc(e) {
                var t = e.error,
                    n = Object(Rr.a)(e, zc);
                return t ? Object(je.jsx)(Gc, Object(He.a)({}, n)) : Object(je.jsx)(qc, Object(He.a)({}, n))
            }

            function Xc(e) {
                var t = e.disabled,
                    n = void 0 !== t && t,
                    i = e.children,
                    r = Object(Rr.a)(e, Dc);
                return Object(je.jsx)(_c, Object(He.a)(Object(He.a)({}, r), {}, {
                    disabled: n,
                    children: Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: i
                        }), Object(je.jsx)(Mc.a, {
                            size: 24
                        })]
                    })
                }))
            }
            Object(Ni.default)(_c).withConfig({
                componentId: "sc-fwrjc2-11"
            })(["border:1px solid;border-color:", ";"], (function(e) {
                return e.theme.primary1
            })), Ni.default.div.withConfig({
                componentId: "sc-fwrjc2-12"
            })(["height:20px;width:20px;border-radius:50%;background-color:", ";display:flex;align-items:center;justify-content:center;"], (function(e) {
                return e.theme.primary1
            })), Ni.default.div.withConfig({
                componentId: "sc-fwrjc2-13"
            })(["width:30px;padding:0 10px;position:absolute;top:10px;right:10px;"]), Object(Ni.default)(Ya.a).withConfig({
                componentId: "sc-fwrjc2-14"
            })(["size:13px;"]);
            var Zc = n(304),
                $c = n.n(Zc),
                es = Ni.default.div.withConfig({
                    componentId: "sc-z4caw7-0"
                })(["height:1rem;width:1rem;border-radius:1.125rem;background-color:", ";"], (function(e) {
                    return e.theme.bg4
                }));

            function ts() {
                var e = Object(a.useRef)(),
                    t = fe().account;
                return Object(a.useEffect)((function() {
                    t && e.current && (e.current.innerHTML = "", e.current.appendChild($c()(16, parseInt(t.slice(2, 10), 16))))
                }), [t]), Object(je.jsx)(es, {
                    ref: e
                })
            }
            var ns, is = ["size", "stroke"],
                rs = Object(Ni.keyframes)(ns || (ns = Object(Si.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                os = Ni.default.svg.withConfig({
                    componentId: "sc-x3cipg-0"
                })(["animation:2s ", " linear infinite;height:", ";width:", ";path{stroke:", ";}"], rs, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var t = e.stroke,
                        n = e.theme;
                    return null !== t && void 0 !== t ? t : n.primary1
                }));

            function as(e) {
                var t = e.size,
                    n = void 0 === t ? "16px" : t,
                    i = e.stroke,
                    r = Object(Rr.a)(e, is);
                return Object(je.jsx)(os, Object(He.a)(Object(He.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: n,
                    stroke: i
                }, r), {}, {
                    children: Object(je.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }
            var cs, ss, us = n.p + "static/media/metamask.svg",
                ds = ["title", "titleId"];

            function ls() {
                return (ls = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function bs(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function ps(e, t) {
                var n = e.title,
                    i = e.titleId,
                    r = bs(e, ds);
                return a.createElement("svg", ls({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: 20,
                    height: 20,
                    viewBox: "0 0 20 20",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: 2,
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "feather feather-x",
                    ref: t,
                    "aria-labelledby": i
                }, r), n ? a.createElement("title", {
                    id: i
                }, n) : null, cs || (cs = a.createElement("line", {
                    x1: 18,
                    y1: 6,
                    x2: 6,
                    y2: 18
                })), ss || (ss = a.createElement("line", {
                    x1: 6,
                    y1: 6,
                    x2: 18,
                    y2: 18
                })))
            }
            var fs, js = a.forwardRef(ps),
                hs = (n.p, n.p + "static/media/arrow-right.956d575c.svg"),
                ms = {
                    INJECTED: {
                        connector: _,
                        name: "Injected",
                        iconURL: hs,
                        description: "Injected web3 provider.",
                        href: null,
                        color: "#010101",
                        primary: !0
                    },
                    METAMASK: {
                        connector: _,
                        name: "MetaMask",
                        iconURL: us,
                        description: "Easy-to-use browser extension.",
                        href: null,
                        color: "#E8831D"
                    },
                    WALLET_CONNECT: {
                        connector: Q,
                        name: "WalletConnect",
                        iconURL: Uc,
                        description: "Connect to Trust Wallet, Rainbow Wallet and more...",
                        href: null,
                        color: "#4196FC",
                        mobile: !0
                    },
                    WALLET_LINK: {
                        connector: G,
                        name: "Coinbase Wallet",
                        iconURL: Rc,
                        description: "Use Coinbase Wallet app on mobile device",
                        href: null,
                        color: "#315CF5"
                    }
                };

            function xs(e) {
                var t = Object(a.useRef)();
                return Object(a.useEffect)((function() {
                    t.current = e
                }), [e]), t.current
            }
            var vs, Os = (fs = {}, Object(m.a)(fs, r.MAINNET, ""), Object(m.a)(fs, r.TESTNET, "testnet."), fs);

            function gs(e, t, n) {
                var i, r = "https://".concat(null !== (i = Os[e]) && void 0 !== i ? i : "", "bscscan.com");
                switch (n) {
                    case vs.TRANSACTION:
                        return "".concat(r, "/tx/").concat(t);
                    case vs.TOKEN:
                        return "".concat(r, "/token/").concat(t);
                    case vs.BLOCK:
                        return "".concat(r, "/block/").concat(t);
                    case vs.ADDRESS:
                        return "".concat(r, "/address/").concat(t);
                    default:
                        return "".concat(r)
                }
            }! function(e) {
                e.TRANSACTION = "transaction", e.TOKEN = "token", e.ADDRESS = "address", e.BLOCK = "block"
            }(vs || (vs = {}));
            var ys = n(237),
                ws = n.n(ys);
            var ks = n(659),
                Cs = n(660),
                Ts = Object(Ni.default)(Jr).withConfig({
                    componentId: "sc-jaq3xr-0"
                })(["color:", ";flex-shrink:0;display:flex;text-decoration:none;font-size:0.825rem;:hover,:active,:focus{text-decoration:none;color:", ";}"], (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.text2
                })),
                Is = Ni.default.span.withConfig({
                    componentId: "sc-jaq3xr-1"
                })(["margin-left:0.25rem;font-size:0.825rem;", ";align-items:center;"], (function(e) {
                    return e.theme.flexRowNoWrap
                }));

            function As(e) {
                var t = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 500,
                            t = Object(a.useState)(!1),
                            n = Object(j.a)(t, 2),
                            i = n[0],
                            r = n[1],
                            o = Object(a.useCallback)((function(e) {
                                var t = ws()(e);
                                r(t)
                            }), []);
                        return Object(a.useEffect)((function() {
                            if (i) {
                                var t = setTimeout((function() {
                                    r(!1)
                                }), e);
                                return function() {
                                    clearTimeout(t)
                                }
                            }
                        }), [i, r, e]), [i, o]
                    }(),
                    n = Object(j.a)(t, 2),
                    i = n[0],
                    r = n[1];
                return Object(je.jsxs)(Ts, {
                    onClick: function() {
                        return r(e.toCopy)
                    },
                    children: [i ? Object(je.jsxs)(Is, {
                        children: [Object(je.jsx)(ks.a, {
                            size: "16"
                        }), Object(je.jsx)(Is, {
                            children: Object(je.jsx)(f.b, {
                                id: "Copied"
                            })
                        })]
                    }) : Object(je.jsx)(Is, {
                        children: Object(je.jsx)(Cs.a, {
                            size: "16"
                        })
                    }), i ? "" : e.children]
                })
            }
            var Es, Ss, Ns, Rs = n(661),
                Us = Ni.default.div.withConfig({
                    componentId: "sc-1epcs64-0"
                })([""]),
                Bs = Ni.default.div.withConfig({
                    componentId: "sc-1epcs64-1"
                })(["margin-right:0.5rem;display:flex;align-items:center;:hover{text-decoration:underline;}"]),
                Ms = Object(Ni.default)(ro).withConfig({
                    componentId: "sc-1epcs64-2"
                })(["display:flex;justify-content:space-between;align-items:center;text-decoration:none !important;border-radius:0.5rem;padding:0.25rem 0rem;font-weight:500;font-size:0.825rem;color:", ";"], (function(e) {
                    return e.theme.primary1
                })),
                Ps = Ni.default.div.withConfig({
                    componentId: "sc-1epcs64-3"
                })(["color:", ";"], (function(e) {
                    var t = e.pending,
                        n = e.success,
                        i = e.theme;
                    return t ? i.primary1 : n ? i.green1 : i.red1
                }));

            function Ls(e) {
                var t, n, i = e.hash,
                    r = fe().chainId,
                    o = na(),
                    a = null === o || void 0 === o ? void 0 : o[i],
                    c = null === a || void 0 === a ? void 0 : a.summary,
                    s = !(null === a || void 0 === a ? void 0 : a.receipt),
                    u = !s && a && (1 === (null === (t = a.receipt) || void 0 === t ? void 0 : t.status) || "undefined" === typeof(null === (n = a.receipt) || void 0 === n ? void 0 : n.status));
                return r ? Object(je.jsx)(Us, {
                    children: Object(je.jsxs)(Ms, {
                        href: gs(r, i, vs.TRANSACTION),
                        pending: s,
                        success: u,
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsxs)(Bs, {
                                children: [null !== c && void 0 !== c ? c : i, " \u2197"]
                            })
                        }), Object(je.jsx)(Ps, {
                            pending: s,
                            success: u,
                            children: s ? Object(je.jsx)(as, {}) : u ? Object(je.jsx)(ks.a, {
                                size: "16"
                            }) : Object(je.jsx)(Rs.a, {
                                size: "16"
                            })
                        })]
                    })
                }) : null
            }
            var zs, Ds = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-0"
                })(["", ";padding:1rem 1rem;font-weight:500;color:", ";", ";"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : "inherit"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Es || (Es = Object(Si.a)(["\n    padding: 1rem;\n  "])))
                })),
                Ws = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-1"
                })(["position:relative;h5{margin:0;margin-bottom:0.5rem;font-size:1rem;font-weight:400;}h5:last-child{margin-bottom:0px;}h4{margin-top:0;font-weight:500;}"]),
                qs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-2"
                })(["padding:1rem;border:1px solid ", ";border-radius:20px;position:relative;display:grid;grid-row-gap:12px;margin-bottom:20px;"], (function(e) {
                    return e.theme.bg3
                })),
                Fs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-3"
                })(["", ";justify-content:space-between;align-items:center;font-weight:400;color:", ";div{", " align-items:center;}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                Ys = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-4"
                })(["padding:0rem 1rem;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToMedium(Ss || (Ss = Object(Si.a)(["padding: 0rem 1rem 1.5rem 1rem;"])))
                })),
                Vs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-5"
                })(["h5{margin:0 0 1rem 0;font-weight:400;}h4{margin:0;font-weight:500;}"]),
                _s = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-6"
                })(["", " padding:1.5rem;flex-grow:1;overflow:auto;background-color:", ";border-bottom-left-radius:20px;border-bottom-right-radius:20px;h5{margin:0;font-weight:400;color:", ";}"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text3
                })),
                Hs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-7"
                })(["display:flex;justify-content:space-between;min-width:0;width:100%;font-weight:500;font-size:1.25rem;a:hover{text-decoration:underline;}p{min-width:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}"]),
                Qs = Object(Ni.default)(ro).withConfig({
                    componentId: "sc-1ir7xlr-8"
                })(["font-size:0.825rem;color:", ";margin-left:1rem;font-size:0.825rem;display:flex;:hover{color:", ";}"], (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.text2
                })),
                Gs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-9"
                })(["position:absolute;right:1rem;top:14px;&:hover{cursor:pointer;opacity:0.6;}"]),
                Js = Object(Ni.default)(js).withConfig({
                    componentId: "sc-1ir7xlr-10"
                })(["path{stroke:", ";}"], (function(e) {
                    return e.theme.text4
                })),
                Ks = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-11"
                })(["width:initial;font-size:0.825rem;font-weight:500;color:", ";"], (function(e) {
                    return e.theme.text3
                })),
                Xs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-12"
                })(["", ";align-items:center;justify-content:center;margin-right:8px;& > img,span{height:", ";width:", ";}", ";"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Ns || (Ns = Object(Si.a)(["\n    align-items: flex-end;\n  "])))
                })),
                Zs = Ni.default.div.withConfig({
                    componentId: "sc-1ir7xlr-13"
                })(["", ";"], (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                $s = Object(Ni.default)(Vc).withConfig({
                    componentId: "sc-1ir7xlr-14"
                })(["width:fit-content;font-weight:400;margin-left:8px;font-size:0.825rem;padding:4px 6px;:hover{cursor:pointer;text-decoration:underline;}"]);

            function eu(e) {
                return Object(je.jsx)(Zs, {
                    children: e.map((function(e, t) {
                        return Object(je.jsx)(Ls, {
                            hash: e
                        }, t)
                    }))
                })
            }

            function tu(e) {
                var t = e.toggleWalletModal,
                    n = e.pendingTransactions,
                    i = e.confirmedTransactions,
                    r = e.ENSName,
                    o = e.openOptions,
                    c = fe(),
                    s = c.chainId,
                    u = c.account,
                    d = c.connector,
                    l = Object(a.useContext)(Ni.ThemeContext),
                    b = Se();

                function p() {
                    return d === _ ? Object(je.jsx)(Xs, {
                        size: 16,
                        children: Object(je.jsx)(ts, {})
                    }) : d === Q ? Object(je.jsx)(Xs, {
                        size: 16,
                        children: Object(je.jsx)("img", {
                            src: Uc,
                            alt: "WalletConnect logo"
                        })
                    }) : d === G ? Object(je.jsx)(Xs, {
                        size: 16,
                        children: Object(je.jsx)("img", {
                            src: Rc,
                            alt: "Coinbase Wallet logo"
                        })
                    }) : null
                }
                var j = Object(a.useCallback)((function() {
                    s && b(Yi({
                        chainId: s
                    }))
                }), [b, s]);
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(Ws, {
                        children: [Object(je.jsx)(Gs, {
                            onClick: t,
                            children: Object(je.jsx)(Js, {})
                        }), Object(je.jsx)(Ds, {
                            children: Object(je.jsx)(f.b, {
                                id: "Account"
                            })
                        }), Object(je.jsx)(Ys, {
                            children: Object(je.jsx)(Vs, {
                                children: Object(je.jsxs)(qs, {
                                    children: [Object(je.jsxs)(Fs, {
                                        children: [function() {
                                            var e = window.ethereum,
                                                t = !(!e || !e.isMetaMask),
                                                n = Object.keys(ms).filter((function(e) {
                                                    return ms[e].connector === d && (d !== _ || t === ("METAMASK" === e))
                                                })).map((function(e) {
                                                    return ms[e].name
                                                }))[0];
                                            return Object(je.jsx)(Ks, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Connected with {name}",
                                                    values: {
                                                        name: n
                                                    }
                                                })
                                            })
                                        }(), Object(je.jsxs)("div", {
                                            children: [d !== _ && d !== G && Object(je.jsx)($s, {
                                                style: {
                                                    fontSize: ".825rem",
                                                    fontWeight: 400,
                                                    marginRight: "8px"
                                                },
                                                onClick: function() {
                                                    d.close()
                                                },
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Disconnect"
                                                })
                                            }), Object(je.jsx)($s, {
                                                style: {
                                                    fontSize: ".825rem",
                                                    fontWeight: 400
                                                },
                                                onClick: function() {
                                                    o()
                                                },
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Change"
                                                })
                                            })]
                                        })]
                                    }), Object(je.jsx)(Fs, {
                                        id: "web3-account-identifier-row",
                                        children: Object(je.jsx)(Hs, {
                                            children: r ? Object(je.jsx)(je.Fragment, {
                                                children: Object(je.jsxs)("div", {
                                                    children: [p(), Object(je.jsxs)("p", {
                                                        children: [" ", r]
                                                    })]
                                                })
                                            }) : Object(je.jsx)(je.Fragment, {
                                                children: Object(je.jsxs)("div", {
                                                    children: [p(), Object(je.jsxs)("p", {
                                                        children: [" ", u && vt(u)]
                                                    })]
                                                })
                                            })
                                        })
                                    }), Object(je.jsx)(Fs, {
                                        children: r ? Object(je.jsx)(je.Fragment, {
                                            children: Object(je.jsx)(Hs, {
                                                children: Object(je.jsxs)("div", {
                                                    children: [u && Object(je.jsx)(As, {
                                                        toCopy: u,
                                                        children: Object(je.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: Object(je.jsx)(f.b, {
                                                                id: "Copy Address"
                                                            })
                                                        })
                                                    }), s && u && Object(je.jsxs)(Qs, {
                                                        hasENS: !!r,
                                                        isENS: !0,
                                                        href: gs(s, r, vs.ADDRESS),
                                                        children: [Object(je.jsx)(Mr.a, {
                                                            size: 16
                                                        }), Object(je.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: Object(je.jsx)(f.b, {
                                                                id: "View on Explorer"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        }) : Object(je.jsx)(je.Fragment, {
                                            children: Object(je.jsx)(Hs, {
                                                children: Object(je.jsxs)("div", {
                                                    children: [u && Object(je.jsx)(As, {
                                                        toCopy: u,
                                                        children: Object(je.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: Object(je.jsx)(f.b, {
                                                                id: "Copy Address"
                                                            })
                                                        })
                                                    }), s && u && Object(je.jsxs)(Qs, {
                                                        hasENS: !!r,
                                                        isENS: !1,
                                                        href: gs(s, u, vs.ADDRESS),
                                                        children: [Object(je.jsx)(Mr.a, {
                                                            size: 16
                                                        }), Object(je.jsx)("span", {
                                                            style: {
                                                                marginLeft: "4px"
                                                            },
                                                            children: Object(je.jsx)(f.b, {
                                                                id: "View on Explorer"
                                                            })
                                                        })]
                                                    })]
                                                })
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    }), n.length || i.length ? Object(je.jsxs)(_s, {
                        children: [Object(je.jsxs)(Vo, {
                            mb: "1rem",
                            style: {
                                justifyContent: "space-between"
                            },
                            children: [Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Recent Transactions"
                                })
                            }), Object(je.jsx)(Jr, {
                                onClick: j,
                                children: Object(je.jsx)(f.b, {
                                    id: "(clear all)"
                                })
                            })]
                        }), eu(n), eu(i)]
                    }) : Object(je.jsx)(_s, {
                        children: Object(je.jsx)(Co, {
                            color: l.text1,
                            children: Object(je.jsx)(f.b, {
                                id: "Your transactions will appear here..."
                            })
                        })
                    })]
                })
            }
            var nu = Ni.default.button.withConfig({
                    componentId: "sc-us24id-0"
                })(["background-color:", ";padding:1rem;outline:none;border:1px solid;border-radius:12px;width:100% !important;&:focus{box-shadow:0 0 0 1px ", ";}border-color:", ";"], (function(e) {
                    var t = e.theme;
                    return e.active ? t.bg3 : t.bg2
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    var t = e.theme;
                    return e.active ? "transparent" : t.bg3
                })),
                iu = Object(Ni.default)(nu).withConfig({
                    componentId: "sc-us24id-1"
                })(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:2rem;padding:1rem;"]),
                ru = Ni.default.div.withConfig({
                    componentId: "sc-us24id-2"
                })(["", ";justify-content:center;height:100%;"], (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                ou = Object(Ni.default)(iu).withConfig({
                    componentId: "sc-us24id-3"
                })(["margin-top:0;&:hover{cursor:", ";border:", ";}opacity:", ";"], (function(e) {
                    return e.clickable ? "pointer" : ""
                }), (function(e) {
                    var t = e.clickable,
                        n = e.theme;
                    return t ? "1px solid ".concat(n.primary1) : ""
                }), (function(e) {
                    return e.disabled ? "0.5" : "1"
                })),
                au = Ni.default.div.withConfig({
                    componentId: "sc-us24id-4"
                })(["", " justify-content:center;align-items:center;&:first-child{height:8px;width:8px;margin-right:8px;background-color:", ";border-radius:50%;}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.green1
                })),
                cu = Ni.default.div.withConfig({
                    componentId: "sc-us24id-5"
                })(["color:", ";display:flex;justify-content:center;align-items:center;"], (function(e) {
                    return e.theme.green1
                })),
                su = Ni.default.div.withConfig({
                    componentId: "sc-us24id-6"
                })(["", ";color:", ";font-size:1rem;font-weight:500;"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : function(e) {
                        return e.theme.text1
                    }
                })),
                uu = Ni.default.div.withConfig({
                    componentId: "sc-us24id-7"
                })(["color:", ";margin-top:10px;font-size:12px;"], (function(e) {
                    return e.theme.text1
                })),
                du = Ni.default.div.withConfig({
                    componentId: "sc-us24id-8"
                })(["", ";align-items:center;justify-content:center;& > img,span{height:", ";width:", ";}", ";"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "24px"
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "24px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(zs || (zs = Object(Si.a)(["\n    align-items: flex-end;\n  "])))
                }));

            function lu(e) {
                var t = e.link,
                    n = void 0 === t ? null : t,
                    i = e.clickable,
                    r = void 0 === i || i,
                    o = e.size,
                    a = e.onClick,
                    c = void 0 === a ? null : a,
                    s = e.color,
                    u = e.header,
                    d = e.subheader,
                    l = void 0 === d ? null : d,
                    b = e.icon,
                    p = e.active,
                    f = void 0 !== p && p,
                    j = e.id,
                    h = Object(je.jsxs)(ou, {
                        id: j,
                        onClick: c,
                        clickable: r && !f,
                        active: f,
                        children: [Object(je.jsxs)(ru, {
                            children: [Object(je.jsxs)(su, {
                                color: s,
                                children: [f ? Object(je.jsx)(cu, {
                                    children: Object(je.jsx)(au, {
                                        children: Object(je.jsx)("div", {})
                                    })
                                }) : "", u]
                            }), l && Object(je.jsx)(uu, {
                                children: l
                            })]
                        }), Object(je.jsx)(du, {
                            size: o,
                            children: Object(je.jsx)("img", {
                                src: b,
                                alt: "Icon"
                            })
                        })]
                    });
                return n ? Object(je.jsx)(ro, {
                    href: n,
                    children: h
                }) : h
            }
            var bu = Ni.default.div.withConfig({
                    componentId: "sc-14xbiak-0"
                })(["", ";align-items:center;justify-content:center;width:100%;& > *{width:100%;}"], (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                pu = Object(Ni.default)(as).withConfig({
                    componentId: "sc-14xbiak-1"
                })(["margin-right:1rem;"]),
                fu = Ni.default.div.withConfig({
                    componentId: "sc-14xbiak-2"
                })(["", ";align-items:center;justify-content:flex-start;border-radius:12px;margin-bottom:20px;color:", ";border:1px solid ", ";& > *{padding:1rem;}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    var t = e.theme;
                    return e.error ? t.red1 : "inherit"
                }), (function(e) {
                    var t = e.theme;
                    return e.error ? t.red1 : t.text4
                })),
                ju = Ni.default.div.withConfig({
                    componentId: "sc-14xbiak-3"
                })(["", ";align-items:center;justify-content:flex-start;"], (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                hu = Ni.default.div.withConfig({
                    componentId: "sc-14xbiak-4"
                })(["border-radius:8px;font-size:12px;color:", ";background-color:", ";margin-left:1rem;padding:0.5rem;font-weight:600;user-select:none;&:hover{cursor:pointer;background-color:", ";}"], (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.text4)
                })),
                mu = Ni.default.div.withConfig({
                    componentId: "sc-14xbiak-5"
                })(["", ";align-items:center;justify-content:center;"], (function(e) {
                    return e.theme.flexRowNoWrap
                }));

            function xu(e) {
                var t, n, i = e.connector,
                    r = e.error,
                    o = void 0 !== r && r,
                    a = e.setPendingError,
                    c = e.tryActivation,
                    s = null === (t = window) || void 0 === t || null === (n = t.ethereum) || void 0 === n ? void 0 : n.isMetaMask;
                return Object(je.jsxs)(bu, {
                    children: [Object(je.jsx)(fu, {
                        error: o,
                        children: Object(je.jsx)(mu, {
                            children: o ? Object(je.jsxs)(ju, {
                                children: [Object(je.jsx)("div", {
                                    children: Object(je.jsx)(f.b, {
                                        id: "Error connecting"
                                    })
                                }), Object(je.jsx)(hu, {
                                    onClick: function() {
                                        a(!1), i && c(i)
                                    },
                                    children: Object(je.jsx)(f.b, {
                                        id: "Try Again"
                                    })
                                })]
                            }) : Object(je.jsxs)(je.Fragment, {
                                children: [Object(je.jsx)(pu, {}), Object(je.jsx)(f.b, {
                                    id: "Initializing..."
                                })]
                            })
                        })
                    }), Object.keys(ms).map((function(e) {
                        var t = ms[e];
                        if (t.connector === i) {
                            if (t.connector === _) {
                                if (s && "MetaMask" !== t.name) return null;
                                if (!s && "MetaMask" === t.name) return null
                            }
                            return Object(je.jsx)(lu, {
                                id: "connect-".concat(e),
                                clickable: !1,
                                color: t.color,
                                header: t.name,
                                subheader: t.description,
                                icon: t.iconURL
                            }, e)
                        }
                        return null
                    }))]
                })
            }
            var vu, Ou, gu, yu, wu = Object(Ni.default)(Wo.Box).withConfig({
                    componentId: "sc-57i8km-0"
                })(["width:", ";padding:", ";border-radius:", ";border:", ";"], (function(e) {
                    var t = e.width;
                    return null !== t && void 0 !== t ? t : "100%"
                }), (function(e) {
                    var t = e.padding;
                    return null !== t && void 0 !== t ? t : "1rem"
                }), (function(e) {
                    var t = e.$borderRadius;
                    return null !== t && void 0 !== t ? t : "16px"
                }), (function(e) {
                    return e.border
                })),
                ku = wu,
                Cu = Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-1"
                })(["border:1px solid ", ";background-color:", ";"], (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg1
                })),
                Tu = Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-2"
                })(["background-color:", ";"], (function(e) {
                    return e.theme.bg2
                })),
                Iu = Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-3"
                })(["background-color:", ";"], (function(e) {
                    return e.theme.bg3
                })),
                Au = (Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-4"
                })(["background-color:", ";"], (function(e) {
                    return e.theme.bg2
                })), Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-5"
                })(["background-color:", ";"], (function(e) {
                    return e.theme.bg0
                })), Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-6"
                })(["border:1px solid ", ";"], (function(e) {
                    return e.theme.bg3
                }))),
                Eu = Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-7"
                })(["background-color:rgba(243,132,30,0.05);color:", ";font-weight:500;"], (function(e) {
                    return e.theme.yellow3
                })),
                Su = Object(Ni.default)(wu).withConfig({
                    componentId: "sc-57i8km-8"
                })(["background-color:", ";color:", ";border-radius:12px;"], (function(e) {
                    return e.theme.primary5
                }), (function(e) {
                    return e.theme.blue2
                })),
                Nu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-0"
                })(["position:absolute;right:1rem;top:14px;&:hover{cursor:pointer;opacity:0.6;}"]),
                Ru = Object(Ni.default)(js).withConfig({
                    componentId: "sc-1hmbv05-1"
                })(["path{stroke:", ";}"], (function(e) {
                    return e.theme.text4
                })),
                Uu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-2"
                })(["", " margin:0;padding:0;width:100%;"], (function(e) {
                    return e.theme.flexColumnNoWrap
                })),
                Bu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-3"
                })(["", ";padding:1rem 1rem;font-weight:500;color:", ";", ";"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return "blue" === e.color ? function(e) {
                        return e.theme.primary1
                    } : "inherit"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(vu || (vu = Object(Si.a)(["\n    padding: 1rem;\n  "])))
                })),
                Mu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-4"
                })(["background-color:", ";padding:0 1rem 1rem 1rem;border-bottom-left-radius:20px;border-bottom-right-radius:20px;", ";"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Ou || (Ou = Object(Si.a)(["padding: 0 1rem 1rem 1rem"])))
                })),
                Pu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-5"
                })(["position:relative;h5{margin:0;margin-bottom:0.5rem;font-size:1rem;font-weight:400;}h5:last-child{margin-bottom:0px;}h4{margin-top:0;font-weight:500;}"]),
                Lu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-6"
                })(["display:grid;grid-gap:10px;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToMedium(gu || (gu = Object(Si.a)(["\n    grid-template-columns: 1fr;\n    grid-gap: 10px;\n  "])))
                })),
                zu = Ni.default.div.withConfig({
                    componentId: "sc-1hmbv05-7"
                })(["text-decoration:none;color:", ";display:flex;align-items:center;:hover{cursor:pointer;}"], (function(e) {
                    return e.theme.text1
                })),
                Du = "options",
                Wu = "account",
                qu = "pending";

            function Fu(e) {
                var t = e.pendingTransactions,
                    n = e.confirmedTransactions,
                    i = e.ENSName,
                    r = Object(o.useWeb3React)(),
                    c = r.active,
                    u = r.account,
                    d = r.connector,
                    b = r.activate,
                    p = r.error,
                    h = Object(a.useState)(Wu),
                    m = Object(j.a)(h, 2),
                    x = m[0],
                    v = m[1],
                    g = Object(a.useState)(),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1],
                    C = Object(a.useState)(),
                    T = Object(j.a)(C, 2),
                    I = T[0],
                    A = T[1],
                    E = Jt(Wt.WALLET),
                    N = Xt(),
                    U = xs(u);
                Object(a.useEffect)((function() {
                    u && !U && E && N()
                }), [u, U, N, E]), Object(a.useEffect)((function() {
                    E && (A(!1), v(Wu))
                }), [E]);
                var B = xs(c),
                    M = xs(d);
                Object(a.useEffect)((function() {
                    E && (c && !B || d && d !== M && !p) && v(Wu)
                }), [v, c, p, d, E, B, M]);
                var P = function() {
                    var e = Object(R.a)(S.a.mark((function e(t) {
                        var n, i, r;
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = "", Object.keys(ms).map((function(e) {
                                        return t !== ms[e].connector || (r = ms[e].name)
                                    })), l.a.event({
                                        category: "Wallet",
                                        action: "Change Wallet",
                                        label: r
                                    }), k(t), v(qu), t instanceof O.a && (null === (n = t.walletConnectProvider) || void 0 === n || null === (i = n.wc) || void 0 === i ? void 0 : i.uri) && (t.walletConnectProvider = void 0), t && b(t, void 0, !0).catch((function(e) {
                                        e instanceof o.UnsupportedChainIdError ? b(t) : A(!0)
                                    }));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();

                function L() {
                    var e = window.ethereum && window.ethereum.isMetaMask;
                    return Object.keys(ms).map((function(t) {
                        var n = ms[t];
                        if (s.isMobile) return window.web3 || window.ethereum || !n.mobile ? null : Object(je.jsx)(lu, {
                            onClick: function() {
                                n.connector !== d && !n.href && P(n.connector)
                            },
                            id: "connect-".concat(t),
                            active: n.connector && n.connector === d,
                            color: n.color,
                            link: n.href,
                            header: n.name,
                            subheader: null,
                            icon: n.iconURL
                        }, t);
                        if (n.connector === _) {
                            if (!window.web3 && !window.ethereum) return "MetaMask" === n.name ? Object(je.jsx)(lu, {
                                id: "connect-".concat(t),
                                color: "#E8831D",
                                header: Object(je.jsx)(f.b, {
                                    id: "Install Metamask"
                                }),
                                subheader: null,
                                link: "https://metamask.io/",
                                icon: us
                            }, t) : null;
                            if ("MetaMask" === n.name && !e) return null;
                            if ("Injected" === n.name && e) return null
                        }
                        return !s.isMobile && !n.mobileOnly && Object(je.jsx)(lu, {
                            id: "connect-".concat(t),
                            onClick: function() {
                                n.connector === d ? v(Wu) : !n.href && P(n.connector)
                            },
                            active: n.connector === d,
                            color: n.color,
                            link: n.href,
                            header: n.name,
                            subheader: null,
                            icon: n.iconURL
                        }, t)
                    }))
                }
                return Object(je.jsx)(Sc, {
                    isOpen: E,
                    onDismiss: N,
                    minHeight: !1,
                    maxHeight: 90,
                    children: Object(je.jsx)(Uu, {
                        children: p ? Object(je.jsxs)(Pu, {
                            children: [Object(je.jsx)(Nu, {
                                onClick: N,
                                children: Object(je.jsx)(Ru, {})
                            }), Object(je.jsx)(Bu, {
                                children: p instanceof o.UnsupportedChainIdError ? Object(je.jsx)(f.b, {
                                    id: "Wrong Network"
                                }) : Object(je.jsx)(f.b, {
                                    id: "Error connecting"
                                })
                            }), Object(je.jsx)(Mu, {
                                children: p instanceof o.UnsupportedChainIdError ? Object(je.jsx)("h5", {
                                    children: Object(je.jsx)(f.b, {
                                        id: "Please connect to the appropriate Binance Smart Chain network."
                                    })
                                }) : Object(je.jsx)(f.b, {
                                    id: "Error connecting. Try refreshing the page."
                                })
                            })]
                        }) : u && x === Wu ? Object(je.jsx)(tu, {
                            toggleWalletModal: N,
                            pendingTransactions: t,
                            confirmedTransactions: n,
                            ENSName: i,
                            openOptions: function() {
                                return v(Du)
                            }
                        }) : Object(je.jsxs)(Pu, {
                            children: [Object(je.jsx)(Nu, {
                                onClick: N,
                                children: Object(je.jsx)(Ru, {})
                            }), x !== Wu ? Object(je.jsx)(Bu, {
                                color: "blue",
                                children: Object(je.jsx)(zu, {
                                    onClick: function() {
                                        A(!1), v(Wu)
                                    },
                                    children: Object(je.jsx)(f.b, {
                                        id: "Back"
                                    })
                                })
                            }) : Object(je.jsx)(Bu, {
                                children: Object(je.jsx)(zu, {
                                    children: Object(je.jsx)(f.b, {
                                        id: "Connect to a wallet"
                                    })
                                })
                            }), Object(je.jsxs)(Mu, {
                                children: [Object(je.jsx)(Cu, {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    children: Object(je.jsx)(Vo, {
                                        style: {
                                            flexWrap: "nowrap"
                                        },
                                        children: Object(je.jsx)(Oo, {
                                            fontSize: 14,
                                            textAlign: "center",
                                            width: "100%",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Haven't got a crypto wallet yet?<0/><1>Learn how to connect</1>.",
                                                components: {
                                                    0: Object(je.jsx)("br", {}),
                                                    1: Object(je.jsx)(ro, {
                                                        href: "https://docs.pancakeswap.finance/get-started/connection-guide"
                                                    })
                                                }
                                            })
                                        })
                                    })
                                }), x === qu ? Object(je.jsx)(xu, {
                                    connector: w,
                                    error: I,
                                    setPendingError: A,
                                    tryActivation: P
                                }) : Object(je.jsx)(Lu, {
                                    children: L()
                                })]
                            })]
                        })
                    })
                })
            }
            var Yu = Ni.default.div.withConfig({
                    componentId: "sc-m6ivbz-0"
                })(["", ";align-items:center;justify-content:center;& > *{height:", ";width:", ";}"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                }), (function(e) {
                    var t = e.size;
                    return t ? t + "px" : "32px"
                })),
                Vu = Object(Ni.default)(Vc).withConfig({
                    componentId: "sc-m6ivbz-1"
                })(["", " width:100%;align-items:center;padding:0.5rem;border-radius:12px;cursor:pointer;user-select:none;:focus{outline:none;}"], (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                _u = Object(Ni.default)(Vu).withConfig({
                    componentId: "sc-m6ivbz-2"
                })(["background-color:", ";border:1px solid ", ";color:", ";font-weight:500;:hover,:focus{background-color:", ";}"], (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.red1
                }), (function(e) {
                    return e.theme.white
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.red1)
                })),
                Hu = Object(Ni.default)(Vu).withConfig({
                    componentId: "sc-m6ivbz-3"
                })(["background-color:", ";border:none;color:", ";font-weight:500;:hover,:focus{border:1px solid ", ";color:", ";}", ""], (function(e) {
                    return e.theme.primary4
                }), (function(e) {
                    return e.theme.primaryText1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.primary4)
                }), (function(e) {
                    return e.theme.primaryText1
                }), (function(e) {
                    return e.faded && Object(Ni.css)(yu || (yu = Object(Si.a)(["\n      background-color: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n\n      :hover,\n      :focus {\n        border: 1px solid ", ";\n        color: ", ";\n      }\n    "])), (function(e) {
                        return e.theme.primary5
                    }), (function(e) {
                        return e.theme.primary5
                    }), (function(e) {
                        return e.theme.primaryText1
                    }), (function(e) {
                        var t = e.theme;
                        return Object(ea.a)(.05, t.primary4)
                    }), (function(e) {
                        var t = e.theme;
                        return Object(ea.a)(.05, t.primaryText1)
                    }))
                })),
                Qu = Object(Ni.default)(Vu).withConfig({
                    componentId: "sc-m6ivbz-4"
                })(["background-color:", ";border:1px solid ", ";color:", ";font-weight:500;:hover,:focus{border:1px solid ", ";:focus{border:1px solid ", ";}}"], (function(e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.primary1 : n.bg0
                }), (function(e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.primary1 : n.bg1
                }), (function(e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? n.white : n.text1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.05, t.bg3)
                }), (function(e) {
                    var t = e.pending,
                        n = e.theme;
                    return t ? Object(ea.a)(.1, n.primary1) : Object(ea.a)(.1, n.bg2)
                })),
                Gu = Ni.default.p.withConfig({
                    componentId: "sc-m6ivbz-5"
                })(["flex:1 1 auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0 0.5rem 0 0.25rem;font-size:1rem;width:fit-content;font-weight:500;"]),
                Ju = Object(Ni.default)(Nc.a).withConfig({
                    componentId: "sc-m6ivbz-6"
                })(["margin-left:0.25rem;margin-right:0.5rem;width:16px;height:16px;"]);

            function Ku(e, t) {
                return t.addedTime - e.addedTime
            }

            function Xu() {
                return Object(je.jsx)("span", {
                    role: "img",
                    "aria-label": we.a._("has socks emoji"),
                    style: {
                        marginTop: -4,
                        marginBottom: -4
                    },
                    children: "\ud83e\udde6"
                })
            }

            function Zu(e) {
                var t = e.connector;
                return t === _ ? Object(je.jsx)(ts, {}) : t === Q ? Object(je.jsx)(Yu, {
                    size: 16,
                    children: Object(je.jsx)("img", {
                        src: Uc,
                        alt: "WalletConnect"
                    })
                }) : t === G ? Object(je.jsx)(Yu, {
                    size: 16,
                    children: Object(je.jsx)("img", {
                        src: Rc,
                        alt: "CoinbaseWallet"
                    })
                }) : null
            }

            function $u() {
                var e = Object(o.useWeb3React)(),
                    t = e.account,
                    n = e.connector,
                    i = e.error,
                    c = ca(null !== t && void 0 !== t ? t : void 0).ENSName,
                    s = na(),
                    u = Object(a.useMemo)((function() {
                        return Object.values(s).filter(ia).sort(Ku)
                    }), [s]).filter((function(e) {
                        return !e.receipt
                    })).map((function(e) {
                        return e.hash
                    })),
                    d = !!u.length,
                    l = function() {
                        var e = fe(),
                            t = e.account,
                            n = Pa(null !== t && void 0 !== t ? t : void 0, e.chainId === r.MAINNET ? Bc : void 0);
                        return Object(a.useMemo)((function() {
                            return Boolean(null === n || void 0 === n ? void 0 : n.greaterThan(0))
                        }), [n])
                    }(),
                    b = Xt();
                return t ? Object(je.jsxs)(Qu, {
                    id: "web3-status-connected",
                    onClick: b,
                    pending: d,
                    children: [d ? Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(Gu, {
                            children: Object(je.jsx)(f.b, {
                                id: "{0} Pending",
                                values: {
                                    0: null === u || void 0 === u ? void 0 : u.length
                                }
                            })
                        }), " ", Object(je.jsx)(as, {
                            stroke: "white"
                        })]
                    }) : Object(je.jsxs)(je.Fragment, {
                        children: [l ? Object(je.jsx)(Xu, {}) : null, Object(je.jsx)(Gu, {
                            children: c || vt(t)
                        })]
                    }), !d && n && Object(je.jsx)(Zu, {
                        connector: n
                    })]
                }) : i ? Object(je.jsxs)(_u, {
                    onClick: b,
                    children: [Object(je.jsx)(Ju, {}), Object(je.jsx)(Gu, {
                        children: i instanceof o.UnsupportedChainIdError ? Object(je.jsx)(f.b, {
                            id: "Wrong Network"
                        }) : Object(je.jsx)(f.b, {
                            id: "Error"
                        })
                    })]
                }) : Object(je.jsx)(Hu, {
                    id: "connect-wallet",
                    onClick: b,
                    faded: !t,
                    children: Object(je.jsx)(Gu, {
                        children: Object(je.jsx)(f.b, {
                            id: "Connect to a wallet"
                        })
                    })
                })
            }

            function ed() {
                var e = Object(o.useWeb3React)(),
                    t = e.active,
                    n = e.account,
                    i = Object(o.useWeb3React)(Z),
                    r = ca(null !== n && void 0 !== n ? n : void 0).ENSName,
                    c = na(),
                    s = Object(a.useMemo)((function() {
                        return Object.values(c).filter(ia).sort(Ku)
                    }), [c]),
                    u = s.filter((function(e) {
                        return !e.receipt
                    })).map((function(e) {
                        return e.hash
                    })),
                    d = s.filter((function(e) {
                        return e.receipt
                    })).map((function(e) {
                        return e.hash
                    }));
                return i.active || t ? Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsx)($u, {}), Object(je.jsx)(Fu, {
                        ENSName: null !== r && void 0 !== r ? r : void 0,
                        pendingTransactions: u,
                        confirmedTransactions: d
                    })]
                }) : null
            }
            var td, nd, id, rd = n(678);

            function od() {
                return (od = Object(R.a)(S.a.mark((function e(t) {
                    var n, i, r, o;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = t.library, r = t.chainId, null === i || void 0 === i || null === (n = i.provider) || void 0 === n ? void 0 : n.request) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return o = rd.a.hexStripZeros(qt.a.from(r).toHexString()), e.abrupt("return", null === i || void 0 === i ? void 0 : i.provider.request({
                                    method: "wallet_switchEthereumChain",
                                    params: [{
                                        chainId: o
                                    }]
                                }));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var ad = Object(Ni.css)(td || (td = Object(Si.a)(["\n  position: relative;\n  margin-right: 8px;\n  ", ";\n\n  ", ";\n"])), (function(e) {
                    return e.theme.mediaWidth.upToMedium(nd || (nd = Object(Si.a)(["\n    justify-self: end;\n  "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(id || (id = Object(Si.a)(["\n    margin: 0 0.5rem 0 0;\n    width: initial;\n    text-overflow: ellipsis;\n    flex-shrink: 1;\n  "])))
                })),
                cd = Object(Ni.default)(Eu).withConfig({
                    componentId: "sc-qi9otp-0"
                })(["", " width:auto;border-radius:12px;padding:8px 12px;width:100%;"], ad);

            function sd() {
                var e = fe(),
                    t = e.chainId,
                    n = e.library,
                    i = Object(a.useRef)(null),
                    o = Jt(Wt.ARBITRUM_OPTIONS),
                    c = Kt(Wt.ARBITRUM_OPTIONS);
                ec(i, o ? c : void 0);
                var s = Object(a.useState)(!1),
                    u = Object(j.a)(s, 2)[1];
                Object(a.useEffect)((function() {
                    var e, i;
                    (null === n || void 0 === n || null === (e = n.provider) || void 0 === e ? void 0 : e.request) && t && (null === n || void 0 === n || null === (i = n.provider) || void 0 === i ? void 0 : i.isMetaMask) && function(e) {
                        return od.apply(this, arguments)
                    }({
                        library: n,
                        chainId: t
                    }).then((function(e) {
                        return null !== e && void 0 !== e ? e : u(!0)
                    })).catch((function() {
                        return u(!1)
                    }))
                }), [n, t]);
                var d = t ? I[t] : void 0;
                return t && t !== r.MAINNET && d && n ? Object(je.jsx)(cd, {
                    title: d.label,
                    children: d.label
                }) : null
            }
            var ud;

            function dd(e) {
                var t, n, i = null === (t = hn(Nn((null === e || void 0 === e ? void 0 : e.isToken) ? e.address : void 0, !1), "totalSupply")) || void 0 === t || null === (n = t.result) || void 0 === n ? void 0 : n[0];
                return (null === e || void 0 === e ? void 0 : e.isToken) && i ? J.CurrencyAmount.fromRawAmount(e, i.toString()) : void 0
            }
            var ld = (ud = {}, Object(m.a)(ud, r.MAINNET, J.CurrencyAmount.fromRawAmount(Ze[r.MAINNET], 1e11)), Object(m.a)(ud, r.TESTNET, J.CurrencyAmount.fromRawAmount(Ze[r.TESTNET], 1e11)), ud);

            function bd(e) {
                var t = fe().chainId,
                    n = t ? ld[t] : void 0,
                    i = null === n || void 0 === n ? void 0 : n.currency,
                    r = xa(e, n, {
                        maxHops: 2
                    });
                return Object(a.useMemo)((function() {
                    if (e && i) {
                        if (null === e || void 0 === e ? void 0 : e.wrapped.equals(i)) return new J.Price(i, i, "1", "1");
                        if (r) {
                            var t = r.route.midPrice,
                                n = t.numerator,
                                o = t.denominator;
                            return new J.Price(e, i, o, n)
                        }
                    }
                }), [e, i, r])
            }

            function pd(e) {
                var t = bd(null === e || void 0 === e ? void 0 : e.currency);
                return Object(a.useMemo)((function() {
                    if (!t || !e) return null;
                    try {
                        return t.quote(e)
                    } catch (n) {
                        return null
                    }
                }), [e, t])
            }

            function fd(e) {
                var t = fe().chainId,
                    n = t ? ld[t] : void 0,
                    i = null === n || void 0 === n ? void 0 : n.currency,
                    r = dd(null === e || void 0 === e ? void 0 : e.liquidityToken),
                    o = bd(null === e || void 0 === e ? void 0 : e.token0);
                return Object(a.useMemo)((function() {
                    var t, n, a = void 0;
                    e && r && (a = J.CurrencyAmount.fromFractionalAmount(e.token0, X.a.divide(X.a.multiply(null === e || void 0 === e ? void 0 : e.reserve0.quotient, X.a.BigInt(2 * Math.pow(10, null !== (t = null === e || void 0 === e ? void 0 : e.token0.decimals) && void 0 !== t ? t : 0))), X.a.equal(r.quotient, X.a.BigInt(0)) ? X.a.BigInt(1) : r.quotient), Math.pow(10, null !== (n = null === e || void 0 === e ? void 0 : e.token0.decimals) && void 0 !== n ? n : 0)));
                    var c = void 0;
                    if (o && a && (c = o.asFraction.multiply(a.asFraction)), e && c) return new J.Price(e.liquidityToken, i, c.denominator, c.numerator)
                }), [e, i, r, o])
            }

            function jd(e, t) {
                var n, i = bd(e instanceof J.Token ? e : void 0),
                    r = bd(t instanceof J.Token ? t : void 0),
                    o = fd(e instanceof Ie.Pair ? e : void 0),
                    a = fd(t instanceof Ie.Pair ? t : void 0);
                if ((i || o) && (r || a)) return null === (n = (null === i || void 0 === i ? void 0 : i.asFraction) || (null === o || void 0 === o ? void 0 : o.asFraction)) || void 0 === n ? void 0 : n.divide((null === r || void 0 === r ? void 0 : r.asFraction) || (null === a || void 0 === a ? void 0 : a.asFraction) || 1)
            }
            var hd = 1600387200,
                md = 1602979200,
                xd = 1631923200,
                vd = xd,
                Od = 1663459200,
                gd = Od,
                yd = 1694995200,
                wd = yd,
                kd = 1726531200;

            function Cd(e, t, n, i, r, o) {
                if (t.gt(i)) {
                    if (t.gte(r)) return X.a.add(e, X.a.BigInt(n));
                    if ("number" === typeof o && t.gte(o) || "undefined" === typeof o) return X.a.add(e, X.a.divide(X.a.multiply(X.a.BigInt(n), X.a.BigInt(t.sub(i).toString())), X.a.subtract(X.a.BigInt(r), X.a.BigInt(i))))
                }
                return e
            }
            var Td, Id = n.p + "static/media/flying.10aaf320.png",
                Ad = n.p + "static/media/forest.dacb0ce8.png",
                Ed = n.p + "static/media/urban.e870c706.png",
                Sd = n.p + "static/media/noise.3c7efafc.png",
                Nd = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-5nm9ef-0"
                })(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#160ce8 0%,#e100bd 200%);border-radius:12px;width:100%;position:relative;overflow:hidden;"]);
            ! function(e) {
                e.FOREST = "FOREST", e.URBAN = "URBAN", e.FLYING = "FLYING"
            }(Td || (Td = {}));
            var Rd, Ud, Bd, Md, Pd, Ld, zd, Dd, Wd, qd = Ni.default.span.withConfig({
                    componentId: "sc-5nm9ef-1"
                })(["", ";width:1000px;height:600px;position:absolute;border-radius:12px;opacity:0.4;top:-100px;left:-100px;transform:rotate(-15deg);user-select:none;", ""], (function(e) {
                    var t = e.atmosphere;
                    switch (null !== t && void 0 !== t ? t : Td.URBAN) {
                        case Td.FOREST:
                            return "background: url(".concat(Ad, ")");
                        case Td.URBAN:
                            return "background: url(".concat(Ed, ")");
                        case Td.FLYING:
                            return "background: url(".concat(Id, ")")
                    }
                }), (function(e) {
                    return e.desaturate && "filter: saturate(0)"
                })),
                Fd = Ni.default.span.withConfig({
                    componentId: "sc-5nm9ef-2"
                })(["background:url(", ");background-size:cover;mix-blend-mode:overlay;border-radius:12px;width:100%;height:100%;opacity:0.15;position:absolute;top:0;left:0;user-select:none;"], Sd),
                Yd = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-5nm9ef-3"
                })(["padding:1rem;z-index:1;opacity:", ";"], (function(e) {
                    return e.disabled && "0.4"
                })),
                Vd = Ni.default.div.withConfig({
                    componentId: "sc-5nm9ef-4"
                })(["width:100%;background-color:rgba(255,255,255,0.2);height:1px;"]),
                _d = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-bufqi0-0"
                })(["width:100%;"]),
                Hd = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-bufqi0-1"
                })(["box-shadow:0px 4px 10px rgba(0,0,0,0.1);background:radial-gradient(76.02% 75.41% at 1.84% 0%,#ff007a 0%,#021d43 100%);padding:0.5rem;"]),
                Qd = Object(Ni.default)(Br.a).withConfig({
                    componentId: "sc-bufqi0-2"
                })(["position:absolute;right:16px;top:16px;:hover{cursor:pointer;}"]);

            function Gd(e) {
                var t, n, i = e.setShowUniBalanceModal,
                    o = fe(),
                    c = o.account,
                    s = o.chainId,
                    u = s ? it[s] : void 0,
                    d = function() {
                        var e, t, n = fe(),
                            i = n.account,
                            r = n.chainId,
                            o = r ? it[r] : void 0,
                            a = Pa(null !== i && void 0 !== i ? i : void 0, o),
                            c = Ra();
                        if (o) return J.CurrencyAmount.fromRawAmount(o, X.a.add(null !== (e = null === a || void 0 === a ? void 0 : a.quotient) && void 0 !== e ? e : X.a.BigInt(0), null !== (t = null === c || void 0 === c ? void 0 : c.quotient) && void 0 !== t ? t : X.a.BigInt(0)))
                    }(),
                    l = Pa(null !== c && void 0 !== c ? c : void 0, u),
                    b = Ra(),
                    p = dd(u),
                    j = bd(u),
                    h = Aa(),
                    m = Pa(null === (t = Sn(qe, On.a, !0)) || void 0 === t ? void 0 : t.address, u),
                    x = Object(a.useMemo)((function() {
                        return h && u && 1 === s ? function(e, t, n) {
                            var i = X.a.BigInt(15e7);
                            i = Cd(i, t, 2e7, Sa, 1605571200), i = Cd(i, t, 172e6, hd, xd, md), i = Cd(i, t, 129e5, vd, Od), i = Cd(i, t, 86e5, gd, yd), i = Cd(i, t, 43e5, wd, kd), i = Cd(i, t, 16e7, hd, xd, md), i = Cd(i, t, 12e6, vd, Od), i = Cd(i, t, 8e6, gd, yd), i = Cd(i, t, 4e6, wd, kd);
                            var r = J.CurrencyAmount.fromRawAmount(e, X.a.multiply(i, X.a.exponentiate(X.a.BigInt(10), X.a.BigInt(18))));
                            return n ? r.subtract(n) : r
                        }(u, h, m) : p
                    }), [h, s, p, m, u]),
                    v = I[s || r.MAINNET].infoLink;
                return Object(je.jsx)(_d, {
                    gap: "lg",
                    children: Object(je.jsxs)(Hd, {
                        children: [Object(je.jsx)(qd, {}), Object(je.jsx)(Fd, {}), Object(je.jsx)(Yd, {
                            gap: "md",
                            children: Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)(ko, {
                                    color: "white",
                                    children: Object(je.jsx)(f.b, {
                                        id: "Your ScrappyInu Breakdown"
                                    })
                                }), Object(je.jsx)(Qd, {
                                    stroke: "white",
                                    onClick: function() {
                                        return i(!1)
                                    }
                                })]
                            })
                        }), Object(je.jsx)(Vd, {}), c && Object(je.jsxs)(je.Fragment, {
                            children: [Object(je.jsxs)(Yd, {
                                gap: "sm",
                                children: [Object(je.jsxs)(Lo, {
                                    gap: "md",
                                    justify: "center",
                                    children: [Object(je.jsx)(no, {
                                        width: "48px",
                                        src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAYAAABxcwvcAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB01SURBVHgBvVxpkB1XdT6n+71ZJMsaCVs2BKxxEjCb8DhUGbPYlpMKwWBjuRI2Y4NJBYhZYlNFwpYqSVXEbD9sA2bJUsg2XqBCxXihIPzQyMYUkFRpJCAGUimPnAQvAWskjTTLe9035zvL7X4jL7IWd9Wbee/17b73fvcs3znn9mN6ho+53XPjJVXr5e0Ec7E21WmcUhorSh5PiYmqioi16QwTz6SUpqkoZqjq76B+Pdk5eWyKmWfoGTyYjvGRdqexHs1voILO5VRvECDGipQoFYX0nqSBvPryKpIOR0DDX3lb2Lm6JipL+b7OAy665VTVr7fxcOf27orRSTrGxzEDaW73vvXdTndjSvUE1WmsrmzeNn/ptgYwAQopCCIhClDC9335DCBxTt/btTpkgIe2wLkoptNQZ7JcPrRZrp+mY3AcdZD6e+cul38bZe7jOitMzOaUgUCvhUgHQKIWYNZWQIOklQWlXmXXCUgAU8+hCYAVAPW7vqDfKfR6LostvZm9m0dPffY0HcXjqIHU37t/g+jFNTKdcZWG2gECJqwT0ImphrV7VanwwTC7WrF/NkDyB+1IegCIAKeyFUgLAuZwx0CU/yJhW4rjlx01yTpikNLc3HivT18TaVivElMy1WJjVGAAjKyyqRHp5FShUu29uxTx4HAADDQthWoF2G2AcQuoIECb7/tXtd6fAZ6Mg4fKTeWq5ZvpCI8jAml+z+xVZdHZKEMfSzEZOYpOKepUKCjWCef32qOqVzYybr/tvQLJnO/l6Jodq1p2LNQU0gdAFwWoHqQr8EvWTbec7pXleaOrRqfpMI/DAik9sHusf+LIv6SK1kMqcBMdtEwcAOWlD2DIv4LdkJG7kmQwktuajI1+B/vlQNbNaDnULiXvpdUP3vZEnuYWTXUDcOm3HBvdxMPdw5Kqpw2SqlePtkrn42oXwt50BSCVGL9rzHagqzQAitmZlO0Nx+QrMvHyf3VIUspGzmiCq583NVWszR5CBbmq9f5J/gtAxCOda8uVyz5ET/N4WiDN7t49MdQZ3Qr1YjcSXJQ2gVCjuGttq5hhSgP645NtfY+JBT2g9vXu7gMIByxVKfAy494SQ7NdrJ6vnusRixrWsHPDYgaWDU/y2OjFT4eQHjJIs7tnJ4a73a1gxzoUBscrGtftQOj0Y0LkQhJG1tu4HFCmCNT2ZJxtUDb01AK/GhDVDKq2TX5NySo9qoxyvt43b5/RVgx9MTo8VZy4/LxDBao4lEaLAKjsbE1uoOGmS9ieGKtzGApHhbvCu4SkmG5lHpQCrJCcFJrETXtIj0tS1twU3zdjU4lKnJ2DmrGaTML9vjzatesUKBj53kTafWBr8gU/YpAQazEkqOQxcu5TQr9j4nUzqdQWoSxdDpSrwVLhTUEk/QykgOO+3r5IDRVQosnu4gOtwtWNzSZiEfUV6Mv35fEjA8BXe+Ym6v2L19CRgpQQjHZ5a6qqMQsNWPVajWG47X0L3ji5p7H3hFXzgcfSJ3KDDZ4U19cNompw+3VWr5ikEkxuBFJ1vXaDDpXv1Rbj1bVLctFIZDgJfFw+rOcYjgF9/d/s5SJVTwnUk4LU7xTXSMfj5G4U7l3jqWR6pp3vErXetadZfQWEm3DDp8uuKuG4ySmATrJt8PE5ZpXcvnW8z1C3oAyuh0nv6wvBjRdkau6t/YKCiBYoz+oWCn7/13uvSgv9DXQ4IPX2LyA43VBAtyGu3dI6806Nw8iAXnYS0V33U7rz/rC+S+yUG18OrXTVQuylEpmy9HG0ofakHYzQ0hZppdK8HLsxBLtXCfZ7JTBwkNqCnWuZuhXHDakDMONO4FVfk3GMPxEWj+vdlAvVxQMqwskYdASmJkEuEamlRh/+LtGY6P0n1mc7wK6WmUhCdXY8TPTgDDHanj3eMHFygAFeZRkAhl0pY4LBrQq3OQhd2D4nAyoFVQgVxpglP5WclOq5sjAhlVgq7V/UvqDi3VNWTfLo0HmHDNLivvntcmJCF9DVbNBL1dRoTYv3vOlWuepkoo+d6yDRYDiye55oj7xOWUl0zzTxvbuoxjw/cBbRimFrlnyymBdW20fIdSNAmbln72o5JwusHVCMGWRXbVZlasiUFxjXV/M98UyLErp0TNrWrHhXZ6izZSkeB6lbf1ZSHUwTOIOVKsqWEYwVyu6aqCGJ0vE/iGrf8QtKb7nNAKHUqBiu3fEQ0YuvIz7/RqLxVZRE6hhe53U3mHSpWrp09pPbF5uYp0LsnrWfwz13PtJIrQmaDW2x8mElamcZMtdCCDVi1EBpBDIJ+xaueTxacBBINfNG5RdV45ozMw5xzsbR3/v5dLxIw/cE452iUudvoSQGXRXBSWICIGh677ScF2D2iGd8/yuIv3qRApd++nADasnZfpPHYWZvbJJqtQDczx9pqEBtr+TqHXYxObfScVRur9wesQCVPGUs3GlMyOZVTwrSIqSoEgMWnrto2G5qUSDmMK/OnWvKgaTyEAFK1ep1W4imd+cMY3Hqqow5i1fkm7bbHV96EqWvvFGAukFtVtq1m0hUMd00RfzDB0U1H5BVXjR1wZj+41GiL/7I2kw9ZDQkMgOQpNqBsHxLEyfC/rgChHEvlg2pxzMrIuHLvrkrl0oTD4I0/4B8Ma5GsVPkyWUjOKBefoNETUQPyHbPCSWQSUKqXn+jNbr1zcRnPMf4jqgWbJGCfeFplG55S151vv7HlD76vYHBpfb/U8YovWYt0aWnE8t/BfHj36f0kXOIrzjT2HTtUlTVrTRx4/XU9hBnpqKzEdWsf3vApFeSduXJKzYLcJsOkqTe3Nx6ueG4ulSIZ6dsDZabTGOw40hzhCo50+WVw2pfaNUyou+8w0CEKt243e50wQsbAyxgKQJ91xFRPZLJcmv12v8T7nvLDmKA/9IvEAEotP/MNqJv7NRcEoeaRtag4FxEgBHX8zFrzLM2laOh0pwGPN6BxSupdWSQ6h5dHuIcaYlMw1rmJ+t57Rynbbfc8PIFLyK68xfEp66mdN97iNeKN3vvt4n/Tibz9gn1bjrpGVHJ6Rm7R9g2eMaXnew9N0ebKukBwE7/ooJOVwi4K0Yo/e8et0vhCl1qcH8nj5nDweYiScdI//aQnMtENs32EKOuHwAJZR+RjHfGMJSAReJd7UxqiX6zztxe8laQq+IjQKRtDxCtHhWJklu/4TSiqycpfUlsyW2iYivNiPOXf5JVQSc3NqrqmUS1BkBZAlpAkEAM14qtO//5xE4jlMk5G89j6rtJqHyB2dl57cR4qPTCQkIAjFDnnQMg9UqpiwXVp+ATLTXzLyxopCa6z8y6ca8qslBZIYoML4ZzQhxZgEkfP5f46m1mk+57twF5/Y+If/aoz7owYJ4rknb3ZXJ+bAAQboEVL4bRft7xom4/pSQgRZynHCrzgdry6pHkg8q5VKm+wH7BBkPtlnXMQ+6f3zAoScwbNAWiqYTUisHMc9kqh1fz5FioRytJpoOLceFaURsWEJKnbBmqhImLKuI///xKtVtJOFOkaHXyuCfa3S3n3vACSi1wuA0YQAYxRdsr7hAq8W9N4SGoPgCqYj462cbOFSZFRi9ca/oeyswuZpXraONE55o/hKqVLXk2IGpBvWiFC7oqCBcqyt4ueV4op4QKtzkiObTuJJNKxHewJWev1YnUGBC8VbhsBzoyLvQ8kajb3qq8KglJpR/sIvrZIw1gawWclaMKkB6fuYfokpepRHGypJsKEJxQ5WN2Vs4uZSCdLPbIclHyvxLeJNlMWoSK1pCmSUZCTSj99uAZxVCnIY4+mpTf0IBPVtXKxM0/h6TNihq88qvKh1JLZeDC+VbYpGEz8sGe05J6G1b/vyW7cOFNRF96I6Wznpd5kGYesAB7FygJH0Mf9HNR2Zt3iOE/h+hvzmnoCl4RNUTuylO7FBVifAUOpRTmgMZyGEq5dvWk8KjzOkXZHU9sDZQXMeXBJgcrVCmMNy0Rf0091MZBOETpk5M6GW2DQFakKV1wmr4nv2Yg4VZ4oOp2LqdlAcAbbjSOJKSTzz5F/p+sINMrnqtSYOour48KOJd8U0A6uxlklMzLVuUFEoXr1JT44mDuaCdxHBUC4AJKVP0JVbc6VetNrVxM6kaKErXcu0sUpEVtY6tPpmayGT3hM3rcJXblnHHnLA78gyIhdwlFANO+70Ehgq8QL9V1dWADG/eArRKVUklBbCev9J1fDnq9V51ilAHe8xxR3Rv/zMIdGPHsnVue2aUktEWnV9kcVR4wjwVpIyoqage7NA4zPc7ZEHPLhTQ+JBvpOggsZ0Nr2DLVLamin0o8JerA4uZ5/anU5Ip8UFd8mxLsy15R/Lt/SSQ0wErgJoV6z8q9zl+eOYB9+71+RtjyFaERUMt1X1AVpOVDeW3JjbZ5szSoDu3MaHszB6Su4zZX8hqFiOFK81hxA16iVqzlmLhZUXJuq/aHDanCTZZ2NG1qBq7TsF4npxgrMpl3/ZLSJd+QKF5itZeuaRYnaEfHKioJRPEjZzeTzq0OVn9IKJ37j0Sf+4F5tbhC84Ns0t4t842QabDVZc8MyPuhwiTvQE9empoe68hqnRpRcmbaqSWOVd1ImU+SIoHlRslSHE4TcNqj+SRMO6Vmdla9lS/AgW7eKZI2ROltpyuBzLWzqLdF1RYSINQhiaejT99L9D97qC1NA6oXx2fFyx0vget7z7RQiUryKqdJSRDlIc+T9eoMJO5XSWGzqCLOo3FY6rVaamnt5rBlcpdeFA15JPd0la8jtwy8ixG2zMAe6cdXr/VzyTKOyQcC1/2Jc4ned5bGeLbPyO2ierZK1YOdEesLYN55GbG4+CcDKEvWZ+/V7ACH5NRuY/t1tp8JxrnvZaa+Y+DCkkYkETenGzHGCgommqgp+fh/jhitldA3ozQ4oFyCBmOWQBYeSWGEN2vZOvbUqZEvBxfp1cptWWX3AiHMgRCInUsrw95cdyHR1PuFpL5RedTSI5tUtP3Sj/UbLcfnmLRlFtjtj/eZz7HtTDFCSiuLdkEw5cS9eazUNuQtKhBtGxX14UmaJH1qm7W/dEJs0iq7N/S97zX5XHGtcwKPvaiYCWVyj1n7f3XR8u9W8ZhdeS8eEVJK299P6YY/tfc0aJ+0l+/+p+ayc0XGKQc7aHqvdjBceI4MC1Ny1p5CS8NR+WDrKjSEw5gHEKW3i6xlMtKXt8J8+h5j1DiQ30mNC2SnM1E4tN4L9yacFyLvBaDGo+qCwSQgkYd07WdElSa+QElUCjSC7rxUAeO3rMsg6fRARsG2exW1eAC1Q5QwG22bqEUC5L89+oDfnTGVo4xoJN9NLJMPOTXRurtOA9HVT2I0kghfuwVvWXdyo2aFgauqpGP0QFYBIwMgx4gpG/sU9qK2ImSSSdNjB5oxwe5cfAvR13eY6n3+AslYXmgBcgy9b5xHs5Iha+y7XzxgVxLZYWfjpFQExQENeIUSF3VV74nyb+ZFA3LbzgQUjR6TVx3wDm78I9/LwGZqQCYJKeyPexeL1Jkiga/xon9OOTBN2U7orZAGBrcCrWjbIkjuX91F6Q+uJ/r1XjHwYthvfpMyckY7z1KSL1Dkkjjv5k2NSVmofJFqXzhXNykXPaDcUKXEBx62KFyySmbLbgWgbHY/vfWbDaYK2iMWXzm3yhtwCuMmKll1ZB0MWgWuqt3BcWMDo5R+2bckHfwClRKStG8sSO5XOFK66OtKZOnFwrveKoHuujV2fbj6RAOhkM3H51qZVqSe78VM2UFNFYLaLtW2iGMcyfYIOEbkF7Prg2J5604vB9GgS0YMheR9mN7SHWnR7DnK5WscXmlNviNXA1xILBi1sOm0R3Lnn/xjAuWhN62z2K116HADKEjXKyUgfvM66z/KSxHcRkZVOVlqVBKhiPJCaSvuX3ejSCgNnzKlsystdWEqwDkz2aiAmy3s91FRdXqw8yEbwNtPt/gpBoyy0mv+Xo2nHv3aKxjkVQvLAJAbcnA1RhpEQhQUA1gmm9Z+zgB6iQS2wpE0lsNNVo2q/WkvSjb3MO6fFcZ9/mnG03DvFqPVxaJYcPIUSmFZAZwXYqnSJDyJlml4M9URdZuusSmzspBDgai9zOzJNspcR/JKtQEVFVWeWTA7hLK1VC00FgtAsaLrPm+pDgGR3TOy2yW9HnwG0ojyN6TkuGFL7aI9UrOvktTKqpEcrOrTA1h95LZffYoGyNFfBu27v5L1/yOiE5bZQrSLq7FvKmhBVFJ8X5NyqvB0TNPY6NUpF4cmE8JgSFKqnbNY/sWcXcOdUpsmlDbhnNSHDfrqT6gx/61Bf+xfRSJeaPlr3YdNTUoFqvreM91OJNtezM5foqSFRXOekzfMo4frRJr+8J8sqG2pnUoTjPjqEbWbJi3RoBmZPY3gktzpaGkJWwdJcmpqqo4f2WFauoqhc1MZj8o3kxMF48wcw9yql5zIJpoky6iHBKxaN2uBE2AhMYYkme7wd8ARL+k7VHWRd0IaBKXx8N1FawuOEz3LMxVuZEnTKFpdoYPVToFL3IRbUd0BYH13Eu58FKDau8K+AEg7FpTodvzR9K1cv03AmVBQdJOBb9TKLDv2TlMT2AaHR+0LbvnBmQGA2vZCL5Fipe5lhHf7oRQC7v4V8c1TGj4MGHxRL3rbOg18YwOpEcK+e5tmG48C9+cv1wWi+3bRIFqctcG4o1ebI9ovzONFmUnXZnbRPmMxrfIyqd0oUseN3q7py2QuOurk2kMQLF/gYMeaZggmcPVrB6RnABwM78tS60dFV3iOGuQLbpLvfnwQQHo7AZA+eBfx336fIthUxhy0INXN7lvNMsoUPvwaOuh4zvFmJgofeMfjnm6m/rrinINzuefeOVU5bTPSmY7HLmxtujxZjAzN5JCgXV6qUvO4Al59l0tuAElib5J4krbx1HOoiMArCWehT0g5WtKwSLaF3Wq3ZXfpGTQk0kR9c15aH5FIgyzeo3aN3doE8yVrbHtPhFPMTWgSsZqXu0lUTVO2ngtXmUA1d6R7Q9wuV3D7/d51wXLBKzylb5Pg1lq76GrJOAgn2n36tdYWEgPAbnmzuPQP6kYtgtSgBkdZ+JoDDPnf30d0g6Rdb3+7fs7nP3dvC3F/g1jRPVyOBHBIGjc3QzYToIQoRx7JF12P2vkRJEoquOmRWZWgGl4dUki0pTVr716quP3+7O7Iw2rVBPFMa5NWDkOokYQUW1nwecdDlLBzRIxx2FyLu7wBDLTYIYaUhEfa8QHjVLBrCDvAtXAeLxzfvlSJYd4s6tyKigjK3e6IiqJASVJVoTsupfajFrnGBbuGeYU58bAHjB57vblv9qo443e2iaqtp6WSBC8nYjcJBgovUPf7RizVyCnJsNx2tK8beYhMZpKglkH0IhAO9hqkDXQB3uied+fqbAInwjUvWmNSJ4l++uuzG0YtWc7skQpj6SlLBlFOvYK0Qs0Q4EZbtkW0jmoDJWcg2O4r96of22/URObMz1Yp2kSto2h/KJePbFZ67jkdVbsQV7LB5UchmJo4zlUwDZDF5HGR787PsRgZQJAQFB+R9jjrFNskesf9ZnAB3Hu8AIC8dRRMex6Udk0abD+l9AeAkHn41iVy/QrKT0D1vHwd1/omMPYnA1CtxXbAqPDyUBeZUhjsyTYuA94Xh4jd1urAwno9JTfBJnErQIb7Dw4Vm0tb7tiNbIoEF0cnbCnZlvtWoEEkRU2SqBujEvv65xN96k/sWuxzevn1tsHrjssayQ0pCtVR4GuTpjKXPChTlBD1nEMiozlOEeq98xaK4Mmm8dVUnLQCz53c/qQgYedttXdxuyTixoB+MRJbUopGv90gxaMKMTA9XddNmrRO2c5nFQg1adMMGaieQxiSmqGlq7cSX/NDTajpzpGwSUEmQ2XioWaXrAxU1Ng6RRPZs0sVhPNAX0vaCf1j89bLn7tFAHrXUkyKpV/w6Oi00PHrOFIFqm6tFSka/5Q80OXY1+MhgybLQMhKl7ZY/WSMPmc2NTflrHv5UH5cNMgqY7vz+SJd7/hnov96LOeF6P5HbWz+XEmzeO6xiH3HLdFAyqU2O6mgLVT6XJxuKEV5//dWo9PN9DgHP96X2DNY71vYXu9fGCfvR/cVdlirnamIQDg1ohxGHmSU6lxUyHnzzIA5S377uZQsXVEfa2350WrwbTttiyEynn8hLHv1MgttknnPHA9ik2inbGwlupeqCHsKRg/Y2kdnzTPChkrFpnj+CZvl+k2HDJICNbs40T8wv12rmLD62PAuq+3knqLSGtqhxjoeEkxNhSXTBS9h5xV18qbve64WYVPaJMNTuCFgeXNWLkBQAzCEqFs0BDRUPLX2hs8LQL+ZNWmCR1vWpfL3T5yS0tMZT4RF8UQnJE0xVRw38iGFBD9egLlJVZOKJrjVdkweJtSZG8Uu3BzSaGiRPA1RNyQPR0woPxqWBjBSl+/7rjny4ApKau4TAfGAypGFFy7pkfbR5B08L4JuXLZ29bT0cTE9ycH0FEc1v3htPTN3pcY0bkNK5HzMCFm93LkL58HaowiQPo388ZWGEUYUFJRe3bJxS0YUYKjaGai4Xlv2/Wc6wpG0QS/NFlEExKAK4TlEDWtRMfWS/UrpSXHaiYj2z5AFnXoyDAp6iqMcGbpK4pjJsBVYTTyyGc/vR32Kw76k5LtZnMN03DOGq1bkrW2Kqm6nVQgI8DohGeylJ2q8VfCgkhsbFh6127E+hjpNXzjxm/1mizQrKjGaZDkFoA89FUCHBJICtXL04mKkO0VRy4cu718wshYOyUs/oXZqg4LxMnu5nLPHiW08Jh2NVOmusyp5/ocdCGuTwqOFgV/07EAEwJiQ57ryI2HStsauXPx2gNb/JaA9YTnxSStgqK89lPk/pbrFoR4Pj2TuX5zI+4e6XmKKDVHkvy8SRtbTpQ2Zc9cc+TRqSYKmQ1oere354nEJSGmklWOnSJgBSF6vaqJ7DAMb2FFpwc7a+UXjcr/7LCrWHPeEnuyIQAqgxPB9rd67sKHuVzYHrAz+I3EO29S3xLp6OCTYhgqKDfRqC3AucsghGWFLws5kirBkhF6oUNC6vg8yEvkBEr6HOZiZs8fe8aQnpAj9vnANPPS7ZCxb6GkcTwukDNZCb1P12IGNOmiPylnzwmIMR4eayUf+hlyYwiZFfIiPtRviruWYI1mvbTzNmkcangzR+pBnAep6cEsNANlrqWJ7fq7U+xUvWjNNI92LD8UGHRWQcPQX+5cXBxY31nvmx9WDQZJCYrARCqCF7aDmWQ6TDuUJtmkiDHXXDXxrw2fYwPwTHG7cLVXCTQiC9kIY64f3SXghfG7eqj+Q2gIB88nHbRNPezkf5g+8HDZIOLCfUFKw19a/3X9R7RPWjVFOD4rlwzZJ8Cy3LwMd1hHeeJU39lSz2zO3LbF7VtUnPFrfwov02JzN4sAi1QJUAXoidgglrmLts2Z4efeQDfQTHUcEUhwyscsFqI0SyoxrzAYpcpulE4Y9wE/3dMpMMI27BCXwJJrXvlRNkB4JVQp2HUxdbE4NwHTnBxuL7hb5aUo+4ThkF7eJpzxs6WkfRwWkOKr9C5toduGdab43jl1ixXAn/0AUBxsWm5V/kQuSEPme2OCFD/CAvp0nzRvY2A6jhl8qGuBAHOrZs1+7UdV69gq4920C8KalOaEjOY4qSDj8qej1tG9+Y71/cRy2QrfdDdv2urwvUyaGZ3tV4qScrL+B5JlHEgnJYU7s2Ic0Spuk2ixtUHXGjzhI7KUPPa9aBsk5quDEcdRBah94NkPivcu5178ozS6MJTwlwOaq9bFOJOAdBPJ9mxrK+FY83X9ZWRjBw67CABI1emx/Xrlsl7j4LdLVtXwMfzHwmILUPvxhlg0SWE4IIKfrRnJkK7F3E8+iieE1rkTmJTW/JMCJ8VePOdoBKdwlwE0q+5faCh+jH7pbejxjIC09BDQ8koBqwLi/xvwVx7S8ZvwFUKb5Gf59yTj+Hw/7ALl9bHOSAAAAAElFTkSuQmCC"
                                    }), " ", Object(je.jsx)(ko, {
                                        fontSize: 48,
                                        fontWeight: 600,
                                        color: "white",
                                        children: null === d || void 0 === d ? void 0 : d.toFixed(2, {
                                            groupSeparator: ","
                                        })
                                    })]
                                }), Object(je.jsxs)(Lo, {
                                    gap: "md",
                                    children: [Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)(ko, {
                                            color: "white",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Balance:"
                                            })
                                        }), Object(je.jsx)(ko, {
                                            color: "white",
                                            children: null === l || void 0 === l ? void 0 : l.toFixed(2, {
                                                groupSeparator: ","
                                            })
                                        })]
                                    }), Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)(ko, {
                                            color: "white",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Unclaimed:"
                                            })
                                        }), Object(je.jsxs)(ko, {
                                            color: "white",
                                            children: [null === b || void 0 === b ? void 0 : b.toFixed(4, {
                                                groupSeparator: ","
                                            }), " ", b && b.greaterThan("0") && Object(je.jsx)(Kr, {
                                                onClick: function() {
                                                    return i(!1)
                                                },
                                                to: "/stake",
                                                children: Object(je.jsx)(f.b, {
                                                    id: "(claim)"
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            }), Object(je.jsx)(Vd, {})]
                        }), Object(je.jsx)(Yd, {
                            gap: "sm",
                            children: Object(je.jsxs)(Lo, {
                                gap: "md",
                                children: [Object(je.jsxs)(Fo, {
                                    children: [Object(je.jsx)(ko, {
                                        color: "white",
                                        children: Object(je.jsx)(f.b, {
                                            id: "ScrappyInu price:"
                                        })
                                    }), Object(je.jsxs)(ko, {
                                        color: "white",
                                        children: ["$", null !== (n = null === j || void 0 === j ? void 0 : j.toFixed(2)) && void 0 !== n ? n : "-"]
                                    })]
                                }), Object(je.jsxs)(Fo, {
                                    children: [Object(je.jsx)(ko, {
                                        color: "white",
                                        children: Object(je.jsx)(f.b, {
                                            id: "ScrappyInu in circulation:"
                                        })
                                    }), Object(je.jsx)(ko, {
                                        color: "white",
                                        children: null === x || void 0 === x ? void 0 : x.toFixed(0, {
                                            groupSeparator: ","
                                        })
                                    })]
                                }), Object(je.jsxs)(Fo, {
                                    children: [Object(je.jsx)(ko, {
                                        color: "white",
                                        children: Object(je.jsx)(f.b, {
                                            id: "Total Supply"
                                        })
                                    }), Object(je.jsx)(ko, {
                                        color: "white",
                                        children: null === p || void 0 === p ? void 0 : p.toFixed(0, {
                                            groupSeparator: ","
                                        })
                                    })]
                                }), u && 1 === u.chainId ? Object(je.jsx)(ro, {
                                    href: "".concat(v, "/token/").concat(u.address),
                                    children: Object(je.jsx)(f.b, {
                                        id: "View ScrappyInu Analytics"
                                    })
                                }) : null]
                            })
                        })]
                    })
                })
            }
            var Jd, Kd, Xd = Ni.default.div.withConfig({
                    componentId: "sc-pradxg-0"
                })(["display:grid;grid-template-columns:120px 1fr 120px;align-items:center;justify-content:space-between;align-items:center;flex-direction:row;width:100%;top:0;position:relative;padding:1rem;z-index:21;position:relative;background-image:", ";background-position:", ";background-size:100% 200%;box-shadow:0px 0px 0px 1px ", ";transition:background-position 0.1s,box-shadow 0.1s;background-blend-mode:hard-light;", ";", ";", ";"], (function(e) {
                    var t = e.theme;
                    return "linear-gradient(to bottom, transparent 50%, ".concat(t.bg0, " 50% )}}")
                }), (function(e) {
                    return e.showBackground ? "0 -100%" : "0 0"
                }), (function(e) {
                    var t = e.theme;
                    return e.showBackground ? t.bg2 : "transparent;"
                }), (function(e) {
                    return e.theme.mediaWidth.upToLarge(Rd || (Rd = Object(Si.a)(["\n    grid-template-columns: 48px 1fr 1fr;\n  "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Ud || (Ud = Object(Si.a)(["\n    padding:  1rem;\n    grid-template-columns: 1fr 1fr;\n  "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Bd || (Bd = Object(Si.a)(["\n    padding:  1rem;\n    grid-template-columns: 36px 1fr;\n  "])))
                })),
                Zd = Ni.default.div.withConfig({
                    componentId: "sc-pradxg-1"
                })(["display:flex;flex-direction:row;align-items:center;justify-self:flex-end;"]),
                $d = Ni.default.div.withConfig({
                    componentId: "sc-pradxg-2"
                })(["display:flex;align-items:center;& > *:not(:first-child){margin-left:8px;}", ";"], (function(e) {
                    return e.theme.mediaWidth.upToMedium(Md || (Md = Object(Si.a)(["\n    align-items: center;\n  "])))
                })),
                el = Object(Ni.default)(Ho).withConfig({
                    componentId: "sc-pradxg-3"
                })(["justify-self:center;background-color:", ";width:fit-content;padding:4px;border-radius:16px;display:grid;grid-auto-flow:column;grid-gap:10px;overflow:auto;align-items:center;", ";", ";", ";"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.mediaWidth.upToLarge(Pd || (Pd = Object(Si.a)(["\n    justify-self: start;\n    "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Ld || (Ld = Object(Si.a)(["\n    justify-self: center;\n  "])))
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(zd || (zd = Object(Si.a)(["\n    flex-direction: row;\n    justify-content: space-between;\n    justify-self: center;\n    z-index: 99;\n    position: fixed;\n    bottom: 0; right: 50%;\n    transform: translate(50%,-50%);\n    margin: 0 auto;\n    background-color: ", ";\n    border: 1px solid ", ";\n    box-shadow: 0px 6px 10px rgb(0 0 0 / 2%);\n  "])), (function(e) {
                        return e.theme.bg0
                    }), (function(e) {
                        return e.theme.bg2
                    }))
                })),
                tl = Ni.default.div.withConfig({
                    componentId: "sc-pradxg-4"
                })(["display:flex;flex-direction:row;align-items:center;background-color:", ";border-radius:12px;white-space:nowrap;width:100%;cursor:pointer;:focus{border:1px solid blue;}"], (function(e) {
                    var t = e.theme;
                    e.active;
                    return t.bg1
                })),
                nl = (Object(Ni.default)(tl).withConfig({
                    componentId: "sc-pradxg-5"
                })(["color:white;padding:4px 8px;height:36px;font-weight:500;background-color:", ";background:radial-gradient(174.47% 188.91% at 1.84% 0%,#ff007a 0%,#2172e5 100%),#edeef2;"], (function(e) {
                    return e.theme.bg3
                })), Ni.default.span.withConfig({
                    componentId: "sc-pradxg-6"
                })(["width:fit-content;position:relative;cursor:pointer;:hover{opacity:0.8;}:active{opacity:0.9;}"]), Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-pradxg-7"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(Dd || (Dd = Object(Si.a)(["\n    display: none;\n  "])))
                }))),
                il = Ni.default.a.withConfig({
                    componentId: "sc-pradxg-8"
                })(["display:flex;align-items:center;pointer-events:auto;justify-self:flex-start;margin-right:12px;", ";:hover{cursor:pointer;}"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Wd || (Wd = Object(Si.a)(["\n    justify-self: center;\n  "])))
                })),
                rl = Ni.default.div.withConfig({
                    componentId: "sc-pradxg-9"
                })(["transition:transform 0.3s ease;:hover{transform:rotate(-5deg);}"]),
                ol = "ACTIVE",
                al = Object(Ni.default)(p.c).attrs({
                    activeClassName: ol
                }).withConfig({
                    componentId: "sc-pradxg-10"
                })(["", " align-items:left;border-radius:3rem;outline:none;cursor:pointer;text-decoration:none;color:", ";font-size:1rem;width:fit-content;font-weight:500;padding:8px 12px;word-break:break-word;&.", "{border-radius:12px;font-weight:600;color:", ";background-color:", ";}:hover,:focus{color:", ";}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text2
                }), ol, (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.text1)
                })),
                cl = Object(Ni.default)(ro).attrs({
                    activeClassName: ol
                }).withConfig({
                    componentId: "sc-pradxg-11"
                })(["", " align-items:left;border-radius:3rem;outline:none;cursor:pointer;text-decoration:none;color:", ";font-size:1rem;width:fit-content;margin:0 12px;font-weight:500;&.", "{border-radius:12px;font-weight:600;color:", ";}:hover,:focus{color:", ";text-decoration:none;}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text2
                }), ol, (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.text1)
                }));

            function sl() {
                var e, t = fe(),
                    n = t.account,
                    i = t.chainId,
                    o = null === (e = Ua(n ? [n] : [])) || void 0 === e ? void 0 : e[null !== n && void 0 !== n ? n : ""],
                    c = di(),
                    s = Object(j.a)(c, 1)[0],
                    u = (function(e) {
                        var t = na(),
                            n = Object(a.useMemo)((function() {
                                var n = Object.keys(t).find((function(n) {
                                    var i = t[n];
                                    return i.claim && i.claim.recipient === e
                                }));
                                return n && t[n] ? t[n] : void 0
                            }), [e, t]);
                        return {
                            claimSubmitted: Boolean(n),
                            claimTxn: n
                        }
                    }(null !== n && void 0 !== n ? n : void 0).claimTxn, Object(a.useState)(!1)),
                    d = Object(j.a)(u, 2),
                    l = d[0],
                    b = d[1],
                    p = Object($o.a)(),
                    h = I[i || r.MAINNET].infoLink;
                return Object(je.jsxs)(Xd, {
                    showBackground: p > 45,
                    children: [Object(je.jsx)(Sc, {
                        isOpen: l,
                        onDismiss: function() {
                            return b(!1)
                        },
                        children: Object(je.jsx)(Gd, {
                            setShowUniBalanceModal: b
                        })
                    }), Object(je.jsx)(il, {
                        href: ".",
                        children: Object(je.jsx)(rl, {
                            children: Object(je.jsx)("img", {
                                width: "24px",
                                src: s ? Fa : y,
                                alt: "logo"
                            })
                        })
                    }), Object(je.jsxs)(el, {
                        children: [Object(je.jsx)(al, {
                            id: "swap-nav-link",
                            to: "/swap",
                            children: Object(je.jsx)(f.b, {
                                id: "Swap"
                            })
                        
                        }), Object(je.jsxs)(cl, {
                            id: "stake-nav-link",
                            href: h,
                            children: [Object(je.jsx)(f.b, {
                                id: "Chart"
                            }), Object(je.jsx)("sup", {
                                children: "\u2197"
                            })]
                        })]
                    }), Object(je.jsxs)(Zd, {
                        children: [Object(je.jsx)(sd, {}), Object(je.jsxs)($d, {
                            children: [Object(je.jsxs)(tl, {
                                active: !!n,
                                style: {
                                    pointerEvents: "auto"
                                },
                                children: [n && o ? Object(je.jsx)(nl, {
                                    style: {
                                        flexShrink: 0
                                    },
                                    pl: "0.75rem",
                                    pr: "0.5rem",
                                    fontWeight: 500,
                                    children: Object(je.jsx)(f.b, {
                                        id: "{0} BNB",
                                        values: {
                                            0: null === o || void 0 === o ? void 0 : o.toSignificant(3)
                                        }
                                    })
                                }) : null, Object(je.jsx)(ed, {})]
                            }), Object(je.jsx)(hc, {})]
                        })]
                    })]
                })
            }
            var ul = Ni.default.div.withConfig({
                    componentId: "sc-123dig8-0"
                })(["position:fixed;display:flex;align-items:center;right:0;bottom:0;padding:1rem;color:", ";", ""], (function(e) {
                    return e.theme.green1
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Jd || (Jd = Object(Si.a)(["\n    display: none;\n  "])))
                })),
                dl = Object(Ni.default)(Eo).withConfig({
                    componentId: "sc-123dig8-1"
                })(["transition:opacity 0.25s ease;opacity:", ";:hover{opacity:1;}"], (function(e) {
                    var t = e.breathe;
                    return e.hovering ? .7 : t ? 1 : .5
                })),
                ll = Ni.default.div.withConfig({
                    componentId: "sc-123dig8-2"
                })(["width:8px;height:8px;min-height:8px;min-width:8px;margin-left:0.5rem;border-radius:50%;position:relative;background-color:", ";"], (function(e) {
                    return e.theme.green1
                })),
                bl = Object(Ni.keyframes)(Kd || (Kd = Object(Si.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                pl = Ni.default.div.withConfig({
                    componentId: "sc-123dig8-3"
                })(["animation:", " 1s cubic-bezier(0.83,0,0.17,1) infinite;transform:translateZ(0);border-top:1px solid transparent;border-right:1px solid transparent;border-bottom:1px solid transparent;border-left:2px solid ", ";background:transparent;width:14px;height:14px;border-radius:50%;position:relative;left:-3px;top:-3px;"], bl, (function(e) {
                    return e.theme.green1
                }));

            function fl() {
                var e = fe().chainId,
                    t = Gt(),
                    n = Object(a.useState)(!1),
                    i = Object(j.a)(n, 2),
                    r = i[0],
                    o = i[1],
                    c = Object(a.useState)(!1),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1];
                return Object(a.useEffect)((function() {
                    if (t) {
                        o(!0);
                        var e = setTimeout((function() {
                            return o(!1)
                        }), 1e3);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [t]), Object(je.jsx)(ro, {
                    href: e && t ? gs(e, t.toString(), vs.BLOCK) : "",
                    children: Object(je.jsxs)(ul, {
                        onMouseEnter: function() {
                            return d(!0)
                        },
                        onMouseLeave: function() {
                            return d(!1)
                        },
                        children: [Object(je.jsx)(dl, {
                            breathe: r,
                            hovering: u,
                            children: t
                        }), Object(je.jsx)(ll, {
                            children: r && Object(je.jsx)(pl, {})
                        })]
                    })
                })
            }
            var jl, hl = n(663),
                ml = Object(Ni.default)(Vo).withConfig({
                    componentId: "sc-13d9pmm-0"
                })(["flex-wrap:nowrap;"]);

            function xl(e) {
                var t = e.hash,
                    n = e.success,
                    i = e.summary,
                    r = fe().chainId,
                    o = Object(a.useContext)(Ni.ThemeContext);
                return Object(je.jsxs)(ml, {
                    children: [Object(je.jsx)("div", {
                        style: {
                            paddingRight: 16
                        },
                        children: n ? Object(je.jsx)(ks.a, {
                            color: o.green1,
                            size: 24
                        }) : Object(je.jsx)(hl.a, {
                            color: o.red1,
                            size: 24
                        })
                    }), Object(je.jsxs)(Lo, {
                        gap: "8px",
                        children: [Object(je.jsx)(Co, {
                            fontWeight: 500,
                            children: null !== i && void 0 !== i ? i : "Hash: " + t.slice(0, 8) + "..." + t.slice(58, 65)
                        }), r && Object(je.jsx)(ro, {
                            href: gs(r, t, vs.TRANSACTION),
                            children: "View on Explorer"
                        })]
                    })]
                })
            }
            var vl, Ol, gl = Object(Ni.default)(Br.a).withConfig({
                    componentId: "sc-a10u6v-0"
                })(["position:absolute;right:10px;top:10px;:hover{cursor:pointer;}"]),
                yl = Ni.default.div.withConfig({
                    componentId: "sc-a10u6v-1"
                })(["display:inline-block;width:100%;padding:1em;background-color:", ";position:relative;border-radius:10px;padding:20px;padding-right:35px;overflow:hidden;", ""], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(jl || (jl = Object(Si.a)(["\n    min-width: 290px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  "])))
                })),
                wl = Ni.default.div.withConfig({
                    componentId: "sc-a10u6v-2"
                })(["position:absolute;bottom:0px;left:0px;width:100%;height:2px;background-color:", ";"], (function(e) {
                    return e.theme.bg3
                })),
                kl = Object(yc.a)(wl);

            function Cl(e) {
                var t = e.removeAfterMs,
                    n = e.content,
                    i = e.popKey,
                    r = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t) {
                            e(Qt({
                                key: t
                            }))
                        }), [e])
                    }(),
                    o = Object(a.useCallback)((function() {
                        return r(i)
                    }), [i, r]);
                Object(a.useEffect)((function() {
                    if (null !== t) {
                        var e = setTimeout((function() {
                            o()
                        }), t);
                        return function() {
                            clearTimeout(e)
                        }
                    }
                }), [t, o]);
                var c, s = Object(a.useContext)(Ni.ThemeContext);
                if ("txn" in n) {
                    var u = n.txn,
                        d = u.hash,
                        l = u.success,
                        b = u.summary;
                    c = Object(je.jsx)(xl, {
                        hash: d,
                        success: l,
                        summary: b
                    })
                }
                var p = Object(yc.b)({
                    from: {
                        width: "100%"
                    },
                    to: {
                        width: "0%"
                    },
                    config: {
                        duration: null !== t && void 0 !== t ? t : void 0
                    }
                });
                return Object(je.jsxs)(yl, {
                    children: [Object(je.jsx)(gl, {
                        color: s.text2,
                        onClick: o
                    }), c, null !== t ? Object(je.jsx)(kl, {
                        style: p
                    }) : null]
                })
            }
            var Tl = Ni.default.div.withConfig({
                    componentId: "sc-fo3pji-0"
                })(["position:relative;max-width:100%;height:", ";margin:", ";margin-bottom:", "};display:none;", ";"], (function(e) {
                    return e.height
                }), (function(e) {
                    return e.height ? "0 auto;" : 0
                }), (function(e) {
                    return e.height ? "20px" : 0
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(vl || (vl = Object(Si.a)(["\n    display: block;\n  "])))
                })),
                Il = Ni.default.div.withConfig({
                    componentId: "sc-fo3pji-1"
                })(["height:99%;overflow-x:auto;overflow-y:hidden;display:flex;flex-direction:row;-webkit-overflow-scrolling:touch;::-webkit-scrollbar{display:none;}"]),
                Al = "@media screen and (min-width: ".concat(ho.upToMedium + 1, "px) and (max-width: ").concat(ho.upToMedium + 500, "px)"),
                El = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-fo3pji-2"
                })(["position:fixed;top:", ";right:1rem;max-width:355px !important;width:100%;z-index:3;", ";", "{top:", ";}"], (function(e) {
                    return e.extraPadding ? "64px" : "56px"
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(Ol || (Ol = Object(Si.a)(["\n    display: none;\n  "])))
                }), Al, (function(e) {
                    var t = e.extraPadding;
                    return e.xlPadding || t ? "64px" : "56px"
                }));

            function Sl() {
                var e = function() {
                        var e = Ne((function(e) {
                            return e.application.popupList
                        }));
                        return Object(a.useMemo)((function() {
                            return e.filter((function(e) {
                                return e.show
                            }))
                        }), [e])
                    }(),
                    t = Ne((function(e) {
                        return e.user.URLWarningVisible
                    })),
                    n = fe().chainId,
                    i = Boolean(n && n !== r.MAINNET);
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsx)(El, {
                        gap: "20px",
                        extraPadding: t,
                        xlPadding: i,
                        children: e.map((function(e) {
                            return Object(je.jsx)(Cl, {
                                content: e.content,
                                popKey: e.key,
                                removeAfterMs: e.removeAfterMs
                            }, e.key)
                        }))
                    }), Object(je.jsx)(Tl, {
                        height: (null === e || void 0 === e ? void 0 : e.length) > 0 ? "fit-content" : 0,
                        children: Object(je.jsx)(Il, {
                            children: e.slice(0).reverse().map((function(e) {
                                return Object(je.jsx)(Cl, {
                                    content: e.content,
                                    popKey: e.key,
                                    removeAfterMs: e.removeAfterMs
                                }, e.key)
                            }))
                        })
                    })]
                })
            }
            var Nl = Ni.default.div.withConfig({
                    componentId: "sc-1bdulxg-0"
                })(["display:flex;align-items:center;justify-content:center;height:20rem;"]),
                Rl = Ni.default.h2.withConfig({
                    componentId: "sc-1bdulxg-1"
                })(["color:", ";"], (function(e) {
                    return e.theme.secondary1
                }));

            function Ul(e) {
                var t = e.children,
                    n = Object(o.useWeb3React)().active,
                    i = Object(o.useWeb3React)(Z),
                    r = i.active,
                    c = i.error,
                    u = i.activate,
                    d = function() {
                        var e = Object(o.useWeb3React)(),
                            t = e.activate,
                            n = e.active,
                            i = Object(a.useState)(!1),
                            r = Object(j.a)(i, 2),
                            c = r[0],
                            u = r[1],
                            d = Object(h.useSafeAppConnection)(H);
                        return Object(a.useEffect)((function() {
                            d && !n && _.isAuthorized().then((function(e) {
                                e || s.isMobile && window.ethereum ? t(_, void 0, !0).catch((function() {
                                    u(!0)
                                })) : u(!0)
                            }))
                        }), [t, n, d]), Object(a.useEffect)((function() {
                            n && d && u(!0)
                        }), [n, d]), c
                    }();
                Object(a.useEffect)((function() {
                        !d || r || c || n || u(Y)
                    }), [d, r, c, u, n]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = Object(o.useWeb3React)(),
                            n = t.active,
                            i = t.error,
                            r = t.activate;
                        Object(a.useEffect)((function() {
                            var t = window.ethereum;
                            if (t && t.on && !n && !i && !e) {
                                var o = function() {
                                        r(_, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    a = function(e) {
                                        e.length > 0 && r(_, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return t.on("chainChanged", o), t.on("accountsChanged", a),
                                    function() {
                                        t.removeListener && (t.removeListener("chainChanged", o), t.removeListener("accountsChanged", a))
                                    }
                            }
                        }), [n, i, e, r])
                    }(!d);
                var l = Object(a.useState)(!1),
                    b = Object(j.a)(l, 2),
                    p = b[0],
                    m = b[1];
                return Object(a.useEffect)((function() {
                    var e = setTimeout((function() {
                        m(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), d ? !n && c ? Object(je.jsx)(Nl, {
                    children: Object(je.jsx)(Rl, {
                        children: Object(je.jsx)(f.b, {
                            id: "Oops! An unknown error occurred. Please refresh the page, or visit from another browser or device."
                        })
                    })
                }) : n || r ? t : p ? Object(je.jsx)(Nl, {
                    children: Object(je.jsx)(as, {})
                }) : null : null
            }

            function Bl(e) {
                var t = e.location.search,
                    n = Se();
                return Object(a.useEffect)((function() {
                    if (t && !(t.length < 2)) {
                        var e = Object(Oi.parse)(t, {
                            parseArrays: !1,
                            ignoreQueryPrefix: !0
                        }).theme;
                        "string" === typeof e && ("light" === e.toLowerCase() ? n(Kn({
                            userDarkMode: !1
                        })) : "dark" === e.toLowerCase() && n(Kn({
                            userDarkMode: !0
                        })))
                    }
                }), [n, t]), null
            }
            var Ml = n(671),
                Pl = n(665),
                Ll = n(666),
                zl = n.p + "static/media/blue-loader.249140da.svg",
                Dl = n.p + "static/media/ScrappyInu.png",
                Wl = n(210),
                ql = n.n(Wl),
                Fl = n(133),
                Yl = n(117);
            var Vl = new TextDecoder("utf-8");

            function _l(e) {
                var t = function(e) {
                        if ((e = e.startsWith("0x") ? e.substr(2) : e).length % 2 !== 0) throw new Error("hex must have length that is multiple of 2");
                        for (var t = new Uint8Array(e.length / 2), n = 0; n < t.length; n++) t[n] = parseInt(e.substr(2 * n, 2), 16);
                        return t
                    }(e),
                    n = Object(Fl.getCodec)(t);
                switch (n) {
                    case "ipfs-ns":
                        var i = Object(Fl.rmPrefix)(t),
                            r = new ql.a(i);
                        return "ipfs://".concat(Object(Yl.toB58String)(r.multihash));
                    case "ipns-ns":
                        var o = Object(Fl.rmPrefix)(t),
                            a = new ql.a(o),
                            c = Object(Yl.decode)(a.multihash);
                        return "identity" === c.name ? "ipns://".concat(Vl.decode(c.digest).trim()) : "ipns://".concat(Object(Yl.toB58String)(a.multihash));
                    default:
                        throw new Error("Unrecognized codec: ".concat(n))
                }
            }
            var Hl = /^(([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+)eth(\/.*)?$/;

            function Ql(e) {
                var t = e.match(Hl);
                if (t) return {
                    ensName: "".concat(t[1].toLowerCase(), "eth"),
                    ensPath: t[4]
                }
            }

            function Gl(e) {
                var t, n;
                switch (e.split(":")[0].toLowerCase()) {
                    case "https":
                        return [e];
                    case "http":
                        return ["https" + e.substr(4), e];
                    case "ipfs":
                        var i = null === (t = e.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === t ? void 0 : t[2];
                        return ["https://cloudflare-ipfs.com/ipfs/".concat(i, "/"), "https://ipfs.io/ipfs/".concat(i, "/")];
                    case "ipns":
                        var r = null === (n = e.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === n ? void 0 : n[2];
                        return ["https://cloudflare-ipfs.com/ipns/".concat(r, "/"), "https://ipfs.io/ipns/".concat(r, "/")];
                    default:
                        return []
                }
            }

            function Jl(e) {
                var t = Object(a.useMemo)((function() {
                        return e ? Ql(e) : void 0
                    }), [e]),
                    n = function(e) {
                        var t, n, i, r = Object(a.useMemo)((function() {
                                if (!e) return [void 0];
                                try {
                                    return e ? [Object(ft.namehash)(e)] : [void 0]
                                } catch (t) {
                                    return [void 0]
                                }
                            }), [e]),
                            o = hn(Rn(!1), "resolver", r),
                            c = null === (t = o.result) || void 0 === t ? void 0 : t[0],
                            s = hn(Un(c && ra(c) ? void 0 : c, !1), "contenthash", r);
                        return {
                            contenthash: null !== (n = null === (i = s.result) || void 0 === i ? void 0 : i[0]) && void 0 !== n ? n : null,
                            loading: o.loading || s.loading
                        }
                    }(null === t || void 0 === t ? void 0 : t.ensName);
                return Object(a.useMemo)((function() {
                    return t ? n.contenthash ? Gl(_l(n.contenthash)) : [] : e ? Gl(e) : []
                }), [t, n.contenthash, e])
            }
            var Kl = n(664),
                Xl = ["srcs", "alt", "style"],
                Zl = {};

            function $l(e) {
                var t = e.srcs,
                    n = e.alt,
                    i = e.style,
                    r = Object(Rr.a)(e, Xl),
                    o = Object(a.useState)(0),
                    c = Object(j.a)(o, 2)[1],
                    s = Pc(),
                    u = t.find((function(e) {
                        return !Zl[e]
                    }));
                return u ? Object(je.jsx)("img", Object(He.a)(Object(He.a)({}, r), {}, {
                    alt: n,
                    src: u,
                    style: i,
                    onError: function() {
                        u && (Zl[u] = !0), c((function(e) {
                            return e + 1
                        }))
                    }
                })) : Object(je.jsx)(Kl.a, Object(He.a)(Object(He.a)({}, r), {}, {
                    style: Object(He.a)(Object(He.a)({}, i), {}, {
                        color: s.bg4
                    })
                }))
            }
            var eb = ["currency", "size", "style"],
                tb = function(e) {
                    return "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(e, "/logo.png")
                },
                nb = Ni.default.img.withConfig({
                    componentId: "sc-1fvnadz-0"
                })(["width:", ";height:", ";box-shadow:0px 6px 10px rgba(0,0,0,0.075);border-radius:24px;"], (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                })),
                ib = Object(Ni.default)($l).withConfig({
                    componentId: "sc-1fvnadz-1"
                })(["width:", ";height:", ";border-radius:", ";box-shadow:0px 6px 10px rgba(0,0,0,0.075);background-color:", ";"], (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.theme.white
                }));

            function rb(e) {
                var t, n = e.currency,
                    i = e.size,
                    o = void 0 === i ? "24px" : i,
                    c = e.style,
                    s = Object(Rr.a)(e, eb),
                    u = Jl(n instanceof St ? n.logoURI : void 0),
                    d = Object(a.useMemo)((function() {
                        if (!n || n.isNative) return [];
                        if (n.isToken) {
                            var e = n.chainId === r.MAINNET ? [tb(n.address)] : [];
                            return n instanceof St ? [].concat(Object(_e.a)(u), e) : e
                        }
                        return []
                    }), [n, u]);
                return (null === n || void 0 === n ? void 0 : n.isNative) ? Object(je.jsx)(nb, Object(He.a)({
                    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAAw1BMVEUAAADvrxDvtQXvtgrvtwvvtwrxuQvxuAvwugvwuQrwuQvvtwjwuQvwugvwuQrvuAnvtwjxugvxuwrwuQvxugnvugvwuQvxuwvyuQvxuQrwuwrvtg333IX////vtwzvtQvvuQrwuAvvtgv65aP65KPvuQ3vvxD313b22Hbywin99uHvuAvwugvywSr55KP99uD55aP54JTvuQrvtwrxvRv88tH43IX44ZTvuAr32HbwuArvuAzvuQzvuAvvtwzvtwvvtgsiwARjAAAAQXRSTlMAEDBQYICPn7/f/0DP769wIJ9/328w749ff69Q//9AMIC/cP//UBD/////kM///////1Cg/////7D/r5CAcICgkHLBkJ0AAAjTSURBVHja3NXVgQQhGAPgUSQ4rEv/ZZ4/nzOB/TrIr8PWxmleViGV0lrjg9ZaKSnWxUzjQFM/+SKkdfiCs36dzaNlN0Fq/Ij1wYyPEX4RFr9kxRw777zQ+COb5rHT9EE5/A+1xO7SZ4V/pULsqveooJc5MMqhljS3P/oOVZVdy2NgPDaQTLOzj42oZWjPorGhsvQfn18Cfnx+Cfi7338J9gpEPg5cowBZopZg50BXFvL08xXSEGQ0IzPab0HEH4IMIv4QRIvmlMg9/nyHQP79fMdxk/HXIOKvwcmhYYdlqOwMIv43GC9onh9Z6//4h2BPzc+vgHHoxOFa5fyjI4F8/vkyOT9fJufny+T8fJmcny/3kP92o1aAn/9+b74Cu2di7MK4FRgIoOAHMzMz9V9iCggompv1lbBPLOu3BTZx/976dYFT+P0zpH5eYHWOvv+oP1jAv4z+er8vEPkf2Hm/LzAKHIDUHy3gD8MG9b+xwCZyAHi/L7CaBDZA5A8X8BthS/rfXWAdugF7vy8wDmwAwB8u4LeBLvSnFBiAGwDwwwKXqgUA/WkFzmABAL8rMAALAPhhgQtYAMAPC5zBAgB+V6AD3kDADwuMwScQ8LsCq9+8CabKDwqIN8FE+UEBsg+OkB8UIPtgw/rzC5zAEQj8rkAHTADghwUaYAIAvyswBxMA+GGBBpgAwO8KzMEEAH5YoFGYAMAPCogp0AB+UMDdBa7ADwqwu0Af+EEBNwWmCf6kAiPwDAR+WOCrf4Fbiv/+SClwqTgDrb/XSymw+ux/JvkrCthtcJrjzyrQqdgCpb+yAPwebaT4EwuMy7dA788s0CmuAO93BeqvAuMEf3KBS2EFcH92gU5hBWh/oABYA40Ef3qBcWEFUD8oEFkDr0y/L1C+C30QdxdZbsQAAEQVIoVxFWbG4fsfLLvZ/nld1rNuUN8NUpN3sg74dPH+LvB5J+uB3a4Dvny9aH8X+Pplzj6+nQPcmQsE0A8B9/fxGCfBIOB+C7i/nwhxCMgC7reA+/sdkm9zgQD6KeD+Pr7hEBAE1G8B9/fxHbOAKuB+C7i/HwRuzwUC6reA+/t4iaVwFHC/BdzflwP35gIB9VvA/X3cwDEwCrjfAu7vU6GJEQTQDwH396MgjoFBwP0WUH8flzEPrALu//EDAurvc8Frm9f/Pyng/l+/KOD+38/LXPDe9usfFHD/ixcUcD+ukOA0cCdc/6GA+yngflwj0mT47vZ+C7jfAu7fLvAMKwH0W8D9FmB/Ebg0XoV+CvxxvwWeoz8JXB63Qz8F0H9BAfQngb/jauiHAPst4P4ocHVcC/0QUL8F3F8Fro1voR8C6LeA+7PAt/Ev9EMA/RRwfxe4Md6EfgignwLu7wI3AYB+CKBfAu63gAFuhX4IoJ8C7u8CjwGAfgigHwLoh0ABcL8F3G8B91vAABv6g8DB4YsXGwTQXwRG6IeA+i3g/i4wQj8E1G8B93eBUfot4H4LuN8CHeBow/Mvvl+A+1/lKZqjDGAB91vA/RZwvwG6gPst4H4LuN8AFnC/BdxvAfcb4FYVcL8F3G8B9/ep8BH6q4D7LeB+A1jA/RZwvwXcb4A3MwigHwLohwD6y/UAC7jfAu63gPsN8G8GAfRDQP0WcL8viX2bQQD9EEC/BXr//DauzSCAfgio3wK5f17DjREIoB8C7LdA7Z9X8YAIBNAPAfdbIPbPl7g5CgH0HxxZwP3HuHuOft0c/TiDAO///5SA+3/j7jn6/ZjY3SCg/hcWcP8LCJT+Z3hEBgLut4D7KYB+PSLzb24WcL8F3G+Bzf3zpLwuceT+FxZw/wsLbO2f19pbo+63APohUMffMcarlf0WQP9igZd4YaT0W8D9ywXw/ZzYbwH3W6C/NPRvRb8F3L9e4ASvzMR+C7jfAv2VmZcr+i3g/vUCL/HaXO23gPst0N+dvbOgnwLuXy/wHa/O5n4LuN8C/dXZqwv6KeD+9QJ/8QWN0G8B968XeIBPCYZ+C7jfAv0QgINA6beA+y3Q3xvFTCB8RAUC6Mc43eUhYIyPd+fs4ygIoB/X/8MsIHxIKQrsv/9m/JhcF+j9/Qsi4URYBXp/Pwn2faAL9P6+B4QXiINA7u9L4bIPdIHc3/eAtA90gdzf94B0HugCvb+fA8pcqAuk/r4H5H2gC+T+vg5I64EukPv7OuB83N2LQOnvnxLsU4EuEPr7JKBPBbpA7e+HwPNxth+B3t8Pgf0w2AV6f/+npTd7EAj9aRYYNoEo0Pv7uBr+bK0L7L//cfq7vS7Q+/sGEDaBLND7+wYQNoEu0Pv7BhA2gS7Q+/sG0DeBLtD7+wbQ5wJdoPf3DaDPBbpA7+8bQN8EusD6/nvq/19eHeQ6CgNBGC5LjiK3MGkJsRrJkiORI7CYJIT7n2o2s38Ar9wmfDf4i3aCXhjGSvpF8aMnbwH7/it+9oisBez7O8UCd6EY7fvFY5FMWsC8v8MyvXCMxv2iWOjCWsC2/4XFGtYClv0dluuFZLTrF8UKF9oCZv0vrNLQFjDq77CORtoCJv1RsdJdWEaDfnljtSdvgfL9T6z3CLwFSvd3Dhto5C1Qtj8qNvFCM5bsF4+NJuICBftf2KzlL8Dvb7HdI7AX4Pd3DjsoewF+v2KXPjIX4PdHxU5JeEZ6v/zBbp65ALv/jV8wMRfg9r+A6hcw7rdfwL7ffoH6+4Hp5P3AdPJ+YDp5P3CXA/EgGKIcREyg0CCH0PXAmRfoFDSPVqrXOjBNUrkXyHyUikUPOg11P3++x1Mq9XQo4x6lQvENovqfQaMoaZLKTCCq/wiaHuVN1X3+sx5B7mHFh7p//Pn0U/l/P5/+reX6T/gOcoId+wk6j3r4YJ5vP4Fxvj2fjd++vfSRAtqEeuk7CFWcHCo3fHj1OeEI1GchyDeHw9Bb/uV6u9O3v4NI+vZ8bvg0slOYk8OR6TBvHqGZvcM3cOnWrlwhXG/J4buk4dI2UX4Qm+vse4ev5frkL/M15xCC/BdCyPk6X/xQvvwfYK8YLXn+AjoAAAAASUVORK5CYII=",
                    size: o,
                    style: c
                }, s)) : (null === n || void 0 === n ? void 0 : n.equals(it[r.MAINNET])) || (null === n || void 0 === n ? void 0 : n.equals(it[r.TESTNET])) ? Object(je.jsx)(nb, Object(He.a)({
                    src: Dl,
                    size: o,
                    style: c
                }, s)) : Object(je.jsx)(ib, Object(He.a)({
                    size: o,
                    srcs: d,
                    alt: "".concat(null !== (t = null === n || void 0 === n ? void 0 : n.symbol) && void 0 !== t ? t : "token", " logo"),
                    style: c
                }, s))
            }
            var ob = Ni.default.div.withConfig({
                    componentId: "sc-12bigbw-0"
                })(["width:100%;padding:1rem;"]),
                ab = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-12bigbw-1"
                })(["padding:", ";"], (function(e) {
                    e.inline;
                    return "0"
                })),
                cb = Object(Ni.default)(ab).withConfig({
                    componentId: "sc-12bigbw-2"
                })(["border-bottom-left-radius:20px;border-bottom-right-radius:20px;"]),
                sb = Object(Ni.default)(Po).withConfig({
                    componentId: "sc-12bigbw-3"
                })(["padding:", ";"], (function(e) {
                    return e.inline ? "20px 0" : "32px 0;"
                })),
                ub = Ni.default.img.withConfig({
                    componentId: "sc-12bigbw-4"
                })(["height:16px;width:16px;margin-left:6px;"]);

            function db(e) {
                var t = e.onDismiss,
                    n = e.pendingText,
                    i = e.inline;
                return Object(je.jsx)(ob, {
                    children: Object(je.jsxs)(Lo, {
                        gap: "md",
                        children: [!i && Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)("div", {}), Object(je.jsx)(Qr, {
                                onClick: t
                            })]
                        }), Object(je.jsx)(sb, {
                            inline: i,
                            children: Object(je.jsx)(po, {
                                src: zl,
                                alt: "loader",
                                size: i ? "40px" : "90px"
                            })
                        }), Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: "center",
                                children: Object(je.jsx)(f.b, {
                                    id: "Waiting For Confirmation"
                                })
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 400,
                                fontSize: 16,
                                textAlign: "center",
                                children: n
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 14,
                                color: "#565A69",
                                textAlign: "center",
                                marginBottom: "12px",
                                children: Object(je.jsx)(f.b, {
                                    id: "Confirm this transaction in your wallet"
                                })
                            })]
                        })]
                    })
                })
            }

            function lb(e) {
                var t, n = e.onDismiss,
                    i = e.chainId,
                    r = e.hash,
                    o = e.currencyToAdd,
                    c = e.inline,
                    s = Object(a.useContext)(Ni.ThemeContext),
                    u = fe().library,
                    d = function(e) {
                        var t = fe().library,
                            n = null === e || void 0 === e ? void 0 : e.wrapped,
                            i = Object(a.useState)(),
                            r = Object(j.a)(i, 2),
                            o = r[0],
                            c = r[1];
                        return {
                            addToken: Object(a.useCallback)((function() {
                                t && t.provider.isMetaMask && t.provider.request && n ? t.provider.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                        type: "ERC20",
                                        options: {
                                            address: n.address,
                                            symbol: n.symbol,
                                            decimals: n.decimals,
                                            image: tb(n.address)
                                        }
                                    }
                                }).then((function(e) {
                                    c(e)
                                })).catch((function() {
                                    return c(!1)
                                })) : c(!1)
                            }), [t, n]),
                            success: o
                        }
                    }(o),
                    l = d.addToken,
                    b = d.success;
                return Object(je.jsx)(ob, {
                    children: Object(je.jsxs)(ab, {
                        inline: c,
                        children: [!c && Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)("div", {}), Object(je.jsx)(Qr, {
                                onClick: n
                            })]
                        }), Object(je.jsx)(sb, {
                            inline: c,
                            children: Object(je.jsx)(Pl.a, {
                                strokeWidth: .5,
                                size: c ? "40px" : "90px",
                                color: s.primary1
                            })
                        }), Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 20,
                                textAlign: "center",
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction Submitted"
                                })
                            }), i && r && Object(je.jsx)(ro, {
                                href: gs(i, r, vs.TRANSACTION),
                                children: Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 14,
                                    color: s.primary1,
                                    children: Object(je.jsx)(f.b, {
                                        id: "View on Explorer"
                                    })
                                })
                            }), o && (null === u || void 0 === u || null === (t = u.provider) || void 0 === t ? void 0 : t.isMetaMask) && Object(je.jsx)(Fc, {
                                mt: "12px",
                                padding: "6px 12px",
                                width: "fit-content",
                                onClick: l,
                                children: b ? Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(f.b, {
                                        id: "Added {0}",
                                        values: {
                                            0: o.symbol
                                        }
                                    }), Object(je.jsx)(ks.a, {
                                        size: "16px",
                                        stroke: s.green1,
                                        style: {
                                            marginLeft: "6px"
                                        }
                                    })]
                                }) : Object(je.jsx)(_o, {
                                    children: Object(je.jsx)(f.b, {
                                        id: "Add {0} to Metamask <0/>",
                                        values: {
                                            0: o.symbol
                                        },
                                        components: {
                                            0: Object(je.jsx)(ub, {
                                                src: us
                                            })
                                        }
                                    })
                                })
                            }), Object(je.jsx)(qc, {
                                onClick: n,
                                style: {
                                    margin: "20px 0 0 0"
                                },
                                children: Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 20,
                                    children: c ? Object(je.jsx)(f.b, {
                                        id: "Return"
                                    }) : Object(je.jsx)(f.b, {
                                        id: "Close"
                                    })
                                })
                            })]
                        })]
                    })
                })
            }

            function bb(e) {
                var t = e.title,
                    n = e.bottomContent,
                    i = e.onDismiss,
                    r = e.topContent;
                return Object(je.jsxs)(ob, {
                    children: [Object(je.jsxs)(ab, {
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 16,
                                children: t
                            }), Object(je.jsx)(Qr, {
                                onClick: i
                            })]
                        }), r()]
                    }), n && Object(je.jsx)(cb, {
                        gap: "12px",
                        children: n()
                    })]
                })
            }

            function pb(e) {
                var t = e.message,
                    n = e.onDismiss,
                    i = Object(a.useContext)(Ni.ThemeContext);
                return Object(je.jsxs)(ob, {
                    children: [Object(je.jsxs)(ab, {
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Error"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: n
                            })]
                        }), Object(je.jsxs)(Lo, {
                            style: {
                                marginTop: 20,
                                padding: "2rem 0"
                            },
                            gap: "24px",
                            justify: "center",
                            children: [Object(je.jsx)(Ll.a, {
                                color: i.red1,
                                style: {
                                    strokeWidth: 1.5
                                },
                                size: 64
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 16,
                                color: i.red1,
                                style: {
                                    textAlign: "center",
                                    width: "85%",
                                    wordBreak: "break-word"
                                },
                                children: t
                            })]
                        })]
                    }), Object(je.jsx)(cb, {
                        gap: "12px",
                        children: Object(je.jsx)(qc, {
                            onClick: n,
                            children: Object(je.jsx)(f.b, {
                                id: "Dismiss"
                            })
                        })
                    })]
                })
            }

            function fb(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    i = e.attemptingTxn,
                    r = e.hash,
                    o = e.pendingText,
                    a = e.content,
                    c = e.currencyToAdd,
                    s = fe().chainId;
                return s ? Object(je.jsx)(Sc, {
                    isOpen: t,
                    onDismiss: n,
                    maxHeight: 90,
                    children: i ? Object(je.jsx)(db, {
                        onDismiss: n,
                        pendingText: o
                    }) : r ? Object(je.jsx)(lb, {
                        chainId: s,
                        hash: r,
                        onDismiss: n,
                        currencyToAdd: c
                    }) : a()
                }) : null
            }

            function jb(e) {
                if (e.isNative) return "BNB";
                if (e.isToken) return e.address;
                throw new Error("invalid currency")
            }
            var hb = n(675);

            function mb(e, t) {
                var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = Object(a.useRef)();
                Object(a.useEffect)((function() {
                    i.current = e
                }), [e]), Object(a.useEffect)((function() {
                    function e() {
                        var e = i.current;
                        e && e()
                    }
                    if (null !== t) {
                        n && e();
                        var r = setInterval(e, t);
                        return function() {
                            return clearInterval(r)
                        }
                    }
                }), [t, n])
            }
            var xb = n(170),
                vb = Ni.default.div.withConfig({
                    componentId: "sc-d5tbhs-0"
                })(["z-index:9999;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";border:1px solid ", ";box-shadow:0 4px 8px 0 ", ";color:", ";border-radius:8px;"], (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.c)(.9, t.shadow1)
                }), (function(e) {
                    return e.theme.text2
                })),
                Ob = Ni.default.div.withConfig({
                    componentId: "sc-d5tbhs-1"
                })(["display:inline-block;"]),
                gb = Ni.default.div.withConfig({
                    componentId: "sc-d5tbhs-2"
                })(["width:8px;height:8px;z-index:9998;::before{position:absolute;width:8px;height:8px;z-index:9998;content:'';border:1px solid ", ";transform:rotate(45deg);background:", ";}&.arrow-top{bottom:-5px;::before{border-top:none;border-left:none;}}&.arrow-bottom{top:-5px;::before{border-bottom:none;border-right:none;}}&.arrow-left{right:-5px;::before{border-bottom:none;border-left:none;}}&.arrow-right{left:-5px;::before{border-right:none;border-top:none;}}"], (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg2
                }));

            function yb(e) {
                var t, n, i = e.content,
                    r = e.show,
                    o = e.children,
                    c = e.placement,
                    s = void 0 === c ? "auto" : c,
                    u = Object(a.useState)(null),
                    d = Object(j.a)(u, 2),
                    l = d[0],
                    b = d[1],
                    p = Object(a.useState)(null),
                    f = Object(j.a)(p, 2),
                    h = f[0],
                    m = f[1],
                    x = Object(a.useState)(null),
                    v = Object(j.a)(x, 2),
                    O = v[0],
                    g = v[1],
                    y = Object(hb.a)(l, h, {
                        placement: s,
                        strategy: "fixed",
                        modifiers: [{
                            name: "offset",
                            options: {
                                offset: [8, 8]
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: O
                            }
                        }]
                    }),
                    w = y.styles,
                    k = y.update,
                    C = y.attributes;
                return mb(Object(a.useCallback)((function() {
                    k && k()
                }), [k]), r ? 100 : null), Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsx)(Ob, {
                        ref: b,
                        children: o
                    }), Object(je.jsx)(xb.a, {
                        children: Object(je.jsxs)(vb, Object(He.a)(Object(He.a)({
                            show: r,
                            ref: m,
                            style: w.popper
                        }, C.popper), {}, {
                            children: [i, Object(je.jsx)(gb, Object(He.a)({
                                className: "arrow-".concat(null !== (t = null === (n = C.popper) || void 0 === n ? void 0 : n["data-popper-placement"]) && void 0 !== t ? t : ""),
                                ref: g,
                                style: w.arrow
                            }, C.arrow))]
                        }))
                    })]
                })
            }
            var wb = ["text"],
                kb = ["content"],
                Cb = ["children"],
                Tb = ["content", "children"],
                Ib = Ni.default.div.withConfig({
                    componentId: "sc-1g1kijt-0"
                })(["width:256px;padding:0.6rem 1rem;font-weight:400;word-break:break-word;"]);

            function Ab(e) {
                var t = e.text,
                    n = Object(Rr.a)(e, wb);
                return Object(je.jsx)(yb, Object(He.a)({
                    content: Object(je.jsx)(Ib, {
                        children: t
                    })
                }, n))
            }

            function Eb(e) {
                var t = e.content,
                    n = Object(Rr.a)(e, kb);
                return Object(je.jsx)(yb, Object(He.a)({
                    content: Object(je.jsx)(Ib, {
                        children: t
                    })
                }, n))
            }

            function Sb(e) {
                var t = e.children,
                    n = Object(Rr.a)(e, Cb),
                    i = Object(a.useState)(!1),
                    r = Object(j.a)(i, 2),
                    o = r[0],
                    c = r[1],
                    s = Object(a.useCallback)((function() {
                        return c(!0)
                    }), [c]),
                    u = Object(a.useCallback)((function() {
                        return c(!1)
                    }), [c]);
                return Object(je.jsx)(Ab, Object(He.a)(Object(He.a)({}, n), {}, {
                    show: o,
                    children: Object(je.jsx)("div", {
                        onMouseEnter: s,
                        onMouseLeave: u,
                        children: t
                    })
                }))
            }

            function Nb(e) {
                var t = e.content,
                    n = e.children,
                    i = Object(Rr.a)(e, Tb),
                    r = Object(a.useState)(!1),
                    o = Object(j.a)(r, 2),
                    c = o[0],
                    s = o[1],
                    u = Object(a.useCallback)((function() {
                        return s(!0)
                    }), [s]),
                    d = Object(a.useCallback)((function() {
                        return s(!1)
                    }), [s]);
                return Object(je.jsx)(Eb, Object(He.a)(Object(He.a)({}, i), {}, {
                    show: c,
                    content: t,
                    children: Object(je.jsx)("div", {
                        style: {
                            display: "inline-block",
                            lineHeight: 0,
                            padding: "0.25rem"
                        },
                        onMouseEnter: u,
                        onMouseLeave: d,
                        children: n
                    })
                }))
            }
            var Rb, Ub = Ni.default.div.withConfig({
                    componentId: "sc-bjeulj-0"
                })(["display:flex;align-items:center;justify-content:center;padding:0px;width:18px;height:18px;border:none;background:none;outline:none;cursor:default;border-radius:36px;font-size:12px;background-color:", ";color:", ";:hover,:focus{opacity:0.7;}"], (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.text2
                })),
                Bb = Ni.default.span.withConfig({
                    componentId: "sc-bjeulj-1"
                })(["font-size:14px;"]);

            function Mb(e) {
                var t = e.text,
                    n = Object(a.useState)(!1),
                    i = Object(j.a)(n, 2),
                    r = i[0],
                    o = i[1],
                    c = Object(a.useCallback)((function() {
                        return o(!0)
                    }), [o]),
                    s = Object(a.useCallback)((function() {
                        return o(!1)
                    }), [o]);
                return Object(je.jsx)("span", {
                    style: {
                        marginLeft: 4,
                        display: "flex",
                        alignItems: "center"
                    },
                    children: Object(je.jsx)(Ab, {
                        text: t,
                        show: r,
                        children: Object(je.jsx)(Ub, {
                            onClick: c,
                            onMouseEnter: c,
                            onMouseLeave: s,
                            children: Object(je.jsx)(Bb, {
                                children: "?"
                            })
                        })
                    })
                })
            }
            var Pb = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-jm24e0-0"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Rb || (Rb = Object(Si.a)(["\n    display: none;\n  "])))
                })),
                Lb = Ni.default.div.withConfig({
                    componentId: "sc-jm24e0-1"
                })(["border:1px solid ", ";border-radius:10px;display:flex;padding:6px;align-items:center;:hover{cursor:", ";background-color:", ";}color:", ";background-color:", ";filter:", ";"], (function(e) {
                    var t = e.theme;
                    return e.disable ? "transparent" : t.bg3
                }), (function(e) {
                    return !e.disable && "pointer"
                }), (function(e) {
                    var t = e.theme;
                    return !e.disable && t.bg2
                }), (function(e) {
                    var t = e.theme;
                    return e.disable && t.text3
                }), (function(e) {
                    var t = e.theme;
                    return e.disable && t.bg3
                }), (function(e) {
                    return e.disable && "grayscale(1)"
                }));

            function zb(e) {
                var t, n = e.chainId,
                    i = e.onSelect,
                    r = e.selectedCurrency,
                    o = "undefined" !== typeof n && null !== (t = dt[n]) && void 0 !== t ? t : [];
                return o.length > 0 ? Object(je.jsxs)(Pb, {
                    gap: "md",
                    children: [Object(je.jsxs)(Vo, {
                        children: [Object(je.jsx)(Ur.c, {
                            fontWeight: 500,
                            fontSize: 14,
                            children: Object(je.jsx)(f.b, {
                                id: "Common bases"
                            })
                        }), Object(je.jsx)(Mb, {
                            text: Object(je.jsx)(f.b, {
                                id: "These tokens are commonly paired with other tokens."
                            })
                        })]
                    }), Object(je.jsx)(Vo, {
                        gap: "4px",
                        children: o.map((function(e) {
                            var t = null === r || void 0 === r ? void 0 : r.equals(e);
                            return Object(je.jsxs)(Lb, {
                                onClick: function() {
                                    return !t && i(e)
                                },
                                disable: t,
                                children: [Object(je.jsx)(rb, {
                                    currency: e,
                                    style: {
                                        marginRight: 8
                                    }
                                }), Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 16,
                                    children: e.symbol
                                })]
                            }, jb(e))
                        }))
                    })]
                }) : null
            }
            var Db = n(315),
                Wb = Ni.default.div.withConfig({
                    componentId: "sc-1xp9ndq-0"
                })(["height:3px;width:3px;background-color:", ";border-radius:50%;"], (function(e) {
                    return e.theme.text2
                })),
                qb = Ni.default.input.withConfig({
                    componentId: "sc-1xp9ndq-1"
                })(["border:1px solid ", ";height:20px;margin:0;"], (function(e) {
                    return e.theme.red3
                })),
                Fb = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-1xp9ndq-2"
                })(["padding:20px;"]),
                Yb = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-1xp9ndq-3"
                })(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto minmax(0,72px);grid-gap:16px;cursor:", ";pointer-events:", ";:hover{background-color:", ";}opacity:", ";"], (function(e) {
                    return !e.disabled && "pointer"
                }), (function(e) {
                    return e.disabled && "none"
                }), (function(e) {
                    var t = e.theme;
                    return !e.disabled && t.bg2
                }), (function(e) {
                    var t = e.disabled,
                        n = e.selected;
                    return t || n ? .5 : 1
                })),
                Vb = Ni.default.input.withConfig({
                    componentId: "sc-1xp9ndq-4"
                })(["position:relative;display:flex;padding:16px;align-items:center;width:100%;white-space:nowrap;background:none;border:none;outline:none;border-radius:20px;color:", ";border-style:solid;border:1px solid ", ";-webkit-appearance:none;font-size:18px;::placeholder{color:", ";}transition:border 100ms;:focus{border:1px solid ", ";outline:none;}"], (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text3
                }), (function(e) {
                    return e.theme.primary1
                })),
                _b = Ni.default.div.withConfig({
                    componentId: "sc-1xp9ndq-5"
                })(["width:100%;height:1px;background-color:", ";"], (function(e) {
                    return e.theme.bg2
                })),
                Hb = Ni.default.div.withConfig({
                    componentId: "sc-1xp9ndq-6"
                })(["width:100%;height:1px;background-color:", ";"], (function(e) {
                    return e.theme.bg3
                })),
                Qb = Object(Ni.default)($l).withConfig({
                    componentId: "sc-xz7emh-0"
                })(["width:", ";height:", ";"], (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }));

            function Gb(e) {
                var t = e.logoURI,
                    n = e.style,
                    i = e.size,
                    r = void 0 === i ? "24px" : i,
                    o = e.alt,
                    a = Jl(t);
                return Object(je.jsx)(Qb, {
                    alt: o,
                    size: r,
                    srcs: a,
                    style: n
                })
            }
            var Jb = Ni.default.div.withConfig({
                    componentId: "sc-1x3jvxb-0"
                })(["padding:4px 20px;height:56px;display:grid;grid-template-columns:auto minmax(auto,1fr) auto;grid-gap:16px;align-items:center;opacity:", ";"], (function(e) {
                    return e.dim ? "0.4" : "1"
                })),
                Kb = Object(Ni.default)(ks.a).withConfig({
                    componentId: "sc-1x3jvxb-1"
                })(["height:16px;width:16px;margin-right:6px;stroke:", ";"], (function(e) {
                    return e.theme.green1
                })),
                Xb = Ni.default.div.withConfig({
                    componentId: "sc-1x3jvxb-2"
                })(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-overflow:ellipsis;max-width:140px;font-size:12px;"]);

            function Zb(e) {
                var t = e.token,
                    n = e.style,
                    i = e.dim,
                    r = e.showImportView,
                    o = e.setImportToken,
                    a = Pc(),
                    c = Fn(t),
                    s = function(e) {
                        var t = Wn();
                        return !(!t || !e) && !!t[e.address]
                    }(t),
                    u = t instanceof St ? t.list : void 0;
                return Object(je.jsxs)(Jb, {
                    style: n,
                    children: [Object(je.jsx)(rb, {
                        currency: t,
                        size: "24px",
                        style: {
                            opacity: i ? "0.6" : "1"
                        }
                    }), Object(je.jsxs)(Lo, {
                        gap: "4px",
                        style: {
                            opacity: i ? "0.6" : "1"
                        },
                        children: [Object(je.jsxs)(Vo, {
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 500,
                                children: t.symbol
                            }), Object(je.jsx)(No, {
                                ml: "8px",
                                fontWeight: 300,
                                children: Object(je.jsx)(Xb, {
                                    title: t.name,
                                    children: t.name
                                })
                            })]
                        }), u && u.logoURI && Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(Eo, {
                                mr: "4px",
                                color: a.text3,
                                children: Object(je.jsx)(f.b, {
                                    id: "via {0}",
                                    values: {
                                        0: u.name
                                    }
                                })
                            }), Object(je.jsx)(Gb, {
                                logoURI: u.logoURI,
                                size: "12px"
                            })]
                        })]
                    }), s || c ? Object(je.jsxs)(_o, {
                        style: {
                            minWidth: "fit-content"
                        },
                        children: [Object(je.jsx)(Kb, {}), Object(je.jsx)(Oo, {
                            color: a.green1,
                            children: Object(je.jsx)(f.b, {
                                id: "Active"
                            })
                        })]
                    }) : Object(je.jsx)(qc, {
                        width: "fit-content",
                        padding: "6px 12px",
                        fontWeight: 500,
                        fontSize: "14px",
                        onClick: function() {
                            o && o(t), r()
                        },
                        children: Object(je.jsx)(f.b, {
                            id: "Import"
                        })
                    })]
                })
            }
            var $b = n.p + "static/media/tokenlist.831c6277.svg";

            function ep(e) {
                return e.isToken ? e.address : "Binance Coin"
            }
            var tp = Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-1fzrxat-0"
                })(["white-space:nowrap;overflow:hidden;max-width:5rem;text-overflow:ellipsis;"]),
                np = Ni.default.div.withConfig({
                    componentId: "sc-1fzrxat-1"
                })(["background-color:", ";color:", ";font-size:14px;border-radius:4px;padding:0.25rem 0.3rem 0.25rem 0.3rem;max-width:6rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;justify-self:flex-end;margin-right:4px;"], (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text2
                })),
                ip = Ni.default.div.withConfig({
                    componentId: "sc-1fzrxat-2"
                })(["padding:4px 20px;height:56px;display:grid;grid-gap:16px;align-items:center;"]);

            function rp(e) {
                var t = e.balance;
                return Object(je.jsx)(tp, {
                    title: t.toExact(),
                    children: t.toSignificant(4)
                })
            }
            var op = Ni.default.div.withConfig({
                    componentId: "sc-1fzrxat-3"
                })(["display:flex;justify-content:flex-end;"]),
                ap = Ni.default.img.withConfig({
                    componentId: "sc-1fzrxat-4"
                })(["height:20px;"]);

            function cp(e) {
                var t = e.currency;
                if (!(t instanceof St)) return Object(je.jsx)("span", {});
                var n = t.tags;
                if (!n || 0 === n.length) return Object(je.jsx)("span", {});
                var i = n[0];
                return Object(je.jsxs)(op, {
                    children: [Object(je.jsx)(Sb, {
                        text: i.description,
                        children: Object(je.jsx)(np, {
                            children: i.name
                        }, i.id)
                    }), n.length > 1 ? Object(je.jsx)(Sb, {
                        text: n.slice(1).map((function(e) {
                            var t = e.name,
                                n = e.description;
                            return "".concat(t, ": ").concat(n)
                        })).join("; \n"),
                        children: Object(je.jsx)(np, {
                            children: "..."
                        })
                    }) : null]
                })
            }

            function sp(e) {
                var t = e.currency,
                    n = e.onSelect,
                    i = e.isSelected,
                    r = e.otherSelected,
                    o = e.style,
                    a = e.showCurrencyAmount,
                    c = fe().account,
                    s = ep(t),
                    u = function(e, t) {
                        var n;
                        return Boolean((null === t || void 0 === t ? void 0 : t.isToken) && (null === (n = e[t.chainId]) || void 0 === n ? void 0 : n[t.address]))
                    }(Dt(), t.isToken ? t : void 0),
                    d = Fn(t),
                    l = za(null !== c && void 0 !== c ? c : void 0, t);
                return Object(je.jsxs)(Yb, {
                    style: o,
                    className: "token-item-".concat(s),
                    onClick: function() {
                        return i ? null : n()
                    },
                    disabled: i,
                    selected: r,
                    children: [Object(je.jsx)(rb, {
                        currency: t,
                        size: "24px"
                    }), Object(je.jsxs)(zo, {
                        children: [Object(je.jsx)(Ur.c, {
                            title: t.name,
                            fontWeight: 500,
                            children: t.symbol
                        }), Object(je.jsx)(No, {
                            ml: "0px",
                            fontSize: "12px",
                            fontWeight: 300,
                            children: t.isNative || u || !d ? t.name : Object(je.jsx)(f.b, {
                                id: "{0} \u2022 Added by user",
                                values: {
                                    0: t.name
                                }
                            })
                        })]
                    }), Object(je.jsx)(cp, {
                        currency: t
                    }), a && Object(je.jsx)(_o, {
                        style: {
                            justifySelf: "flex-end"
                        },
                        children: l ? Object(je.jsx)(rp, {
                            balance: l
                        }) : c ? Object(je.jsx)(as, {}) : null
                    })]
                })
            }
            var up = "BREAK";

            function dp(e) {
                return e === up
            }

            function lp(e) {
                var t = e.style,
                    n = Pc();
                return Object(je.jsx)(ip, {
                    style: t,
                    children: Object(je.jsx)(Tu, {
                        padding: "8px 12px",
                        $borderRadius: "8px",
                        children: Object(je.jsxs)(Fo, {
                            children: [Object(je.jsxs)(_o, {
                                children: [Object(je.jsx)(ap, {
                                    src: $b
                                }), Object(je.jsx)(Oo, {
                                    ml: "6px",
                                    fontSize: "12px",
                                    color: n.text1,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Expanded results from inactive Token Lists"
                                    })
                                })]
                            }), Object(je.jsx)(Mb, {
                                text: Object(je.jsx)(f.b, {
                                    id: "Tokens from inactive lists. Import specific tokens below or click Manage to activate more lists."
                                })
                            })]
                        })
                    })
                })
            }

            function bp(e) {
                var t = e.height,
                    n = e.currencies,
                    i = e.otherListTokens,
                    r = e.selectedCurrency,
                    o = e.onCurrencySelect,
                    c = e.otherCurrency,
                    s = e.fixedListRef,
                    u = e.showImportView,
                    d = e.setImportToken,
                    l = e.showCurrencyAmount,
                    b = Object(a.useMemo)((function() {
                        return i && (null === i || void 0 === i ? void 0 : i.length) > 0 ? [].concat(Object(_e.a)(n), [up], Object(_e.a)(i)) : n
                    }), [n, i]),
                    p = Object(a.useCallback)((function(e) {
                        var t = e.data,
                            i = e.index,
                            a = e.style,
                            s = t[i];
                        if (dp(s)) return Object(je.jsx)(lp, {
                            style: a
                        });
                        var b = s,
                            p = Boolean(b && r && r.equals(b)),
                            f = Boolean(b && c && c.equals(b)),
                            j = null === b || void 0 === b ? void 0 : b.wrapped;
                        return i > n.length && j ? Object(je.jsx)(Zb, {
                            style: a,
                            token: j,
                            showImportView: u,
                            setImportToken: d,
                            dim: !0
                        }) : b ? Object(je.jsx)(sp, {
                            style: a,
                            currency: b,
                            isSelected: p,
                            onSelect: function() {
                                return b && o(b)
                            },
                            otherSelected: f,
                            showCurrencyAmount: l
                        }) : null
                    }), [n.length, o, c, r, d, u, l]),
                    f = Object(a.useCallback)((function(e, t) {
                        var n = t[e];
                        return dp(n) ? up : ep(n)
                    }), []);
                return Object(je.jsx)(Db.a, {
                    height: t,
                    ref: s,
                    width: "100%",
                    itemData: b,
                    itemCount: b.length,
                    itemSize: 56,
                    itemKey: f,
                    children: p
                })
            }

            function pp(e) {
                var t = function() {
                        var e = fe().account,
                            t = Wn(),
                            n = Ma(null !== e && void 0 !== e ? e : void 0, Object(a.useMemo)((function() {
                                return Object.values(null !== t && void 0 !== t ? t : {})
                            }), [t]));
                        return null !== n && void 0 !== n ? n : {}
                    }(),
                    n = Object(a.useMemo)((function() {
                        return function(e) {
                            return function(t, n) {
                                var i, r, o = (i = e[t.address], r = e[n.address], i && r ? i.greaterThan(r) ? -1 : i.equalTo(r) ? 0 : 1 : i && i.greaterThan("0") ? -1 : r && r.greaterThan("0") ? 1 : 0);
                                return 0 !== o ? o : t.symbol && n.symbol ? t.symbol.toLowerCase() < n.symbol.toLowerCase() ? -1 : 1 : t.symbol || n.symbol ? -1 : 0
                            }
                        }(null !== t && void 0 !== t ? t : {})
                    }), [t]);
                return Object(a.useMemo)((function() {
                    return e ? function(e, t) {
                        return -1 * n(e, t)
                    } : n
                }), [e, n])
            }
            var fp = n(306);

            function jp() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = Object(a.useState)(e),
                    n = Object(j.a)(t, 2),
                    i = n[0],
                    r = n[1],
                    o = Object(a.useCallback)((function() {
                        return r((function(e) {
                            return !e
                        }))
                    }), []);
                return [i, o]
            }
            var hp, mp = n(667),
                xp = Object(Ni.default)(zo).withConfig({
                    componentId: "sc-1it7zu4-0"
                })(["width:100%;flex:1 1;position:relative;"]),
                vp = Ni.default.div.withConfig({
                    componentId: "sc-1it7zu4-1"
                })(["width:100%;border-radius:20px;padding:20px;border-top-left-radius:0;border-top-right-radius:0;background-color:", ";border-top:1px solid ", ";"], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg2
                }));

            function Op(e) {
                var t = e.selectedCurrency,
                    n = e.onCurrencySelect,
                    i = e.otherSelectedCurrency,
                    r = e.showCommonBases,
                    o = e.showCurrencyAmount,
                    c = e.disableNonToken,
                    s = e.onDismiss,
                    u = e.isOpen,
                    d = e.showManageView,
                    b = e.showImportView,
                    p = e.setImportToken,
                    h = fe().chainId,
                    m = Pc(),
                    x = Object(a.useRef)(),
                    v = Object(a.useState)(""),
                    O = Object(j.a)(v, 2),
                    g = O[0],
                    y = O[1],
                    w = oa(g, 200),
                    k = Object(a.useState)(!1),
                    C = Object(j.a)(k, 1)[0],
                    T = Wn(),
                    I = xt(w),
                    A = Hn(w),
                    E = Fn(A);
                Object(a.useEffect)((function() {
                    I && l.a.event({
                        category: "Currency Select",
                        action: "Search by address",
                        label: I
                    })
                }), [I]);
                var S = pp(C),
                    R = Object(a.useMemo)((function() {
                        return e = Object.values(T), t = w, e.filter(yt(t));
                        var e, t
                    }), [T, w]),
                    U = function(e, t) {
                        return Object(a.useMemo)((function() {
                            if (!e) return [];
                            var n = t.toLowerCase().split(/\s+/).filter((function(e) {
                                return e.length > 0
                            }));
                            if (n.length > 1) return e;
                            var i = [],
                                r = [],
                                o = [];
                            return e.map((function(e) {
                                var a, c;
                                return (null === (a = e.symbol) || void 0 === a ? void 0 : a.toLowerCase()) === n[0] ? i.push(e) : (null === (c = e.symbol) || void 0 === c ? void 0 : c.toLowerCase().startsWith(t.toLowerCase().trim())) ? r.push(e) : o.push(e)
                            })), [].concat(i, r, o)
                        }), [e, t])
                    }(Object(a.useMemo)((function() {
                        return R.sort(S)
                    }), [R, S]), w),
                    B = Object(a.useMemo)((function() {
                        return h && ot.onChain(h)
                    }), [h]),
                    M = Object(a.useMemo)((function() {
                        var e = w.toLowerCase().trim();
                        return ("" === e || "b" === e || "bn" === e || "bnb" === e) && B ? [B].concat(Object(_e.a)(U)) : U
                    }), [w, B, U]),
                    P = Object(a.useCallback)((function(e) {
                        n(e), s()
                    }), [s, n]);
                Object(a.useEffect)((function() {
                    u && y("")
                }), [u]);
                var L = Object(a.useRef)(),
                    z = Object(a.useCallback)((function(e) {
                        var t, n = e.target.value,
                            i = xt(n);
                        y(i || n), null === (t = x.current) || void 0 === t || t.scrollTo(0)
                    }), []),
                    D = Object(a.useCallback)((function(e) {
                        if ("Binance Coin" === e.key)
                            if ("bnb" === w.toLowerCase().trim() && B) P(B);
                            else if (M.length > 0) {
                            var t;
                            (null === (t = M[0].symbol) || void 0 === t ? void 0 : t.toLowerCase()) !== w.trim().toLowerCase() && 1 !== M.length || P(M[0])
                        }
                    }), [w, B, M, P]),
                    W = jp(!1),
                    q = Object(j.a)(W, 2),
                    F = q[0],
                    Y = q[1];
                ec(Object(a.useRef)(), F ? Y : void 0);
                var V = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                        n = Bt(),
                        i = zt(),
                        r = fe().chainId,
                        o = Wn();
                    return Object(a.useMemo)((function() {
                        if (!e || 0 === e.trim().length) return [];
                        var a, c = yt(e),
                            s = [],
                            u = {},
                            d = Object(N.a)(i);
                        try {
                            for (d.s(); !(a = d.n()).done;) {
                                var l = a.value,
                                    b = n[l].current;
                                if (b) {
                                    var p, f = Object(N.a)(b.tokens);
                                    try {
                                        for (f.s(); !(p = f.n()).done;) {
                                            var j = p.value;
                                            if (j.chainId === r && c(j)) {
                                                var h = new St(j, b);
                                                if (!(h.address in o) && !u[h.address] && (u[h.address] = !0, s.push(h), s.length >= t)) return s
                                            }
                                        }
                                    } catch (m) {
                                        f.e(m)
                                    } finally {
                                        f.f()
                                    }
                                }
                            }
                        } catch (m) {
                            d.e(m)
                        } finally {
                            d.f()
                        }
                        return s
                    }), [o, r, i, n, t, e])
                }(0 === R.length || w.length > 2 && !I ? w : void 0);
                return Object(je.jsxs)(xp, {
                    children: [Object(je.jsxs)(Fb, {
                        gap: "16px",
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 16,
                                children: Object(je.jsx)(f.b, {
                                    id: "Select a token"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: s
                            })]
                        }), Object(je.jsx)(Ho, {
                            children: Object(je.jsx)(Vb, {
                                type: "text",
                                id: "token-search-input",
                                placeholder: we.a._("Search name or paste address"),
                                autoComplete: "off",
                                value: g,
                                ref: L,
                                onChange: z,
                                onKeyDown: D
                            })
                        }), r && Object(je.jsx)(zb, {
                            chainId: h,
                            onSelect: P,
                            selectedCurrency: t
                        })]
                    }), Object(je.jsx)(_b, {}), A && !E ? Object(je.jsx)(zo, {
                        style: {
                            padding: "20px 0",
                            height: "100%"
                        },
                        children: Object(je.jsx)(Zb, {
                            token: A,
                            showImportView: b,
                            setImportToken: p
                        })
                    }) : (null === U || void 0 === U ? void 0 : U.length) > 0 || (null === V || void 0 === V ? void 0 : V.length) > 0 ? Object(je.jsx)("div", {
                        style: {
                            flex: "1"
                        },
                        children: Object(je.jsx)(fp.a, {
                            disableWidth: !0,
                            children: function(e) {
                                var n = e.height;
                                return Object(je.jsx)(bp, {
                                    height: n,
                                    currencies: c ? U : M,
                                    otherListTokens: V,
                                    onCurrencySelect: P,
                                    otherCurrency: i,
                                    selectedCurrency: t,
                                    fixedListRef: x,
                                    showImportView: b,
                                    setImportToken: p,
                                    showCurrencyAmount: o
                                })
                            }
                        })
                    }) : Object(je.jsx)(zo, {
                        style: {
                            padding: "20px",
                            height: "100%"
                        },
                        children: Object(je.jsx)(Oo, {
                            color: m.text3,
                            textAlign: "center",
                            mb: "20px",
                            children: Object(je.jsx)(f.b, {
                                id: "No results found."
                            })
                        })
                    }), Object(je.jsx)(vp, {
                        children: Object(je.jsx)(Ho, {
                            justify: "center",
                            children: Object(je.jsx)(Hr, {
                                onClick: d,
                                color: m.primary1,
                                className: "list-token-manage-button",
                                children: Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(Gr, {
                                        size: "16px",
                                        marginRight: "6px",
                                        stroke: m.primaryText1,
                                        children: Object(je.jsx)(mp.a, {})
                                    }), Object(je.jsx)(Oo, {
                                        color: m.primaryText1,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Manage Token Lists"
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            }
            var gp = Ni.default.div.withConfig({
                    componentId: "sc-11ce2lf-0"
                })(["position:relative;padding:8px;"]),
                yp = Ni.default.div.withConfig({
                    componentId: "sc-11ce2lf-1"
                })(["padding:4px;border-radius:12px;height:32px;width:32px;position:relative;margin-top:-14px;margin-bottom:-14px;left:calc(50% - 16px);background-color:", ";border:4px solid ", ";z-index:2;", ""], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.clickable ? Object(Ni.css)(hp || (hp = Object(Si.a)(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]))) : null
                })),
                wp = Ni.default.div.withConfig({
                    componentId: "sc-11ce2lf-2"
                })(["height:1px;width:100%;background-color:", ";"], (function(e) {
                    return e.theme.bg3
                })),
                kp = Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-11ce2lf-3"
                })(["color:", ";"], (function(e) {
                    var t = e.theme,
                        n = e.severity;
                    return 3 === n || 4 === n ? t.red1 : 2 === n ? t.yellow2 : 1 === n ? t.text1 : t.text2
                })),
                Cp = Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-11ce2lf-4"
                })(["text-overflow:ellipsis;max-width:220px;overflow:hidden;text-align:right;"]),
                Tp = Ni.default.span.withConfig({
                    componentId: "sc-11ce2lf-5"
                })(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"]),
                Ip = Ni.default.div.withConfig({
                    componentId: "sc-11ce2lf-6"
                })(["background-color:", ";border-radius:1rem;display:flex;align-items:center;font-size:0.825rem;width:100%;padding:3rem 1.25rem 1rem 1rem;margin-top:-2rem;color:", ";z-index:-1;p{padding:0;margin:0;font-weight:500;}"], (function(e) {
                    var t = e.theme;
                    return Object(ea.c)(.9, t.red1)
                }), (function(e) {
                    return e.theme.red1
                })),
                Ap = Ni.default.div.withConfig({
                    componentId: "sc-11ce2lf-7"
                })(["background-color:", ";display:flex;align-items:center;justify-content:center;margin-right:12px;border-radius:12px;min-width:48px;height:48px;"], (function(e) {
                    var t = e.theme;
                    return Object(ea.c)(.9, t.red1)
                }));

            function Ep(e) {
                var t = e.error;
                return Object(je.jsxs)(Ip, {
                    children: [Object(je.jsx)(Ap, {
                        children: Object(je.jsx)(Ll.a, {
                            size: 24
                        })
                    }), Object(je.jsx)("p", {
                        style: {
                            wordBreak: "break-word"
                        },
                        children: t
                    })]
                })
            }
            var Sp, Np = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-11ce2lf-8"
                })(["background-color:", ";color:", ";padding:0.5rem;border-radius:12px;margin-top:8px;"], (function(e) {
                    var t = e.theme;
                    return Object(ea.c)(.95, t.primary3)
                }), (function(e) {
                    return e.theme.primaryText1
                })),
                Rp = Ni.default.div.withConfig({
                    componentId: "sc-7tqaay-0"
                })(["position:relative;width:100%;overflow:auto;"]),
                Up = Object(Ni.default)(ku).withConfig({
                    componentId: "sc-7tqaay-1"
                })(["background-color:", ";width:fit-content;"], (function(e) {
                    var t = e.theme;
                    return e.highWarning ? Object(ea.c)(.8, t.red1) : Object(ea.c)(.8, t.yellow2)
                })),
                Bp = Object(Ni.default)(So).withConfig({
                    componentId: "sc-7tqaay-2"
                })(["font-size:12px;word-break:break-all;", ""], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Sp || (Sp = Object(Si.a)(["\n    font-size: 10px;\n  "])))
                }));

            function Mp(e) {
                var t = e.tokens,
                    n = e.list,
                    i = e.onBack,
                    r = e.onDismiss,
                    o = e.handleCurrencySelect,
                    c = Pc(),
                    s = fe().chainId,
                    u = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t) {
                            e(ii({
                                serializedToken: ci(t)
                            }))
                        }), [e])
                    }();
                return Object(je.jsxs)(Rp, {
                    children: [Object(je.jsx)(Fb, {
                        gap: "14px",
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: Object(je.jsxs)(Fo, {
                            children: [i ? Object(je.jsx)(Lr.a, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: i
                            }) : Object(je.jsx)("div", {}), Object(je.jsx)(Io, {
                                children: Object(je.jsx)(f.b, {
                                    id: "{0, plural, one {Import token} other {Import tokens}}",
                                    values: {
                                        0: t.length
                                    }
                                })
                            }), r ? Object(je.jsx)(Qr, {
                                onClick: r
                            }) : Object(je.jsx)("div", {})]
                        })
                    }), Object(je.jsx)(wp, {}), Object(je.jsxs)(Lo, {
                        gap: "md",
                        style: {
                            marginBottom: "32px",
                            padding: "1rem"
                        },
                        children: [Object(je.jsxs)(Lo, {
                            justify: "center",
                            style: {
                                textAlign: "center",
                                gap: "16px",
                                padding: "1rem"
                            },
                            children: [Object(je.jsx)(hl.a, {
                                size: 48,
                                stroke: c.text2,
                                strokeWidth: 1
                            }), Object(je.jsx)(Co, {
                                fontWeight: 400,
                                fontSize: 16,
                                children: Object(je.jsx)(f.b, {
                                    id: "This token doesn't appear on the active token list(s). Make sure this is the token that you want to trade."
                                })
                            })]
                        }), t.map((function(e) {
                            return Object(je.jsx)(ku, {
                                backgroundColor: c.bg2,
                                className: ".token-warning-container",
                                padding: "2rem",
                                children: Object(je.jsxs)(Lo, {
                                    gap: "10px",
                                    justify: "center",
                                    children: [Object(je.jsx)(rb, {
                                        currency: e,
                                        size: "32px"
                                    }), Object(je.jsxs)(Lo, {
                                        gap: "4px",
                                        justify: "center",
                                        children: [Object(je.jsx)(Co, {
                                            ml: "8px",
                                            mr: "8px",
                                            fontWeight: 500,
                                            fontSize: 20,
                                            children: e.symbol
                                        }), Object(je.jsx)(No, {
                                            fontWeight: 400,
                                            fontSize: 14,
                                            children: e.name
                                        })]
                                    }), s && Object(je.jsx)(ro, {
                                        href: gs(s, e.address, vs.ADDRESS),
                                        children: Object(je.jsx)(Bp, {
                                            fontSize: 12,
                                            children: e.address
                                        })
                                    }), void 0 !== n ? Object(je.jsxs)(_o, {
                                        children: [n.logoURI && Object(je.jsx)(Gb, {
                                            logoURI: n.logoURI,
                                            size: "16px"
                                        }), Object(je.jsx)(Eo, {
                                            ml: "6px",
                                            fontSize: 14,
                                            color: c.text3,
                                            children: Object(je.jsx)(f.b, {
                                                id: "via {0} token list",
                                                values: {
                                                    0: n.name
                                                }
                                            })
                                        })]
                                    }) : Object(je.jsx)(Up, {
                                        $borderRadius: "4px",
                                        padding: "4px",
                                        highWarning: !0,
                                        children: Object(je.jsxs)(_o, {
                                            children: [Object(je.jsx)(hl.a, {
                                                stroke: c.red1,
                                                size: "10px"
                                            }), Object(je.jsx)(Co, {
                                                color: c.red1,
                                                ml: "4px",
                                                fontSize: "10px",
                                                fontWeight: 500,
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Unknown Source"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            }, "import" + e.address)
                        })), Object(je.jsx)(qc, {
                            altDisabledStyle: !0,
                            $borderRadius: "20px",
                            padding: "10px 1rem",
                            onClick: function() {
                                t.map((function(e) {
                                    return u(e)
                                })), o && o(t[0])
                            },
                            className: ".token-dismiss-button",
                            children: Object(je.jsx)(f.b, {
                                id: "Import"
                            })
                        })]
                    })]
                })
            }
            var Pp = n(211),
                Lp = n.n(Pp),
                zp = n(212);

            function Dp() {
                return (Dp = Object(R.a)(S.a.mark((function e(t) {
                    var n;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t.chainId === r.MAINNET) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve("#3d51a5"));
                            case 2:
                                return n = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/".concat(t.address, "/logo.png"), e.abrupt("return", Lp.a.from(n).getPalette().then((function(e) {
                                    if (console.log(e), null === e || void 0 === e ? void 0 : e.Vibrant) {
                                        for (var t = e.Vibrant.hex, n = Object(zp.a)(t, "#FFF"); n < 3;) t = Object(ea.b)(.005, t), n = Object(zp.a)(t, "#FFF");
                                        return t
                                    }
                                    return null
                                })).catch((function() {
                                    return null
                                })));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Wp() {
                return (Wp = Object(R.a)(S.a.mark((function e(t) {
                    var n;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = Gl(t)[0], e.abrupt("return", Lp.a.from(n).getPalette().then((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.Vibrant) ? e.Vibrant.hex : null
                                })).catch((function() {
                                    return null
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function qp(e) {
                var t = Object(a.useState)("#3d51a5"),
                    n = Object(j.a)(t, 2),
                    i = n[0],
                    r = n[1];
                return Object(a.useLayoutEffect)((function() {
                    var t = !1;
                    return e && function(e) {
                            return Dp.apply(this, arguments)
                        }(e).then((function(e) {
                            t || null === e || r(e)
                        })),
                        function() {
                            t = !0, r("#3d51a5")
                        }
                }), [e]), i
            }

            function Fp(e) {
                var t = Object(a.useState)("#3d51a5"),
                    n = Object(j.a)(t, 2),
                    i = n[0],
                    r = n[1];
                return Object(a.useLayoutEffect)((function() {
                    var t = !1;
                    return e && function(e) {
                            return Wp.apply(this, arguments)
                        }(e).then((function(e) {
                            t || null === e || r(e)
                        })),
                        function() {
                            t = !0, r("#3d51a5")
                        }
                }), [e]), i
            }
            var Yp = n(668),
                Vp = n(307),
                _p = n(308),
                Hp = new(n.n(_p).a)({
                    allErrors: !0
                }).compile(Vp);

            function Qp(e, t) {
                return Gp.apply(this, arguments)
            }

            function Gp() {
                return (Gp = Object(R.a)(S.a.mark((function e(t, n) {
                    var i, r, o, a, c, s, u, d, l, b, p, f, j;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(i = Ql(t))) {
                                    e.next = 23;
                                    break
                                }
                                return e.prev = 2, e.next = 5, n(i.ensName);
                            case 5:
                                a = e.sent, e.next = 12;
                                break;
                            case 8:
                                throw e.prev = 8, e.t0 = e.catch(2), console.debug("Failed to resolve ENS name: ".concat(i.ensName), e.t0), new Error("Failed to resolve ENS name: ".concat(i.ensName));
                            case 12:
                                e.prev = 12, c = _l(a), e.next = 20;
                                break;
                            case 16:
                                throw e.prev = 16, e.t1 = e.catch(12), console.debug("Failed to translate contenthash to URI", a), new Error("Failed to translate contenthash to URI: ".concat(a));
                            case 20:
                                r = Gl("".concat(c).concat(null !== (o = i.ensPath) && void 0 !== o ? o : "")), e.next = 24;
                                break;
                            case 23:
                                r = Gl(t);
                            case 24:
                                s = 0;
                            case 25:
                                if (!(s < r.length)) {
                                    e.next = 55;
                                    break
                                }
                                return u = r[s], d = s === r.length - 1, l = void 0, e.prev = 29, e.next = 32, fetch(u, {
                                    credentials: "omit"
                                });
                            case 32:
                                l = e.sent, e.next = 41;
                                break;
                            case 35:
                                if (e.prev = 35, e.t2 = e.catch(29), console.debug("Failed to fetch list", t, e.t2), !d) {
                                    e.next = 40;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 40:
                                return e.abrupt("continue", 52);
                            case 41:
                                if (l.ok) {
                                    e.next = 45;
                                    break
                                }
                                if (!d) {
                                    e.next = 44;
                                    break
                                }
                                throw new Error("Failed to download list ".concat(t));
                            case 44:
                                return e.abrupt("continue", 52);
                            case 45:
                                return e.next = 47, l.json();
                            case 47:
                                if (b = e.sent, Hp(b)) {
                                    e.next = 51;
                                    break
                                }
                                throw j = null !== (p = null === (f = Hp.errors) || void 0 === f ? void 0 : f.reduce((function(e, t) {
                                    var n, i = "".concat(t.dataPath, " ").concat(null !== (n = t.message) && void 0 !== n ? n : "");
                                    return e.length > 0 ? "".concat(e, "; ").concat(i) : "".concat(i)
                                }), "")) && void 0 !== p ? p : "unknown error", new Error("Token list failed validation: ".concat(j));
                            case 51:
                                return e.abrupt("return", b);
                            case 52:
                                s++, e.next = 25;
                                break;
                            case 55:
                                throw new Error("Unrecognized list URL protocol.");
                            case 56:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [2, 8],
                        [12, 16],
                        [29, 35]
                    ])
                })))).apply(this, arguments)
            }
            var Jp = [{
                    constant: !0,
                    inputs: [{
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "resolver",
                    outputs: [{
                        name: "resolverAddress",
                        type: "address"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }],
                Kp = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
                Xp = [{
                    constant: !0,
                    inputs: [{
                        internalType: "bytes32",
                        name: "node",
                        type: "bytes32"
                    }],
                    name: "contenthash",
                    outputs: [{
                        internalType: "bytes",
                        name: "",
                        type: "bytes"
                    }],
                    payable: !1,
                    stateMutability: "view",
                    type: "function"
                }];

            function Zp(e, t) {
                return new mt.a(e, Xp, t)
            }

            function $p(e, t) {
                return ef.apply(this, arguments)
            }

            function ef() {
                return (ef = Object(R.a)(S.a.mark((function e(t, n) {
                    var i, r, o;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = new mt.a(Kp, Jp, n), r = Object(ft.namehash)(t), e.next = 4, i.resolver(r);
                            case 4:
                                return o = e.sent, e.abrupt("return", Zp(o, n).contenthash(r));
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function tf() {
                var e = fe(),
                    t = e.chainId,
                    n = e.library,
                    i = Se(),
                    r = Object(a.useCallback)(function() {
                        var e = Object(R.a)(S.a.mark((function e(i) {
                            var r, o;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n && 1 === t) {
                                            e.next = 8;
                                            break
                                        }
                                        return r = V(), e.next = 4, r.getNetwork();
                                    case 4:
                                        if (o = e.sent, !r || 1 !== o.chainId) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return", $p(i, r));
                                    case 7:
                                        throw new Error("Could not construct mainnet ENS resolver");
                                    case 8:
                                        return e.abrupt("return", $p(i, n));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(), [t, n]);
                return Object(a.useCallback)(function() {
                    var e = Object(R.a)(S.a.mark((function e(t) {
                        var n, o, a = arguments;
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = !(a.length > 1 && void 0 !== a[1]) || a[1], o = Object(Ft.e)(), n && i(ur.pending({
                                        requestId: o,
                                        url: t
                                    })), e.abrupt("return", Qp(t, r).then((function(e) {
                                        return n && i(ur.fulfilled({
                                            url: t,
                                            tokenList: e,
                                            requestId: o
                                        })), e
                                    })).catch((function(e) {
                                        throw console.debug("Failed to get list at url ".concat(t), e), n && i(ur.rejected({
                                            url: t,
                                            requestId: o,
                                            errorMessage: e.message
                                        })), e
                                    })));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(), [i, r])
            }
            var nf = Ni.default.button.withConfig({
                    componentId: "sc-1ahjqam-0"
                })(["border-radius:20px;border:none;background:", ";display:flex;width:fit-content;cursor:pointer;outline:none;padding:0.4rem 0.4rem;align-items:center;"], (function(e) {
                    return e.theme.bg1
                })),
                rf = Ni.default.span.withConfig({
                    componentId: "sc-1ahjqam-1"
                })(["border-radius:50%;height:24px;width:24px;background-color:", ";:hover{opacity:0.8;}"], (function(e) {
                    var t = e.isActive,
                        n = e.bgColor,
                        i = e.theme;
                    return t ? n : i.bg4
                })),
                of = Object(Ni.default)(Oo).withConfig({
                    componentId: "sc-1ahjqam-2"
                })(["margin:0 10px;width:24px;color:", ";"], (function(e) {
                    var t = e.theme;
                    return e.isActive ? t.text1 : t.text3
                }));

            function af(e) {
                var t = e.id,
                    n = e.isActive,
                    i = e.bgColor,
                    r = e.toggle;
                return Object(je.jsxs)(nf, {
                    id: t,
                    isActive: n,
                    onClick: r,
                    children: [n && Object(je.jsx)( of , {
                        fontWeight: "600",
                        margin: "0 6px",
                        isActive: !0,
                        children: Object(je.jsx)(f.b, {
                            id: "ON"
                        })
                    }), Object(je.jsx)(rf, {
                        isActive: n,
                        bgColor: i
                    }), !n && Object(je.jsx)( of , {
                        fontWeight: "600",
                        margin: "0 6px",
                        isActive: !1,
                        children: Object(je.jsx)(f.b, {
                            id: "OFF"
                        })
                    })]
                })
            }
            var cf = Object(Ni.default)(zo).withConfig({
                    componentId: "sc-z8ju4z-0"
                })(["height:100%;"]),
                sf = Object(Ni.default)(Jr).withConfig({
                    componentId: "sc-z8ju4z-1"
                })(["padding:0;font-size:1rem;opacity:", ";"], (function(e) {
                    return e.disabled ? "0.4" : "1"
                })),
                uf = Ni.default.div.withConfig({
                    componentId: "sc-z8ju4z-2"
                })(["z-index:100;visibility:", ";opacity:", ";transition:visibility 150ms linear,opacity 150ms linear;background:", ";border:1px solid ", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);color:", ";border-radius:0.5rem;padding:1rem;display:grid;grid-template-rows:1fr;grid-gap:8px;font-size:1rem;text-align:left;"], (function(e) {
                    return e.show ? "visible" : "hidden"
                }), (function(e) {
                    return e.show ? 1 : 0
                }), (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.text2
                })),
                df = Ni.default.div.withConfig({
                    componentId: "sc-z8ju4z-3"
                })(["display:flex;justify-content:center;align-items:center;position:relative;border:none;"]),
                lf = Ni.default.div.withConfig({
                    componentId: "sc-z8ju4z-4"
                })(["font-size:16px;overflow:hidden;text-overflow:ellipsis;font-weight:600;color:", ";"], (function(e) {
                    var t = e.theme;
                    return e.active ? t.white : t.text2
                })),
                bf = Object(Ni.default)(Oo).withConfig({
                    componentId: "sc-z8ju4z-5"
                })(["font-size:12px;color:", ";"], (function(e) {
                    var t = e.theme;
                    return e.active ? t.white : t.text2
                })),
                pf = Object(Ni.default)(Ho).withConfig({
                    componentId: "sc-z8ju4z-6"
                })(["background-color:", ";opacity:", ";transition:200ms;align-items:center;padding:1rem;border-radius:20px;"], (function(e) {
                    var t = e.bgColor,
                        n = e.active,
                        i = e.theme;
                    return n ? null !== t && void 0 !== t ? t : "transparent" : i.bg2
                }), (function(e) {
                    return e.hasActiveTokens ? 1 : .4
                }));

            function ff(e) {
                return "list-row-".concat(e.replace(/\./g, "-"))
            }
            var jf = Object(a.memo)((function(e) {
                    var t = e.listUrl,
                        n = fe().chainId,
                        i = Ne((function(e) {
                            return e.lists.byUrl
                        })),
                        r = Se(),
                        o = i[t],
                        c = o.current,
                        s = o.pendingUpdate,
                        u = Object(a.useMemo)((function() {
                            return c && n ? c.tokens.reduce((function(e, t) {
                                return t.chainId === n ? e + 1 : e
                            }), 0) : 0
                        }), [n, c]),
                        d = Pc(),
                        b = Fp(null === c || void 0 === c ? void 0 : c.logoURI),
                        p = function(e) {
                            var t = Lt();
                            return Boolean(null === t || void 0 === t ? void 0 : t.includes(e))
                        }(t),
                        h = jp(!1),
                        m = Object(j.a)(h, 2),
                        x = m[0],
                        v = m[1],
                        O = Object(a.useRef)(),
                        g = Object(a.useState)(),
                        y = Object(j.a)(g, 2),
                        w = y[0],
                        k = y[1],
                        C = Object(a.useState)(),
                        T = Object(j.a)(C, 2),
                        I = T[0],
                        A = T[1],
                        E = Object(hb.a)(w, I, {
                            placement: "auto",
                            strategy: "fixed",
                            modifiers: [{
                                name: "offset",
                                options: {
                                    offset: [8, 8]
                                }
                            }]
                        }),
                        S = E.styles,
                        N = E.attributes;
                    ec(O, x ? v : void 0);
                    var R, U = Object(a.useCallback)((function() {
                            s && (l.a.event({
                                category: "Lists",
                                action: "Update List from List Select",
                                label: t
                            }), r(fr(t)))
                        }), [r, t, s]),
                        B = Object(a.useCallback)((function() {
                            l.a.event({
                                category: "Lists",
                                action: "Start Remove List",
                                label: t
                            }), "REMOVE" === window.prompt(we.a._("Please confirm you would like to remove this list by typing REMOVE")) && (l.a.event({
                                category: "Lists",
                                action: "Confirm Remove List",
                                label: t
                            }), r(lr(t)))
                        }), [r, t]),
                        M = Object(a.useCallback)((function() {
                            l.a.event({
                                category: "Lists",
                                action: "Enable List",
                                label: t
                            }), r(br(t))
                        }), [r, t]),
                        P = Object(a.useCallback)((function() {
                            l.a.event({
                                category: "Lists",
                                action: "Disable List",
                                label: t
                            }), r(pr(t))
                        }), [r, t]);
                    return c ? Object(je.jsxs)(pf, {
                        active: p,
                        hasActiveTokens: u > 0,
                        bgColor: b,
                        id: ff(t),
                        children: [c.logoURI ? Object(je.jsx)(Gb, {
                            size: "40px",
                            style: {
                                marginRight: "1rem"
                            },
                            logoURI: c.logoURI,
                            alt: "".concat(c.name, " list logo")
                        }) : Object(je.jsx)("div", {
                            style: {
                                width: "24px",
                                height: "24px",
                                marginRight: "1rem"
                            }
                        }), Object(je.jsxs)(zo, {
                            style: {
                                flex: "1"
                            },
                            children: [Object(je.jsx)(Ho, {
                                children: Object(je.jsx)(lf, {
                                    active: p,
                                    children: c.name
                                })
                            }), Object(je.jsxs)(_o, {
                                mt: "4px",
                                children: [Object(je.jsx)(bf, {
                                    active: p,
                                    mr: "6px",
                                    children: Object(je.jsx)(f.b, {
                                        id: "{activeTokensOnThisChain} tokens",
                                        values: {
                                            activeTokensOnThisChain: u
                                        }
                                    })
                                }), Object(je.jsxs)(df, {
                                    ref: O,
                                    children: [Object(je.jsx)(Hc, {
                                        onClick: v,
                                        ref: k,
                                        padding: "0",
                                        children: Object(je.jsx)(Yp.a, {
                                            stroke: p ? d.bg1 : d.text1,
                                            size: 12
                                        })
                                    }), x && Object(je.jsxs)(uf, Object(He.a)(Object(He.a)({
                                        show: !0,
                                        ref: A,
                                        style: S.popper
                                    }, N.popper), {}, {
                                        children: [Object(je.jsx)("div", {
                                            children: c && (R = c.version, "v".concat(R.major, ".").concat(R.minor, ".").concat(R.patch))
                                        }), Object(je.jsx)(Hb, {}), Object(je.jsx)(ro, {
                                            href: "https://tokenlists.org/token-list?url=".concat(t),
                                            children: Object(je.jsx)(f.b, {
                                                id: "View list"
                                            })
                                        }), Object(je.jsx)(sf, {
                                            onClick: B,
                                            disabled: 1 === Object.keys(i).length,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Remove list"
                                            })
                                        }), s && Object(je.jsx)(sf, {
                                            onClick: U,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Update list"
                                            })
                                        })]
                                    }))]
                                })]
                            })]
                        }), Object(je.jsx)(af, {
                            isActive: p,
                            bgColor: b,
                            toggle: function() {
                                p ? P() : M()
                            }
                        })]
                    }, t) : null
                })),
                hf = Ni.default.div.withConfig({
                    componentId: "sc-z8ju4z-7"
                })(["padding:1rem;height:100%;overflow:auto;padding-bottom:80px;"]);

            function mf(e) {
                var t = e.setModalView,
                    n = e.setImportList,
                    i = e.setListUrl,
                    r = fe().chainId,
                    o = Pc(),
                    c = Object(a.useState)(""),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1],
                    l = Bt(),
                    b = Object(a.useMemo)((function() {
                        return Object.values(l).reduce((function(e, t) {
                            var n = t.current;
                            return n ? Object(He.a)(Object(He.a)({}, e), {}, Object(m.a)({}, n.name, n.tokens.reduce((function(e, t) {
                                return t.chainId === r ? e + 1 : e
                            }), 0))) : e
                        }), {})
                    }), [r, l]),
                    p = Lt(),
                    h = Object(a.useCallback)((function(e) {
                        d(e.target.value)
                    }), []),
                    x = tf(),
                    v = Object(a.useMemo)((function() {
                        return Gl(u).length > 0 || Boolean(Ql(u))
                    }), [u]),
                    O = Object(a.useMemo)((function() {
                        return Object.keys(l).filter((function(e) {
                            return Boolean(l[e].current) && !Boolean(kt.includes(e))
                        })).sort((function(e, t) {
                            var n = l[e].current,
                                i = l[t].current;
                            return (null === p || void 0 === p ? void 0 : p.includes(e)) && !(null === p || void 0 === p ? void 0 : p.includes(t)) ? -1 : !(null === p || void 0 === p ? void 0 : p.includes(e)) && (null === p || void 0 === p ? void 0 : p.includes(t)) ? 1 : n && i ? b[n.name] > b[i.name] ? -1 : b[n.name] < b[i.name] ? 1 : n.name.toLowerCase() < i.name.toLowerCase() ? -1 : n.name.toLowerCase() === i.name.toLowerCase() ? 0 : 1 : n ? -1 : i ? 1 : 0
                        }))
                    }), [l, p, b]),
                    g = Object(a.useState)(),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1],
                    C = Object(a.useState)(),
                    T = Object(j.a)(C, 2),
                    I = T[0],
                    A = T[1];
                Object(a.useEffect)((function() {
                    function e() {
                        return (e = Object(R.a)(S.a.mark((function e() {
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        x(u, !1).then((function(e) {
                                            return k(e)
                                        })).catch((function() {
                                            return A(we.a._("Error importing list"))
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))).apply(this, arguments)
                    }
                    v ? function() {
                        e.apply(this, arguments)
                    }() : (k(void 0), "" !== u && A(we.a._("Enter valid list location"))), "" === u && A(void 0)
                }), [x, u, v]);
                var E = Object.keys(l).includes(u),
                    N = Object(a.useCallback)((function() {
                        w && (n(w), t(Cf.importList), i(u))
                    }), [u, n, i, t, w]);
                return Object(je.jsxs)(cf, {
                    children: [Object(je.jsxs)(Fb, {
                        gap: "14px",
                        children: [Object(je.jsx)(Ho, {
                            children: Object(je.jsx)(Vb, {
                                type: "text",
                                id: "list-add-input",
                                placeholder: we.a._("https:// or ipfs://"),
                                value: u,
                                onChange: h
                            })
                        }), I ? Object(je.jsx)(Uo, {
                            title: I,
                            style: {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            },
                            error: !0,
                            children: I
                        }) : null]
                    }), w && Object(je.jsx)(Fb, {
                        style: {
                            paddingTop: 0
                        },
                        children: Object(je.jsx)(ku, {
                            backgroundColor: o.bg2,
                            padding: "12px 20px",
                            children: Object(je.jsxs)(Fo, {
                                children: [Object(je.jsxs)(_o, {
                                    children: [w.logoURI && Object(je.jsx)(Gb, {
                                        logoURI: w.logoURI,
                                        size: "40px"
                                    }), Object(je.jsxs)(Lo, {
                                        gap: "4px",
                                        style: {
                                            marginLeft: "20px"
                                        },
                                        children: [Object(je.jsx)(Co, {
                                            fontWeight: 600,
                                            children: w.name
                                        }), Object(je.jsx)(Oo, {
                                            fontSize: "12px",
                                            children: Object(je.jsx)(f.b, {
                                                id: "{0} tokens",
                                                values: {
                                                    0: w.tokens.length
                                                }
                                            })
                                        })]
                                    })]
                                }), E ? Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(Gr, {
                                        stroke: o.text2,
                                        size: "16px",
                                        marginRight: "10px",
                                        children: Object(je.jsx)(ks.a, {})
                                    }), Object(je.jsx)(Co, {
                                        color: o.text2,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Loaded"
                                        })
                                    })]
                                }) : Object(je.jsx)(qc, {
                                    style: {
                                        fontSize: "14px"
                                    },
                                    padding: "6px 8px",
                                    width: "fit-content",
                                    onClick: N,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Import"
                                    })
                                })]
                            })
                        })
                    }), Object(je.jsx)(_b, {}), Object(je.jsx)(hf, {
                        children: Object(je.jsx)(Lo, {
                            gap: "md",
                            children: O.map((function(e) {
                                return Object(je.jsx)(jf, {
                                    listUrl: e
                                }, e)
                            }))
                        })
                    })]
                })
            }
            var xf = Ni.default.div.withConfig({
                    componentId: "sc-s3wxjn-0"
                })(["width:100%;height:calc(100% - 60px);position:relative;padding-bottom:80px;"]),
                vf = Ni.default.div.withConfig({
                    componentId: "sc-s3wxjn-1"
                })(["position:absolute;bottom:0;width:100%;border-radius:20px;border-top-right-radius:0;border-top-left-radius:0;border-top:1px solid ", ";padding:20px;text-align:center;"], (function(e) {
                    return e.theme.bg3
                }));

            function Of(e) {
                var t = e.setModalView,
                    n = e.setImportToken,
                    i = fe().chainId,
                    r = Object(a.useState)(""),
                    o = Object(j.a)(r, 2),
                    c = o[0],
                    s = o[1],
                    u = Pc(),
                    d = Object(a.useRef)(),
                    l = Object(a.useCallback)((function(e) {
                        var t = e.target.value,
                            n = xt(t);
                        s(n || t)
                    }), []),
                    b = xt(c),
                    p = Hn(c),
                    h = mi(),
                    m = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t, n) {
                            e(ri({
                                chainId: t,
                                address: n
                            }))
                        }), [e])
                    }(),
                    x = Object(a.useCallback)((function() {
                        i && h && h.map((function(e) {
                            return m(i, e.address)
                        }))
                    }), [m, h, i]),
                    v = Object(a.useMemo)((function() {
                        return i && h.map((function(e) {
                            return Object(je.jsxs)(Fo, {
                                width: "100%",
                                children: [Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(rb, {
                                        currency: e,
                                        size: "20px"
                                    }), Object(je.jsx)(ro, {
                                        href: gs(i, e.address, vs.ADDRESS),
                                        children: Object(je.jsx)(Oo, {
                                            ml: "10px",
                                            fontWeight: 600,
                                            children: e.symbol
                                        })
                                    })]
                                }), Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(eo, {
                                        onClick: function() {
                                            return m(i, e.address)
                                        }
                                    }), Object(je.jsx)(oo, {
                                        href: gs(i, e.address, vs.ADDRESS)
                                    })]
                                })]
                            }, e.address)
                        }))
                    }), [h, i, m]);
                return Object(je.jsxs)(xf, {
                    children: [Object(je.jsxs)(zo, {
                        style: {
                            width: "100%",
                            height: "100%",
                            flex: "1 1"
                        },
                        children: [Object(je.jsxs)(Fb, {
                            gap: "14px",
                            children: [Object(je.jsx)(Ho, {
                                children: Object(je.jsx)(Vb, {
                                    type: "text",
                                    id: "token-search-input",
                                    placeholder: "0x0000",
                                    value: c,
                                    autoComplete: "off",
                                    ref: d,
                                    onChange: l
                                })
                            }), "" !== c && !b && Object(je.jsx)(Uo, {
                                error: !0,
                                children: Object(je.jsx)(f.b, {
                                    id: "Enter valid token address"
                                })
                            }), p && Object(je.jsx)(ku, {
                                backgroundColor: u.bg2,
                                padding: "10px 0",
                                children: Object(je.jsx)(Zb, {
                                    token: p,
                                    showImportView: function() {
                                        return t(Cf.importToken)
                                    },
                                    setImportToken: n,
                                    style: {
                                        height: "fit-content"
                                    }
                                })
                            })]
                        }), Object(je.jsx)(_b, {}), Object(je.jsxs)(Fb, {
                            gap: "lg",
                            style: {
                                overflow: "auto",
                                marginBottom: "10px"
                            },
                            children: [Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)(Oo, {
                                    fontWeight: 600,
                                    children: Object(je.jsx)(f.b, {
                                        id: "{0} Custom Tokens",
                                        values: {
                                            0: null === h || void 0 === h ? void 0 : h.length
                                        }
                                    })
                                }), h.length > 0 && Object(je.jsx)(Hr, {
                                    onClick: x,
                                    children: Object(je.jsx)(So, {
                                        children: Object(je.jsx)(f.b, {
                                            id: "Clear all"
                                        })
                                    })
                                })]
                            }), v]
                        })]
                    }), Object(je.jsx)(vf, {
                        children: Object(je.jsx)(No, {
                            children: Object(je.jsx)(f.b, {
                                id: "Tip: Custom tokens are stored locally in your browser"
                            })
                        })
                    })]
                })
            }
            var gf = Ni.default.div.withConfig({
                    componentId: "sc-s8mduo-0"
                })(["width:100%;position:relative;padding-bottom:80px;"]),
                yf = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-s8mduo-1"
                })(["background-color:", ";border-radius:12px;padding:6px;"], (function(e) {
                    return e.theme.bg3
                })),
                wf = Ni.default.div.withConfig({
                    componentId: "sc-s8mduo-2"
                })(["width:48%;padding:10px;display:flex;align-items:center;justify-content:center;border-radius:12px;font-weight:600;background-color:", ";color:", ";user-select:none;:hover{cursor:pointer;opacity:0.7;}"], (function(e) {
                    var t = e.theme;
                    return e.active ? t.bg1 : t.bg3
                }), (function(e) {
                    var t = e.theme;
                    return e.active ? t.text1 : t.text2
                }));

            function kf(e) {
                var t = e.onDismiss,
                    n = e.setModalView,
                    i = e.setImportList,
                    r = e.setImportToken,
                    o = e.setListUrl,
                    c = Object(a.useState)(!0),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1];
                return Object(je.jsxs)(gf, {
                    children: [Object(je.jsx)(Fb, {
                        children: Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Lr.a, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return n(Cf.search)
                                }
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Manage"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: t
                            })]
                        })
                    }), Object(je.jsx)(_b, {}), Object(je.jsx)(Fb, {
                        style: {
                            paddingBottom: 0
                        },
                        children: Object(je.jsxs)(yf, {
                            children: [Object(je.jsx)(wf, {
                                onClick: function() {
                                    return d(!u)
                                },
                                active: u,
                                children: Object(je.jsx)(f.b, {
                                    id: "Lists"
                                })
                            }), Object(je.jsx)(wf, {
                                onClick: function() {
                                    return d(!u)
                                },
                                active: !u,
                                children: Object(je.jsx)(f.b, {
                                    id: "Tokens"
                                })
                            })]
                        })
                    }), u ? Object(je.jsx)(mf, {
                        setModalView: n,
                        setImportList: i,
                        setListUrl: o
                    }) : Object(je.jsx)(Of, {
                        setModalView: n,
                        setImportToken: r
                    })]
                })
            }
            var Cf, Tf = Ni.default.div.withConfig({
                componentId: "sc-11ypl1h-0"
            })(["position:relative;width:100%;overflow:auto;"]);

            function If(e) {
                var t, n = e.listURL,
                    i = e.list,
                    r = e.setModalView,
                    o = e.onDismiss,
                    c = Pc(),
                    s = Se(),
                    u = Object(a.useState)(!1),
                    d = Object(j.a)(u, 2),
                    b = d[0],
                    p = d[1],
                    h = Bt(),
                    m = tf(),
                    x = Boolean(null === (t = h[n]) || void 0 === t ? void 0 : t.loadingRequestId),
                    v = Object(a.useState)(null),
                    O = Object(j.a)(v, 2),
                    g = O[0],
                    y = O[1],
                    w = Object(a.useCallback)((function() {
                        x || (y(null), m(n).then((function() {
                            l.a.event({
                                category: "Lists",
                                action: "Add List",
                                label: n
                            }), s(br(n)), r(Cf.manage)
                        })).catch((function(e) {
                            l.a.event({
                                category: "Lists",
                                action: "Add List Failed",
                                label: n
                            }), y(e.message), s(lr(n))
                        })))
                    }), [x, s, m, n, r]);
                return Object(je.jsxs)(Tf, {
                    children: [Object(je.jsx)(Fb, {
                        gap: "14px",
                        style: {
                            width: "100%",
                            flex: "1 1"
                        },
                        children: Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Lr.a, {
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return r(Cf.manage)
                                }
                            }), Object(je.jsx)(Io, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Import List"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: o
                            })]
                        })
                    }), Object(je.jsx)(wp, {}), Object(je.jsx)(Fb, {
                        gap: "md",
                        children: Object(je.jsxs)(Lo, {
                            gap: "md",
                            children: [Object(je.jsx)(ku, {
                                backgroundColor: c.bg2,
                                padding: "12px 20px",
                                children: Object(je.jsx)(Fo, {
                                    children: Object(je.jsxs)(_o, {
                                        children: [i.logoURI && Object(je.jsx)(Gb, {
                                            logoURI: i.logoURI,
                                            size: "40px"
                                        }), Object(je.jsxs)(Lo, {
                                            gap: "sm",
                                            style: {
                                                marginLeft: "20px"
                                            },
                                            children: [Object(je.jsxs)(_o, {
                                                children: [Object(je.jsx)(Co, {
                                                    fontWeight: 600,
                                                    mr: "6px",
                                                    children: i.name
                                                }), Object(je.jsx)(Wb, {}), Object(je.jsx)(Oo, {
                                                    fontSize: "16px",
                                                    ml: "6px",
                                                    children: Object(je.jsx)(f.b, {
                                                        id: "{0} tokens",
                                                        values: {
                                                            0: i.tokens.length
                                                        }
                                                    })
                                                })]
                                            }), Object(je.jsx)(ro, {
                                                href: "https://tokenlists.org/token-list?url=".concat(n),
                                                children: Object(je.jsx)(Oo, {
                                                    fontSize: "12px",
                                                    color: c.blue1,
                                                    children: n
                                                })
                                            })]
                                        })]
                                    })
                                })
                            }), Object(je.jsxs)(ku, {
                                style: {
                                    backgroundColor: Object(ea.c)(.8, c.red1)
                                },
                                children: [Object(je.jsxs)(Lo, {
                                    justify: "center",
                                    style: {
                                        textAlign: "center",
                                        gap: "16px",
                                        marginBottom: "12px"
                                    },
                                    children: [Object(je.jsx)(Ll.a, {
                                        stroke: c.red1,
                                        size: 32
                                    }), Object(je.jsx)(Co, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        color: c.red1,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Import at your own risk"
                                        })
                                    })]
                                }), Object(je.jsxs)(Lo, {
                                    style: {
                                        textAlign: "center",
                                        gap: "16px",
                                        marginBottom: "12px"
                                    },
                                    children: [Object(je.jsx)(Co, {
                                        fontWeight: 500,
                                        color: c.red1,
                                        children: Object(je.jsx)(f.b, {
                                            id: "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."
                                        })
                                    }), Object(je.jsx)(Co, {
                                        fontWeight: 600,
                                        color: c.red1,
                                        children: Object(je.jsx)(f.b, {
                                            id: "If you purchase a token from this list, you may not be able to sell it back."
                                        })
                                    })]
                                }), Object(je.jsxs)(Vo, {
                                    justify: "center",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: function() {
                                        return p(!b)
                                    },
                                    children: [Object(je.jsx)(qb, {
                                        name: "confirmed",
                                        type: "checkbox",
                                        checked: b,
                                        onChange: function() {
                                            return p(!b)
                                        }
                                    }), Object(je.jsx)(Co, {
                                        ml: "10px",
                                        fontSize: "16px",
                                        color: c.red1,
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "I understand"
                                        })
                                    })]
                                })]
                            }), Object(je.jsx)(qc, {
                                disabled: !b,
                                altDisabledStyle: !0,
                                $borderRadius: "20px",
                                padding: "10px 1rem",
                                onClick: w,
                                children: Object(je.jsx)(f.b, {
                                    id: "Import"
                                })
                            }), g ? Object(je.jsx)(Uo, {
                                title: g,
                                style: {
                                    textOverflow: "ellipsis",
                                    overflow: "hidden"
                                },
                                error: !0,
                                children: g
                            }) : null]
                        })
                    })]
                })
            }

            function Af(e) {
                var t = e.isOpen,
                    n = e.onDismiss,
                    i = e.onCurrencySelect,
                    r = e.selectedCurrency,
                    o = e.otherSelectedCurrency,
                    c = e.showCommonBases,
                    s = void 0 !== c && c,
                    u = e.showCurrencyAmount,
                    d = void 0 === u || u,
                    l = e.disableNonToken,
                    b = void 0 !== l && l,
                    p = Object(a.useState)(Cf.manage),
                    f = Object(j.a)(p, 2),
                    h = f[0],
                    m = f[1],
                    x = function(e, t) {
                        var n = Object(a.useState)(t && t(e) ? e : void 0),
                            i = Object(j.a)(n, 2),
                            r = i[0],
                            o = i[1];
                        return Object(a.useEffect)((function() {
                            o((function(n) {
                                return !t || t(e) ? e : n
                            }))
                        }), [t, e]), r
                    }(t);
                Object(a.useEffect)((function() {
                    t && !x && m(Cf.search)
                }), [t, x]);
                var v = Object(a.useCallback)((function(e) {
                        i(e), n()
                    }), [n, i]),
                    O = xs(h),
                    g = Object(a.useState)(),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1],
                    C = Object(a.useState)(),
                    T = Object(j.a)(C, 2),
                    I = T[0],
                    A = T[1],
                    E = Object(a.useState)(),
                    S = Object(j.a)(E, 2),
                    N = S[0],
                    R = S[1],
                    U = h === Cf.importToken || h === Cf.importList ? 40 : 80;
                return Object(je.jsx)(Sc, {
                    isOpen: t,
                    onDismiss: n,
                    maxHeight: 80,
                    minHeight: U,
                    children: h === Cf.search ? Object(je.jsx)(Op, {
                        isOpen: t,
                        onDismiss: n,
                        onCurrencySelect: v,
                        selectedCurrency: r,
                        otherSelectedCurrency: o,
                        showCommonBases: s,
                        showCurrencyAmount: d,
                        disableNonToken: b,
                        showImportView: function() {
                            return m(Cf.importToken)
                        },
                        setImportToken: k,
                        showManageView: function() {
                            return m(Cf.manage)
                        }
                    }) : h === Cf.importToken && w ? Object(je.jsx)(Mp, {
                        tokens: [w],
                        onDismiss: n,
                        list: w instanceof St ? w.list : void 0,
                        onBack: function() {
                            return m(O && O !== Cf.importToken ? O : Cf.search)
                        },
                        handleCurrencySelect: v
                    }) : h === Cf.importList && I && N ? Object(je.jsx)(If, {
                        list: I,
                        listURL: N,
                        onDismiss: n,
                        setModalView: m
                    }) : h === Cf.manage ? Object(je.jsx)(kf, {
                        onDismiss: n,
                        setModalView: m,
                        setImportToken: k,
                        setImportList: A,
                        setListUrl: R
                    }) : ""
                })
            }! function(e) {
                e[e.search = 0] = "search", e[e.manage = 1] = "manage", e[e.importToken = 2] = "importToken", e[e.importList = 3] = "importList"
            }(Cf || (Cf = {}));
            var Ef = Ni.default.div.withConfig({
                    componentId: "sc-skatqk-0"
                })(["position:relative;display:flex;flex-direction:row;margin-left:", ";"], (function(e) {
                    var t = e.sizeraw;
                    return e.margin && (t / 3 + 8).toString() + "px"
                })),
                Sf = Object(Ni.default)(rb).withConfig({
                    componentId: "sc-skatqk-1"
                })(["z-index:2;"]),
                Nf = Object(Ni.default)(rb).withConfig({
                    componentId: "sc-skatqk-2"
                })(["position:absolute;left:", " !important;"], (function(e) {
                    return "-" + (e.sizeraw / 2).toString() + "px"
                }));

            function Rf(e) {
                var t = e.currency0,
                    n = e.currency1,
                    i = e.size,
                    r = void 0 === i ? 16 : i,
                    o = e.margin,
                    a = void 0 !== o && o;
                return Object(je.jsxs)(Ef, {
                    sizeraw: r,
                    margin: a,
                    children: [t && Object(je.jsx)(Sf, {
                        currency: t,
                        size: r.toString() + "px"
                    }), n && Object(je.jsx)(Nf, {
                        currency: n,
                        size: r.toString() + "px",
                        sizeraw: r
                    })]
                })
            }
            var Uf, Bf = ["value", "onUserInput", "placeholder", "prependSymbol"],
                Mf = Ni.default.input.withConfig({
                    componentId: "sc-1x3stf0-0"
                })(["color:", ";width:0;position:relative;font-weight:500;outline:none;border:none;flex:1 1 auto;background-color:", ";font-size:", ";text-align:", ";white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0px;-webkit-appearance:textfield;text-align:right;::-webkit-search-decoration{-webkit-appearance:none;}[type='number']{-moz-appearance:textfield;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:", ";}"], (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.red1 : n.text1
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var t = e.fontSize;
                    return null !== t && void 0 !== t ? t : "24px"
                }), (function(e) {
                    var t = e.align;
                    return t && t
                }), (function(e) {
                    return e.theme.text4
                })),
                Pf = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
                Lf = c.a.memo((function(e) {
                    var t = e.value,
                        n = e.onUserInput,
                        i = e.placeholder,
                        r = e.prependSymbol,
                        o = Object(Rr.a)(e, Bf),
                        a = function(e) {
                            ("" === e || Pf.test(e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))) && n(e)
                        };
                    return Object(je.jsx)(Mf, Object(He.a)(Object(He.a)({}, o), {}, {
                        value: r && t ? r + t : t,
                        onChange: function(e) {
                            if (r) {
                                var t = e.target.value,
                                    n = t.toString().includes(r) ? t.toString().slice(1, t.toString().length + 1) : t;
                                a(n.replace(/,/g, "."))
                            } else a(e.target.value.replace(/,/g, "."))
                        },
                        inputMode: "decimal",
                        autoComplete: "off",
                        autoCorrect: "off",
                        type: "text",
                        pattern: "^[0-9]*[.,]?[0-9]*$",
                        placeholder: i || "0.0",
                        minLength: 1,
                        maxLength: 79,
                        spellCheck: "false"
                    }))
                })),
                zf = ["title", "titleId"];

            function Df() {
                return (Df = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Wf(e, t) {
                if (null == e) return {};
                var n, i, r = function(e, t) {
                    if (null == e) return {};
                    var n, i, r = {},
                        o = Object.keys(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                }
                return r
            }

            function qf(e, t) {
                var n = e.title,
                    i = e.titleId,
                    r = Wf(e, zf);
                return a.createElement("svg", Df({
                    width: 12,
                    height: 7,
                    viewBox: "0 0 12 7",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ref: t,
                    "aria-labelledby": i
                }, r), n ? a.createElement("title", {
                    id: i
                }, n) : null, Uf || (Uf = a.createElement("path", {
                    d: "M0.97168 1L6.20532 6L11.439 1",
                    stroke: "#AEAEAE"
                })))
            }
            var Ff = a.forwardRef(qf),
                Yf = (n.p, n(669)),
                Vf = new J.Percent(X.a.BigInt(30), X.a.BigInt(1e4)),
                _f = new J.Percent(X.a.BigInt(1e4), X.a.BigInt(1e4)),
                Hf = _f.subtract(Vf);

            function Qf(e) {
                var t = _f.subtract(e.route.pairs.reduce((function(e) {
                    return e.multiply(Hf)
                }), _f));
                return new J.Percent(t.numerator, t.denominator)
            }
            var Gf = [ue, ce, ae, oe];

            function Jf(e) {
                if (!e) return 4;
                var t, n = Gf.length,
                    i = Object(N.a)(Gf);
                try {
                    for (i.s(); !(t = i.n()).done;) {
                        if (t.value.lessThan(e)) return n;
                        n--
                    }
                } catch (r) {
                    i.e(r)
                } finally {
                    i.f()
                }
                return 0
            }
            var Kf = ["text", "maxCharacters", "margin", "adjustSize", "fontSize", "link"],
                Xf = Ni.default.span.withConfig({
                    componentId: "sc-19p08fx-0"
                })(["margin-left:", ";color:", ";font-size:", ";@media screen and (max-width:600px){font-size:", ";}"], (function(e) {
                    return e.margin && "4px"
                }), (function(e) {
                    var t = e.theme;
                    return e.link ? t.blue1 : t.text1
                }), (function(e) {
                    var t = e.fontSize;
                    return null !== t && void 0 !== t ? t : "inherit"
                }), (function(e) {
                    return e.adjustSize && "12px"
                })),
                Zf = function(e) {
                    var t = e.text,
                        n = e.maxCharacters,
                        i = void 0 === n ? 20 : n,
                        r = e.margin,
                        o = void 0 !== r && r,
                        c = e.adjustSize,
                        s = void 0 !== c && c,
                        u = e.fontSize,
                        d = e.link,
                        l = Object(Rr.a)(e, Kf),
                        b = Object(a.useState)(!1),
                        p = Object(j.a)(b, 2),
                        f = p[0],
                        h = p[1];
                    return t ? t.length > i ? Object(je.jsx)(Ab, {
                        text: t,
                        show: f,
                        children: Object(je.jsx)(Xf, Object(He.a)(Object(He.a)({
                            onMouseEnter: function() {
                                return h(!0)
                            },
                            onMouseLeave: function() {
                                return h(!1)
                            },
                            margin: o,
                            adjustSize: s,
                            link: d,
                            fontSize: u
                        }, l), {}, {
                            children: " " + t.slice(0, i - 1) + "..."
                        }))
                    }) : Object(je.jsx)(Xf, Object(He.a)(Object(He.a)({
                        margin: o,
                        adjustSize: s,
                        link: d,
                        fontSize: u
                    }, l), {}, {
                        children: t
                    })) : Object(je.jsx)("span", {})
                };

            function $f(e) {
                var t = e.fiatValue,
                    n = e.priceImpact,
                    i = Pc(),
                    r = Object(a.useMemo)((function() {
                        if (n) {
                            if (n.lessThan("0")) return i.green1;
                            var e = Jf(n);
                            return e < 1 ? i.text3 : e < 3 ? i.yellow1 : i.red1
                        }
                    }), [n, i.green1, i.red1, i.text3, i.yellow1]);
                return Object(je.jsxs)(Co, {
                    fontSize: 14,
                    color: t ? i.text2 : i.text4,
                    children: [t ? Object(je.jsx)(f.b, {
                        id: "~$ <0/>",
                        components: {
                            0: Object(je.jsx)(Zf, {
                                text: null === t || void 0 === t ? void 0 : t.toSignificant(6, {
                                    groupSeparator: ","
                                })
                            })
                        }
                    }) : "", n ? Object(je.jsxs)("span", {
                        style: {
                            color: r
                        },
                        children: [" ", "(", Object(je.jsx)(f.b, {
                            id: "{0}%",
                            values: {
                                0: n.multiply(-1).toSignificant(3)
                            }
                        }), ")"]
                    }) : null]
                })
            }

            function ej(e, t) {
                return e ? X.a.equal(e.quotient, X.a.BigInt(0)) ? "0" : e.divide(e.decimalScale).lessThan(new J.Fraction(1, 1e5)) ? "<0.00001" : e.toFixed(t) : "-"
            }
            var tj, nj = ["value", "onUserInput", "onMax", "showMaxButton", "onCurrencySelect", "currency", "otherCurrency", "id", "showCommonBases", "showCurrencyAmount", "disableNonToken", "renderBalance", "fiatValue", "priceImpact", "hideBalance", "pair", "hideInput", "locked"],
                ij = Ni.default.div.withConfig({
                    componentId: "sc-33m4yg-0"
                })(["", " position:relative;border-radius:", ";background-color:", ";z-index:1;width:", ";"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.hideInput ? "16px" : "20px"
                }), (function(e) {
                    var t = e.theme;
                    return e.hideInput ? "transparent" : t.bg2
                }), (function(e) {
                    return e.hideInput ? "100%" : "initial"
                })),
                rj = Ni.default.div.withConfig({
                    componentId: "sc-33m4yg-1"
                })(["width:100%;height:100%;position:absolute;border-radius:20px;background-color:", ";opacity:0.95;display:flex;align-items:center;justify-content:center;z-index:2;"], (function(e) {
                    return e.theme.bg1
                })),
                oj = Ni.default.div.withConfig({
                    componentId: "sc-33m4yg-2"
                })(["border-radius:", ";border:1px solid ", ";background-color:", ";width:", ";:focus,:hover{border:1px solid ", ";}"], (function(e) {
                    return e.hideInput ? "16px" : "20px"
                }), (function(e) {
                    var t = e.theme;
                    return e.hideInput ? " transparent" : t.bg2
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.hideInput ? "100%" : "initial"
                }), (function(e) {
                    var t = e.theme;
                    return e.hideInput ? " transparent" : t.bg3
                })),
                aj = Object(Ni.default)(Yc).withConfig({
                    componentId: "sc-33m4yg-3"
                })(["align-items:center;font-size:24px;font-weight:500;background-color:", ";color:", ";border-radius:16px;box-shadow:", ";box-shadow:0px 6px 10px rgba(0,0,0,0.075);outline:none;cursor:pointer;user-select:none;border:none;height:", ";width:", ";padding:0 8px;justify-content:space-between;margin-right:", ";:focus,:hover{background-color:", ";}"], (function(e) {
                    var t = e.selected,
                        n = e.theme;
                    return t ? n.bg0 : n.primary1
                }), (function(e) {
                    var t = e.selected,
                        n = e.theme;
                    return t ? n.text1 : n.white
                }), (function(e) {
                    return e.selected ? "none" : "0px 6px 10px rgba(0, 0, 0, 0.075)"
                }), (function(e) {
                    return e.hideInput ? "2.8rem" : "2.4rem"
                }), (function(e) {
                    return e.hideInput ? "100%" : "initial"
                }), (function(e) {
                    return e.hideInput ? "0" : "12px"
                }), (function(e) {
                    var t = e.selected,
                        n = e.theme;
                    return t ? n.bg2 : Object(ea.a)(.05, n.primary1)
                })),
                cj = Ni.default.div.withConfig({
                    componentId: "sc-33m4yg-4"
                })(["", " align-items:center;padding:", ";"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.selected ? " 1rem 1rem 0.75rem 1rem" : "1rem 1rem 0.75rem 1rem"
                })),
                sj = Ni.default.div.withConfig({
                    componentId: "sc-33m4yg-5"
                })(["", " align-items:center;color:", ";font-size:0.75rem;line-height:1rem;padding:0 1rem 1rem;span:hover{cursor:pointer;color:", ";}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.2, t.text2)
                })),
                uj = Object(Ni.default)(sj).withConfig({
                    componentId: "sc-33m4yg-6"
                })(["justify-content:flex-end;"]),
                dj = Ni.default.span.withConfig({
                    componentId: "sc-33m4yg-7"
                })(["display:flex;align-items:center;justify-content:space-between;width:100%;"]),
                lj = Object(Ni.default)(Ff).withConfig({
                    componentId: "sc-33m4yg-8"
                })(["margin:0 0.25rem 0 0.35rem;height:35%;path{stroke:", ";stroke-width:1.5px;}"], (function(e) {
                    var t = e.selected,
                        n = e.theme;
                    return t ? n.text1 : n.white
                })),
                bj = Ni.default.span.withConfig({
                    componentId: "sc-33m4yg-9"
                })(["", " font-size:", ";"], (function(e) {
                    e.active;
                    return "  margin: 0 0.25rem 0 0.25rem;"
                }), (function(e) {
                    e.active;
                    return "18px"
                })),
                pj = Ni.default.button.withConfig({
                    componentId: "sc-33m4yg-10"
                })(["background-color:transparent;border:none;border-radius:12px;font-size:14px;font-weight:500;cursor:pointer;padding:0;color:", ";opacity:", ";pointer-events:", ";margin-left:0.25rem;:focus{outline:none;}", ";"], (function(e) {
                    return e.theme.primaryText1
                }), (function(e) {
                    return e.disabled ? .4 : 1
                }), (function(e) {
                    return e.disabled ? "none" : "initial"
                }), (function(e) {
                    return e.theme.mediaWidth.upToExtraSmall(tj || (tj = Object(Si.a)(["\n    margin-right: 0.5rem;\n  "])))
                }));

            function fj(e) {
                var t, n, i = e.value,
                    r = e.onUserInput,
                    o = e.onMax,
                    c = e.showMaxButton,
                    s = e.onCurrencySelect,
                    u = e.currency,
                    d = e.otherCurrency,
                    l = e.id,
                    b = e.showCommonBases,
                    p = e.showCurrencyAmount,
                    h = e.disableNonToken,
                    m = e.renderBalance,
                    x = e.fiatValue,
                    v = e.priceImpact,
                    O = e.hideBalance,
                    g = void 0 !== O && O,
                    y = e.pair,
                    w = void 0 === y ? null : y,
                    k = e.hideInput,
                    C = void 0 !== k && k,
                    T = e.locked,
                    I = void 0 !== T && T,
                    A = Object(Rr.a)(e, nj),
                    E = Object(a.useState)(!1),
                    S = Object(j.a)(E, 2),
                    N = S[0],
                    R = S[1],
                    U = fe().account,
                    B = za(null !== U && void 0 !== U ? U : void 0, null !== u && void 0 !== u ? u : void 0),
                    M = Pc(),
                    P = Object(a.useCallback)((function() {
                        R(!1)
                    }), [R]);
                return Object(je.jsxs)(ij, Object(He.a)(Object(He.a)({
                    id: l,
                    hideInput: C
                }, A), {}, {
                    children: [I && Object(je.jsx)(rj, {
                        children: Object(je.jsxs)(Lo, {
                            gap: "sm",
                            justify: "center",
                            children: [Object(je.jsx)(Yf.a, {}), Object(je.jsx)(yo, {
                                fontSize: "12px",
                                textAlign: "center",
                                padding: "0 12px",
                                children: Object(je.jsx)(f.b, {
                                    id: "The market price is outside your specified price range. Single-asset deposit only."
                                })
                            })]
                        })
                    }), Object(je.jsxs)(oj, {
                        hideInput: C,
                        children: [Object(je.jsxs)(cj, {
                            style: C ? {
                                padding: "0",
                                borderRadius: "8px"
                            } : {},
                            selected: !s,
                            children: [Object(je.jsx)(aj, {
                                selected: !!u,
                                hideInput: C,
                                className: "open-currency-select-button",
                                onClick: function() {
                                    s && R(!0)
                                },
                                children: Object(je.jsxs)(dj, {
                                    children: [Object(je.jsxs)(_o, {
                                        children: [w ? Object(je.jsx)("span", {
                                            style: {
                                                marginRight: "0.5rem"
                                            },
                                            children: Object(je.jsx)(Rf, {
                                                currency0: w.token0,
                                                currency1: w.token1,
                                                size: 24,
                                                margin: !0
                                            })
                                        }) : u ? Object(je.jsx)(rb, {
                                            style: {
                                                marginRight: "0.5rem"
                                            },
                                            currency: u,
                                            size: "24px"
                                        }) : null, w ? Object(je.jsxs)(bj, {
                                            className: "pair-name-container",
                                            children: [null === w || void 0 === w ? void 0 : w.token0.symbol, ":", null === w || void 0 === w ? void 0 : w.token1.symbol]
                                        }) : Object(je.jsx)(bj, {
                                            className: "token-symbol-container",
                                            active: Boolean(u && u.symbol),
                                            children: (u && u.symbol && u.symbol.length > 20 ? u.symbol.slice(0, 4) + "..." + u.symbol.slice(u.symbol.length - 5, u.symbol.length) : null === u || void 0 === u ? void 0 : u.symbol) || Object(je.jsx)(f.b, {
                                                id: "Select a token"
                                            })
                                        })]
                                    }), s && Object(je.jsx)(lj, {
                                        selected: !!u
                                    })]
                                })
                            }), !C && Object(je.jsx)(je.Fragment, {
                                children: Object(je.jsx)(Lf, {
                                    className: "token-amount-input",
                                    value: i,
                                    onUserInput: function(e) {
                                        r(e)
                                    }
                                })
                            })]
                        }), !C && !g && Object(je.jsx)(uj, {
                            children: Object(je.jsxs)(Fo, {
                                children: [U ? Object(je.jsxs)(_o, {
                                    style: {
                                        height: "17px"
                                    },
                                    children: [Object(je.jsx)(Co, {
                                        onClick: o,
                                        color: M.text2,
                                        fontWeight: 400,
                                        fontSize: 14,
                                        style: {
                                            display: "inline",
                                            cursor: "pointer"
                                        },
                                        children: !g && u && B ? m ? m(B) : Object(je.jsx)(f.b, {
                                            id: "Balance: {0} {1}",
                                            values: {
                                                0: (t = B, n = 4, t ? X.a.equal(t.quotient, X.a.BigInt(0)) ? "0" : t.divide(t.decimalScale).lessThan(new J.Fraction(1, 1e5)) ? "<0.00001" : t.toSignificant(n) : "-"),
                                                1: u.symbol
                                            }
                                        }) : null
                                    }), c && B ? Object(je.jsx)(pj, {
                                        onClick: o,
                                        children: Object(je.jsx)(f.b, {
                                            id: "(Max)"
                                        })
                                    }) : null]
                                }) : Object(je.jsx)("span", {}), Object(je.jsx)($f, {
                                    fiatValue: x,
                                    priceImpact: v
                                })]
                            })
                        })]
                    }), s && Object(je.jsx)(Af, {
                        isOpen: N,
                        onDismiss: P,
                        onCurrencySelect: s,
                        selectedCurrency: u,
                        otherSelectedCurrency: d,
                        showCommonBases: b,
                        showCurrencyAmount: p,
                        disableNonToken: h
                    })]
                }))
            }
            var jj, hj, mj, xj = Ni.default.span.withConfig({
                    componentId: "sc-1poje5t-0"
                })(["padding:0.25rem 0.6rem;border-radius:9px;background:", ";color:", ";font-size:14px;font-weight:", ";:hover{user-select:", ";background:", ";color:", ";}"], (function(e) {
                    var t = e.theme,
                        n = e.isActive,
                        i = e.isOnSwitch;
                    return n ? i ? t.primary1 : t.bg4 : "none"
                }), (function(e) {
                    var t = e.theme;
                    return e.isActive ? t.white : t.text2
                }), (function(e) {
                    return e.isOnSwitch ? "500" : "400"
                }), (function(e) {
                    return e.isOnSwitch ? "none" : "initial"
                }), (function(e) {
                    var t = e.theme,
                        n = e.isActive,
                        i = e.isOnSwitch;
                    return n ? i ? Object(ea.a)(.05, t.primary1) : Object(ea.a)(.05, t.bg4) : "none"
                }), (function(e) {
                    var t = e.theme,
                        n = e.isActive;
                    e.isOnSwitch;
                    return n ? t.white : t.text3
                })),
                vj = Ni.default.button.withConfig({
                    componentId: "sc-1poje5t-1"
                })(["border-radius:12px;border:none;background:", ";display:flex;width:fit-content;cursor:pointer;outline:none;padding:2px;"], (function(e) {
                    return e.theme.bg0
                }));

            function Oj(e) {
                var t = e.id,
                    n = e.isActive,
                    i = e.toggle,
                    r = e.checked,
                    o = void 0 === r ? Object(je.jsx)(f.b, {
                        id: "On"
                    }) : r,
                    a = e.unchecked,
                    c = void 0 === a ? Object(je.jsx)(f.b, {
                        id: "Off"
                    }) : a;
                return Object(je.jsxs)(vj, {
                    id: t,
                    isActive: n,
                    onClick: i,
                    children: [Object(je.jsx)(xj, {
                        isActive: n,
                        isOnSwitch: !0,
                        children: o
                    }), Object(je.jsx)(xj, {
                        isActive: !n,
                        isOnSwitch: !1,
                        children: c
                    })]
                })
            }! function(e) {
                e.InvalidInput = "InvalidInput"
            }(hj || (hj = {})),
            function(e) {
                e.InvalidInput = "InvalidInput"
            }(mj || (mj = {}));
            var gj, yj = Ni.default.button.withConfig({
                    componentId: "sc-fzcgd8-0"
                })(["color:", ";align-items:center;height:2rem;border-radius:36px;font-size:1rem;width:auto;min-width:3.5rem;border:1px solid ", ";outline:none;background:", ";:hover{border:1px solid ", ";}:focus{border:1px solid ", ";}"], (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.bg4
                }), (function(e) {
                    return e.theme.primary1
                })),
                wj = Object(Ni.default)(yj).withConfig({
                    componentId: "sc-fzcgd8-1"
                })(["margin-right:8px;:hover{cursor:pointer;}background-color:", ";color:", ";"], (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t && n.primary1
                }), (function(e) {
                    var t = e.active,
                        n = e.theme;
                    return t ? n.white : n.text1
                })),
                kj = Ni.default.input.withConfig({
                    componentId: "sc-fzcgd8-2"
                })(["background:", ";font-size:16px;width:auto;outline:none;&::-webkit-outer-spin-button,&::-webkit-inner-spin-button{-webkit-appearance:none;}color:", ";text-align:right;"], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    var t = e.theme;
                    return "red" === e.color ? t.red1 : t.text1
                })),
                Cj = Object(Ni.default)(yj).withConfig({
                    componentId: "sc-fzcgd8-3"
                })(["height:2rem;position:relative;padding:0 0.75rem;flex:1;border:", ";:hover{border:", ";}input{width:100%;height:100%;border:0px;border-radius:2rem;}"], (function(e) {
                    var t = e.theme,
                        n = e.active,
                        i = e.warning;
                    return n ? "1px solid ".concat(i ? t.red1 : t.primary1) : i && "1px solid ".concat(t.red1)
                }), (function(e) {
                    var t = e.theme,
                        n = e.active,
                        i = e.warning;
                    return n && "1px solid ".concat(i ? Object(ea.a)(.1, t.red1) : Object(ea.a)(.1, t.primary1))
                })),
                Tj = Ni.default.span.withConfig({
                    componentId: "sc-fzcgd8-4"
                })(["color:#f3841e;", ""], (function(e) {
                    return e.theme.mediaWidth.upToSmall(jj || (jj = Object(Si.a)(["\n    display: none;\n  "])))
                }));

            function Ij(e) {
                var t = e.placeholderSlippage,
                    n = fe().chainId,
                    i = Object(a.useContext)(Ni.ThemeContext),
                    r = ji(),
                    o = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t) {
                            var n;
                            try {
                                n = "auto" === t ? "auto" : X.a.toNumber(t.multiply(1e4).quotient)
                            } catch (i) {
                                n = "auto"
                            }
                            e(ti({
                                userSlippageTolerance: n
                            }))
                        }), [e])
                    }(),
                    c = function() {
                        var e = Se();
                        return [Ne((function(e) {
                            return e.user.userDeadline
                        })), Object(a.useCallback)((function(t) {
                            e(ni({
                                userDeadline: t
                            }))
                        }), [e])]
                    }(),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1],
                    l = Object(a.useState)(""),
                    b = Object(j.a)(l, 2),
                    p = b[0],
                    h = b[1],
                    m = Object(a.useState)(!1),
                    x = Object(j.a)(m, 2),
                    v = x[0],
                    O = x[1],
                    g = Object(a.useState)(""),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1],
                    C = Object(a.useState)(!1),
                    T = Object(j.a)(C, 2),
                    I = T[0],
                    A = T[1];

                function E(e) {
                    if (h(e), O(!1), 0 === e.length) o("auto");
                    else {
                        var t = Math.floor(100 * Number.parseFloat(e));
                        !Number.isInteger(t) || t < 0 || t > 5e3 ? (o("auto"), "." !== e && O(hj.InvalidInput)) : o(new J.Percent(t, 1e4))
                    }
                }
                var S = "auto" !== r && r.lessThan(new J.Percent(5, 1e4)),
                    N = "auto" !== r && r.greaterThan(new J.Percent(1, 100));
                var R = Boolean(n);
                return Object(je.jsxs)(Lo, {
                    gap: "md",
                    children: [Object(je.jsxs)(Lo, {
                        gap: "sm",
                        children: [Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(wo, {
                                fontWeight: 400,
                                fontSize: 14,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Slippage tolerance"
                                })
                            }), Object(je.jsx)(Mb, {
                                text: Object(je.jsx)(f.b, {
                                    id: "Your transaction will revert if the price changes unfavorably by more than this percentage."
                                })
                            })]
                        }), Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(wj, {
                                onClick: function() {
                                    E("")
                                },
                                active: "auto" === r,
                                children: Object(je.jsx)(f.b, {
                                    id: "Auto"
                                })
                            }), Object(je.jsx)(Cj, {
                                active: "auto" !== r,
                                warning: !!v,
                                tabIndex: -1,
                                children: Object(je.jsxs)(Fo, {
                                    children: [S || N ? Object(je.jsx)(Tj, {
                                        children: Object(je.jsx)("span", {
                                            role: "img",
                                            "aria-label": "warning",
                                            children: "\u26a0\ufe0f"
                                        })
                                    }) : null, Object(je.jsx)(kj, {
                                        placeholder: t.toFixed(2),
                                        value: p.length > 0 ? p : "auto" === r ? "" : r.toFixed(2),
                                        onChange: function(e) {
                                            return E(e.target.value)
                                        },
                                        onBlur: function() {
                                            h(""), O(!1)
                                        },
                                        color: v ? "red" : ""
                                    }), "%"]
                                })
                            })]
                        }), v || S || N ? Object(je.jsx)(Fo, {
                            style: {
                                fontSize: "14px",
                                paddingTop: "7px",
                                color: v ? "red" : "#F3841E"
                            },
                            children: v ? Object(je.jsx)(f.b, {
                                id: "Enter a valid slippage percentage"
                            }) : S ? Object(je.jsx)(f.b, {
                                id: "Your transaction may fail"
                            }) : Object(je.jsx)(f.b, {
                                id: "Your transaction may be frontrun"
                            })
                        }) : null]
                    }), R && Object(je.jsxs)(Lo, {
                        gap: "sm",
                        children: [Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(wo, {
                                fontSize: 14,
                                fontWeight: 400,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction deadline"
                                })
                            }), Object(je.jsx)(Mb, {
                                text: we.a._("Your transaction will revert if it is pending for more than this period of time.")
                            })]
                        }), Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(Cj, {
                                style: {
                                    width: "80px"
                                },
                                warning: !!I,
                                tabIndex: -1,
                                children: Object(je.jsx)(kj, {
                                    placeholder: 30..toString(),
                                    value: w.length > 0 ? w : u === $ ? "" : (u / 60).toString(),
                                    onChange: function(e) {
                                        return function(e) {
                                            if (k(e), A(!1), 0 === e.length) d($);
                                            else try {
                                                var t = Math.floor(60 * Number.parseFloat(e));
                                                !Number.isInteger(t) || t < 60 || t > 10800 ? A(mj.InvalidInput) : d(t)
                                            } catch (n) {
                                                console.error(n), A(mj.InvalidInput)
                                            }
                                        }(e.target.value)
                                    },
                                    onBlur: function() {
                                        k(""), A(!1)
                                    },
                                    color: I ? "red" : ""
                                })
                            }), Object(je.jsx)(Co, {
                                style: {
                                    paddingLeft: "8px"
                                },
                                fontSize: 14,
                                children: Object(je.jsx)(f.b, {
                                    id: "minutes"
                                })
                            })]
                        })]
                    })]
                })
            }
            var Aj, Ej = Object(Ni.default)(Yp.a).withConfig({
                    componentId: "sc-1ndknrv-0"
                })(["height:20px;width:20px;> *{stroke:", ";}:hover{opacity:0.7;}"], (function(e) {
                    return e.theme.text2
                })),
                Sj = Object(Ni.default)(Br.a).withConfig({
                    componentId: "sc-1ndknrv-1"
                })(["height:20px;width:20px;:hover{cursor:pointer;}> *{stroke:", ";}"], (function(e) {
                    return e.theme.text1
                })),
                Nj = Ni.default.button.withConfig({
                    componentId: "sc-1ndknrv-2"
                })(["position:relative;width:100%;height:100%;border:none;background-color:transparent;margin:0;padding:0;border-radius:0.5rem;height:20px;:hover,:focus{cursor:pointer;outline:none;}"]),
                Rj = Ni.default.div.withConfig({
                    componentId: "sc-1ndknrv-3"
                })(["position:absolute;bottom:-6px;right:0px;font-size:14px;"]),
                Uj = Ni.default.div.withConfig({
                    componentId: "sc-1ndknrv-4"
                })(["margin-left:0.5rem;display:flex;justify-content:center;align-items:center;position:relative;border:none;text-align:left;"]),
                Bj = Ni.default.span.withConfig({
                    componentId: "sc-1ndknrv-5"
                })(["min-width:20.125rem;background-color:", ";border:1px solid ", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:12px;display:flex;flex-direction:column;font-size:1rem;position:absolute;top:2rem;right:0rem;z-index:100;", ";user-select:none;"], (function(e) {
                    return e.theme.bg2
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(gj || (gj = Object(Si.a)(["\n    min-width: 18.125rem;\n  "])))
                })),
                Mj = Ni.default.div.withConfig({
                    componentId: "sc-1ndknrv-6"
                })(["width:100%;height:1px;background-color:", ";"], (function(e) {
                    return e.theme.bg3
                })),
                Pj = Ni.default.div.withConfig({
                    componentId: "sc-1ndknrv-7"
                })(["display:flex;align-items:center;justify-content:center;padding:2rem 0;background-color:", ";border-radius:20px;"], (function(e) {
                    return e.theme.bg2
                }));

            function Lj(e) {
                var t = e.placeholderSlippage,
                    n = Object(a.useRef)(),
                    i = Jt(Wt.SETTINGS),
                    r = Kt(Wt.SETTINGS),
                    o = Object(a.useContext)(Ni.ThemeContext),
                    c = pi(),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1],
                    b = fi(),
                    p = Object(j.a)(b, 2),
                    h = p[0],
                    m = p[1],
                    x = Object(a.useState)(!1),
                    v = Object(j.a)(x, 2),
                    O = v[0],
                    g = v[1];
                return ec(n, i ? r : void 0), Object(je.jsxs)(Uj, {
                    ref: n,
                    children: [Object(je.jsx)(Sc, {
                        isOpen: O,
                        onDismiss: function() {
                            return g(!1)
                        },
                        maxHeight: 100,
                        children: Object(je.jsx)(Pj, {
                            children: Object(je.jsxs)(Lo, {
                                gap: "lg",
                                children: [Object(je.jsxs)(Fo, {
                                    style: {
                                        padding: "0 2rem"
                                    },
                                    children: [Object(je.jsx)("div", {}), Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Are you sure?"
                                        })
                                    }), Object(je.jsx)(Sj, {
                                        onClick: function() {
                                            return g(!1)
                                        }
                                    })]
                                }), Object(je.jsx)(Mj, {}), Object(je.jsxs)(Lo, {
                                    gap: "lg",
                                    style: {
                                        padding: "0 2rem"
                                    },
                                    children: [Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Expert mode turns off the confirm transaction prompt and allows high slippage trades that often result in bad rates and lost funds."
                                        })
                                    }), Object(je.jsx)(Ur.c, {
                                        fontWeight: 600,
                                        fontSize: 20,
                                        children: Object(je.jsx)(f.b, {
                                            id: "ONLY USE THIS MODE IF YOU KNOW WHAT YOU ARE DOING."
                                        })
                                    }), Object(je.jsx)(Kc, {
                                        error: !0,
                                        padding: "12px",
                                        onClick: function() {
                                            var e = we.a._("confirm");
                                            window.prompt(we.a._('Please type the word "{confirmWord}" to enable expert mode.', {
                                                confirmWord: e
                                            })) === e && (d(), g(!1))
                                        },
                                        children: Object(je.jsx)(Ur.c, {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            id: "confirm-expert-mode",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Turn On Expert Mode"
                                            })
                                        })
                                    })]
                                })]
                            })
                        })
                    }), Object(je.jsxs)(Nj, {
                        onClick: r,
                        id: "open-settings-dialog-button",
                        children: [Object(je.jsx)(Ej, {}), u ? Object(je.jsx)(Rj, {
                            children: Object(je.jsx)("span", {
                                role: "img",
                                "aria-label": "wizard-icon",
                                children: "\ud83e\uddd9"
                            })
                        }) : null]
                    }), i && Object(je.jsx)(Bj, {
                        children: Object(je.jsxs)(Lo, {
                            gap: "md",
                            style: {
                                padding: "1rem"
                            },
                            children: [Object(je.jsx)(Ur.c, {
                                fontWeight: 600,
                                fontSize: 14,
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction Settings"
                                })
                            }), Object(je.jsx)(Ij, {
                                placeholderSlippage: t
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 600,
                                fontSize: 14,
                                children: Object(je.jsx)(f.b, {
                                    id: "Interface Settings"
                                })
                            }), Object(je.jsxs)(Fo, {
                                children: [Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(wo, {
                                        fontWeight: 400,
                                        fontSize: 14,
                                        color: o.text2,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Toggle Expert Mode"
                                        })
                                    }), Object(je.jsx)(Mb, {
                                        text: Object(je.jsx)(f.b, {
                                            id: "Allow high price impact trades and skip the confirm screen. Use at your own risk."
                                        })
                                    })]
                                }), Object(je.jsx)(Oj, {
                                    id: "toggle-expert-mode-button",
                                    isActive: u,
                                    toggle: u ? function() {
                                        d(), g(!1)
                                    } : function() {
                                        r(), g(!0)
                                    }
                                })]
                            }), Object(je.jsxs)(Fo, {
                                children: [Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(wo, {
                                        fontWeight: 400,
                                        fontSize: 14,
                                        color: o.text2,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Disable Multihops"
                                        })
                                    }), Object(je.jsx)(Mb, {
                                        text: Object(je.jsx)(f.b, {
                                            id: "Restricts swaps to direct pairs only."
                                        })
                                    })]
                                }), Object(je.jsx)(Oj, {
                                    id: "toggle-disable-multihop-button",
                                    isActive: h,
                                    toggle: function() {
                                        l.a.event({
                                            category: "Routing",
                                            action: h ? "disable single hop" : "enable single hop"
                                        }), m(!h)
                                    }
                                })]
                            })]
                        })
                    })]
                })
            }
            var zj = Ni.default.div.withConfig({
                    componentId: "sc-iwajx4-0"
                })(["", " align-items:center;border-radius:3rem;justify-content:space-evenly;"], (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                Dj = "ACTIVE",
                Wj = Object(Ni.default)(p.c).attrs({
                    activeClassName: Dj
                }).withConfig({
                    componentId: "sc-iwajx4-1"
                })(["", " align-items:center;justify-content:center;height:3rem;border-radius:3rem;outline:none;cursor:pointer;text-decoration:none;color:", ";font-size:20px;&.", "{border-radius:12px;font-weight:500;color:", ";}:hover,:focus{color:", ";}"], (function(e) {
                    return e.theme.flexRowNoWrap
                }), (function(e) {
                    return e.theme.text3
                }), Dj, (function(e) {
                    return e.theme.text1
                }), (function(e) {
                    var t = e.theme;
                    return Object(ea.a)(.1, t.text1)
                })),
                qj = Object(Ni.default)(p.b).withConfig({
                    componentId: "sc-iwajx4-2"
                })(["flex:", ";", ";"], (function(e) {
                    var t = e.flex;
                    return null !== t && void 0 !== t ? t : "none"
                }), (function(e) {
                    return e.theme.mediaWidth.upToMedium(Aj || (Aj = Object(Si.a)(["\n    flex: none;\n    margin-right: 10px;\n  "])))
                })),
                Fj = Ni.default.div.withConfig({
                    componentId: "sc-iwajx4-3"
                })(["font-weight:500;font-size:20px;"]),
                Yj = Object(Ni.default)(Lr.a).withConfig({
                    componentId: "sc-iwajx4-4"
                })(["color:", ";"], (function(e) {
                    return e.theme.text1
                }));

            function Vj(e) {
                var t = e.active;
                return Object(je.jsxs)(zj, {
                    style: {
                        marginBottom: "20px",
                        display: "none",
                        padding: "1rem 1rem 0 1rem"
                    },
                    children: [Object(je.jsx)(Wj, {
                        id: "swap-nav-link",
                        to: "/swap",
                        isActive: function() {
                            return "swap" === t
                        },
                        children: Object(je.jsx)(f.b, {
                            id: "Swap"
                        })
                    }), Object(je.jsx)(Wj, {
                        id: "pool-nav-link",
                        to: "/pool",
                        isActive: function() {
                            return "pool" === t
                        },
                        children: Object(je.jsx)(f.b, {
                            id: "Pool"
                        })
                    })]
                })
            }

            function _j(e) {
                var t = e.origin;
                return Object(je.jsx)(zj, {
                    children: Object(je.jsxs)(Fo, {
                        style: {
                            padding: "1rem 1rem 0 1rem"
                        },
                        children: [Object(je.jsx)(p.b, {
                            to: t,
                            children: Object(je.jsx)(Yj, {})
                        }), Object(je.jsx)(Fj, {
                            children: Object(je.jsx)(f.b, {
                                id: "Import Pool"
                            })
                        })]
                    })
                })
            }

            function Hj(e) {
                var t = e.adding,
                    n = e.creating,
                    i = e.defaultSlippage,
                    r = e.children,
                    o = Pc(),
                    a = Se();
                return Object(je.jsx)(zj, {
                    children: Object(je.jsxs)(Fo, {
                        style: {
                            padding: "1rem 1rem 0 1rem"
                        },
                        children: [Object(je.jsx)(qj, {
                            to: "/pool",
                            onClick: function() {
                                t && a(or())
                            },
                            flex: r ? "1" : void 0,
                            children: Object(je.jsx)(Yj, {
                                stroke: o.text2
                            })
                        }), Object(je.jsx)(Io, {
                            fontWeight: 500,
                            fontSize: 20,
                            style: {
                                flex: "1",
                                margin: "auto",
                                textAlign: r ? "start" : "center"
                            },
                            children: n ? Object(je.jsx)(f.b, {
                                id: "Create a pair"
                            }) : t ? Object(je.jsx)(f.b, {
                                id: "Add Liquidity"
                            }) : Object(je.jsx)(f.b, {
                                id: "Remove Liquidity"
                            })
                        }), Object(je.jsx)(Ur.a, {
                            style: {
                                marginRight: ".5rem"
                            },
                            children: r
                        }), Object(je.jsx)(Lj, {
                            placeholderSlippage: i
                        })]
                    })
                })
            }
            var Qj = n(670);

            function Gj(e) {
                if (e in r) return e
            }

            function Jj(e) {
                if (e.isNative) return e;
                var t = Gj(e.chainId);
                return t && e.equals(rt[t]) ? ot.onChain(e.chainId) : e
            }
            var Kj = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-1l6n3hl-0"
                })(["height:24px;"]),
                Xj = Object(Ni.default)(Cu).withConfig({
                    componentId: "sc-1l6n3hl-1"
                })(["border:none;background:", ";position:relative;overflow:hidden;"], (function(e) {
                    var t = e.theme,
                        n = e.bgColor;
                    return "radial-gradient(91.85% 100% at 1.84% 0%, ".concat(Object(ea.c)(.5, n), " 0%, ").concat(t.bg0, " 100%) ")
                }));

            function Zj(e) {
                var t = e.pair,
                    n = e.showUnwrapped,
                    i = void 0 !== n && n,
                    r = e.border,
                    o = fe().account,
                    c = i ? t.token0 : Jj(t.token0),
                    s = i ? t.token1 : Jj(t.token1),
                    u = Object(a.useState)(!1),
                    d = Object(j.a)(u, 2),
                    l = d[0],
                    b = d[1],
                    p = Pa(null !== o && void 0 !== o ? o : void 0, t.liquidityToken),
                    h = dd(t.liquidityToken),
                    m = p && h && X.a.greaterThanOrEqual(h.quotient, p.quotient) ? new J.Percent(p.quotient, h.quotient) : void 0,
                    x = t && h && p && X.a.greaterThanOrEqual(h.quotient, p.quotient) ? [t.getLiquidityValue(t.token0, h, p, !1), t.getLiquidityValue(t.token1, h, p, !1)] : [void 0, void 0],
                    v = Object(j.a)(x, 2),
                    O = v[0],
                    g = v[1];
                return Object(je.jsx)(je.Fragment, {
                    children: p && X.a.greaterThan(p.quotient, X.a.BigInt(0)) ? Object(je.jsx)(Iu, {
                        border: r,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            children: [Object(je.jsx)(Kj, {
                                children: Object(je.jsx)(_o, {
                                    children: Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 16,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Your position"
                                        })
                                    })
                                })
                            }), Object(je.jsxs)(Kj, {
                                onClick: function() {
                                    return b(!l)
                                },
                                children: [Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(Rf, {
                                        currency0: c,
                                        currency1: s,
                                        margin: !0,
                                        size: 20
                                    }), Object(je.jsxs)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: [c.symbol, "/", s.symbol]
                                    })]
                                }), Object(je.jsx)(_o, {
                                    children: Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        children: p ? p.toSignificant(4) : "-"
                                    })
                                })]
                            }), Object(je.jsxs)(Lo, {
                                gap: "4px",
                                children: [Object(je.jsxs)(Kj, {
                                    children: [Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Your pool share:"
                                        })
                                    }), Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: m ? m.toFixed(6) + "%" : "-"
                                    })]
                                }), Object(je.jsxs)(Kj, {
                                    children: [Object(je.jsxs)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: [c.symbol, ":"]
                                    }), O ? Object(je.jsx)(_o, {
                                        children: Object(je.jsx)(Ur.c, {
                                            fontSize: 16,
                                            fontWeight: 500,
                                            marginLeft: "6px",
                                            children: null === O || void 0 === O ? void 0 : O.toSignificant(6)
                                        })
                                    }) : "-"]
                                }), Object(je.jsxs)(Kj, {
                                    children: [Object(je.jsxs)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: [s.symbol, ":"]
                                    }), g ? Object(je.jsx)(_o, {
                                        children: Object(je.jsx)(Ur.c, {
                                            fontSize: 16,
                                            fontWeight: 500,
                                            marginLeft: "6px",
                                            children: null === g || void 0 === g ? void 0 : g.toSignificant(6)
                                        })
                                    }) : "-"]
                                })]
                            })]
                        })
                    }) : Object(je.jsx)(Cu, {
                        children: Object(je.jsxs)(Ao, {
                            style: {
                                textAlign: "center"
                            },
                            children: [Object(je.jsx)("span", {
                                role: "img",
                                "aria-label": "wizard-icon",
                                children: "\u2b50\ufe0f"
                            }), " ", Object(je.jsx)(f.b, {
                                id: "By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."
                            }), " "]
                        })
                    })
                })
            }

            function $j(e) {
                var t = e.pair,
                    n = e.border,
                    i = e.stakedBalance,
                    r = e.stakeRewardToken,
                    o = fe().account,
                    c = Jj(t.token0),
                    s = Jj(t.token1),
                    u = Object(a.useState)(!1),
                    d = Object(j.a)(u, 2),
                    l = d[0],
                    b = d[1],
                    h = Pa(null !== o && void 0 !== o ? o : void 0, t.liquidityToken),
                    m = dd(t.liquidityToken),
                    x = i ? null === h || void 0 === h ? void 0 : h.add(i) : h,
                    v = x && m && X.a.greaterThanOrEqual(m.quotient, x.quotient) ? new J.Percent(x.quotient, m.quotient) : void 0,
                    O = t && m && x && X.a.greaterThanOrEqual(m.quotient, x.quotient) ? [t.getLiquidityValue(t.token0, m, x, !1), t.getLiquidityValue(t.token1, m, x, !1)] : [void 0, void 0],
                    g = Object(j.a)(O, 2),
                    y = g[0],
                    w = g[1],
                    k = qp(null === t || void 0 === t ? void 0 : t.token0);
                return Object(je.jsxs)(Xj, {
                    border: n,
                    bgColor: k,
                    children: [Object(je.jsx)(qd, {
                        desaturate: !0,
                        atmosphere: Td.FLYING
                    }), Object(je.jsxs)(Lo, {
                        gap: "12px",
                        children: [Object(je.jsxs)(Kj, {
                            children: [Object(je.jsxs)(Vo, {
                                gap: "8px",
                                style: {
                                    marginLeft: "8px"
                                },
                                children: [Object(je.jsx)(Rf, {
                                    currency0: c,
                                    currency1: s,
                                    size: 20
                                }), Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 20,
                                    children: c && s ? "".concat(c.symbol, "/").concat(s.symbol) : Object(je.jsx)(Tp, {
                                        children: Object(je.jsx)(f.b, {
                                            id: "Loading"
                                        })
                                    })
                                })]
                            }), Object(je.jsx)(_o, {
                                gap: "8px",
                                style: {
                                    marginRight: "4px"
                                },
                                children: Object(je.jsx)(Hc, {
                                    padding: "6px 8px",
                                    $borderRadius: "12px",
                                    width: "100%",
                                    onClick: function() {
                                        return b(!l)
                                    },
                                    children: l ? Object(je.jsxs)(je.Fragment, {
                                        children: [Object(je.jsx)(f.b, {
                                            id: "Manage"
                                        }), Object(je.jsx)(Qj.a, {
                                            size: "20",
                                            style: {
                                                marginLeft: "8px",
                                                height: "20px",
                                                minWidth: "20px"
                                            }
                                        })]
                                    }) : Object(je.jsxs)(je.Fragment, {
                                        children: [Object(je.jsx)(f.b, {
                                            id: "Manage"
                                        }), Object(je.jsx)(Mc.a, {
                                            size: "20",
                                            style: {
                                                marginLeft: "8px",
                                                height: "20px",
                                                minWidth: "20px"
                                            }
                                        })]
                                    })
                                })
                            })]
                        }), l && Object(je.jsxs)(Lo, {
                            gap: "8px",
                            children: [Object(je.jsxs)(Kj, {
                                children: [Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Your total pool tokens:"
                                    })
                                }), Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: x ? x.toSignificant(4) : "-"
                                })]
                            }), i && Object(je.jsxs)(Kj, {
                                children: [Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Pool tokens in rewards pool:"
                                    })
                                }), Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: i.toSignificant(4)
                                })]
                            }), Object(je.jsxs)(Kj, {
                                children: [Object(je.jsx)(_o, {
                                    children: Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Pooled {0}:",
                                            values: {
                                                0: c.symbol
                                            }
                                        })
                                    })
                                }), y ? Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        marginLeft: "6px",
                                        children: null === y || void 0 === y ? void 0 : y.toSignificant(6)
                                    }), Object(je.jsx)(rb, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: c
                                    })]
                                }) : "-"]
                            }), Object(je.jsxs)(Kj, {
                                children: [Object(je.jsx)(_o, {
                                    children: Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Pooled {0}:",
                                            values: {
                                                0: s.symbol
                                            }
                                        })
                                    })
                                }), w ? Object(je.jsxs)(_o, {
                                    children: [Object(je.jsx)(Ur.c, {
                                        fontSize: 16,
                                        fontWeight: 500,
                                        marginLeft: "6px",
                                        children: null === w || void 0 === w ? void 0 : w.toSignificant(6)
                                    }), Object(je.jsx)(rb, {
                                        size: "20px",
                                        style: {
                                            marginLeft: "8px"
                                        },
                                        currency: s
                                    })]
                                }) : "-"]
                            }), Object(je.jsxs)(Kj, {
                                children: [Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Your pool share:"
                                    })
                                }), Object(je.jsx)(Ur.c, {
                                    fontSize: 16,
                                    fontWeight: 500,
                                    children: v ? Object(je.jsx)(f.b, {
                                        id: "{0} %",
                                        values: {
                                            0: "0.00" === v.toFixed(2) ? "<0.01" : v.toFixed(2)
                                        }
                                    }) : "-"
                                })]
                            }), Object(je.jsx)(Vc, {
                                padding: "8px",
                                $borderRadius: "8px",
                                children: Object(je.jsx)(ro, {
                                    style: {
                                        width: "100%",
                                        textAlign: "center"
                                    },
                                    href: "https://pancakeswap.info/pair/".concat(t.liquidityToken.address),
                                    children: Object(je.jsx)(f.b, {
                                        id: "View pair analytics<0>\u2197</0>",
                                        components: {
                                            0: Object(je.jsx)("span", {
                                                style: {
                                                    fontSize: "11px"
                                                }
                                            })
                                        }
                                    })
                                })
                            }), h && X.a.greaterThan(h.quotient, ne) && Object(je.jsxs)(Vo, {
                                marginTop: "10px",
                                justify: "space-around",
                                style: {
                                    flexWrap: "nowrap",
                                    gap: "8px"
                                },
                                children: [Object(je.jsx)(qc, {
                                    padding: "8px",
                                    $borderRadius: "8px",
                                    as: p.b,
                                    to: "/add/".concat(jb(c), "/").concat(jb(s)),
                                    width: "100%",
                                    children: Object(je.jsx)(f.b, {
                                        id: "Add"
                                    })
                                }), Object(je.jsx)(qc, {
                                    padding: "8px",
                                    $borderRadius: "8px",
                                    as: p.b,
                                    width: "100%",
                                    to: "/remove/".concat(jb(c), "/").concat(jb(s)),
                                    children: Object(je.jsx)(f.b, {
                                        id: "Remove"
                                    })
                                })]
                            }), i && X.a.greaterThan(i.quotient, ne) && r && Object(je.jsx)(qc, {
                                padding: "8px",
                                $borderRadius: "8px",
                                as: p.b,
                                to: "/stake/".concat(jb(t.liquidityToken), "/").concat(jb(r)),
                                width: "100%",
                                children: Object(je.jsx)(f.b, {
                                    id: "Manage Liquidity in Rewards Pool"
                                })
                            })]
                        })]
                    })]
                })
            }
            var eh, th = n(645);

            function nh(e) {
                return e.mul(qt.a.from(12e3)).div(qt.a.from(1e4))
            }

            function ih(e, t) {
                var n, i = fe(),
                    r = i.account,
                    o = i.chainId,
                    c = (null === e || void 0 === e || null === (n = e.currency) || void 0 === n ? void 0 : n.isToken) ? e.currency : void 0,
                    s = function(e, t, n) {
                        var i = hn(Nn(null === e || void 0 === e ? void 0 : e.address, !1), "allowance", Object(a.useMemo)((function() {
                            return [t, n]
                        }), [t, n])).result;
                        return Object(a.useMemo)((function() {
                            return e && i ? J.CurrencyAmount.fromRawAmount(e, i.toString()) : void 0
                        }), [e, i])
                    }(c, null !== r && void 0 !== r ? r : void 0, t),
                    u = function(e, t) {
                        var n = na();
                        return Object(a.useMemo)((function() {
                            return "string" === typeof e && "string" === typeof t && Object.keys(n).some((function(i) {
                                var r = n[i];
                                if (!r) return !1;
                                if (r.receipt) return !1;
                                var o = r.approval;
                                return !!o && o.spender === t && o.tokenAddress === e && ia(r)
                            }))
                        }), [n, t, e])
                    }(null === c || void 0 === c ? void 0 : c.address, t),
                    d = Object(a.useMemo)((function() {
                        return e && t ? e.currency.isNative ? eh.APPROVED : s ? s.lessThan(e) ? u ? eh.PENDING : eh.NOT_APPROVED : eh.APPROVED : eh.UNKNOWN : eh.UNKNOWN
                    }), [e, s, u, t]),
                    l = Nn(null === c || void 0 === c ? void 0 : c.address),
                    b = ta(),
                    p = Object(a.useCallback)(Object(R.a)(S.a.mark((function n() {
                        var i, r;
                        return S.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (d === eh.NOT_APPROVED) {
                                        n.next = 3;
                                        break
                                    }
                                    return console.error("approve was called unnecessarily"), n.abrupt("return");
                                case 3:
                                    if (o) {
                                        n.next = 6;
                                        break
                                    }
                                    return console.error("no chainId"), n.abrupt("return");
                                case 6:
                                    if (c) {
                                        n.next = 9;
                                        break
                                    }
                                    return console.error("no token"), n.abrupt("return");
                                case 9:
                                    if (l) {
                                        n.next = 12;
                                        break
                                    }
                                    return console.error("tokenContract is null"), n.abrupt("return");
                                case 12:
                                    if (e) {
                                        n.next = 15;
                                        break
                                    }
                                    return console.error("missing amount to approve"), n.abrupt("return");
                                case 15:
                                    if (t) {
                                        n.next = 18;
                                        break
                                    }
                                    return console.error("no spender"), n.abrupt("return");
                                case 18:
                                    return i = !1, n.next = 21, l.estimateGas.approve(t, th.a).catch((function() {
                                        return i = !0, l.estimateGas.approve(t, e.quotient.toString())
                                    }));
                                case 21:
                                    return r = n.sent, n.abrupt("return", l.approve(t, i ? e.quotient.toString() : th.a, {
                                        gasLimit: nh(r)
                                    }).then((function(n) {
                                        b(n, {
                                            summary: "Approve " + e.currency.symbol,
                                            approval: {
                                                tokenAddress: c.address,
                                                spender: t
                                            }
                                        })
                                    })).catch((function(e) {
                                        throw console.debug("Failed to approve token", e), e
                                    })));
                                case 23:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    }))), [d, c, l, e, t, b, o]);
                return [d, p]
            }

            function rh(e, t) {
                var n = qn();
                return Object(a.useMemo)((function() {
                    return Boolean(n && ((null === e || void 0 === e ? void 0 : e.isToken) && n[e.address] || (null === t || void 0 === t ? void 0 : t.isToken) && n[t.address]))
                }), [e, t, n])
            }

            function oh() {
                var e = Ne((function(e) {
                        return e.user.userDeadline
                    })),
                    t = Aa();
                return Object(a.useMemo)((function() {
                    if (t && e) return t.add(e)
                }), [t, e])
            }! function(e) {
                e.UNKNOWN = "UNKNOWN", e.NOT_APPROVED = "NOT_APPROVED", e.PENDING = "PENDING", e.APPROVED = "APPROVED"
            }(eh || (eh = {}));
            var ah = X.a.BigInt(0);

            function ch() {
                return Ne((function(e) {
                    return e.mint
                }))
            }
            var sh = new J.Fraction(1, 1);

            function uh(e, t) {
                if (t.lessThan(0) || t.greaterThan(sh)) throw new Error("Unexpected slippage");
                return [e.multiply(sh.subtract(t)).quotient, e.multiply(sh.add(t)).quotient]
            }
            var dh = X.a.exponentiate(X.a.BigInt(10), X.a.BigInt(16)),
                lh = X.a.BigInt(1);

            function bh(e) {
                if (e) return e.currency.isNative ? X.a.greaterThan(e.quotient, dh) ? J.CurrencyAmount.fromRawAmount(e.currency, X.a.subtract(e.quotient, dh)) : J.CurrencyAmount.fromRawAmount(e.currency, X.a.BigInt(0)) : e.currency.equals(it[r.MAINNET]) || e.currency.equals(it[r.TESTNET]) ? X.a.greaterThan(e.quotient, lh) ? J.CurrencyAmount.fromRawAmount(e.currency, X.a.subtract(e.quotient, lh)) : J.CurrencyAmount.fromRawAmount(e.currency, X.a.BigInt(0)) : e
            }
            var ph, fh, jh = ["children"],
                hh = Ni.default.div.withConfig({
                    componentId: "sc-ebxalf-0"
                })(["position:relative;margin-top:", ";max-width:", ";width:100%;background:", ";box-shadow:0px 0px 1px rgba(0,0,0,0.01),0px 4px 8px rgba(0,0,0,0.04),0px 16px 24px rgba(0,0,0,0.04),0px 24px 32px rgba(0,0,0,0.01);border-radius:24px;margin-top:1rem;"], (function(e) {
                    var t = e.margin;
                    return null !== t && void 0 !== t ? t : "0px"
                }), (function(e) {
                    var t = e.maxWidth;
                    return null !== t && void 0 !== t ? t : "480px"
                }), (function(e) {
                    return e.theme.bg0
                }));

            function mh(e) {
                var t = e.children,
                    n = Object(Rr.a)(e, jh);
                return Object(je.jsx)(hh, Object(He.a)(Object(He.a)({}, n), {}, {
                    children: t
                }))
            }
            var xh, vh = Ni.default.div.withConfig({
                    componentId: "sc-2wxkbc-0"
                })(["position:relative;padding:20px;"]),
                Oh = Object(Ni.default)(Ur.c).withConfig({
                    componentId: "sc-2wxkbc-1"
                })([":hover{cursor:pointer;}color:", ";"], (function(e) {
                    return e.theme.primary1
                })),
                gh = Ni.default.button.withConfig({
                    componentId: "sc-2wxkbc-2"
                })(["padding:0.5rem 1rem;background-color:", ";border:1px solid ", ";border-radius:0.5rem;font-size:1rem;", ";font-weight:500;cursor:pointer;margin:0.25rem;overflow:hidden;color:", ";:hover{border:1px solid ", ";}:focus{border:1px solid ", ";outline:none;}"], (function(e) {
                    return e.theme.primary5
                }), (function(e) {
                    return e.theme.primary5
                }), (function(e) {
                    return e.theme.mediaWidth.upToSmall(ph || (ph = Object(Si.a)(["\n    padding: 0.25rem 0.5rem;\n  "])))
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                }), (function(e) {
                    return e.theme.primary1
                })),
                yh = Ni.default.span.withConfig({
                    componentId: "sc-2wxkbc-3"
                })(["&::after{display:inline-block;animation:ellipsis 1.25s infinite;content:'.';width:1em;text-align:left;}@keyframes ellipsis{0%{content:'.';}33%{content:'..';}66%{content:'...';}}"]),
                wh = Object(Ni.keyframes)(fh || (fh = Object(Si.a)(["\n  0% {\n    background-position: 100% 50%;\n  }\n  100% {\n    background-position: 0% 50%;\n  }\n"])));
            Ni.default.div.withConfig({
                componentId: "sc-2wxkbc-4"
            })(["display:grid;min-width:75%;max-width:960px;grid-column-gap:0.5em;grid-row-gap:0.8em;grid-template-columns:repeat(3,1fr);& > div{animation:", " 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,", " 25%,", " 50%,", " 75% );background-size:400%;border-radius:12px;height:2.4em;will-change:background-position;}& > div:nth-child(4n + 1){grid-column:1 / 3;}& > div:nth-child(4n){grid-column:3 / 4;margin-bottom:2em;}"], wh, (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.theme.bg2
            }), (function(e) {
                return e.theme.bg1
            }));

            function kh(e) {
                var t, n, i, r, o, a, c, s, u = e.noLiquidity,
                    d = e.price,
                    l = e.currencies,
                    b = e.parsedAmounts,
                    p = e.poolTokenPercentage,
                    j = e.onAdd;
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(Co, {
                            children: Object(je.jsx)(f.b, {
                                id: "{0} Deposited",
                                values: {
                                    0: null === (t = l[Ji.CURRENCY_A]) || void 0 === t ? void 0 : t.symbol
                                }
                            })
                        }), Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(rb, {
                                currency: l[Ji.CURRENCY_A],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(je.jsx)(Co, {
                                children: null === (n = b[Ji.CURRENCY_A]) || void 0 === n ? void 0 : n.toSignificant(6)
                            })]
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(Co, {
                            children: Object(je.jsx)(f.b, {
                                id: "{0} Deposited",
                                values: {
                                    0: null === (i = l[Ji.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol
                                }
                            })
                        }), Object(je.jsxs)(_o, {
                            children: [Object(je.jsx)(rb, {
                                currency: l[Ji.CURRENCY_B],
                                style: {
                                    marginRight: "8px"
                                }
                            }), Object(je.jsx)(Co, {
                                children: null === (r = b[Ji.CURRENCY_B]) || void 0 === r ? void 0 : r.toSignificant(6)
                            })]
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(Co, {
                            children: Object(je.jsx)(f.b, {
                                id: "Rates"
                            })
                        }), Object(je.jsx)(Co, {
                            children: "1 ".concat(null === (o = l[Ji.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.toSignificant(4), " ").concat(null === (a = l[Ji.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol)
                        })]
                    }), Object(je.jsx)(Fo, {
                        style: {
                            justifyContent: "flex-end"
                        },
                        children: Object(je.jsx)(Co, {
                            children: "1 ".concat(null === (c = l[Ji.CURRENCY_B]) || void 0 === c ? void 0 : c.symbol, " = ").concat(null === d || void 0 === d ? void 0 : d.invert().toSignificant(4), " ").concat(null === (s = l[Ji.CURRENCY_A]) || void 0 === s ? void 0 : s.symbol)
                        })
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(Co, {
                            children: Object(je.jsx)(f.b, {
                                id: "Share of Pool:"
                            })
                        }), Object(je.jsx)(Co, {
                            children: Object(je.jsx)(f.b, {
                                id: "{0}%",
                                values: {
                                    0: u ? "100" : null === p || void 0 === p ? void 0 : p.toSignificant(4)
                                }
                            })
                        })]
                    }), Object(je.jsx)(qc, {
                        style: {
                            margin: "20px 0 0 0"
                        },
                        onClick: j,
                        children: Object(je.jsx)(Ur.c, {
                            fontWeight: 500,
                            fontSize: 20,
                            children: u ? Object(je.jsx)(f.b, {
                                id: "Create Pool & Supply"
                            }) : Object(je.jsx)(f.b, {
                                id: "Confirm Supply"
                            })
                        })
                    })]
                })
            }

            function Ch(e) {
                var t, n, i, r, o, c, s, u, d = e.currencies,
                    l = e.noLiquidity,
                    b = e.poolTokenPercentage,
                    p = e.price,
                    j = Object(a.useContext)(Ni.ThemeContext);
                return Object(je.jsx)(Lo, {
                    gap: "md",
                    children: Object(je.jsxs)(Vo, {
                        justify: "space-around",
                        gap: "4px",
                        children: [Object(je.jsxs)(Lo, {
                            justify: "center",
                            children: [Object(je.jsx)(wo, {
                                children: null !== (t = null === p || void 0 === p ? void 0 : p.toSignificant(6)) && void 0 !== t ? t : "-"
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 14,
                                color: j.text2,
                                pt: 1,
                                children: Object(je.jsx)(f.b, {
                                    id: "{0} per {1}",
                                    values: {
                                        0: null === (n = d[Ji.CURRENCY_B]) || void 0 === n ? void 0 : n.symbol,
                                        1: null === (i = d[Ji.CURRENCY_A]) || void 0 === i ? void 0 : i.symbol
                                    }
                                })
                            })]
                        }), Object(je.jsxs)(Lo, {
                            justify: "center",
                            children: [Object(je.jsx)(wo, {
                                children: null !== (r = null === p || void 0 === p || null === (o = p.invert()) || void 0 === o ? void 0 : o.toSignificant(6)) && void 0 !== r ? r : "-"
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 14,
                                color: j.text2,
                                pt: 1,
                                children: Object(je.jsx)(f.b, {
                                    id: "{0} per {1}",
                                    values: {
                                        0: null === (c = d[Ji.CURRENCY_A]) || void 0 === c ? void 0 : c.symbol,
                                        1: null === (s = d[Ji.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol
                                    }
                                })
                            })]
                        }), Object(je.jsxs)(Lo, {
                            justify: "center",
                            children: [Object(je.jsxs)(wo, {
                                children: [l && p ? "100" : null !== (u = (null === b || void 0 === b ? void 0 : b.lessThan(re)) ? "<0.01" : null === b || void 0 === b ? void 0 : b.toFixed(2)) && void 0 !== u ? u : "0", "%"]
                            }), Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 14,
                                color: j.text2,
                                pt: 1,
                                children: Object(je.jsx)(f.b, {
                                    id: "Share of Pool"
                                })
                            })]
                        })]
                    })
                })
            }
            var Th = Ni.default.div.withConfig({
                    componentId: "sc-1ya6914-0"
                })(["padding-top:calc(16px + 2rem);padding-bottom:20px;margin-top:-2rem;width:100%;max-width:400px;border-bottom-left-radius:20px;border-bottom-right-radius:20px;color:", ";background-color:", ";z-index:-1;transform:", ";transition:transform 300ms ease-in-out;text-align:center;"], (function(e) {
                    return e.theme.text2
                }), (function(e) {
                    return e.theme.advancedBG
                }), (function(e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)"
                })),
                Ih = Object(Ni.default)(So).withConfig({
                    componentId: "sc-1ya6914-1"
                })(["font-size:12px;", ""], (function(e) {
                    return e.theme.mediaWidth.upToSmall(xh || (xh = Object(Si.a)(["\n    font-size: 10px;\n"])))
                }));

            function Ah(e) {
                var t = e.show,
                    n = e.currencies,
                    i = fe().chainId,
                    r = Object(a.useState)(!1),
                    o = Object(j.a)(r, 2),
                    c = o[0],
                    s = o[1],
                    u = i && n ? n.map((function(e) {
                        return null === e || void 0 === e ? void 0 : e.wrapped
                    })) : [],
                    d = qn();
                return Object(je.jsxs)(Th, {
                    show: t,
                    children: [Object(je.jsx)(Sc, {
                        isOpen: c,
                        onDismiss: function() {
                            return s(!1)
                        },
                        children: Object(je.jsx)(ku, {
                            padding: "2rem",
                            children: Object(je.jsxs)(Lo, {
                                gap: "lg",
                                children: [Object(je.jsxs)(Fo, {
                                    children: [Object(je.jsx)(Io, {
                                        children: Object(je.jsx)(f.b, {
                                            id: "Unsupported Assets"
                                        })
                                    }), Object(je.jsx)(Qr, {
                                        onClick: function() {
                                            return s(!1)
                                        }
                                    })]
                                }), u.map((function(e) {
                                    var t;
                                    return e && d && Object.keys(d).includes(e.address) && Object(je.jsx)(Au, {
                                        children: Object(je.jsxs)(Lo, {
                                            gap: "10px",
                                            children: [Object(je.jsxs)(Vo, {
                                                gap: "5px",
                                                align: "center",
                                                children: [Object(je.jsx)(rb, {
                                                    currency: e,
                                                    size: "24px"
                                                }), Object(je.jsx)(Co, {
                                                    fontWeight: 500,
                                                    children: e.symbol
                                                })]
                                            }), i && Object(je.jsx)(ro, {
                                                href: gs(i, e.address, vs.ADDRESS),
                                                children: Object(je.jsx)(Ih, {
                                                    children: e.address
                                                })
                                            })]
                                        })
                                    }, null === (t = e.address) || void 0 === t ? void 0 : t.concat("not-supported"))
                                })), Object(je.jsx)(Lo, {
                                    gap: "lg",
                                    children: Object(je.jsx)(Co, {
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Some assets are not available through this interface because they may not work well with the smart contracts or we are unable to allow trading for legal reasons."
                                        })
                                    })
                                })]
                            })
                        })
                    }), Object(je.jsx)(Hc, {
                        padding: "0",
                        onClick: function() {
                            return s(!0)
                        },
                        children: Object(je.jsx)(So, {
                            children: Object(je.jsx)(f.b, {
                                id: "Read more about unsupported assets"
                            })
                        })
                    })]
                })
            }
            Object(Ni.default)(Eo).withConfig({
                componentId: "sc-1a9mfh8-0"
            })(["opacity:0.6;:hover{opacity:1;}margin-top:1rem !important;"]);

            function Eh() {
                var e = null,
                    t = tc(e);
                t.to, t.onClick;
                return null
            }
            var Sh, Nh, Rh = new J.Percent(50, 1e4);

            function Uh(e) {
                var t, n, i, r, o, c, s, u, d, b, p, h = e.match.params,
                    x = h.currencyIdA,
                    v = h.currencyIdB,
                    O = e.history,
                    g = fe(),
                    y = g.account,
                    w = g.chainId,
                    k = g.library,
                    C = Object(a.useContext)(Ni.ThemeContext),
                    T = Qn(x),
                    I = Qn(v),
                    A = Boolean(w && (T && T.equals(rt[w]) || I && I.equals(rt[w]))),
                    E = Xt(),
                    N = bi(),
                    U = ch(),
                    B = U.independentField,
                    M = U.typedValue,
                    P = U.otherTypedValue,
                    L = function(e, t) {
                        var n, i, r, o, c, s, u = fe().account,
                            d = ch(),
                            l = d.independentField,
                            b = d.typedValue,
                            p = d.otherTypedValue,
                            f = l === Ji.CURRENCY_A ? Ji.CURRENCY_B : Ji.CURRENCY_A,
                            h = Object(a.useMemo)((function() {
                                var n;
                                return n = {}, Object(m.a)(n, Ji.CURRENCY_A, null !== e && void 0 !== e ? e : void 0), Object(m.a)(n, Ji.CURRENCY_B, null !== t && void 0 !== t ? t : void 0), n
                            }), [e, t]),
                            x = ha(h[Ji.CURRENCY_A], h[Ji.CURRENCY_B]),
                            v = Object(j.a)(x, 2),
                            O = v[0],
                            g = v[1],
                            y = dd(null === g || void 0 === g ? void 0 : g.liquidityToken),
                            w = O === pa.NOT_EXISTS || Boolean(y && X.a.equal(y.quotient, ah)) || Boolean(O === pa.EXISTS && g && X.a.equal(g.reserve0.quotient, ah) && X.a.equal(g.reserve1.quotient, ah)),
                            k = La(null !== u && void 0 !== u ? u : void 0, [h[Ji.CURRENCY_A], h[Ji.CURRENCY_B]]),
                            C = (n = {}, Object(m.a)(n, Ji.CURRENCY_A, k[0]), Object(m.a)(n, Ji.CURRENCY_B, k[1]), n),
                            T = Oa(b, h[l]),
                            I = Object(a.useMemo)((function() {
                                if (w) return p && h[f] ? Oa(p, h[f]) : void 0;
                                if (T) {
                                    var n = null === T || void 0 === T ? void 0 : T.wrapped,
                                        i = null === e || void 0 === e ? void 0 : e.wrapped,
                                        r = null === t || void 0 === t ? void 0 : t.wrapped;
                                    if (i && r && n && g) {
                                        var o = f === Ji.CURRENCY_B ? t : e,
                                            a = f === Ji.CURRENCY_B ? g.priceOf(i).quote(n) : g.priceOf(r).quote(n);
                                        return (null === o || void 0 === o ? void 0 : o.isNative) ? J.CurrencyAmount.fromRawAmount(o, a.quotient) : a
                                    }
                                }
                            }), [w, p, h, f, T, e, t, g]),
                            A = Object(a.useMemo)((function() {
                                var e;
                                return e = {}, Object(m.a)(e, Ji.CURRENCY_A, l === Ji.CURRENCY_A ? T : I), Object(m.a)(e, Ji.CURRENCY_B, l === Ji.CURRENCY_A ? I : T), e
                            }), [I, T, l]),
                            E = Object(a.useMemo)((function() {
                                if (!w) {
                                    var t = null === e || void 0 === e ? void 0 : e.wrapped;
                                    return g && t ? g.priceOf(t) : void 0
                                }
                                var n = A[Ji.CURRENCY_A],
                                    i = A[Ji.CURRENCY_B];
                                if ((null === n || void 0 === n ? void 0 : n.greaterThan(0)) && (null === i || void 0 === i ? void 0 : i.greaterThan(0))) {
                                    var r = i.divide(n);
                                    return new J.Price(n.currency, i.currency, r.denominator, r.numerator)
                                }
                            }), [e, w, g, A]),
                            S = Object(a.useMemo)((function() {
                                var e = A[Ji.CURRENCY_A],
                                    t = A[Ji.CURRENCY_B],
                                    n = null === e || void 0 === e ? void 0 : e.wrapped,
                                    i = null === t || void 0 === t ? void 0 : t.wrapped;
                                if (g && y && n && i) try {
                                    return g.getLiquidityMinted(y, n, i)
                                } catch (o) {
                                    return void console.error(o)
                                }
                            }), [A, g, y]),
                            N = Object(a.useMemo)((function() {
                                return S && y ? new J.Percent(S.quotient, y.add(S).quotient) : void 0
                            }), [S, y]);
                        u || (o = we.a._("Connect Wallet")), O === pa.INVALID && (o = null !== (c = o) && void 0 !== c ? c : we.a._("Invalid pair")), A[Ji.CURRENCY_A] && A[Ji.CURRENCY_B] || (o = null !== (s = o) && void 0 !== s ? s : we.a._("Enter an amount"));
                        var R, U, B = A[Ji.CURRENCY_A],
                            M = A[Ji.CURRENCY_B];
                        return B && (null === C || void 0 === C || null === (i = C[Ji.CURRENCY_A]) || void 0 === i ? void 0 : i.lessThan(B)) && (o = we.a._("Insufficient {0} balance", {
                            0: null === (R = h[Ji.CURRENCY_A]) || void 0 === R ? void 0 : R.symbol
                        })), M && (null === C || void 0 === C || null === (r = C[Ji.CURRENCY_B]) || void 0 === r ? void 0 : r.lessThan(M)) && (o = we.a._("Insufficient {0} balance", {
                            0: null === (U = h[Ji.CURRENCY_B]) || void 0 === U ? void 0 : U.symbol
                        })), {
                            dependentField: f,
                            currencies: h,
                            pair: g,
                            pairState: O,
                            currencyBalances: C,
                            parsedAmounts: A,
                            price: E,
                            noLiquidity: w,
                            liquidityMinted: S,
                            poolTokenPercentage: N,
                            error: o
                        }
                    }(null !== T && void 0 !== T ? T : void 0, null !== I && void 0 !== I ? I : void 0),
                    z = L.dependentField,
                    D = L.currencies,
                    W = L.pair,
                    q = L.pairState,
                    F = L.currencyBalances,
                    Y = L.parsedAmounts,
                    V = L.price,
                    _ = L.noLiquidity,
                    H = L.liquidityMinted,
                    Q = L.poolTokenPercentage,
                    G = L.error,
                    K = function(e) {
                        var t = Se();
                        return {
                            onFieldAInput: Object(a.useCallback)((function(n) {
                                t(rr({
                                    field: Ji.CURRENCY_A,
                                    typedValue: n,
                                    noLiquidity: !0 === e
                                }))
                            }), [t, e]),
                            onFieldBInput: Object(a.useCallback)((function(n) {
                                t(rr({
                                    field: Ji.CURRENCY_B,
                                    typedValue: n,
                                    noLiquidity: !0 === e
                                }))
                            }), [t, e])
                        }
                    }(_),
                    Z = K.onFieldAInput,
                    $ = K.onFieldBInput,
                    ee = !G,
                    te = Object(a.useState)(!1),
                    ne = Object(j.a)(te, 2),
                    ie = ne[0],
                    re = ne[1],
                    oe = Object(a.useState)(!1),
                    ae = Object(j.a)(oe, 2),
                    ce = ae[0],
                    se = ae[1],
                    ue = oh(),
                    de = hi(Rh),
                    be = Object(a.useState)(""),
                    pe = Object(j.a)(be, 2),
                    he = pe[0],
                    me = pe[1],
                    xe = (i = {}, Object(m.a)(i, B, M), Object(m.a)(i, z, _ ? P : null !== (t = null === (n = Y[z]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== t ? t : ""), i),
                    ve = [Ji.CURRENCY_A, Ji.CURRENCY_B].reduce((function(e, t) {
                        return Object(He.a)(Object(He.a)({}, e), {}, Object(m.a)({}, t, bh(F[t])))
                    }), {}),
                    Oe = [Ji.CURRENCY_A, Ji.CURRENCY_B].reduce((function(e, t) {
                        var n, i;
                        return Object(He.a)(Object(He.a)({}, e), {}, Object(m.a)({}, t, null === (n = ve[t]) || void 0 === n ? void 0 : n.equalTo(null !== (i = Y[t]) && void 0 !== i ? i : "0")))
                    }), {}),
                    ge = Bn(),
                    ye = ih(Y[Ji.CURRENCY_A], null === ge || void 0 === ge ? void 0 : ge.address),
                    ke = Object(j.a)(ye, 2),
                    Ce = ke[0],
                    Te = ke[1],
                    Ie = ih(Y[Ji.CURRENCY_B], null === ge || void 0 === ge ? void 0 : ge.address),
                    Ae = Object(j.a)(Ie, 2),
                    Ee = Ae[0],
                    Ne = Ae[1],
                    Re = ta();

                function Ue() {
                    return Be.apply(this, arguments)
                }

                function Be() {
                    return (Be = Object(R.a)(S.a.mark((function e() {
                        var t, n, i, r, o, a, c, s, u, d, b, p, f, j, h, x;
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (w && k && y && ge) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (n = Y[Ji.CURRENCY_A], i = Y[Ji.CURRENCY_B], n && i && T && I && ue) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    return t = {}, Object(m.a)(t, Ji.CURRENCY_A, uh(n, _ ? le : de)[0]), Object(m.a)(t, Ji.CURRENCY_B, uh(i, _ ? le : de)[0]), r = t, T.isNative || I.isNative ? (p = I.isNative, o = ge.estimateGas.addLiquidityETH, a = ge.addLiquidityETH, c = [null !== (u = null === (d = p ? T : I) || void 0 === d || null === (b = d.wrapped) || void 0 === b ? void 0 : b.address) && void 0 !== u ? u : "", (p ? n : i).quotient.toString(), r[p ? Ji.CURRENCY_A : Ji.CURRENCY_B].toString(), r[p ? Ji.CURRENCY_B : Ji.CURRENCY_A].toString(), y, ue.toHexString()], s = qt.a.from((p ? i : n).quotient.toString())) : (o = ge.estimateGas.addLiquidity, a = ge.addLiquidity, c = [null !== (f = null === T || void 0 === T || null === (j = T.wrapped) || void 0 === j ? void 0 : j.address) && void 0 !== f ? f : "", null !== (h = null === I || void 0 === I || null === (x = I.wrapped) || void 0 === x ? void 0 : x.address) && void 0 !== h ? h : "", n.quotient.toString(), i.quotient.toString(), r[Ji.CURRENCY_A].toString(), r[Ji.CURRENCY_B].toString(), y, ue.toHexString()], s = null), se(!0), e.next = 10, o.apply(void 0, Object(_e.a)(c).concat([s ? {
                                        value: s
                                    } : {}])).then((function(e) {
                                        return a.apply(void 0, Object(_e.a)(c).concat([Object(He.a)(Object(He.a)({}, s ? {
                                            value: s
                                        } : {}), {}, {
                                            gasLimit: nh(e)
                                        })])).then((function(e) {
                                            var t, n, i, r, o, a;
                                            se(!1), Re(e, {
                                                summary: we.a._("Add {0} {1} and {2} {3}", {
                                                    0: null === (t = Y[Ji.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3),
                                                    1: null === (n = D[Ji.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol,
                                                    2: null === (i = Y[Ji.CURRENCY_B]) || void 0 === i ? void 0 : i.toSignificant(3),
                                                    3: null === (r = D[Ji.CURRENCY_B]) || void 0 === r ? void 0 : r.symbol
                                                })
                                            }), me(e.hash), l.a.event({
                                                category: "Liquidity",
                                                action: "Add",
                                                label: [null === (o = D[Ji.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol, null === (a = D[Ji.CURRENCY_B]) || void 0 === a ? void 0 : a.symbol].join("/")
                                            })
                                        }))
                                    })).catch((function(e) {
                                        se(!1), 4001 !== (null === e || void 0 === e ? void 0 : e.code) && console.error(e)
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var Me = function() {
                        var e, t, n, i;
                        return _ ? Object(je.jsx)(Lo, {
                            gap: "20px",
                            children: Object(je.jsx)(Cu, {
                                mt: "20px",
                                $borderRadius: "20px",
                                children: Object(je.jsxs)(Yo, {
                                    children: [Object(je.jsx)(Ur.c, {
                                        fontSize: "48px",
                                        fontWeight: 500,
                                        lineHeight: "42px",
                                        marginRight: 10,
                                        children: (null === (e = D[Ji.CURRENCY_A]) || void 0 === e ? void 0 : e.symbol) + "/" + (null === (t = D[Ji.CURRENCY_B]) || void 0 === t ? void 0 : t.symbol)
                                    }), Object(je.jsx)(Rf, {
                                        currency0: D[Ji.CURRENCY_A],
                                        currency1: D[Ji.CURRENCY_B],
                                        size: 30
                                    })]
                                })
                            })
                        }) : Object(je.jsxs)(Lo, {
                            gap: "20px",
                            children: [Object(je.jsxs)(Yo, {
                                style: {
                                    marginTop: "20px"
                                },
                                children: [Object(je.jsx)(Ur.c, {
                                    fontSize: "48px",
                                    fontWeight: 500,
                                    lineHeight: "42px",
                                    marginRight: 10,
                                    children: null === H || void 0 === H ? void 0 : H.toSignificant(6)
                                }), Object(je.jsx)(Rf, {
                                    currency0: D[Ji.CURRENCY_A],
                                    currency1: D[Ji.CURRENCY_B],
                                    size: 30
                                })]
                            }), Object(je.jsx)(Ho, {
                                children: Object(je.jsx)(Ur.c, {
                                    fontSize: "24px",
                                    children: (null === (n = D[Ji.CURRENCY_A]) || void 0 === n ? void 0 : n.symbol) + "/" + (null === (i = D[Ji.CURRENCY_B]) || void 0 === i ? void 0 : i.symbol) + " Pool Tokens"
                                })
                            }), Object(je.jsx)(Ro, {
                                fontSize: 12,
                                textAlign: "left",
                                padding: "8px 0 0 0 ",
                                children: Object(je.jsx)(f.b, {
                                    id: "Output is estimated. If the price changes by more than {0}% your transaction will revert.",
                                    values: {
                                        0: de.toSignificant(4)
                                    }
                                })
                            })]
                        })
                    },
                    Pe = function() {
                        return Object(je.jsx)(kh, {
                            price: V,
                            currencies: D,
                            parsedAmounts: Y,
                            noLiquidity: _,
                            onAdd: Ue,
                            poolTokenPercentage: Q
                        })
                    },
                    Le = we.a._("Supplying {0} {1} and {2} {3}", {
                        0: null === (r = Y[Ji.CURRENCY_A]) || void 0 === r ? void 0 : r.toSignificant(6),
                        1: null === (o = D[Ji.CURRENCY_A]) || void 0 === o ? void 0 : o.symbol,
                        2: null === (c = Y[Ji.CURRENCY_B]) || void 0 === c ? void 0 : c.toSignificant(6),
                        3: null === (s = D[Ji.CURRENCY_B]) || void 0 === s ? void 0 : s.symbol
                    }),
                    ze = Object(a.useCallback)((function(e) {
                        var t = jb(e);
                        t === v ? O.push("/add/".concat(v, "/").concat(x)) : O.push("/add/".concat(t, "/").concat(v))
                    }), [v, O, x]),
                    De = Object(a.useCallback)((function(e) {
                        var t = jb(e);
                        x === t ? v ? O.push("/add/".concat(v, "/").concat(t)) : O.push("/add/".concat(t)) : O.push("/add/".concat(x || "BNB", "/").concat(t))
                    }), [x, O, v]),
                    We = Object(a.useCallback)((function() {
                        re(!1), he && Z(""), me("")
                    }), [Z, he]),
                    qe = O.location.pathname.includes("/create"),
                    Fe = rh(null === D || void 0 === D ? void 0 : D.CURRENCY_A, null === D || void 0 === D ? void 0 : D.CURRENCY_B);
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(mh, {
                        children: [Object(je.jsx)(Hj, {
                            creating: qe,
                            adding: !0,
                            defaultSlippage: Rh
                        }), Object(je.jsxs)(vh, {
                            children: [Object(je.jsx)(fb, {
                                isOpen: ie,
                                onDismiss: We,
                                attemptingTxn: ce,
                                hash: he,
                                content: function() {
                                    return Object(je.jsx)(bb, {
                                        title: _ ? Object(je.jsx)(f.b, {
                                            id: "You are creating a pool"
                                        }) : Object(je.jsx)(f.b, {
                                            id: "You will receive"
                                        }),
                                        onDismiss: We,
                                        topContent: Me,
                                        bottomContent: Pe
                                    })
                                },
                                pendingText: Le,
                                currencyToAdd: null === W || void 0 === W ? void 0 : W.liquidityToken
                            }), Object(je.jsxs)(Lo, {
                                gap: "20px",
                                children: [_ || (qe ? Object(je.jsx)(Po, {
                                    children: Object(je.jsx)(Su, {
                                        children: Object(je.jsxs)(Lo, {
                                            gap: "10px",
                                            children: [Object(je.jsx)(go, {
                                                fontWeight: 600,
                                                color: "primaryText1",
                                                children: Object(je.jsx)(f.b, {
                                                    id: "You are the first liquidity provider."
                                                })
                                            }), Object(je.jsx)(go, {
                                                fontWeight: 400,
                                                color: "primaryText1",
                                                children: Object(je.jsx)(f.b, {
                                                    id: "The ratio of tokens you add will set the price of this pool."
                                                })
                                            }), Object(je.jsx)(go, {
                                                fontWeight: 400,
                                                color: "primaryText1",
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Once you are happy with the rate click supply to review."
                                                })
                                            })]
                                        })
                                    })
                                }) : Object(je.jsx)(Po, {
                                    children: Object(je.jsx)(Su, {
                                        children: Object(je.jsx)(Lo, {
                                            gap: "10px",
                                            children: Object(je.jsx)(go, {
                                                fontWeight: 400,
                                                color: "primaryText1",
                                                children: Object(je.jsx)(f.b, {
                                                    id: "<0>Tip:</0> When you add liquidity, you will receive pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.",
                                                    components: {
                                                        0: Object(je.jsx)("b", {})
                                                    }
                                                })
                                            })
                                        })
                                    })
                                })), Object(je.jsx)(fj, {
                                    value: xe[Ji.CURRENCY_A],
                                    onUserInput: Z,
                                    onMax: function() {
                                        var e, t;
                                        Z(null !== (e = null === (t = ve[Ji.CURRENCY_A]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    onCurrencySelect: ze,
                                    showMaxButton: !Oe[Ji.CURRENCY_A],
                                    currency: D[Ji.CURRENCY_A],
                                    id: "add-liquidity-input-tokena",
                                    showCommonBases: !0
                                }), Object(je.jsx)(Po, {
                                    children: Object(je.jsx)(Ml.a, {
                                        size: "16",
                                        color: C.text2
                                    })
                                }), Object(je.jsx)(fj, {
                                    value: xe[Ji.CURRENCY_B],
                                    onUserInput: $,
                                    onCurrencySelect: De,
                                    onMax: function() {
                                        var e, t;
                                        $(null !== (e = null === (t = ve[Ji.CURRENCY_B]) || void 0 === t ? void 0 : t.toExact()) && void 0 !== e ? e : "")
                                    },
                                    showMaxButton: !Oe[Ji.CURRENCY_B],
                                    currency: D[Ji.CURRENCY_B],
                                    id: "add-liquidity-input-tokenb",
                                    showCommonBases: !0
                                }), D[Ji.CURRENCY_A] && D[Ji.CURRENCY_B] && q !== pa.INVALID && Object(je.jsx)(je.Fragment, {
                                    children: Object(je.jsxs)(Cu, {
                                        padding: "0px",
                                        $borderRadius: "20px",
                                        children: [Object(je.jsx)(Fo, {
                                            padding: "1rem",
                                            children: Object(je.jsx)(Ao, {
                                                fontWeight: 500,
                                                fontSize: 14,
                                                children: _ ? Object(je.jsx)(f.b, {
                                                    id: "Initial prices and pool share"
                                                }) : Object(je.jsx)(f.b, {
                                                    id: "Prices and pool share"
                                                })
                                            })
                                        }), " ", Object(je.jsx)(Cu, {
                                            padding: "1rem",
                                            $borderRadius: "20px",
                                            children: Object(je.jsx)(Ch, {
                                                currencies: D,
                                                poolTokenPercentage: Q,
                                                noLiquidity: _,
                                                price: V
                                            })
                                        })]
                                    })
                                }), Fe ? Object(je.jsx)(qc, {
                                    disabled: !0,
                                    children: Object(je.jsx)(Oo, {
                                        mb: "4px",
                                        children: Object(je.jsx)(f.b, {
                                            id: "Unsupported Asset"
                                        })
                                    })
                                }) : y ? Object(je.jsxs)(Lo, {
                                    gap: "md",
                                    children: [(Ce === eh.NOT_APPROVED || Ce === eh.PENDING || Ee === eh.NOT_APPROVED || Ee === eh.PENDING) && ee && Object(je.jsxs)(Fo, {
                                        children: [Ce !== eh.APPROVED && Object(je.jsx)(qc, {
                                            onClick: Te,
                                            disabled: Ce === eh.PENDING,
                                            width: Ee !== eh.APPROVED ? "48%" : "100%",
                                            children: Ce === eh.PENDING ? Object(je.jsx)(yh, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Approving {0}",
                                                    values: {
                                                        0: null === (u = D[Ji.CURRENCY_A]) || void 0 === u ? void 0 : u.symbol
                                                    }
                                                })
                                            }) : Object(je.jsx)(f.b, {
                                                id: "Approve {0}",
                                                values: {
                                                    0: null === (d = D[Ji.CURRENCY_A]) || void 0 === d ? void 0 : d.symbol
                                                }
                                            })
                                        }), Ee !== eh.APPROVED && Object(je.jsx)(qc, {
                                            onClick: Ne,
                                            disabled: Ee === eh.PENDING,
                                            width: Ce !== eh.APPROVED ? "48%" : "100%",
                                            children: Ee === eh.PENDING ? Object(je.jsx)(yh, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Approving {0}",
                                                    values: {
                                                        0: null === (b = D[Ji.CURRENCY_B]) || void 0 === b ? void 0 : b.symbol
                                                    }
                                                })
                                            }) : Object(je.jsx)(f.b, {
                                                id: "Approve {0}",
                                                values: {
                                                    0: null === (p = D[Ji.CURRENCY_B]) || void 0 === p ? void 0 : p.symbol
                                                }
                                            })
                                        })]
                                    }), Object(je.jsx)(Kc, {
                                        onClick: function() {
                                            N ? Ue() : re(!0)
                                        },
                                        disabled: !ee || Ce !== eh.APPROVED || Ee !== eh.APPROVED,
                                        error: !ee && !!Y[Ji.CURRENCY_A] && !!Y[Ji.CURRENCY_B],
                                        children: Object(je.jsx)(Ur.c, {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            children: null !== G && void 0 !== G ? G : Object(je.jsx)(f.b, {
                                                id: "Supply"
                                            })
                                        })
                                    })]
                                }) : Object(je.jsx)(Fc, {
                                    onClick: E,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Connect Wallet"
                                    })
                                })]
                            })]
                        })]
                    }), Object(je.jsx)(Eh, {}), Fe ? Object(je.jsx)(Ah, {
                        show: Fe,
                        currencies: [D.CURRENCY_A, D.CURRENCY_B]
                    }) : W && !_ && q !== pa.INVALID ? Object(je.jsx)(Lo, {
                        style: {
                            minWidth: "20rem",
                            width: "100%",
                            maxWidth: "400px",
                            marginTop: "1rem"
                        },
                        children: Object(je.jsx)(Zj, {
                            showUnwrapped: A,
                            pair: W
                        })
                    }) : null]
                })
            }

            function Bh(e) {
                var t = e.match.params,
                    n = t.currencyIdA,
                    i = t.currencyIdB;
                return n && i && n.toLowerCase() === i.toLowerCase() ? Object(je.jsx)(gi.a, {
                    to: "/add/".concat(n)
                }) : Object(je.jsx)(Uh, Object(He.a)({}, e))
            }
            var Mh, Ph = Ni.default.div.withConfig({
                    componentId: "sc-8opd0r-0"
                })(["display:flex;justify-content:space-between;flex-direction:column;gap:12px;margin-bottom:1rem;margin-right:1rem;margin-left:1rem;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Sh || (Sh = Object(Si.a)(["\n  display: none;\n"])))
                })),
                Lh = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-8opd0r-1"
                })(["border-radius:12px;width:100%;overflow:hidden;position:relative;opacity:1;background:", ";color:", " !important;", " ", ""], (function(e) {
                    var t = e.theme,
                        n = e.bgColor;
                    return e.showBackground ? "radial-gradient(91.85% 100% at 1.84% 0%, ".concat(Object(ea.c)(.5, n), " 0%, ").concat(t.bg0, " 100%)") : "".concat(t.bg0)
                }), (function(e) {
                    var t = e.theme;
                    return e.showBackground ? t.white : t.text1
                }), (function(e) {
                    return e.showBackground && "  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),\n    0px 24px 32px rgba(0, 0, 0, 0.01);"
                }), (function(e) {
                    return !e.showBackground && "\n      ".concat(qd, " {\n        display: none;\n      }")
                })),
                zh = Ni.default.div.withConfig({
                    componentId: "sc-8opd0r-2"
                })(["display:grid;grid-template-columns:48px 1fr 120px;grid-gap:0px;align-items:center;padding:1rem;z-index:1;margin-left:12px;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Nh || (Nh = Object(Si.a)(["\n    grid-template-columns: 36px 1fr 96px;\n  "])))
                })),
                Dh = Ni.default.div.withConfig({
                    componentId: "sc-8opd0r-3"
                })(["padding:12px 16px;opacity:", ";border-radius:0 0 12px 12px;display:flex;flex-direction:row;align-items:baseline;justify-content:space-between;z-index:1;"], (function(e) {
                    return e.showBackground ? "1" : "0.4"
                }));

            function Wh(e) {
                var t, n, i, r, o, a, c, s, u, d = e.stakingInfo,
                    l = null === (t = d.stakedPairTokens) || void 0 === t ? void 0 : t[0],
                    b = null === (n = d.stakedPairTokens) || void 0 === n ? void 0 : n[1],
                    p = l ? Jj(l) : void 0,
                    h = b ? Jj(b) : void 0,
                    m = Boolean(d.stakedAmount.greaterThan("0")),
                    x = (null === p || void 0 === p ? void 0 : p.isNative) ? b : p ? l : d.stakedToken,
                    v = (null === p || void 0 === p ? void 0 : p.isNative) ? l : p ? b : d.stakedToken,
                    O = qp(x),
                    g = dd(d.stakedAmount.currency),
                    y = ha.apply(void 0, Object(_e.a)(null !== (i = d.stakedPairTokens) && void 0 !== i ? i : [])),
                    w = Object(j.a)(y, 2)[1];
                g && w && v && d && (u = J.CurrencyAmount.fromRawAmount(v, X.a.divide(X.a.multiply(X.a.multiply(d.totalStakedAmount.quotient, w.reserveOf(v).quotient), X.a.BigInt(2)), X.a.equal(g.quotient, X.a.BigInt(0)) ? X.a.BigInt(1) : g.quotient)));
                var k, C, T = null === (r = jd(w || (null === d || void 0 === d ? void 0 : d.stakedToken), null === d || void 0 === d ? void 0 : d.rewardToken)) || void 0 === r ? void 0 : r.divide(null === d || void 0 === d ? void 0 : d.apy).invert(),
                    I = bd(v);
                (v === (null === d || void 0 === d ? void 0 : d.stakedToken) || u) && d && (k = null === I || void 0 === I ? void 0 : I.quote(null !== (C = u) && void 0 !== C ? C : null === d || void 0 === d ? void 0 : d.totalStakedAmount));
                return Object(je.jsxs)(Lh, {
                    showBackground: m,
                    bgColor: O,
                    children: [Object(je.jsx)(qd, {
                        desaturate: !0,
                        atmosphere: (null === d || void 0 === d ? void 0 : d.stakedPairTokens) ? Td.FLYING : Td.FOREST
                    }), Object(je.jsx)(Fd, {}), Object(je.jsxs)(zh, {
                        children: [p && h ? Object(je.jsx)(Rf, {
                            currency0: p,
                            currency1: h,
                            size: 24
                        }) : Object(je.jsx)(rb, {
                            currency: d.stakedToken,
                            size: "24px"
                        }), Object(je.jsx)(ko, {
                            fontWeight: 600,
                            fontSize: 24,
                            children: p && h ? "".concat(p.symbol, "-").concat(h.symbol) : d.stakedToken.symbol
                        }), Object(je.jsx)(Kr, {
                            to: "/stake/".concat(jb(d.stakedToken), "/").concat(jb(d.rewardToken)),
                            style: {
                                width: "100%"
                            },
                            children: Object(je.jsx)(qc, {
                                padding: "8px",
                                $borderRadius: "8px",
                                children: m ? Object(je.jsx)(f.b, {
                                    id: "Manage"
                                }) : Object(je.jsx)(f.b, {
                                    id: "Deposit"
                                })
                            })
                        })]
                    }), Object(je.jsxs)(Ph, {
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(ko, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Total deposited"
                                })
                            }), Object(je.jsxs)(ko, {
                                children: ["$", null !== (o = null === (a = k) || void 0 === a ? void 0 : a.toFixed(2, {
                                    groupSeparator: ","
                                })) && void 0 !== o ? o : "0.00"]
                            })]
                        }), Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(ko, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Pool APY"
                                })
                            }), Object(je.jsx)(ko, {
                                children: T && +(null === T || void 0 === T ? void 0 : T.denominator.toString()) ? Object(je.jsx)(f.b, {
                                    id: "{0}%",
                                    values: {
                                        0: T.toFixed(2)
                                    }
                                }) : "-"
                            })]
                        })]
                    }), m && Object(je.jsxs)(je.Fragment, {
                        children: [Object(je.jsx)(Vd, {}), Object(je.jsxs)(Dh, {
                            showBackground: !0,
                            children: [Object(je.jsx)(wo, {
                                color: "white",
                                fontWeight: 500,
                                children: Object(je.jsx)("span", {
                                    children: Object(je.jsx)(f.b, {
                                        id: "Your rate"
                                    })
                                })
                            }), Object(je.jsxs)(wo, {
                                style: {
                                    textAlign: "right"
                                },
                                color: "white",
                                fontWeight: 500,
                                children: [Object(je.jsx)("span", {
                                    role: "img",
                                    "aria-label": "wizard-icon",
                                    style: {
                                        marginRight: "0.5rem"
                                    },
                                    children: "\u26a1"
                                }), d ? Object(je.jsx)(f.b, {
                                    id: "{0} {1} / week",
                                    values: {
                                        0: null === d || void 0 === d || null === (c = d.userRewardRate) || void 0 === c || null === (s = c.multiply(ee)) || void 0 === s ? void 0 : s.toFixed(0, {
                                            groupSeparator: ","
                                        }),
                                        1: null === d || void 0 === d ? void 0 : d.rewardToken.symbol
                                    }
                                }) : "-"]
                            })]
                        })]
                    })]
                })
            }
            var qh = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-bo6usy-0"
                })(["max-width:640px;width:100%;"]),
                Fh = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-bo6usy-1"
                })(["max-width:720px;width:100%;"]),
                Yh = Ni.default.div.withConfig({
                    componentId: "sc-bo6usy-2"
                })(["display:grid;grid-template-columns:1fr;column-gap:10px;row-gap:15px;width:100%;justify-self:center;"]),
                Vh = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-bo6usy-3"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Mh || (Mh = Object(Si.a)(["\nflex-direction: column;\n"])))
                }));

            function _h() {
                var e, t = Object(a.useContext)(Ni.ThemeContext),
                    n = fe(),
                    i = (n.chainId, n.account),
                    r = null === (e = Na()) || void 0 === e ? void 0 : e.filter((function(e) {
                        return e.open || e.stakedAmount.greaterThan("0")
                    }));
                return Object(je.jsxs)(qh, {
                    gap: "lg",
                    justify: "center",
                    children: [Object(je.jsx)(Fh, {
                        gap: "md",
                        children: Object(je.jsxs)(Nd, {
                            children: [Object(je.jsx)(qd, {
                                atmosphere: Td.URBAN
                            }), Object(je.jsx)(Fd, {}), Object(je.jsx)(Yd, {
                                children: Object(je.jsxs)(Lo, {
                                    gap: "md",
                                    children: [Object(je.jsx)(Fo, {
                                        children: Object(je.jsx)(ko, {
                                            fontWeight: 600,
                                            children: Object(je.jsx)(f.b, {
                                                id: "ScrappyInu staking and liquidity mining"
                                            })
                                        })
                                    }), Object(je.jsx)(Fo, {
                                        children: Object(je.jsx)(ko, {
                                            fontSize: 14,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Deposit your Liquidity Provider tokens to receive ScrappyInu, the ScrappyInu protocol token."
                                            })
                                        })
                                    }), " ", Object(je.jsx)(ro, {
                                        style: {
                                            color: "white",
                                            textDecoration: "underline"
                                        },
                                        href: "https://ScrappyInu.org/#innovations",
                                        target: "_blank",
                                        children: Object(je.jsx)(ko, {
                                            fontSize: 14,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Read more about staking"
                                            })
                                        })
                                    })]
                                })
                            }), Object(je.jsx)(Fd, {})]
                        })
                    }), Object(je.jsxs)(Lo, {
                        gap: "lg",
                        style: {
                            width: "100%",
                            maxWidth: "720px"
                        },
                        children: [Object(je.jsx)(Vh, {
                            style: {
                                alignItems: "baseline"
                            },
                            children: Object(je.jsx)(Io, {
                                style: {
                                    marginTop: "0.5rem"
                                },
                                children: Object(je.jsx)(f.b, {
                                    id: "Participating pools"
                                })
                            })
                        }), Object(je.jsx)(Yh, {
                            children: i ? r ? 0 === (null === r || void 0 === r ? void 0 : r.length) ? Object(je.jsx)(Au, {
                                children: Object(je.jsx)(f.b, {
                                    id: "No active pools"
                                })
                            }) : null === r || void 0 === r ? void 0 : r.map((function(e, t) {
                                return Object(je.jsx)(Wh, {
                                    stakingInfo: e
                                }, "".concat(jb(null === e || void 0 === e ? void 0 : e.stakedToken), "-").concat(t))
                            })) : Object(je.jsx)(as, {
                                style: {
                                    margin: "auto"
                                }
                            }) : Object(je.jsx)(ku, {
                                padding: "40px",
                                children: Object(je.jsx)(Co, {
                                    color: t.text3,
                                    textAlign: "center",
                                    children: Object(je.jsx)(f.b, {
                                        id: "Connect to a wallet to view the pools."
                                    })
                                })
                            })
                        })]
                    })]
                })
            }
            var Hh = ["steps", "disabled"],
                Qh = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-dlion8-0"
                })(["margin-right:8px;height:100%;"]),
                Gh = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-dlion8-1"
                })(["width:fit-content;padding:4px;border-radius:16px;"]),
                Jh = Ni.default.div.withConfig({
                    componentId: "sc-dlion8-2"
                })(["width:48px;height:48px;background-color:", ";border-radius:50%;color:", ";display:flex;align-items:center;justify-content:center;line-height:8px;font-size:16px;padding:1rem;"], (function(e) {
                    var t = e.theme,
                        n = e.confirmed;
                    return e.disabled ? t.bg3 : n ? t.green1 : t.primary1
                }), (function(e) {
                    var t = e.theme;
                    return e.disabled ? t.text3 : t.text1
                })),
                Kh = Ni.default.div.withConfig({
                    componentId: "sc-dlion8-3"
                })(["display:flex;flex-direction:column;align-items:center;"]);

            function Xh(e) {
                var t = e.steps,
                    n = e.disabled,
                    i = void 0 !== n && n,
                    r = Object(Rr.a)(e, Hh),
                    o = Object(a.useContext)(Ni.ThemeContext);
                return Object(je.jsx)(Qh, Object(He.a)(Object(He.a)({
                    justify: "center"
                }, r), {}, {
                    children: Object(je.jsxs)(Gh, {
                        children: [t.map((function(e, n) {
                            return Object(je.jsxs)(Kh, {
                                children: [Object(je.jsx)(Jh, {
                                    confirmed: e,
                                    disabled: i || !t[n - 1] && 0 !== n,
                                    children: e ? "\u2713" : n + 1 + "."
                                }), Object(je.jsx)(Oo, {
                                    color: o.text4,
                                    children: "|"
                                })]
                            }, n)
                        })), Object(je.jsx)(Jh, {
                            disabled: i || !t[t.length - 1],
                            children: t.length + 1 + "."
                        })]
                    })
                }))
            }
            var Zh = Ni.default.div.withConfig({
                    componentId: "sc-o9qaeb-0"
                })(["width:100%;padding:24px;"]),
                $h = Object(Ni.default)(Po).withConfig({
                    componentId: "sc-o9qaeb-1"
                })(["padding:60px 0;"]);

            function em(e) {
                var t = e.children,
                    n = e.onDismiss;
                return Object(je.jsxs)(Zh, {
                    children: [Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)("div", {}), Object(je.jsx)(Qr, {
                            onClick: n
                        })]
                    }), Object(je.jsx)($h, {
                        children: Object(je.jsx)(po, {
                            src: zl,
                            alt: "loader",
                            size: "90px"
                        })
                    }), Object(je.jsxs)(Lo, {
                        gap: "100px",
                        justify: "center",
                        children: [t, Object(je.jsx)(Ao, {
                            children: Object(je.jsx)(f.b, {
                                id: "Confirm this transaction in your wallet"
                            })
                        })]
                    })]
                })
            }

            function tm(e) {
                var t = e.children,
                    n = e.onDismiss,
                    i = e.hash,
                    r = Object(a.useContext)(Ni.ThemeContext),
                    o = fe().chainId;
                return Object(je.jsxs)(Zh, {
                    children: [Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)("div", {}), Object(je.jsx)(Qr, {
                            onClick: n
                        })]
                    }), Object(je.jsx)($h, {
                        children: Object(je.jsx)(Pl.a, {
                            strokeWidth: .5,
                            size: 90,
                            color: r.primary1
                        })
                    }), Object(je.jsxs)(Lo, {
                        gap: "100px",
                        justify: "center",
                        children: [t, o && i && Object(je.jsx)(ro, {
                            href: gs(o, i, vs.TRANSACTION),
                            style: {
                                marginLeft: "4px"
                            },
                            children: Object(je.jsx)(Ao, {
                                children: Object(je.jsx)(f.b, {
                                    id: "View transaction on Explorer"
                                })
                            })
                        })]
                    })]
                })
            }
            var nm = Ni.default.div.withConfig({
                    componentId: "sc-1uketpd-0"
                })(["display:flex;justify-content:space-between;padding-right:20px;padding-left:20px;opacity:", ";"], (function(e) {
                    e.dim;
                    return 1
                })),
                im = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-1uketpd-1"
                })(["width:100%;padding:1rem;"]);

            function rm(e) {
                var t, n, i = e.isOpen,
                    r = e.onDismiss,
                    o = e.stakingInfo,
                    c = e.userLiquidityUnstaked,
                    s = fe(),
                    u = s.chainId,
                    d = (s.library, null === o || void 0 === o || null === (t = o.stakedPairTokens) || void 0 === t ? void 0 : t[0]),
                    l = null === o || void 0 === o || null === (n = o.stakedPairTokens) || void 0 === n ? void 0 : n[1],
                    b = d ? Jj(d) : void 0,
                    p = l ? Jj(l) : void 0,
                    h = Object(a.useState)(""),
                    m = Object(j.a)(h, 2),
                    x = m[0],
                    v = m[1],
                    O = function(e, t, n) {
                        var i, r, o = fe().account,
                            a = Oa(e, t),
                            c = a && n && X.a.lessThanOrEqual(a.quotient, n.quotient) ? a : void 0;
                        return o || (i = we.a._("Connect Wallet")), c || (i = null !== (r = i) && void 0 !== r ? r : we.a._("Enter an amount")), {
                            parsedAmount: c,
                            error: i
                        }
                    }(x, o.stakedAmount.currency, c),
                    g = O.parsedAmount,
                    y = O.error,
                    w = null === g || void 0 === g ? void 0 : g.wrapped,
                    k = J.CurrencyAmount.fromRawAmount(o.rewardRate.currency, "0");
                (null === w || void 0 === w ? void 0 : w.greaterThan("0")) && (k = o.getHypotheticalRewardRate(o.rewardToken, o.stakedAmount.add(w), o.totalStakedAmount.add(w), o.totalRewardRate));
                var C = ta(),
                    T = Object(a.useState)(!1),
                    I = Object(j.a)(T, 2),
                    A = I[0],
                    E = I[1],
                    N = Object(a.useState)(),
                    U = Object(j.a)(N, 2),
                    B = U[0],
                    M = U[1],
                    P = Object(a.useCallback)((function() {
                        M(void 0), E(!1), r()
                    }), [r]),
                    L = o.stakedPairTokens ? new Ie.Pair(J.CurrencyAmount.fromRawAmount(o.stakedPairTokens[0], "0"), J.CurrencyAmount.fromRawAmount(o.stakedPairTokens[1], "0")) : void 0,
                    z = oh(),
                    D = ih(g, u ? We[u] : void 0),
                    W = Object(j.a)(D, 2),
                    q = W[0],
                    F = W[1],
                    Y = Pn();

                function V() {
                    return (V = Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (E(!0), !(Y && g && z)) {
                                        e.next = 8;
                                        break
                                    }
                                    if (q !== eh.APPROVED) {
                                        e.next = 6;
                                        break
                                    }
                                    Y.stakeTokens(o.poolIndex, "0x".concat(g.quotient.toString(16))).then((function(e) {
                                        C(e, {
                                            summary: we.a._("Deposit liquidity")
                                        }), M(e.hash)
                                    })).catch((function(e) {
                                        E(!1), console.log(e)
                                    })), e.next = 8;
                                    break;
                                case 6:
                                    throw E(!1), new Error("Attempting to stake without approval. Please contact support.");
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                var _ = Object(a.useCallback)((function(e) {
                        v(e)
                    }), []),
                    H = bh(c),
                    Q = Boolean(H && (null === g || void 0 === g ? void 0 : g.equalTo(H))),
                    G = Object(a.useCallback)((function() {
                        H && _(H.toExact())
                    }), [H, _]);
                return Object(je.jsxs)(Sc, {
                    isOpen: i,
                    onDismiss: P,
                    maxHeight: 90,
                    children: [!A && !B && Object(je.jsxs)(im, {
                        gap: "lg",
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Io, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Deposit"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: P
                            })]
                        }), Object(je.jsx)(fj, {
                            value: x,
                            onUserInput: _,
                            onMax: G,
                            showMaxButton: !Q,
                            currency: o.stakedAmount.currency,
                            pair: L,
                            label: "",
                            renderBalance: function(e) {
                                return Object(je.jsx)(f.b, {
                                    id: "Available to deposit: {0}",
                                    values: {
                                        0: ej(e, 4)
                                    }
                                })
                            },
                            id: "stake-liquidity-token"
                        }), Object(je.jsxs)(nm, {
                            dim: !k.greaterThan("0"),
                            children: [Object(je.jsx)("div", {
                                children: Object(je.jsx)(wo, {
                                    fontWeight: 600,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Weekly Rewards"
                                    })
                                })
                            }), Object(je.jsx)(wo, {
                                children: Object(je.jsx)(f.b, {
                                    id: "{0} {1} / week",
                                    values: {
                                        0: k.multiply(ee.toString()).toSignificant(4, {
                                            groupSeparator: ","
                                        }),
                                        1: b && p ? "".concat(b.symbol, "-").concat(p.symbol) : "".concat(null === o || void 0 === o ? void 0 : o.stakedToken.symbol)
                                    }
                                })
                            })]
                        }), Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Jc, {
                                mr: "0.5rem",
                                onClick: F,
                                confirmed: q === eh.APPROVED,
                                disabled: q !== eh.NOT_APPROVED,
                                children: Object(je.jsx)(f.b, {
                                    id: "Approve"
                                })
                            }), Object(je.jsx)(Kc, {
                                disabled: !!y || q !== eh.APPROVED,
                                error: !!y && !!g,
                                onClick: function() {
                                    return V.apply(this, arguments)
                                },
                                children: null !== y && void 0 !== y ? y : Object(je.jsx)(f.b, {
                                    id: "Deposit"
                                })
                            })]
                        }), Object(je.jsx)(Xh, {
                            steps: [q === eh.APPROVED],
                            disabled: !0
                        })]
                    }), A && !B && Object(je.jsx)(em, {
                        onDismiss: P,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(To, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Depositing {0}",
                                    values: {
                                        0: (null === o || void 0 === o ? void 0 : o.stakedPairTokens) ? "Liquidity" : "Tokens"
                                    }
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "{0}{1}",
                                    values: {
                                        0: null === g || void 0 === g ? void 0 : g.toFixed(18),
                                        1: b && p ? " ".concat(b.symbol, "-").concat(p.symbol) : " ".concat(null === o || void 0 === o ? void 0 : o.stakedToken.symbol)
                                    }
                                })
                            })]
                        })
                    }), A && B && Object(je.jsx)(tm, {
                        onDismiss: P,
                        hash: B,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(To, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction Submitted"
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Deposited\xa0{0}{1}",
                                    values: {
                                        0: null === g || void 0 === g ? void 0 : g.toSignificant(4),
                                        1: b && p ? " ".concat(b.symbol, "-").concat(p.symbol) : " ".concat(null === o || void 0 === o ? void 0 : o.stakedToken.symbol)
                                    }
                                })
                            })]
                        })
                    })]
                })
            }
            var om = new J.Fraction(X.a.BigInt(1), X.a.BigInt(1e6));

            function am(e) {
                var t = e.currencyAmount,
                    n = e.significantDigits,
                    i = void 0 === n ? 4 : n;
                return Object(je.jsx)(je.Fragment, {
                    children: t.equalTo(X.a.BigInt(0)) ? "0" : t.greaterThan(om) ? t.toSignificant(i) : "<".concat(om.toSignificant(1))
                })
            }
            var cm = Object(Ni.default)(Lo).withConfig({
                componentId: "sc-14wre31-0"
            })(["width:100%;padding:1rem;"]);

            function sm(e) {
                var t, n, i, r, o, c = e.isOpen,
                    s = e.onDismiss,
                    u = e.stakingInfo,
                    d = fe().account,
                    l = null === u || void 0 === u || null === (t = u.stakedPairTokens) || void 0 === t ? void 0 : t[0],
                    b = null === u || void 0 === u || null === (n = u.stakedPairTokens) || void 0 === n ? void 0 : n[1],
                    p = l ? Jj(l) : void 0,
                    h = b ? Jj(b) : void 0,
                    m = ta(),
                    x = Object(a.useState)(),
                    v = Object(j.a)(x, 2),
                    O = v[0],
                    g = v[1],
                    y = Object(a.useState)(!1),
                    w = Object(j.a)(y, 2),
                    k = w[0],
                    C = w[1];

                function T() {
                    g(void 0), C(!1), s()
                }
                var I, A, E = Pn();

                function N() {
                    return (N = Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!(E && (null === u || void 0 === u ? void 0 : u.stakedAmount) && d)) {
                                        e.next = 4;
                                        break
                                    }
                                    return C(!0), e.next = 4, E.unstakeMyTokens(null === u || void 0 === u ? void 0 : u.poolIndex).then((function(e) {
                                        m(e, {
                                            summary: we.a._("Withdraw deposited liquidity")
                                        }), g(e.hash)
                                    })).catch((function(e) {
                                        C(!1), console.log(e)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(d || (I = we.a._("Connect a wallet")), null === u || void 0 === u ? void 0 : u.stakedAmount) || (I = null !== (A = I) && void 0 !== A ? A : we.a._("Enter an amount"));
                return Object(je.jsxs)(Sc, {
                    isOpen: c,
                    onDismiss: T,
                    maxHeight: 90,
                    children: [!k && !O && Object(je.jsxs)(cm, {
                        gap: "lg",
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Io, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Withdraw"
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: T
                            })]
                        }), (null === u || void 0 === u ? void 0 : u.stakedAmount) && Object(je.jsxs)(Lo, {
                            justify: "center",
                            gap: "md",
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 600,
                                fontSize: 36,
                                children: Object(je.jsx)(am, {
                                    currencyAmount: u.stakedAmount
                                })
                            }), Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Deposited{0}:",
                                    values: {
                                        0: (null === u || void 0 === u ? void 0 : u.stakedPairTokens) ? " liquidity" : " tokens"
                                    }
                                })
                            })]
                        }), (null === u || void 0 === u ? void 0 : u.unclaimedAmount) && Object(je.jsxs)(Lo, {
                            justify: "center",
                            gap: "md",
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 600,
                                fontSize: 36,
                                children: Object(je.jsx)(am, {
                                    currencyAmount: null === u || void 0 === u ? void 0 : u.unclaimedAmount
                                })
                            }), Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Unclaimed {0}",
                                    values: {
                                        0: null === u || void 0 === u ? void 0 : u.rewardToken.symbol
                                    }
                                })
                            })]
                        }), (null === u || void 0 === u ? void 0 : u.claimedAmount) && Object(je.jsxs)(Lo, {
                            justify: "center",
                            gap: "md",
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 600,
                                fontSize: 36,
                                children: Object(je.jsx)(am, {
                                    currencyAmount: null === u || void 0 === u ? void 0 : u.claimedAmount
                                })
                            }), Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Claimed {0}",
                                    values: {
                                        0: null === u || void 0 === u ? void 0 : u.rewardToken.symbol
                                    }
                                })
                            })]
                        }), Object(je.jsx)(Ao, {
                            style: {
                                textAlign: "center"
                            },
                            children: Object(je.jsx)(f.b, {
                                id: "When you withdraw, your {0} is automatically retrieved",
                                values: {
                                    0: null === u || void 0 === u ? void 0 : u.rewardToken.symbol
                                }
                            })
                        }), Object(je.jsx)(Kc, {
                            disabled: !!I,
                            error: !!I && !!(null === u || void 0 === u ? void 0 : u.stakedAmount),
                            onClick: function() {
                                return N.apply(this, arguments)
                            },
                            children: null !== (i = I) && void 0 !== i ? i : Object(je.jsx)(f.b, {
                                id: "Withdraw & Retrieve"
                            })
                        })]
                    }), k && !O && Object(je.jsx)(em, {
                        onDismiss: T,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Withdrawing {0}{1}",
                                    values: {
                                        0: null === u || void 0 === u || null === (r = u.stakedAmount) || void 0 === r ? void 0 : r.toSignificant(4),
                                        1: p && h ? " ".concat(p.symbol, "-").concat(h.symbol) : " ".concat(null === u || void 0 === u ? void 0 : u.stakedToken.symbol)
                                    }
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Retrieving {0} {1}",
                                    values: {
                                        0: null === u || void 0 === u || null === (o = u.unclaimedAmount) || void 0 === o ? void 0 : o.toSignificant(4),
                                        1: null === u || void 0 === u ? void 0 : u.rewardToken.symbol
                                    }
                                })
                            })]
                        })
                    }), O && Object(je.jsx)(tm, {
                        onDismiss: T,
                        hash: O,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(To, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction Submitted"
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Withdrew{0}!",
                                    values: {
                                        0: p && h ? " ".concat(p.symbol, "-").concat(h.symbol) : " ".concat(null === u || void 0 === u ? void 0 : u.stakedToken.symbol)
                                    }
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Claimed ScrappyInu!"
                                })
                            })]
                        })
                    })]
                })
            }
            var um = Object(Ni.default)(Lo).withConfig({
                componentId: "sc-jsl5h0-0"
            })(["width:100%;padding:1rem;"]);

            function dm(e) {
                var t, n, i, r, o, c, s, u = e.isOpen,
                    d = e.onDismiss,
                    l = e.stakingInfo,
                    b = e.retrieve,
                    p = fe().account,
                    h = ta(),
                    m = Object(a.useState)(),
                    x = Object(j.a)(m, 2),
                    v = x[0],
                    O = x[1],
                    g = Object(a.useState)(!1),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1];

                function C() {
                    O(void 0), k(!1), d()
                }
                var T, I, A = Pn();

                function E() {
                    return (E = Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!A || !(null === l || void 0 === l ? void 0 : l.stakedAmount)) {
                                        e.next = 4;
                                        break
                                    }
                                    return k(!0), e.next = 4, A.claimRewards(l.poolIndex).then((function(e) {
                                        h(e, {
                                            summary: we.a._("Claim accumulated {0} rewards", {
                                                0: null === l || void 0 === l ? void 0 : l.rewardToken.symbol
                                            })
                                        }), O(e.hash)
                                    })).catch((function(e) {
                                        k(!1), console.log(e)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function N() {
                    return (N = Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!A || !(null === l || void 0 === l ? void 0 : l.stakedAmount)) {
                                        e.next = 4;
                                        break
                                    }
                                    return k(!0), e.next = 4, A.retrieveMyRewards(l.poolIndex).then((function(e) {
                                        h(e, {
                                            summary: we.a._("Retrieve accumulated {0} rewards", {
                                                0: null === l || void 0 === l ? void 0 : l.rewardToken.symbol
                                            })
                                        }), O(e.hash)
                                    })).catch((function(e) {
                                        k(!1), console.log(e)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }(p || (T = we.a._("Connect wallet")), null === l || void 0 === l ? void 0 : l.stakedAmount) || (T = null !== (I = T) && void 0 !== I ? I : we.a._("Enter an amount"));
                return Object(je.jsxs)(Sc, {
                    isOpen: u,
                    onDismiss: C,
                    maxHeight: 90,
                    children: [!w && !v && Object(je.jsxs)(um, {
                        gap: "lg",
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Io, {
                                children: Object(je.jsx)(f.b, {
                                    id: "{0}",
                                    values: {
                                        0: b ? "Retrieve" : "Claim"
                                    }
                                })
                            }), Object(je.jsx)(Qr, {
                                onClick: C
                            })]
                        }), (null === l || void 0 === l ? void 0 : l.unclaimedAmount) && Object(je.jsxs)(Lo, {
                            justify: "center",
                            gap: "md",
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 600,
                                fontSize: 36,
                                children: null === l || void 0 === l || null === (t = l.unclaimedAmount) || void 0 === t ? void 0 : t.toSignificant(6)
                            }), Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Unclaimed {0}",
                                    values: {
                                        0: null === l || void 0 === l ? void 0 : l.rewardToken.symbol
                                    }
                                })
                            })]
                        }), (null === l || void 0 === l ? void 0 : l.claimedAmount) && b && Object(je.jsxs)(Lo, {
                            justify: "center",
                            gap: "md",
                            children: [Object(je.jsx)(Co, {
                                fontWeight: 600,
                                fontSize: 36,
                                children: null === l || void 0 === l || null === (n = l.claimedAmount) || void 0 === n ? void 0 : n.toSignificant(6)
                            }), Object(je.jsx)(Co, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Claimed {0}",
                                    values: {
                                        0: null === l || void 0 === l ? void 0 : l.rewardToken.symbol
                                    }
                                })
                            })]
                        }), Object(je.jsx)(Ao, {
                            style: {
                                textAlign: "center"
                            },
                            children: Object(je.jsx)(f.b, {
                                id: "When you {0} without withdrawing your liquidity remains in the mining pool.",
                                values: {
                                    0: b ? "retrieve" : "claim"
                                }
                            })
                        }), Object(je.jsx)(Kc, {
                            disabled: !!T,
                            error: !!T && !!(null === l || void 0 === l ? void 0 : l.stakedAmount),
                            onClick: b ? function() {
                                return N.apply(this, arguments)
                            } : function() {
                                return E.apply(this, arguments)
                            },
                            children: null !== (i = T) && void 0 !== i ? i : Object(je.jsx)(f.b, {
                                id: "{0}",
                                values: {
                                    0: b ? "Retrieve" : "Claim"
                                }
                            })
                        })]
                    }), w && !v && Object(je.jsx)(em, {
                        onDismiss: C,
                        children: Object(je.jsx)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "{0}",
                                    values: {
                                        0: b ? "Retrieving ".concat(null === l || void 0 === l || null === (r = l.claimedAmount.add(l.unclaimedAmount)) || void 0 === r ? void 0 : r.toSignificant(6), "\n                  ").concat(null === l || void 0 === l || null === (o = l.rewardToken) || void 0 === o ? void 0 : o.symbol) : "Claiming ".concat(null === l || void 0 === l || null === (c = l.unclaimedAmount) || void 0 === c ? void 0 : c.toSignificant(6), " ").concat(null === l || void 0 === l || null === (s = l.rewardToken) || void 0 === s ? void 0 : s.symbol)
                                    }
                                })
                            })
                        })
                    }), v && Object(je.jsx)(tm, {
                        onDismiss: C,
                        hash: v,
                        children: Object(je.jsxs)(Lo, {
                            gap: "12px",
                            justify: "center",
                            children: [Object(je.jsx)(To, {
                                children: Object(je.jsx)(f.b, {
                                    id: "Transaction Submitted"
                                })
                            }), Object(je.jsx)(Co, {
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "{0} {1}!",
                                    values: {
                                        0: b ? "Retrieved" : "Claimed",
                                        1: null === l || void 0 === l ? void 0 : l.rewardToken.symbol
                                    }
                                })
                            })]
                        })
                    })]
                })
            }
            var lm, bm, pm, fm, jm, hm = n(213),
                mm = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-7xo36p-0"
                })(["max-width:640px;width:100%;"]),
                xm = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-7xo36p-1"
                })(["position:relative;max-width:640px;width:100%;opacity:", ";"], (function(e) {
                    return e.dim ? .3 : 1
                })),
                vm = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-7xo36p-2"
                })(["border-radius:12px;width:100%;position:relative;"]),
                Om = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-7xo36p-3"
                })(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#1e1a31 0%,#3d51a5 100%);z-index:2;box-shadow:0px 4px 10px rgba(0,0,0,0.1);background:", ";"], (function(e) {
                    var t = e.theme,
                        n = e.bgColor,
                        i = e.showBackground;
                    return "radial-gradient(91.85% 100% at 1.84% 0%, ".concat(Object(ea.c)(.5, n), " 0%,\n    ").concat(i ? t.bg0 : t.bg5, " 100%) ")
                })),
                gm = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-7xo36p-4"
                })(["background:", ";opacity:", ";margin-top:-40px;padding:0 1.25rem 1rem 1.25rem;padding-top:32px;z-index:1;"], (function(e) {
                    return e.theme.bg0
                }), (function(e) {
                    return e.dim ? .4 : 1
                })),
                ym = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-7xo36p-5"
                })(["background:none;border:1px solid ", ";padding:1rem;z-index:1;"], (function(e) {
                    return e.theme.bg4
                })),
                wm = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-7xo36p-6"
                })(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#e0013b 0%,#160ce8 200%);overflow:hidden;"]),
                km = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-7xo36p-7"
                })(["justify-content:center;gap:12px;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(lm || (lm = Object(Si.a)(["\n    flex-direction: column;\n    gap: 12px;\n  "])))
                }));

            function Cm(e) {
                var t, n = e.match.params,
                    i = n.currencyIdA,
                    r = n.currencyIdB,
                    o = null === (t = Na()) || void 0 === t ? void 0 : t.filter((function(e) {
                        return (null === e || void 0 === e ? void 0 : e.stakedToken.address) === i && (null === e || void 0 === e ? void 0 : e.rewardToken.address) === r
                    }))[0];
                return o ? Object(je.jsx)(Tm, {
                    stakingInfo: o
                }) : Object(je.jsx)(gi.a, {
                    to: {
                        pathname: "/stake"
                    }
                })
            }

            function Tm(e) {
                var t, n, i, r, o, c, s, u, d, l, b, h, m, x, v, O, g, y, w, k, C, T, I, A, E, S = e.stakingInfo,
                    N = fe().account,
                    R = Pa(null !== N && void 0 !== N ? N : void 0, null === (t = S.stakedAmount) || void 0 === t ? void 0 : t.currency),
                    U = Boolean((null === (n = S.stakedAmount) || void 0 === n ? void 0 : n.equalTo("0")) && (null === R || void 0 === R ? void 0 : R.equalTo("0"))),
                    B = null === (i = S.stakedPairTokens) || void 0 === i ? void 0 : i[0],
                    M = null === (r = S.stakedPairTokens) || void 0 === r ? void 0 : r[1],
                    P = B ? Jj(B) : void 0,
                    L = M ? Jj(M) : void 0,
                    z = (null === P || void 0 === P ? void 0 : P.isNative) ? M : P ? B : S.stakedToken,
                    D = (null === P || void 0 === P ? void 0 : P.isNative) ? B : P ? M : S.stakedToken,
                    W = Object(a.useState)(!1),
                    q = Object(j.a)(W, 2),
                    F = q[0],
                    Y = q[1],
                    V = Object(a.useState)(!1),
                    _ = Object(j.a)(V, 2),
                    H = _[0],
                    Q = _[1],
                    G = Object(a.useState)(!1),
                    K = Object(j.a)(G, 2),
                    Z = K[0],
                    $ = K[1],
                    te = Object(a.useState)(!1),
                    ie = Object(j.a)(te, 2),
                    re = ie[0],
                    oe = ie[1],
                    ae = Object(a.useCallback)((function(e) {
                        oe(e), $(!0)
                    }), [re, oe, $]),
                    ce = !S.stakedAmount || S.stakedAmount.equalTo(X.a.BigInt(0)),
                    se = S.unclaimedAmount && X.a.notEqual(ne, null === (o = S.unclaimedAmount) || void 0 === o ? void 0 : o.quotient),
                    ue = se || S.unclaimedAmount && X.a.notEqual(ne, null === (c = S.unclaimedAmount) || void 0 === c ? void 0 : c.quotient),
                    de = dd(S.stakedAmount.currency),
                    le = ha.apply(void 0, Object(_e.a)(null !== (s = S.stakedPairTokens) && void 0 !== s ? s : [])),
                    be = Object(j.a)(le, 2)[1];
                de && be && D && S && (E = J.CurrencyAmount.fromRawAmount(D, X.a.divide(X.a.multiply(X.a.multiply(S.totalStakedAmount.quotient, be.reserveOf(D).quotient), X.a.BigInt(2)), X.a.equal(de.quotient, X.a.BigInt(0)) ? X.a.BigInt(1) : de.quotient)));
                var pe, he, me = null === (u = jd(be || (null === S || void 0 === S ? void 0 : S.stakedToken), null === S || void 0 === S ? void 0 : S.rewardToken)) || void 0 === u ? void 0 : u.divide(null === S || void 0 === S ? void 0 : S.apy).invert(),
                    xe = bd(D);
                (D === S.stakedToken || E) && S && (pe = null === xe || void 0 === xe ? void 0 : xe.quote(null !== (he = E) && void 0 !== he ? he : S.totalStakedAmount));
                var ve = null !== (d = null === (l = S.unclaimedAmount) || void 0 === l ? void 0 : l.toFixed(6)) && void 0 !== d ? d : "0",
                    Oe = null !== (b = xs(ve)) && void 0 !== b ? b : "0",
                    ge = null !== (h = null === (m = S.claimedAmount) || void 0 === m ? void 0 : m.toFixed(6)) && void 0 !== h ? h : "0",
                    ye = null !== (x = xs(ge)) && void 0 !== x ? x : "0",
                    we = Xt(),
                    ke = Object(a.useCallback)((function() {
                        N ? Y(!0) : we()
                    }), [N, we]),
                    Ce = qp(z);
                return Object(je.jsxs)(mm, {
                    gap: "lg",
                    justify: "center",
                    children: [Object(je.jsxs)(Fo, {
                        style: {
                            gap: "24px"
                        },
                        children: [Object(je.jsx)(Io, {
                            style: {
                                margin: 0
                            },
                            children: Object(je.jsx)(f.b, {
                                id: "{0}",
                                values: {
                                    0: P && L ? "".concat(null === P || void 0 === P ? void 0 : P.symbol, "-").concat(null === L || void 0 === L ? void 0 : L.symbol, " Liquidity Mining") : "".concat(S.stakedToken.symbol, " Staking")
                                }
                            })
                        }), P && L ? Object(je.jsx)(Rf, {
                            currency0: P,
                            currency1: L,
                            size: 24
                        }) : Object(je.jsx)(rb, {
                            currency: S.stakedToken,
                            size: "24px"
                        })]
                    }), Object(je.jsxs)(km, {
                        style: {
                            gap: "24px"
                        },
                        children: [Object(je.jsx)(ym, {
                            children: Object(je.jsxs)(Lo, {
                                gap: "sm",
                                children: [Object(je.jsx)(Co, {
                                    style: {
                                        margin: 0
                                    },
                                    children: Object(je.jsx)(f.b, {
                                        id: "Total deposits"
                                    })
                                }), Object(je.jsxs)(Co, {
                                    fontSize: 24,
                                    fontWeight: 500,
                                    children: ["$", null !== (v = null === (O = pe) || void 0 === O ? void 0 : O.toFixed(2, {
                                        groupSeparator: ","
                                    })) && void 0 !== v ? v : "0.00"]
                                })]
                            })
                        }), Object(je.jsx)(ym, {
                            children: Object(je.jsxs)(Lo, {
                                gap: "sm",
                                children: [Object(je.jsx)(Co, {
                                    style: {
                                        margin: 0
                                    },
                                    children: Object(je.jsx)(f.b, {
                                        id: "Pool APY"
                                    })
                                }), Object(je.jsx)(Co, {
                                    fontSize: 24,
                                    fontWeight: 500,
                                    children: me && +(null === me || void 0 === me ? void 0 : me.denominator.toString()) ? Object(je.jsx)(f.b, {
                                        id: "{0}%",
                                        values: {
                                            0: me.toFixed(2)
                                        }
                                    }) : "-"
                                })]
                            })
                        })]
                    }), U && Object(je.jsxs)(wm, {
                        children: [Object(je.jsx)(qd, {
                            atmosphere: Td.URBAN
                        }), Object(je.jsx)(Fd, {}), Object(je.jsx)(Yd, {
                            children: Object(je.jsxs)(Lo, {
                                gap: "md",
                                children: [Object(je.jsx)(Fo, {
                                    children: Object(je.jsx)(ko, {
                                        fontWeight: 600,
                                        children: Object(je.jsx)(f.b, {
                                            id: "{0}",
                                            values: {
                                                0: S.stakedPairTokens ? "Step 1. Get ScrappyInu-V2 Liquidity tokens" : "Step 1. Get ".concat(S.stakedToken.symbol, " tokens")
                                            }
                                        })
                                    })
                                }), Object(je.jsx)(Fo, {
                                    style: {
                                        marginBottom: "1rem"
                                    },
                                    children: Object(je.jsx)(ko, {
                                        fontSize: 14,
                                        children: Object(je.jsx)(f.b, {
                                            id: "{0}",
                                            values: {
                                                0: S.stakedPairTokens ? "ScrappyInu-V2 LP tokens are required. Once you've added liquidity to the ".concat(null === P || void 0 === P ? void 0 : P.symbol, "-\n                      ").concat(null === L || void 0 === L ? void 0 : L.symbol, " pool you can stake your liquidity tokens on this page.") : "".concat(S.stakedToken.symbol, " tokens are required. Once you've bought some\n                      you can stake your liquidity tokens on this page.")
                                            }
                                        })
                                    })
                                }), Object(je.jsx)(qc, {
                                    padding: "8px",
                                    $borderRadius: "8px",
                                    width: "fit-content",
                                    as: p.b,
                                    to: S.stakedPairTokens ? "/add/".concat(P && jb(P), "/").concat(L && jb(L)) : "/swap/".concat(S.stakedToken.symbol, "/BNB"),
                                    children: Object(je.jsx)(f.b, {
                                        id: "{0}",
                                        values: {
                                            0: S.stakedPairTokens ? "Add ".concat(null === P || void 0 === P ? void 0 : P.symbol, "-").concat(null === L || void 0 === L ? void 0 : L.symbol, " liquidity") : "Swap ".concat(S.stakedToken.symbol, " tokens")
                                        }
                                    })
                                })]
                            })
                        }), Object(je.jsx)(Fd, {})]
                    }), S && Object(je.jsxs)(je.Fragment, {
                        children: [Object(je.jsx)(rm, {
                            isOpen: F,
                            onDismiss: function() {
                                return Y(!1)
                            },
                            stakingInfo: S,
                            userLiquidityUnstaked: R
                        }), Object(je.jsx)(sm, {
                            isOpen: H,
                            onDismiss: function() {
                                return Q(!1)
                            },
                            stakingInfo: S
                        }), Object(je.jsx)(dm, {
                            isOpen: Z,
                            onDismiss: function() {
                                return $(!1)
                            },
                            stakingInfo: S,
                            retrieve: re
                        })]
                    }), Object(je.jsxs)(xm, {
                        gap: "lg",
                        justify: "center",
                        dim: U,
                        children: [Object(je.jsxs)(vm, {
                            gap: "lg",
                            justify: "center",
                            children: [Object(je.jsx)(Om, {
                                disabled: ce,
                                bgColor: Ce,
                                showBackground: !U,
                                children: Object(je.jsxs)(Yd, {
                                    children: [Object(je.jsx)(qd, {
                                        desaturate: !0,
                                        atmosphere: S.stakedPairTokens ? Td.FLYING : Td.FOREST
                                    }), Object(je.jsx)(Fd, {}), Object(je.jsxs)(Lo, {
                                        gap: "md",
                                        children: [Object(je.jsx)(Fo, {
                                            children: Object(je.jsx)(ko, {
                                                fontWeight: 600,
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Your {0} deposits",
                                                    values: {
                                                        0: S.stakedPairTokens ? "liquidity" : "tokens"
                                                    }
                                                })
                                            })
                                        }), Object(je.jsxs)(Fo, {
                                            style: {
                                                alignItems: "baseline"
                                            },
                                            children: [Object(je.jsx)(ko, {
                                                fontSize: 36,
                                                fontWeight: 600,
                                                children: null !== (g = null === (y = S.stakedAmount) || void 0 === y ? void 0 : y.toSignificant(18)) && void 0 !== g ? g : "-"
                                            }), Object(je.jsx)(ko, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "{0}",
                                                    values: {
                                                        0: S.stakedPairTokens ? "".concat(null === P || void 0 === P ? void 0 : P.symbol, "-").concat(null === L || void 0 === L ? void 0 : L.symbol) : "".concat(S.stakedToken.symbol)
                                                    }
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }), Object(je.jsxs)(gm, {
                                dim: null === (w = S.stakedAmount) || void 0 === w ? void 0 : w.equalTo(X.a.BigInt(0)),
                                children: [Object(je.jsx)(Fd, {}), Object(je.jsxs)(Lo, {
                                    gap: "sm",
                                    children: [Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(wo, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Your unclaimed {0}",
                                                    values: {
                                                        0: S.rewardToken.symbol
                                                    }
                                                })
                                            })
                                        }), se && Object(je.jsx)(Hc, {
                                            padding: "8px",
                                            $borderRadius: "8px",
                                            width: "fit-content",
                                            onClick: function() {
                                                return ae(!1)
                                            },
                                            children: Object(je.jsx)(f.b, {
                                                id: "Claim"
                                            })
                                        })]
                                    }), Object(je.jsxs)(Fo, {
                                        style: {
                                            alignItems: "baseline"
                                        },
                                        children: [Object(je.jsx)(To, {
                                            fontSize: 36,
                                            fontWeight: 600,
                                            children: Object(je.jsx)(hm.a, {
                                                isCounting: !0,
                                                decimalPlaces: 6,
                                                start: parseFloat(Oe),
                                                end: parseFloat(ve),
                                                thousandsSeparator: ",",
                                                duration: 1
                                            }, ve)
                                        }), Object(je.jsxs)(wo, {
                                            fontSize: 16,
                                            fontWeight: 500,
                                            children: [Object(je.jsx)("span", {
                                                role: "img",
                                                "aria-label": "wizard-icon",
                                                style: {
                                                    marginRight: "8px "
                                                },
                                                children: "\u26a1"
                                            }), Object(je.jsx)(f.b, {
                                                id: "{0} {1} / week",
                                                values: {
                                                    0: null === (k = S.userRewardRate) || void 0 === k || null === (C = k.multiply(ee)) || void 0 === C ? void 0 : C.toFixed(0, {
                                                        groupSeparator: ","
                                                    }),
                                                    1: S.rewardToken.symbol
                                                }
                                            })]
                                        })]
                                    })]
                                }), Object(je.jsxs)(Lo, {
                                    gap: "sm",
                                    style: {
                                        marginTop: "1rem"
                                    },
                                    children: [Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)("div", {
                                            children: Object(je.jsx)(wo, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Your claimed {0}",
                                                    values: {
                                                        0: S.rewardToken.symbol
                                                    }
                                                })
                                            })
                                        }), ue && Object(je.jsx)(Hc, {
                                            padding: "8px",
                                            $borderRadius: "8px",
                                            width: "fit-content",
                                            onClick: function() {
                                                return ae(!0)
                                            },
                                            children: Object(je.jsx)(f.b, {
                                                id: "Retrieve"
                                            })
                                        })]
                                    }), Object(je.jsx)(Fo, {
                                        style: {
                                            alignItems: "baseline"
                                        },
                                        children: Object(je.jsx)(To, {
                                            fontSize: 36,
                                            fontWeight: 600,
                                            children: Object(je.jsx)(hm.a, {
                                                isCounting: !0,
                                                decimalPlaces: 6,
                                                start: parseFloat(ye),
                                                end: parseFloat(ge),
                                                thousandsSeparator: ",",
                                                duration: 1
                                            }, ge)
                                        })
                                    })]
                                })]
                            })]
                        }), Object(je.jsxs)(Oo, {
                            style: {
                                textAlign: "center"
                            },
                            fontSize: 14,
                            children: [Object(je.jsx)("span", {
                                role: "img",
                                "aria-label": "wizard-icon",
                                style: {
                                    marginRight: "8px"
                                },
                                children: "\u2b50\ufe0f"
                            }), Object(je.jsx)(f.b, {
                                id: "When you withdraw, the contract will automatically retrieve\xa0{0} on your behalf!<0/>",
                                values: {
                                    0: S.rewardToken.symbol
                                },
                                components: {
                                    0: Object(je.jsx)("br", {})
                                }
                            }), S.stakedToken.equals(S.rewardToken) && Object(je.jsxs)(je.Fragment, {
                                children: [Object(je.jsx)("span", {
                                    role: "img",
                                    "aria-label": "wizard-icon",
                                    style: {
                                        marginRight: "8px"
                                    },
                                    children: "\u2b50\ufe0f"
                                }), Object(je.jsx)(f.b, {
                                    id: "Claimed {0} are automatically deposited to the pool",
                                    values: {
                                        0: S.rewardToken.symbol
                                    }
                                })]
                            })]
                        }), !U && Object(je.jsxs)(km, {
                            style: {
                                margin: "0.5rem 0"
                            },
                            children: [S && Object(je.jsx)(qc, {
                                padding: "8px",
                                $borderRadius: "8px",
                                width: (null === (T = S.stakedAmount) || void 0 === T ? void 0 : T.greaterThan(X.a.BigInt(0))) ? "160px" : "200px",
                                onClick: ke,
                                children: (null === (I = S.stakedAmount) || void 0 === I ? void 0 : I.greaterThan(X.a.BigInt(0))) ? Object(je.jsx)(f.b, {
                                    id: "Deposit"
                                }) : Object(je.jsx)(f.b, {
                                    id: "Deposit{0}",
                                    values: {
                                        0: S.stakedPairTokens ? " ".concat(null === P || void 0 === P ? void 0 : P.symbol, "-").concat(null === L || void 0 === L ? void 0 : L.symbol) : " ".concat(S.stakedToken.symbol)
                                    }
                                })
                            }), (null === (A = S.stakedAmount) || void 0 === A ? void 0 : A.greaterThan(X.a.BigInt(0))) && Object(je.jsx)(je.Fragment, {
                                children: Object(je.jsx)(qc, {
                                    padding: "8px",
                                    $borderRadius: "8px",
                                    width: "160px",
                                    onClick: function() {
                                        return Q(!0)
                                    },
                                    children: Object(je.jsx)(f.b, {
                                        id: "Withdraw"
                                    })
                                })
                            })]
                        }), R ? R.equalTo("0") ? null : Object(je.jsx)(Oo, {
                            children: Object(je.jsx)(f.b, {
                                id: "{0}{1}",
                                values: {
                                    0: R.toSignificant(6),
                                    1: S.stakedPairTokens ? " ScrappyInu-V2 LP tokens available" : " ".concat(S.stakedToken.symbol, " tokens available")
                                }
                            })
                        }) : null]
                    })]
                })
            }
            var Im, Am = Object(Ni.default)(Lo).withConfig({
                    componentId: "sc-1a8iabs-0"
                })(["max-width:640px;width:100%;"]),
                Em = Object(Ni.default)(Nd).withConfig({
                    componentId: "sc-1a8iabs-1"
                })(["background:radial-gradient(76.02% 75.41% at 1.84% 0%,#e0013b 0%,#160ce8 200%);overflow:hidden;"]),
                Sm = Object(Ni.default)(Fo).withConfig({
                    componentId: "sc-1a8iabs-2"
                })(["", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(bm || (bm = Object(Si.a)(["\n    flex-wrap: wrap;\n    gap: 12px;\n    width: 100%;\n    flex-direction: column-reverse;\n  "])))
                })),
                Nm = Object(Ni.default)(_o).withConfig({
                    componentId: "sc-1a8iabs-3"
                })(["gap:8px;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(pm || (pm = Object(Si.a)(["\n    width: 100%;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n  "])))
                })),
                Rm = Object(Ni.default)(qc).withConfig({
                    componentId: "sc-1a8iabs-4"
                })(["width:fit-content;border-radius:12px;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(fm || (fm = Object(Si.a)(["\n    width: 48%;\n  "])))
                })),
                Um = Object(Ni.default)(Vc).withConfig({
                    componentId: "sc-1a8iabs-5"
                })(["width:fit-content;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(jm || (jm = Object(Si.a)(["\n    width: 48%;\n  "])))
                })),
                Bm = Ni.default.div.withConfig({
                    componentId: "sc-1a8iabs-6"
                })(["border:1px solid ", ";padding:16px 12px;border-radius:12px;display:flex;flex-direction:column;justify-content:center;align-items:center;"], (function(e) {
                    return e.theme.text4
                }));

            function Mm() {
                var e, t = Object(a.useContext)(Ni.ThemeContext),
                    n = fe(),
                    i = n.account,
                    r = n.chainId,
                    o = function() {
                        var e = fe().chainId,
                            t = Wn(),
                            n = Object(a.useMemo)((function() {
                                var t;
                                return e && null !== (t = bt[e]) && void 0 !== t ? t : []
                            }), [e]),
                            i = Object(a.useMemo)((function() {
                                return e ? Ee()(Object.keys(t), (function(n) {
                                    var i, r = t[n];
                                    return (null !== (i = lt[e]) && void 0 !== i ? i : []).map((function(e) {
                                        return e.address === r.address ? null : [e, r]
                                    })).filter((function(e) {
                                        return null !== e
                                    }))
                                })) : []
                            }), [t, e]),
                            r = Ne((function(e) {
                                return e.user.pairs
                            })),
                            o = Object(a.useMemo)((function() {
                                if (!e || !r) return [];
                                var t = r[e];
                                return t ? Object.keys(t).map((function(e) {
                                    return [si(t[e].token0), si(t[e].token1)]
                                })) : []
                            }), [r, e]),
                            c = Object(a.useMemo)((function() {
                                return o.concat(i).concat(n)
                            }), [i, n, o]);
                        return Object(a.useMemo)((function() {
                            var e = c.reduce((function(e, t) {
                                var n = Object(j.a)(t, 2),
                                    i = n[0],
                                    r = n[1],
                                    o = i.sortsBefore(r),
                                    a = o ? "".concat(i.address, ":").concat(r.address) : "".concat(r.address, ":").concat(i.address);
                                return e[a] || (e[a] = o ? [i, r] : [r, i]), e
                            }), {});
                            return Object.keys(e).map((function(t) {
                                return e[t]
                            }))
                        }), [c])
                    }(),
                    c = Object(a.useMemo)((function() {
                        return o.map((function(e) {
                            return {
                                liquidityToken: vi(e),
                                tokens: e
                            }
                        }))
                    }), [o]),
                    s = Ba(null !== i && void 0 !== i ? i : void 0, Object(a.useMemo)((function() {
                        return c.map((function(e) {
                            return e.liquidityToken
                        }))
                    }), [c])),
                    u = Object(j.a)(s, 2),
                    d = u[0],
                    l = u[1],
                    b = Object(a.useMemo)((function() {
                        return c.filter((function(e) {
                            var t, n = e.liquidityToken;
                            return null === (t = d[n.address]) || void 0 === t ? void 0 : t.greaterThan("0")
                        }))
                    }), [c, d]),
                    h = ja(b.map((function(e) {
                        return e.tokens
                    }))),
                    m = l || (null === h || void 0 === h ? void 0 : h.length) < b.length || (null === h || void 0 === h ? void 0 : h.some((function(e) {
                        return !e
                    }))),
                    x = h.map((function(e) {
                        return Object(j.a)(e, 2)[1]
                    })).filter((function(e) {
                        return Boolean(e)
                    })),
                    v = Na(),
                    O = null === v || void 0 === v ? void 0 : v.filter((function(e) {
                        return X.a.greaterThan(e.stakedAmount.quotient, ne)
                    })),
                    g = ja(null !== (e = null === O || void 0 === O ? void 0 : O.map((function(e) {
                        var t;
                        return null !== (t = null === e || void 0 === e ? void 0 : e.stakedPairTokens) && void 0 !== t ? t : [void 0, void 0]
                    }))) && void 0 !== e ? e : []),
                    y = x.filter((function(e) {
                        return 0 === (null === g || void 0 === g ? void 0 : g.map((function(e) {
                            return e[1]
                        })).filter((function(t) {
                            return (null === t || void 0 === t ? void 0 : t.liquidityToken.address) === e.liquidityToken.address
                        })).length)
                    }));
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(Am, {
                        children: [Object(je.jsx)(Vj, {
                            active: "pool"
                        }), Object(je.jsxs)(Em, {
                            children: [Object(je.jsx)(qd, {
                                atmosphere: Td.URBAN
                            }), Object(je.jsx)(Fd, {}), Object(je.jsx)(Yd, {
                                children: Object(je.jsxs)(Lo, {
                                    gap: "md",
                                    children: [Object(je.jsx)(Fo, {
                                        children: Object(je.jsx)(ko, {
                                            fontWeight: 600,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Liquidity provider rewards"
                                            })
                                        })
                                    }), Object(je.jsx)(Fo, {
                                        children: Object(je.jsx)(ko, {
                                            fontSize: 14,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Liquidity providers earn a 0.3% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."
                                            })
                                        })
                                    }), Object(je.jsx)(ro, {
                                        style: {
                                            color: "white",
                                            textDecoration: "underline"
                                        },
                                        target: "_blank",
                                        href: "https://docs.pancakeswap.finance/products/pancakeswap-exchange/liquidity-guide",
                                        children: Object(je.jsx)(ko, {
                                            fontSize: 14,
                                            children: Object(je.jsx)(f.b, {
                                                id: "Read more about providing liquidity"
                                            })
                                        })
                                    })]
                                })
                            }), Object(je.jsx)(Fd, {})]
                        }), Object(je.jsx)(Lo, {
                            gap: "lg",
                            justify: "center",
                            children: Object(je.jsxs)(Lo, {
                                gap: "md",
                                style: {
                                    width: "100%"
                                },
                                children: [Object(je.jsxs)(Sm, {
                                    style: {
                                        marginTop: "1rem"
                                    },
                                    padding: "0",
                                    children: [Object(je.jsx)(fo, {
                                        children: Object(je.jsx)(Io, {
                                            style: {
                                                marginTop: "0.5rem",
                                                justifySelf: "flex-start"
                                            },
                                            children: Object(je.jsx)(f.b, {
                                                id: "Your liquidity"
                                            })
                                        })
                                    }), Object(je.jsxs)(Nm, {
                                        children: [Object(je.jsx)(Um, {
                                            as: p.b,
                                            padding: "6px 8px",
                                            to: "/add/BNB",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Create a pair"
                                            })
                                        }), Object(je.jsx)(Rm, {
                                            id: "find-pool-button",
                                            as: p.b,
                                            to: "/pool/find",
                                            padding: "6px 8px",
                                            children: Object(je.jsx)(Ur.c, {
                                                fontWeight: 500,
                                                fontSize: 16,
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Import Pool"
                                                })
                                            })
                                        }), Object(je.jsx)(Rm, {
                                            id: "join-pool-button",
                                            as: p.b,
                                            to: "/add/BNB",
                                            padding: "6px 8px",
                                            children: Object(je.jsx)(Ur.c, {
                                                fontWeight: 500,
                                                fontSize: 16,
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Add Liquidity"
                                                })
                                            })
                                        })]
                                    })]
                                }), i ? m ? Object(je.jsx)(Bm, {
                                    children: Object(je.jsx)(Co, {
                                        color: t.text3,
                                        textAlign: "center",
                                        children: Object(je.jsx)(Tp, {
                                            children: Object(je.jsx)(f.b, {
                                                id: "Loading"
                                            })
                                        })
                                    })
                                }) : (null === x || void 0 === x ? void 0 : x.length) > 0 || (null === g || void 0 === g ? void 0 : g.length) > 0 ? Object(je.jsxs)(je.Fragment, {
                                    children: [y.map((function(e) {
                                        return Object(je.jsx)($j, {
                                            pair: e
                                        }, e.liquidityToken.address)
                                    })), g.map((function(e, t) {
                                        return e[1] && Object(je.jsx)($j, {
                                            pair: e[1],
                                            stakedBalance: null === O || void 0 === O ? void 0 : O[t].stakedAmount,
                                            stakeRewardToken: null === O || void 0 === O ? void 0 : O[t].rewardToken
                                        }, r ? We[r] : void 0)
                                    }))]
                                }) : Object(je.jsx)(Bm, {
                                    children: Object(je.jsx)(Co, {
                                        color: t.text3,
                                        textAlign: "center",
                                        children: Object(je.jsx)(f.b, {
                                            id: "No liquidity found."
                                        })
                                    })
                                }) : Object(je.jsx)(ku, {
                                    padding: "40px",
                                    children: Object(je.jsx)(Co, {
                                        color: t.text3,
                                        textAlign: "center",
                                        children: Object(je.jsx)(f.b, {
                                            id: "Connect to a wallet to view your liquidity."
                                        })
                                    })
                                })]
                            })
                        })]
                    }), Object(je.jsx)(Eh, {})]
                })
            }

            function Pm() {
                var e, t, n = new URLSearchParams(Object(gi.g)().search),
                    i = fe(),
                    r = i.account,
                    o = i.chainId,
                    c = Object(a.useState)(!1),
                    s = Object(j.a)(c, 2),
                    u = s[0],
                    d = s[1],
                    l = Object(a.useState)(Im.TOKEN1),
                    b = Object(j.a)(l, 2),
                    p = b[0],
                    h = b[1],
                    m = Object(a.useState)((function() {
                        return o ? ot.onChain(o) : null
                    })),
                    x = Object(j.a)(m, 2),
                    v = x[0],
                    O = x[1],
                    g = Object(a.useState)(null),
                    y = Object(j.a)(g, 2),
                    w = y[0],
                    k = y[1],
                    C = ha(null !== v && void 0 !== v ? v : void 0, null !== w && void 0 !== w ? w : void 0),
                    T = Object(j.a)(C, 2),
                    I = T[0],
                    A = T[1],
                    E = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t) {
                            e(oi({
                                serializedPair: xi(t)
                            }))
                        }), [e])
                    }();
                Object(a.useEffect)((function() {
                    A && E(A)
                }), [A, E]), console.log(null === A || void 0 === A ? void 0 : A.liquidityToken);
                var S = I === pa.NOT_EXISTS || Boolean(I === pa.EXISTS && A && X.a.equal(A.reserve0.quotient, X.a.BigInt(0)) && X.a.equal(A.reserve1.quotient, X.a.BigInt(0))),
                    N = Pa(null !== r && void 0 !== r ? r : void 0, null === A || void 0 === A ? void 0 : A.liquidityToken),
                    R = Boolean(N && X.a.greaterThan(N.quotient, X.a.BigInt(0))),
                    U = Object(a.useCallback)((function(e) {
                        p === Im.TOKEN0 ? O(e) : k(e)
                    }), [p]),
                    B = Object(a.useCallback)((function() {
                        d(!1)
                    }), [d]),
                    M = Object(je.jsx)(Cu, {
                        padding: "45px 10px",
                        children: Object(je.jsx)(Ur.c, {
                            textAlign: "center",
                            children: r ? Object(je.jsx)(f.b, {
                                id: "Select a token to find your v2 liquidity."
                            }) : Object(je.jsx)(f.b, {
                                id: "Connect to a wallet to find pools"
                            })
                        })
                    });
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(mh, {
                        children: [Object(je.jsx)(_j, {
                            origin: null !== (e = n.get("origin")) && void 0 !== e ? e : "/pool"
                        }), Object(je.jsxs)(Lo, {
                            style: {
                                padding: "1rem"
                            },
                            gap: "md",
                            children: [Object(je.jsx)(Su, {
                                children: Object(je.jsx)(Lo, {
                                    gap: "10px",
                                    children: Object(je.jsx)(go, {
                                        fontWeight: 400,
                                        color: "primaryText1",
                                        children: Object(je.jsx)(f.b, {
                                            id: "<0>Tip:</0> Use this tool to find v2 pools that don't automatically appear in the interface.",
                                            components: {
                                                0: Object(je.jsx)("b", {})
                                            }
                                        })
                                    })
                                })
                            }), Object(je.jsx)(Xc, {
                                onClick: function() {
                                    d(!0), h(Im.TOKEN0)
                                },
                                children: v ? Object(je.jsxs)(Ho, {
                                    children: [Object(je.jsx)(rb, {
                                        currency: v
                                    }), Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        marginLeft: "12px",
                                        children: v.symbol
                                    })]
                                }) : Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 20,
                                    marginLeft: "12px",
                                    children: Object(je.jsx)(f.b, {
                                        id: "Select a token"
                                    })
                                })
                            }), Object(je.jsx)(Po, {
                                children: Object(je.jsx)(Ml.a, {
                                    size: "16",
                                    color: "#888D9B"
                                })
                            }), Object(je.jsx)(Xc, {
                                onClick: function() {
                                    d(!0), h(Im.TOKEN1)
                                },
                                children: w ? Object(je.jsxs)(Ho, {
                                    children: [Object(je.jsx)(rb, {
                                        currency: w
                                    }), Object(je.jsx)(Ur.c, {
                                        fontWeight: 500,
                                        fontSize: 20,
                                        marginLeft: "12px",
                                        children: w.symbol
                                    })]
                                }) : Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 20,
                                    marginLeft: "12px",
                                    children: Object(je.jsx)(f.b, {
                                        id: "Select a token"
                                    })
                                })
                            }), R && Object(je.jsxs)(Po, {
                                style: {
                                    justifyItems: "center",
                                    backgroundColor: "",
                                    padding: "12px 0px",
                                    borderRadius: "12px"
                                },
                                children: [Object(je.jsx)(Ur.c, {
                                    textAlign: "center",
                                    fontWeight: 500,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Pool Found!"
                                    })
                                }), Object(je.jsx)(Kr, {
                                    to: "/pool",
                                    children: Object(je.jsx)(Ur.c, {
                                        textAlign: "center",
                                        children: Object(je.jsx)(f.b, {
                                            id: "Manage this pool."
                                        })
                                    })
                                })]
                            }), v && w ? I === pa.EXISTS ? R && A ? Object(je.jsx)(Zj, {
                                pair: A,
                                border: "1px solid #CED0D9"
                            }) : Object(je.jsx)(Cu, {
                                padding: "45px 10px",
                                children: Object(je.jsxs)(Lo, {
                                    gap: "sm",
                                    justify: "center",
                                    children: [Object(je.jsx)(Ur.c, {
                                        textAlign: "center",
                                        children: Object(je.jsx)(f.b, {
                                            id: "You don\u2019t have liquidity in this pool yet."
                                        })
                                    }), Object(je.jsx)(Kr, {
                                        to: "/add/".concat(jb(v), "/").concat(jb(w)),
                                        children: Object(je.jsx)(Ur.c, {
                                            textAlign: "center",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Add liquidity."
                                            })
                                        })
                                    })]
                                })
                            }) : S ? Object(je.jsx)(Cu, {
                                padding: "45px 10px",
                                children: Object(je.jsxs)(Lo, {
                                    gap: "sm",
                                    justify: "center",
                                    children: [Object(je.jsx)(Ur.c, {
                                        textAlign: "center",
                                        children: Object(je.jsx)(f.b, {
                                            id: "No pool found."
                                        })
                                    }), Object(je.jsx)(Kr, {
                                        to: "/add/".concat(jb(v), "/").concat(jb(w)),
                                        children: Object(je.jsx)(f.b, {
                                            id: "Create pool."
                                        })
                                    })]
                                })
                            }) : I === pa.INVALID ? Object(je.jsx)(Cu, {
                                padding: "45px 10px",
                                children: Object(je.jsx)(Lo, {
                                    gap: "sm",
                                    justify: "center",
                                    children: Object(je.jsx)(Ur.c, {
                                        textAlign: "center",
                                        fontWeight: 500,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Invalid pair."
                                        })
                                    })
                                })
                            }) : I === pa.LOADING ? Object(je.jsx)(Cu, {
                                padding: "45px 10px",
                                children: Object(je.jsx)(Lo, {
                                    gap: "sm",
                                    justify: "center",
                                    children: Object(je.jsxs)(Ur.c, {
                                        textAlign: "center",
                                        children: [Object(je.jsx)(f.b, {
                                            id: "Loading"
                                        }), Object(je.jsx)(yh, {})]
                                    })
                                })
                            }) : null : M]
                        }), Object(je.jsx)(Af, {
                            isOpen: u,
                            onCurrencySelect: U,
                            onDismiss: B,
                            showCommonBases: !0,
                            selectedCurrency: null !== (t = p === Im.TOKEN0 ? w : v) && void 0 !== t ? t : void 0
                        })]
                    }), Object(je.jsx)(Eh, {})]
                })
            }! function(e) {
                e[e.TOKEN0 = 0] = "TOKEN0", e[e.TOKEN1 = 1] = "TOKEN1"
            }(Im || (Im = {}));
            var Lm, zm, Dm, Wm = n(672),
                qm = ["value", "onChange", "min", "step", "max", "size"],
                Fm = Ni.default.input.withConfig({
                    componentId: "sc-qf62wq-0"
                })(["-webkit-appearance:none;width:100%;background:transparent;cursor:pointer;&:focus{outline:none;}&::-moz-focus-outer{border:0;}&::-webkit-slider-thumb{-webkit-appearance:none;height:", "px;width:", "px;background-color:", ";border-radius:100%;border:none;transform:translateY(-50%);color:", ";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-moz-range-thumb{height:", "px;width:", "px;background-color:#565a69;border-radius:100%;border:none;color:", ";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-ms-thumb{height:", "px;width:", "px;background-color:#565a69;border-radius:100%;color:", ";&:hover,&:focus{box-shadow:0px 0px 1px rgba(0,0,0,0.1),0px 4px 8px rgba(0,0,0,0.08),0px 16px 24px rgba(0,0,0,0.06),0px 24px 32px rgba(0,0,0,0.04);}}&::-webkit-slider-runnable-track{background:linear-gradient(90deg,", ",", ");height:2px;}&::-moz-range-track{background:linear-gradient(90deg,", ",", ");height:2px;}&::-ms-track{width:100%;border-color:transparent;color:transparent;background:", ";height:2px;}&::-ms-fill-lower{background:", ";}&::-ms-fill-upper{background:", ";}"], (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.theme.blue1
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.theme.blue1
                }), (function(e) {
                    return e.theme.blue2
                }), (function(e) {
                    return e.theme.bg5
                }), (function(e) {
                    return e.theme.bg3
                }), (function(e) {
                    return e.theme.bg5
                }), (function(e) {
                    return e.theme.bg5
                }), (function(e) {
                    return e.theme.bg3
                }));

            function Ym(e) {
                var t = e.value,
                    n = e.onChange,
                    i = e.min,
                    r = void 0 === i ? 0 : i,
                    o = e.step,
                    c = void 0 === o ? 1 : o,
                    s = e.max,
                    u = void 0 === s ? 100 : s,
                    d = e.size,
                    l = void 0 === d ? 28 : d,
                    b = Object(Rr.a)(e, qm),
                    p = Object(a.useCallback)((function(e) {
                        n(parseInt(e.target.value))
                    }), [n]);
                return Object(je.jsx)(Fm, Object(He.a)(Object(He.a)({
                    size: l
                }, b), {}, {
                    type: "range",
                    value: t,
                    style: {
                        padding: "15px 0"
                    },
                    onChange: p,
                    "aria-labelledby": "input slider",
                    step: c,
                    min: r,
                    max: u
                }))
            }

            function Vm() {
                var e, t, n = fe().account,
                    i = hn(Sn(Fe, Cn, !1), "isArgentWallet", Object(a.useMemo)((function() {
                        return [null !== n && void 0 !== n ? n : void 0]
                    }), [n]), un);
                return null !== (e = null === i || void 0 === i || null === (t = i.result) || void 0 === t ? void 0 : t[0]) && void 0 !== e && e
            }! function(e) {
                e[e.AMOUNT = 1] = "AMOUNT", e[e.ALLOWED = 2] = "ALLOWED"
            }(Dm || (Dm = {}));
            var _m, Hm = (zm = {}, Object(m.a)(zm, r.MAINNET, (Lm = {}, Object(m.a)(Lm, Ze[r.MAINNET].address, {
                type: Dm.AMOUNT,
                name: "USD Coin",
                version: "2"
            }), Object(m.a)(Lm, Xe.address, {
                type: Dm.ALLOWED,
                name: "Dai Stablecoin",
                version: "1"
            }), Object(m.a)(Lm, it[r.MAINNET].address, {
                type: Dm.AMOUNT,
                name: "Uniswap"
            }), Lm)), Object(m.a)(zm, r.TESTNET, Object(m.a)({}, it[r.TESTNET].address, {
                type: Dm.AMOUNT,
                name: "Uniswap"
            })), zm);
            ! function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.LOADING = 1] = "LOADING", e[e.NOT_SIGNED = 2] = "NOT_SIGNED", e[e.SIGNED = 3] = "SIGNED"
            }(_m || (_m = {}));
            var Qm = [{
                    name: "name",
                    type: "string"
                }, {
                    name: "version",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }],
                Gm = [{
                    name: "name",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }],
                Jm = [{
                    name: "owner",
                    type: "address"
                }, {
                    name: "spender",
                    type: "address"
                }, {
                    name: "value",
                    type: "uint256"
                }, {
                    name: "nonce",
                    type: "uint256"
                }, {
                    name: "deadline",
                    type: "uint256"
                }],
                Km = [{
                    name: "holder",
                    type: "address"
                }, {
                    name: "spender",
                    type: "address"
                }, {
                    name: "nonce",
                    type: "uint256"
                }, {
                    name: "expiry",
                    type: "uint256"
                }, {
                    name: "allowed",
                    type: "bool"
                }];

            function Xm(e, t, n) {
                var i, r, o = fe(),
                    c = o.account,
                    s = o.chainId,
                    u = o.library,
                    d = oh(),
                    l = (null === e || void 0 === e || null === (i = e.currency) || void 0 === i ? void 0 : i.isToken) ? e.currency.address : void 0,
                    b = function(e) {
                        return Sn(e, En, !1)
                    }(l),
                    p = Vm(),
                    f = Object(a.useMemo)((function() {
                        return [null !== c && void 0 !== c ? c : void 0]
                    }), [c]),
                    h = hn(b, "nonces", f),
                    m = null !== n && void 0 !== n ? n : s && l ? null === (r = Hm[s]) || void 0 === r ? void 0 : r[l] : void 0,
                    x = Object(a.useState)(null),
                    v = Object(j.a)(x, 2),
                    O = v[0],
                    g = v[1];
                return Object(a.useMemo)((function() {
                    var n, i;
                    if (p || !e || !b || !c || !s || !d || !u || !h.valid || !l || !t || !m) return {
                        state: _m.NOT_APPLICABLE,
                        signatureData: null,
                        gatherPermitSignature: null
                    };
                    var r = null === (n = h.result) || void 0 === n || null === (i = n[0]) || void 0 === i ? void 0 : i.toNumber();
                    if (h.loading || "number" !== typeof r) return {
                        state: _m.LOADING,
                        signatureData: null,
                        gatherPermitSignature: null
                    };
                    var o = O && O.owner === c && O.deadline >= d.toNumber() && O.tokenAddress === l && O.nonce === r && O.spender === t && ("allowed" in O || X.a.equal(X.a.BigInt(O.amount), e.quotient));
                    return {
                        state: o ? _m.SIGNED : _m.NOT_SIGNED,
                        signatureData: o ? O : null,
                        gatherPermitSignature: function() {
                            var n = Object(R.a)(S.a.mark((function n() {
                                var i, o, a, b, p, f;
                                return S.a.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return i = m.type === Dm.ALLOWED, o = d.toNumber() + 1200, a = e.quotient.toString(), b = i ? {
                                                holder: c,
                                                spender: t,
                                                allowed: i,
                                                nonce: r,
                                                expiry: o
                                            } : {
                                                owner: c,
                                                spender: t,
                                                value: a,
                                                nonce: r,
                                                deadline: o
                                            }, p = m.version ? {
                                                name: m.name,
                                                version: m.version,
                                                verifyingContract: l,
                                                chainId: s
                                            } : {
                                                name: m.name,
                                                verifyingContract: l,
                                                chainId: s
                                            }, f = JSON.stringify({
                                                types: {
                                                    EIP712Domain: m.version ? Qm : Gm,
                                                    Permit: i ? Km : Jm
                                                },
                                                domain: p,
                                                primaryType: "Permit",
                                                message: b
                                            }), n.abrupt("return", u.send("eth_signTypedData_v4", [c, f]).then(ft.splitSignature).then((function(e) {
                                                g(Object(He.a)(Object(He.a)({
                                                    v: e.v,
                                                    r: e.r,
                                                    s: e.s,
                                                    deadline: o
                                                }, i ? {
                                                    allowed: i
                                                } : {
                                                    amount: a
                                                }), {}, {
                                                    nonce: r,
                                                    chainId: s,
                                                    owner: c,
                                                    spender: t,
                                                    tokenAddress: l,
                                                    permitType: m.type
                                                }))
                                            })));
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })));
                            return function() {
                                return n.apply(this, arguments)
                            }
                        }()
                    }
                }), [e, b, c, s, p, d, u, h.loading, h.valid, h.result, l, t, m, O])
            }
            var Zm = {
                version: "1",
                name: "Pancake LPs",
                type: Dm.AMOUNT
            };

            function $m() {
                return Ne((function(e) {
                    return e.burn
                }))
            }
            var ex = new J.Percent(5, 100);

            function tx(e) {
                var t, n, i, r, o, c, s, u, d, b, p, h, x, v, O, g, y = e.history,
                    w = e.match.params,
                    k = w.currencyIdA,
                    C = w.currencyIdB,
                    T = null !== (t = Qn(k)) && void 0 !== t ? t : void 0,
                    I = null !== (n = Qn(C)) && void 0 !== n ? n : void 0,
                    A = fe(),
                    E = A.account,
                    N = A.chainId,
                    U = A.library,
                    B = Object(a.useMemo)((function() {
                        return [null === T || void 0 === T ? void 0 : T.wrapped, null === I || void 0 === I ? void 0 : I.wrapped]
                    }), [T, I]),
                    M = Object(j.a)(B, 2),
                    P = M[0],
                    L = M[1],
                    z = Object(a.useContext)(Ni.ThemeContext),
                    D = Xt(),
                    W = $m(),
                    q = W.independentField,
                    F = W.typedValue,
                    Y = function(e, t) {
                        var n, i, r, o, a, c = fe().account,
                            s = $m(),
                            u = s.independentField,
                            d = s.typedValue,
                            l = ha(e, t),
                            b = Object(j.a)(l, 2)[1],
                            p = Ma(null !== c && void 0 !== c ? c : void 0, [null === b || void 0 === b ? void 0 : b.liquidityToken]),
                            f = null === p || void 0 === p ? void 0 : p[null !== (n = null === b || void 0 === b || null === (i = b.liquidityToken) || void 0 === i ? void 0 : i.address) && void 0 !== n ? n : ""],
                            h = null === e || void 0 === e ? void 0 : e.wrapped,
                            x = null === t || void 0 === t ? void 0 : t.wrapped,
                            v = (r = {}, Object(m.a)(r, ir.CURRENCY_A, h), Object(m.a)(r, ir.CURRENCY_B, x), Object(m.a)(r, ir.LIQUIDITY, null === b || void 0 === b ? void 0 : b.liquidityToken), r),
                            O = dd(null === b || void 0 === b ? void 0 : b.liquidityToken),
                            g = b && O && f && h && X.a.greaterThanOrEqual(O.quotient, f.quotient) ? J.CurrencyAmount.fromRawAmount(h, b.getLiquidityValue(h, O, f, !1).quotient) : void 0,
                            y = b && O && f && x && X.a.greaterThanOrEqual(O.quotient, f.quotient) ? J.CurrencyAmount.fromRawAmount(x, b.getLiquidityValue(x, O, f, !1).quotient) : void 0,
                            w = (o = {}, Object(m.a)(o, ir.CURRENCY_A, g), Object(m.a)(o, ir.CURRENCY_B, y), o),
                            k = new J.Percent("0", "100");
                        if (u === ir.LIQUIDITY_PERCENT) k = new J.Percent(d, "100");
                        else if (u === ir.LIQUIDITY) {
                            if (null === b || void 0 === b ? void 0 : b.liquidityToken) {
                                var C = Oa(d, b.liquidityToken);
                                C && f && !C.greaterThan(f) && (k = new J.Percent(C.quotient, f.quotient))
                            }
                        } else if (v[u]) {
                            var T = Oa(d, v[u]),
                                I = w[u];
                            T && I && !T.greaterThan(I) && (k = new J.Percent(T.quotient, I.quotient))
                        }
                        var A, E, S = (a = {}, Object(m.a)(a, ir.LIQUIDITY_PERCENT, k), Object(m.a)(a, ir.LIQUIDITY, f && k && k.greaterThan("0") ? J.CurrencyAmount.fromRawAmount(f.currency, k.multiply(f.quotient).quotient) : void 0), Object(m.a)(a, ir.CURRENCY_A, h && k && k.greaterThan("0") && g ? J.CurrencyAmount.fromRawAmount(h, k.multiply(g.quotient).quotient) : void 0), Object(m.a)(a, ir.CURRENCY_B, x && k && k.greaterThan("0") && y ? J.CurrencyAmount.fromRawAmount(x, k.multiply(y.quotient).quotient) : void 0), a);
                        return c || (A = we.a._("Connect Wallet")), S[ir.LIQUIDITY] && S[ir.CURRENCY_A] && S[ir.CURRENCY_B] || (A = null !== (E = A) && void 0 !== E ? E : we.a._("Enter an amount")), {
                            pair: b,
                            parsedAmounts: S,
                            error: A
                        }
                    }(null !== T && void 0 !== T ? T : void 0, null !== I && void 0 !== I ? I : void 0),
                    V = Y.pair,
                    _ = Y.parsedAmounts,
                    H = Y.error,
                    Q = function() {
                        var e = Se();
                        return {
                            onUserInput: Object(a.useCallback)((function(t, n) {
                                e(xr({
                                    field: t,
                                    typedValue: n
                                }))
                            }), [e])
                        }
                    }().onUserInput,
                    G = !H,
                    K = Object(a.useState)(!1),
                    Z = Object(j.a)(K, 2),
                    $ = Z[0],
                    ee = Z[1],
                    te = Object(a.useState)(!1),
                    ne = Object(j.a)(te, 2),
                    ie = ne[0],
                    re = ne[1],
                    oe = Object(a.useState)(!1),
                    ae = Object(j.a)(oe, 2),
                    ce = ae[0],
                    se = ae[1],
                    ue = Object(a.useState)(""),
                    de = Object(j.a)(ue, 2),
                    le = de[0],
                    be = de[1],
                    pe = oh(),
                    he = hi(ex),
                    me = (d = {}, Object(m.a)(d, ir.LIQUIDITY_PERCENT, _[ir.LIQUIDITY_PERCENT].equalTo("0") ? "0" : _[ir.LIQUIDITY_PERCENT].lessThan(new J.Percent("1", "100")) ? "<1" : _[ir.LIQUIDITY_PERCENT].toFixed(0)), Object(m.a)(d, ir.LIQUIDITY, q === ir.LIQUIDITY ? F : null !== (i = null === (r = _[ir.LIQUIDITY]) || void 0 === r ? void 0 : r.toSignificant(6)) && void 0 !== i ? i : ""), Object(m.a)(d, ir.CURRENCY_A, q === ir.CURRENCY_A ? F : null !== (o = null === (c = _[ir.CURRENCY_A]) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== o ? o : ""), Object(m.a)(d, ir.CURRENCY_B, q === ir.CURRENCY_B ? F : null !== (s = null === (u = _[ir.CURRENCY_B]) || void 0 === u ? void 0 : u.toSignificant(6)) && void 0 !== s ? s : ""), d),
                    xe = null === (b = _[ir.LIQUIDITY_PERCENT]) || void 0 === b ? void 0 : b.equalTo(new J.Percent("1")),
                    ve = Sn(null === V || void 0 === V || null === (p = V.liquidityToken) || void 0 === p ? void 0 : p.address, gn.a, v),
                    Oe = Bn(),
                    ge = (O = _[ir.LIQUIDITY], g = null === Oe || void 0 === Oe ? void 0 : Oe.address, Xm(O, g, Zm)),
                    ye = ge.gatherPermitSignature,
                    ke = ge.signatureData,
                    Ce = ih(_[ir.LIQUIDITY], null === Oe || void 0 === Oe ? void 0 : Oe.address),
                    Te = Object(j.a)(Ce, 2),
                    Ie = Te[0],
                    Ae = Te[1];

                function Ee() {
                    return (Ee = Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (ve && V && U && pe) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (_[ir.LIQUIDITY]) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 5:
                                    if (!ye) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.prev = 6, e.next = 9, ye();
                                case 9:
                                    e.next = 16;
                                    break;
                                case 11:
                                    if (e.prev = 11, e.t0 = e.catch(6), 4001 === (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.next = 16, Ae();
                                case 16:
                                    e.next = 20;
                                    break;
                                case 18:
                                    return e.next = 20, Ae();
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 11]
                        ])
                    })))).apply(this, arguments)
                }
                var Ne = Object(a.useCallback)((function(e, t) {
                        return Q(e, t)
                    }), [Q]),
                    Re = Object(a.useCallback)((function(e) {
                        return Ne(ir.LIQUIDITY, e)
                    }), [Ne]),
                    Ue = Object(a.useCallback)((function(e) {
                        return Ne(ir.CURRENCY_A, e)
                    }), [Ne]),
                    Be = Object(a.useCallback)((function(e) {
                        return Ne(ir.CURRENCY_B, e)
                    }), [Ne]),
                    Me = ta();

                function Pe() {
                    return Le.apply(this, arguments)
                }

                function Le() {
                    return (Le = Object(R.a)(S.a.mark((function e() {
                        var t, n, i, r, o, a, c, s, u, d, b, p, f;
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (N && U && E && pe && Oe) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("missing dependencies");
                                case 2:
                                    if (n = _[ir.CURRENCY_A], i = _[ir.CURRENCY_B], n && i) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("missing currency amounts");
                                case 5:
                                    if (t = {}, Object(m.a)(t, ir.CURRENCY_A, uh(n, he)[0]), Object(m.a)(t, ir.CURRENCY_B, uh(i, he)[0]), r = t, T && I) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new Error("missing tokens");
                                case 8:
                                    if (o = _[ir.LIQUIDITY]) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("missing liquidity amount");
                                case 11:
                                    if (a = I.isNative, c = T.isNative || a, P && L) {
                                        e.next = 15;
                                        break
                                    }
                                    throw new Error("could not wrap");
                                case 15:
                                    if (Ie !== eh.APPROVED) {
                                        e.next = 19;
                                        break
                                    }
                                    c ? (s = ["removeLiquidityETH", "removeLiquidityETHSupportingFeeOnTransferTokens"], u = [a ? P.address : L.address, o.quotient.toString(), r[a ? ir.CURRENCY_A : ir.CURRENCY_B].toString(), r[a ? ir.CURRENCY_B : ir.CURRENCY_A].toString(), E, pe.toHexString()]) : (s = ["removeLiquidity"], u = [P.address, L.address, o.quotient.toString(), r[ir.CURRENCY_A].toString(), r[ir.CURRENCY_B].toString(), E, pe.toHexString()]), e.next = 24;
                                    break;
                                case 19:
                                    if (null === ke) {
                                        e.next = 23;
                                        break
                                    }
                                    c ? (s = ["removeLiquidityETHWithPermit", "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens"], u = [a ? P.address : L.address, o.quotient.toString(), r[a ? ir.CURRENCY_A : ir.CURRENCY_B].toString(), r[a ? ir.CURRENCY_B : ir.CURRENCY_A].toString(), E, ke.deadline, !1, ke.v, ke.r, ke.s]) : (s = ["removeLiquidityWithPermit"], u = [P.address, L.address, o.quotient.toString(), r[ir.CURRENCY_A].toString(), r[ir.CURRENCY_B].toString(), E, ke.deadline, !1, ke.v, ke.r, ke.s]), e.next = 24;
                                    break;
                                case 23:
                                    throw new Error("Attempting to confirm without approval or a signature. Please contact support.");
                                case 24:
                                    return e.next = 26, Promise.all(s.map((function(e) {
                                        var t;
                                        return (t = Oe.estimateGas)[e].apply(t, Object(_e.a)(u)).then((function(e) {
                                            return nh(e)
                                        })).catch((function(t) {
                                            console.error("estimateGas failed", e, u, t)
                                        }))
                                    })));
                                case 26:
                                    if (d = e.sent, -1 !== (b = d.findIndex((function(e) {
                                            return qt.a.isBigNumber(e)
                                        })))) {
                                        e.next = 32;
                                        break
                                    }
                                    console.error("This transaction would fail. Please contact support."), e.next = 37;
                                    break;
                                case 32:
                                    return p = s[b], f = d[b], se(!0), e.next = 37, Oe[p].apply(Oe, Object(_e.a)(u).concat([{
                                        gasLimit: f
                                    }])).then((function(e) {
                                        var t, n;
                                        se(!1), Me(e, {
                                            summary: we.a._("Remove {0} {1} and {2} {3}", {
                                                0: null === (t = _[ir.CURRENCY_A]) || void 0 === t ? void 0 : t.toSignificant(3),
                                                1: null === T || void 0 === T ? void 0 : T.symbol,
                                                2: null === (n = _[ir.CURRENCY_B]) || void 0 === n ? void 0 : n.toSignificant(3),
                                                3: null === I || void 0 === I ? void 0 : I.symbol
                                            })
                                        }), be(e.hash), l.a.event({
                                            category: "Liquidity",
                                            action: "Remove",
                                            label: [null === T || void 0 === T ? void 0 : T.symbol, null === I || void 0 === I ? void 0 : I.symbol].join("/")
                                        })
                                    })).catch((function(e) {
                                        se(!1), console.error(e)
                                    }));
                                case 37:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                function ze() {
                    var e, t;
                    return Object(je.jsxs)(Lo, {
                        gap: "md",
                        style: {
                            marginTop: "20px"
                        },
                        children: [Object(je.jsxs)(Fo, {
                            align: "flex-end",
                            children: [Object(je.jsx)(Ur.c, {
                                fontSize: 24,
                                fontWeight: 500,
                                children: null === (e = _[ir.CURRENCY_A]) || void 0 === e ? void 0 : e.toSignificant(6)
                            }), Object(je.jsxs)(_o, {
                                gap: "4px",
                                children: [Object(je.jsx)(rb, {
                                    currency: T,
                                    size: "24px"
                                }), Object(je.jsx)(Ur.c, {
                                    fontSize: 24,
                                    fontWeight: 500,
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === T || void 0 === T ? void 0 : T.symbol
                                })]
                            })]
                        }), Object(je.jsx)(_o, {
                            children: Object(je.jsx)(Ml.a, {
                                size: "16",
                                color: z.text2
                            })
                        }), Object(je.jsxs)(Fo, {
                            align: "flex-end",
                            children: [Object(je.jsx)(Ur.c, {
                                fontSize: 24,
                                fontWeight: 500,
                                children: null === (t = _[ir.CURRENCY_B]) || void 0 === t ? void 0 : t.toSignificant(6)
                            }), Object(je.jsxs)(_o, {
                                gap: "4px",
                                children: [Object(je.jsx)(rb, {
                                    currency: I,
                                    size: "24px"
                                }), Object(je.jsx)(Ur.c, {
                                    fontSize: 24,
                                    fontWeight: 500,
                                    style: {
                                        marginLeft: "10px"
                                    },
                                    children: null === I || void 0 === I ? void 0 : I.symbol
                                })]
                            })]
                        }), Object(je.jsx)(Ro, {
                            fontSize: 12,
                            color: z.text2,
                            textAlign: "left",
                            padding: "12px 0 0 0",
                            children: Object(je.jsx)(f.b, {
                                id: "Output is estimated. If the price changes by more than {0}% your transaction will revert.",
                                values: {
                                    0: he.toSignificant(4)
                                }
                            })
                        })]
                    })
                }

                function De() {
                    var e;
                    return Object(je.jsxs)(je.Fragment, {
                        children: [Object(je.jsxs)(Fo, {
                            children: [Object(je.jsx)(Ur.c, {
                                color: z.text2,
                                fontWeight: 500,
                                fontSize: 16,
                                children: Object(je.jsx)(f.b, {
                                    id: "ScrappyInu {0}/{1} Burned",
                                    values: {
                                        0: null === T || void 0 === T ? void 0 : T.symbol,
                                        1: null === I || void 0 === I ? void 0 : I.symbol
                                    }
                                })
                            }), Object(je.jsxs)(_o, {
                                children: [Object(je.jsx)(Rf, {
                                    currency0: T,
                                    currency1: I,
                                    margin: !0
                                }), Object(je.jsx)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 16,
                                    children: null === (e = _[ir.LIQUIDITY]) || void 0 === e ? void 0 : e.toSignificant(6)
                                })]
                            })]
                        }), V && Object(je.jsxs)(je.Fragment, {
                            children: [Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)(Ur.c, {
                                    color: z.text2,
                                    fontWeight: 500,
                                    fontSize: 16,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Price"
                                    })
                                }), Object(je.jsxs)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: z.text1,
                                    children: ["1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", P ? V.priceOf(P).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol]
                                })]
                            }), Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)("div", {}), Object(je.jsxs)(Ur.c, {
                                    fontWeight: 500,
                                    fontSize: 16,
                                    color: z.text1,
                                    children: ["1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol]
                                })]
                            })]
                        }), Object(je.jsx)(qc, {
                            disabled: !(Ie === eh.APPROVED || null !== ke),
                            onClick: Pe,
                            children: Object(je.jsx)(Ur.c, {
                                fontWeight: 500,
                                fontSize: 20,
                                children: Object(je.jsx)(f.b, {
                                    id: "Confirm"
                                })
                            })
                        })]
                    })
                }
                var We = we.a._("Removing {0} {1} and {2} {3}", {
                        0: null === (h = _[ir.CURRENCY_A]) || void 0 === h ? void 0 : h.toSignificant(6),
                        1: null === T || void 0 === T ? void 0 : T.symbol,
                        2: null === (x = _[ir.CURRENCY_B]) || void 0 === x ? void 0 : x.toSignificant(6),
                        3: null === I || void 0 === I ? void 0 : I.symbol
                    }),
                    qe = Object(a.useCallback)((function(e) {
                        Ne(ir.LIQUIDITY_PERCENT, e.toString())
                    }), [Ne]),
                    Fe = (null === T || void 0 === T ? void 0 : T.isNative) || (null === I || void 0 === I ? void 0 : I.isNative),
                    Ye = Boolean(N && rt[N] && ((null === T || void 0 === T ? void 0 : T.equals(rt[N])) || (null === I || void 0 === I ? void 0 : I.equals(rt[N])))),
                    Ve = Object(a.useCallback)((function(e) {
                        C && jb(e) === C ? y.push("/remove/".concat(jb(e), "/").concat(k)) : y.push("/remove/".concat(jb(e), "/").concat(C))
                    }), [k, C, y]),
                    He = Object(a.useCallback)((function(e) {
                        k && jb(e) === k ? y.push("/remove/".concat(C, "/").concat(jb(e))) : y.push("/remove/".concat(k, "/").concat(jb(e)))
                    }), [k, C, y]),
                    Qe = Object(a.useCallback)((function() {
                        ee(!1), le && Ne(ir.LIQUIDITY_PERCENT, "0"), be("")
                    }), [Ne, le]),
                    Ge = function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100,
                            i = Object(a.useState)((function() {
                                return e
                            })),
                            r = Object(j.a)(i, 2),
                            o = r[0],
                            c = r[1],
                            s = Object(a.useRef)(),
                            u = Object(a.useCallback)((function(e) {
                                c(e), s.current && clearTimeout(s.current), s.current = setTimeout((function() {
                                    t(e), s.current = void 0
                                }), n)
                            }), [n, t]);
                        return Object(a.useEffect)((function() {
                            s.current && (clearTimeout(s.current), s.current = void 0), c(e)
                        }), [e]), [o, u]
                    }(Number.parseInt(_[ir.LIQUIDITY_PERCENT].toFixed(0)), qe),
                    Je = Object(j.a)(Ge, 2),
                    Ke = Je[0],
                    Xe = Je[1];
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsxs)(mh, {
                        children: [Object(je.jsx)(Hj, {
                            creating: !1,
                            adding: !1,
                            defaultSlippage: ex
                        }), Object(je.jsxs)(vh, {
                            children: [Object(je.jsx)(fb, {
                                isOpen: $,
                                onDismiss: Qe,
                                attemptingTxn: ce,
                                hash: le || "",
                                content: function() {
                                    return Object(je.jsx)(bb, {
                                        title: Object(je.jsx)(f.b, {
                                            id: "You will receive"
                                        }),
                                        onDismiss: Qe,
                                        topContent: ze,
                                        bottomContent: De
                                    })
                                },
                                pendingText: We
                            }), Object(je.jsxs)(Lo, {
                                gap: "md",
                                children: [Object(je.jsx)(Su, {
                                    children: Object(je.jsx)(Lo, {
                                        gap: "10px",
                                        children: Object(je.jsx)(go, {
                                            fontWeight: 400,
                                            color: "primaryText1",
                                            children: Object(je.jsx)(f.b, {
                                                id: "<0>Tip:</0> Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.",
                                                components: {
                                                    0: Object(je.jsx)("b", {})
                                                }
                                            })
                                        })
                                    })
                                }), Object(je.jsx)(Cu, {
                                    children: Object(je.jsxs)(Lo, {
                                        gap: "20px",
                                        children: [Object(je.jsxs)(Fo, {
                                            children: [Object(je.jsx)(Ur.c, {
                                                fontWeight: 500,
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Remove Amount"
                                                })
                                            }), Object(je.jsx)(Oh, {
                                                fontWeight: 500,
                                                onClick: function() {
                                                    re(!ie)
                                                },
                                                children: ie ? Object(je.jsx)(f.b, {
                                                    id: "Simple"
                                                }) : Object(je.jsx)(f.b, {
                                                    id: "Detailed"
                                                })
                                            })]
                                        }), Object(je.jsx)(Ho, {
                                            style: {
                                                alignItems: "flex-end"
                                            },
                                            children: Object(je.jsxs)(Ur.c, {
                                                fontSize: 72,
                                                fontWeight: 500,
                                                children: [me[ir.LIQUIDITY_PERCENT], "%"]
                                            })
                                        }), !ie && Object(je.jsxs)(je.Fragment, {
                                            children: [Object(je.jsx)(Ym, {
                                                value: Ke,
                                                onChange: Xe
                                            }), Object(je.jsxs)(Fo, {
                                                children: [Object(je.jsx)(gh, {
                                                    onClick: function() {
                                                        return Ne(ir.LIQUIDITY_PERCENT, "25")
                                                    },
                                                    width: "20%",
                                                    children: "25%"
                                                }), Object(je.jsx)(gh, {
                                                    onClick: function() {
                                                        return Ne(ir.LIQUIDITY_PERCENT, "50")
                                                    },
                                                    width: "20%",
                                                    children: "50%"
                                                }), Object(je.jsx)(gh, {
                                                    onClick: function() {
                                                        return Ne(ir.LIQUIDITY_PERCENT, "75")
                                                    },
                                                    width: "20%",
                                                    children: "75%"
                                                }), Object(je.jsx)(gh, {
                                                    onClick: function() {
                                                        return Ne(ir.LIQUIDITY_PERCENT, "100")
                                                    },
                                                    width: "20%",
                                                    children: "Max"
                                                })]
                                            })]
                                        })]
                                    })
                                }), !ie && Object(je.jsxs)(je.Fragment, {
                                    children: [Object(je.jsx)(Po, {
                                        children: Object(je.jsx)(Wm.a, {
                                            size: "16",
                                            color: z.text2
                                        })
                                    }), Object(je.jsx)(Cu, {
                                        children: Object(je.jsxs)(Lo, {
                                            gap: "10px",
                                            children: [Object(je.jsxs)(Fo, {
                                                children: [Object(je.jsx)(Ur.c, {
                                                    fontSize: 24,
                                                    fontWeight: 500,
                                                    children: me[ir.CURRENCY_A] || "-"
                                                }), Object(je.jsxs)(_o, {
                                                    children: [Object(je.jsx)(rb, {
                                                        currency: T,
                                                        style: {
                                                            marginRight: "12px"
                                                        }
                                                    }), Object(je.jsx)(Ur.c, {
                                                        fontSize: 24,
                                                        fontWeight: 500,
                                                        id: "remove-liquidity-tokena-symbol",
                                                        children: null === T || void 0 === T ? void 0 : T.symbol
                                                    })]
                                                })]
                                            }), Object(je.jsxs)(Fo, {
                                                children: [Object(je.jsx)(Ur.c, {
                                                    fontSize: 24,
                                                    fontWeight: 500,
                                                    children: me[ir.CURRENCY_B] || "-"
                                                }), Object(je.jsxs)(_o, {
                                                    children: [Object(je.jsx)(rb, {
                                                        currency: I,
                                                        style: {
                                                            marginRight: "12px"
                                                        }
                                                    }), Object(je.jsx)(Ur.c, {
                                                        fontSize: 24,
                                                        fontWeight: 500,
                                                        id: "remove-liquidity-tokenb-symbol",
                                                        children: null === I || void 0 === I ? void 0 : I.symbol
                                                    })]
                                                })]
                                            }), N && (Ye || Fe) ? Object(je.jsx)(Fo, {
                                                style: {
                                                    justifyContent: "flex-end"
                                                },
                                                children: Fe ? Object(je.jsx)(Kr, {
                                                    to: "/remove/".concat((null === T || void 0 === T ? void 0 : T.isNative) ? rt[N].address : k, "/").concat((null === I || void 0 === I ? void 0 : I.isNative) ? rt[N].address : C),
                                                    children: "Receive WBNB"
                                                }) : Ye ? Object(je.jsx)(Kr, {
                                                    to: "/remove/".concat((null === T || void 0 === T ? void 0 : T.equals(rt[N])) ? "BNB" : k, "/").concat((null === I || void 0 === I ? void 0 : I.equals(rt[N])) ? "BNB" : C),
                                                    children: "Receive BNB"
                                                }) : null
                                            }) : null]
                                        })
                                    })]
                                }), ie && Object(je.jsxs)(je.Fragment, {
                                    children: [Object(je.jsx)(fj, {
                                        value: me[ir.LIQUIDITY],
                                        onUserInput: Re,
                                        onMax: function() {
                                            Ne(ir.LIQUIDITY_PERCENT, "100")
                                        },
                                        showMaxButton: !xe,
                                        currency: null === V || void 0 === V ? void 0 : V.liquidityToken,
                                        pair: V,
                                        id: "liquidity-amount"
                                    }), Object(je.jsx)(Po, {
                                        children: Object(je.jsx)(Wm.a, {
                                            size: "16",
                                            color: z.text2
                                        })
                                    }), Object(je.jsx)(fj, {
                                        hideBalance: !0,
                                        value: me[ir.CURRENCY_A],
                                        onUserInput: Ue,
                                        onMax: function() {
                                            return Ne(ir.LIQUIDITY_PERCENT, "100")
                                        },
                                        showMaxButton: !xe,
                                        currency: T,
                                        label: "Output",
                                        onCurrencySelect: Ve,
                                        id: "remove-liquidity-tokena"
                                    }), Object(je.jsx)(Po, {
                                        children: Object(je.jsx)(Ml.a, {
                                            size: "16",
                                            color: z.text2
                                        })
                                    }), Object(je.jsx)(fj, {
                                        hideBalance: !0,
                                        value: me[ir.CURRENCY_B],
                                        onUserInput: Be,
                                        onMax: function() {
                                            return Ne(ir.LIQUIDITY_PERCENT, "100")
                                        },
                                        showMaxButton: !xe,
                                        currency: I,
                                        label: "Output",
                                        onCurrencySelect: He,
                                        id: "remove-liquidity-tokenb"
                                    })]
                                }), V && Object(je.jsxs)("div", {
                                    style: {
                                        padding: "10px 20px"
                                    },
                                    children: [Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)(f.b, {
                                            id: "Price:"
                                        }), Object(je.jsxs)("div", {
                                            children: ["1 ", null === T || void 0 === T ? void 0 : T.symbol, " = ", P ? V.priceOf(P).toSignificant(6) : "-", " ", null === I || void 0 === I ? void 0 : I.symbol]
                                        })]
                                    }), Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)("div", {}), Object(je.jsxs)("div", {
                                            children: ["1 ", null === I || void 0 === I ? void 0 : I.symbol, " = ", L ? V.priceOf(L).toSignificant(6) : "-", " ", null === T || void 0 === T ? void 0 : T.symbol]
                                        })]
                                    })]
                                }), Object(je.jsx)("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: E ? Object(je.jsxs)(Fo, {
                                        children: [Object(je.jsx)(Jc, {
                                            onClick: function() {
                                                return Ee.apply(this, arguments)
                                            },
                                            confirmed: Ie === eh.APPROVED || null !== ke,
                                            disabled: Ie !== eh.NOT_APPROVED || null !== ke,
                                            mr: "0.5rem",
                                            fontWeight: 500,
                                            fontSize: 16,
                                            children: Ie === eh.PENDING ? Object(je.jsx)(Tp, {
                                                children: Object(je.jsx)(f.b, {
                                                    id: "Approving"
                                                })
                                            }) : Ie === eh.APPROVED || null !== ke ? Object(je.jsx)(f.b, {
                                                id: "Approved"
                                            }) : Object(je.jsx)(f.b, {
                                                id: "Approve"
                                            })
                                        }), Object(je.jsx)(Kc, {
                                            onClick: function() {
                                                ee(!0)
                                            },
                                            disabled: !G || null === ke && Ie !== eh.APPROVED,
                                            error: !G && !!_[ir.CURRENCY_A] && !!_[ir.CURRENCY_B],
                                            children: Object(je.jsx)(Ur.c, {
                                                fontSize: 16,
                                                fontWeight: 500,
                                                children: H || Object(je.jsx)(f.b, {
                                                    id: "Remove"
                                                })
                                            })
                                        })]
                                    }) : Object(je.jsx)(Fc, {
                                        onClick: D,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Connect Wallet"
                                        })
                                    })
                                })]
                            })]
                        })]
                    }), V ? Object(je.jsx)(Lo, {
                        style: {
                            minWidth: "20rem",
                            width: "100%",
                            maxWidth: "400px",
                            marginTop: "1rem"
                        },
                        children: Object(je.jsx)(Zj, {
                            showUnwrapped: Ye,
                            pair: V
                        })
                    }) : null]
                })
            }

            function nx(e) {
                var t = e.priceImpact;
                return Object(je.jsx)(kp, {
                    fontWeight: 500,
                    fontSize: 12,
                    severity: Jf(t),
                    children: t ? "".concat(t.multiply(-1).toFixed(2), "%") : "-"
                })
            }
            var ix = n(673),
                rx = Object(a.memo)((function(e) {
                    var t = e.trade.route.path,
                        n = Object(a.useContext)(Ni.ThemeContext);
                    return Object(je.jsx)(Ur.b, {
                        flexWrap: "wrap",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        children: t.map((function(e, t, i) {
                            var r = t === i.length - 1,
                                o = Jj(e);
                            return Object(je.jsxs)(a.Fragment, {
                                children: [Object(je.jsx)(Ur.b, {
                                    alignItems: "end",
                                    children: Object(je.jsx)(wo, {
                                        color: n.text1,
                                        ml: "0.145rem",
                                        mr: "0.145rem",
                                        children: o.symbol
                                    })
                                }), r ? null : Object(je.jsx)(ix.a, {
                                    size: 14,
                                    color: n.text2
                                })]
                            }, t)
                        }))
                    })
                }));

            function ox(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    i = Object(a.useContext)(Ni.ThemeContext),
                    r = Object(a.useMemo)((function() {
                        if (!t) return {
                            realizedLPFee: void 0,
                            priceImpact: void 0
                        };
                        var e = Qf(t),
                            n = t.inputAmount.multiply(e);
                        return {
                            priceImpact: t.priceImpact.subtract(e),
                            realizedLPFee: n
                        }
                    }), [t]),
                    o = r.realizedLPFee,
                    c = r.priceImpact;
                return t ? Object(je.jsxs)(Lo, {
                    gap: "8px",
                    children: [Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Liquidity Provider Fee"
                                })
                            })
                        }), Object(je.jsx)(wo, {
                            textAlign: "right",
                            fontSize: 12,
                            color: i.text1,
                            children: o ? "".concat(o.toSignificant(4), " ").concat(o.currency.symbol) : "-"
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Route"
                                })
                            })
                        }), Object(je.jsx)(wo, {
                            textAlign: "right",
                            fontSize: 12,
                            color: i.text1,
                            children: Object(je.jsx)(rx, {
                                trade: t
                            })
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Price Impact"
                                })
                            })
                        }), Object(je.jsx)(wo, {
                            textAlign: "right",
                            fontSize: 12,
                            color: i.text1,
                            children: Object(je.jsx)(nx, {
                                priceImpact: c
                            })
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: i.text2,
                                children: t.tradeType === J.TradeType.EXACT_INPUT ? Object(je.jsx)(f.b, {
                                    id: "Minimum received"
                                }) : Object(je.jsx)(f.b, {
                                    id: "Maximum sent"
                                })
                            })
                        }), Object(je.jsx)(wo, {
                            textAlign: "right",
                            fontSize: 12,
                            color: i.text1,
                            children: t.tradeType === J.TradeType.EXACT_INPUT ? "".concat(t.minimumAmountOut(n).toSignificant(6), " ").concat(t.outputAmount.currency.symbol) : "".concat(t.maximumAmountIn(n).toSignificant(6), " ").concat(t.inputAmount.currency.symbol)
                        })]
                    }), Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontSize: 12,
                                fontWeight: 400,
                                color: i.text2,
                                children: Object(je.jsx)(f.b, {
                                    id: "Slippage tolerance"
                                })
                            })
                        }), Object(je.jsxs)(wo, {
                            textAlign: "right",
                            fontSize: 12,
                            color: i.text1,
                            children: [n.toFixed(2), "%"]
                        })]
                    })]
                }) : null
            }
            var ax = n(674),
                cx = Ni.default.div.withConfig({
                    componentId: "sc-1bxpzjo-0"
                })(["", " position:relative;border-radius:1.25rem;background-color:", ";z-index:1;width:100%;"], (function(e) {
                    return e.theme.flexColumnNoWrap
                }), (function(e) {
                    return e.theme.bg1
                })),
                sx = Ni.default.div.withConfig({
                    componentId: "sc-1bxpzjo-1"
                })(["display:flex;justify-content:center;align-items:center;border-radius:1.25rem;border:1px solid ", ";transition:border-color 300ms ", ",color 500ms ", ";background-color:", ";"], (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.red1 : n.bg2
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    return e.theme.bg1
                })),
                ux = Ni.default.div.withConfig({
                    componentId: "sc-1bxpzjo-2"
                })(["flex:1;padding:1rem;"]),
                dx = Ni.default.input.withConfig({
                    componentId: "sc-1bxpzjo-3"
                })(["font-size:1.25rem;outline:none;border:none;flex:1 1 auto;width:0;background-color:", ";transition:color 300ms ", ";color:", ";overflow:hidden;text-overflow:ellipsis;font-weight:500;width:100%;::placeholder{color:", ";}padding:0px;-webkit-appearance:textfield;::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-outer-spin-button,::-webkit-inner-spin-button{-webkit-appearance:none;}::placeholder{color:", ";}"], (function(e) {
                    return e.theme.bg1
                }), (function(e) {
                    return e.error ? "step-end" : "step-start"
                }), (function(e) {
                    var t = e.error,
                        n = e.theme;
                    return t ? n.red1 : n.text1
                }), (function(e) {
                    return e.theme.text4
                }), (function(e) {
                    return e.theme.text4
                }));

            function lx(e) {
                var t = e.id,
                    n = e.className,
                    i = void 0 === n ? "recipient-address-input" : n,
                    r = e.label,
                    o = e.placeholder,
                    c = e.value,
                    s = e.onChange,
                    u = fe().chainId,
                    d = Object(a.useContext)(Ni.ThemeContext),
                    l = sa(c),
                    b = l.address,
                    p = l.loading,
                    j = l.name,
                    h = Object(a.useCallback)((function(e) {
                        var t = e.target.value.replace(/\s+/g, "");
                        s(t)
                    }), [s]),
                    m = Boolean(c.length > 0 && !p && !b);
                return Object(je.jsx)(cx, {
                    id: t,
                    children: Object(je.jsx)(sx, {
                        error: m,
                        children: Object(je.jsx)(ux, {
                            children: Object(je.jsxs)(Lo, {
                                gap: "md",
                                children: [Object(je.jsxs)(Fo, {
                                    children: [Object(je.jsx)(wo, {
                                        color: d.text2,
                                        fontWeight: 500,
                                        fontSize: 14,
                                        children: null !== r && void 0 !== r ? r : Object(je.jsx)(f.b, {
                                            id: "Recipient"
                                        })
                                    }), b && u && Object(je.jsx)(ro, {
                                        href: gs(u, null !== j && void 0 !== j ? j : b, vs.ADDRESS),
                                        style: {
                                            fontSize: "14px"
                                        },
                                        children: Object(je.jsx)(f.b, {
                                            id: "(View on Explorer)"
                                        })
                                    })]
                                }), Object(je.jsx)(dx, {
                                    className: i,
                                    type: "text",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    autoCapitalize: "off",
                                    spellCheck: "false",
                                    placeholder: null !== o && void 0 !== o ? o : we.a._("Wallet Address"),
                                    error: m,
                                    pattern: "^(0x[a-fA-F0-9]{40})$",
                                    onChange: h,
                                    value: c
                                })]
                            })
                        })
                    })
                })
            }

            function bx(e) {
                var t = e.onConfirm,
                    n = e.swapErrorMessage,
                    i = e.disabledConfirm;
                return Object(je.jsx)(je.Fragment, {
                    children: Object(je.jsxs)(Vo, {
                        children: [Object(je.jsx)(Kc, {
                            onClick: t,
                            disabled: i,
                            style: {
                                margin: "10px 0 0 0"
                            },
                            id: "confirm-swap-or-send",
                            children: Object(je.jsx)(Ur.c, {
                                fontSize: 20,
                                fontWeight: 500,
                                children: Object(je.jsx)(f.b, {
                                    id: "Confirm Swap"
                                })
                            })
                        }), n ? Object(je.jsx)(Ep, {
                            error: n
                        }) : null]
                    })
                })
            }

            function px(e, t) {
                if (t && e && e.currency.equals(t.currency) && !X.a.equal(e.quotient, X.a.BigInt(0))) {
                    var n = be.subtract(t.divide(e));
                    return new J.Percent(n.numerator, n.denominator)
                }
            }
            var fx = Ni.default.button.withConfig({
                componentId: "sc-19ug97y-0"
            })(["display:flex;justify-content:center;align-items:center;padding:0;font-size:0.875rem;font-weight:400;background-color:transparent;border:none;height:24px;cursor:pointer;"]);

            function jx(e) {
                var t, n, i, r, o, c, s = e.price,
                    u = e.showInverted,
                    d = e.setShowInverted,
                    l = Object(a.useContext)(Ni.ThemeContext);
                try {
                    var b;
                    c = u ? s.toSignificant(4) : null === (b = s.invert()) || void 0 === b ? void 0 : b.toSignificant(4)
                } catch (m) {
                    c = "0"
                }
                var p = u ? "".concat(null === (t = s.quoteCurrency) || void 0 === t ? void 0 : t.symbol) : "".concat(null === (n = s.baseCurrency) || void 0 === n ? void 0 : n.symbol, " "),
                    f = u ? "".concat(null === (i = s.baseCurrency) || void 0 === i ? void 0 : i.symbol, " ") : "".concat(null === (r = s.quoteCurrency) || void 0 === r ? void 0 : r.symbol),
                    j = Object(a.useCallback)((function() {
                        return d(!u)
                    }), [d, u]),
                    h = "".concat(null !== (o = "1 " + f + " = " + c) && void 0 !== o ? o : "-", " ").concat(p);
                return Object(je.jsx)(fx, {
                    onClick: j,
                    title: h,
                    children: Object(je.jsx)("div", {
                        style: {
                            alignItems: "center",
                            display: "flex",
                            width: "fit-content"
                        },
                        children: Object(je.jsx)(Ur.c, {
                            fontWeight: 500,
                            fontSize: 14,
                            color: l.text1,
                            children: h
                        })
                    })
                })
            }
            var hx = Ni.default.div.withConfig({
                componentId: "sc-1zwhh3-0"
            })(["padding:4px;border-radius:12px;height:32px;width:32px;position:relative;margin-top:-18px;margin-bottom:-18px;left:calc(50% - 16px);display:flex;justify-content:center;align-items:center;background-color:", ";border:4px solid;border-color:", ";z-index:2;"], (function(e) {
                return e.theme.bg1
            }), (function(e) {
                return e.theme.bg0
            }));

            function mx(e) {
                var t = e.trade,
                    n = e.allowedSlippage,
                    i = e.recipient,
                    r = e.showAcceptChanges,
                    o = e.onAcceptChanges,
                    c = Object(a.useContext)(Ni.ThemeContext),
                    s = Object(a.useState)(!1),
                    u = Object(j.a)(s, 2),
                    d = u[0],
                    l = u[1],
                    b = pd(t.inputAmount),
                    p = pd(t.outputAmount);
                return Object(je.jsxs)(Lo, {
                    gap: "4px",
                    style: {
                        marginTop: "1rem"
                    },
                    children: [Object(je.jsx)(Cu, {
                        padding: "0.75rem 1rem",
                        children: Object(je.jsxs)(Lo, {
                            gap: "8px",
                            children: [Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)(Co, {
                                    color: c.text3,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    children: Object(je.jsx)(f.b, {
                                        id: "From"
                                    })
                                }), Object(je.jsx)($f, {
                                    fiatValue: b
                                })]
                            }), Object(je.jsxs)(Fo, {
                                align: "center",
                                children: [Object(je.jsxs)(_o, {
                                    gap: "0px",
                                    children: [Object(je.jsx)(rb, {
                                        currency: t.inputAmount.currency,
                                        size: "20px",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    }), Object(je.jsx)(Ur.c, {
                                        fontSize: 20,
                                        fontWeight: 500,
                                        children: t.inputAmount.currency.symbol
                                    })]
                                }), Object(je.jsx)(_o, {
                                    gap: "0px",
                                    children: Object(je.jsx)(Cp, {
                                        fontSize: 24,
                                        fontWeight: 500,
                                        color: r && t.tradeType === J.TradeType.EXACT_OUTPUT ? c.primary1 : "",
                                        children: t.inputAmount.toSignificant(6)
                                    })
                                })]
                            })]
                        })
                    }), Object(je.jsx)(hx, {
                        children: Object(je.jsx)(Wm.a, {
                            size: "16",
                            color: c.text2
                        })
                    }), Object(je.jsx)(Cu, {
                        padding: "0.75rem 1rem",
                        style: {
                            marginBottom: "0.25rem"
                        },
                        children: Object(je.jsxs)(Lo, {
                            gap: "8px",
                            children: [Object(je.jsxs)(Fo, {
                                children: [Object(je.jsx)(Co, {
                                    color: c.text3,
                                    fontWeight: 500,
                                    fontSize: 14,
                                    children: Object(je.jsx)(f.b, {
                                        id: "To"
                                    })
                                }), Object(je.jsx)(Co, {
                                    fontSize: 14,
                                    color: c.text3,
                                    children: Object(je.jsx)($f, {
                                        fiatValue: p,
                                        priceImpact: px(b, p)
                                    })
                                })]
                            }), Object(je.jsxs)(Fo, {
                                align: "flex-end",
                                children: [Object(je.jsxs)(_o, {
                                    gap: "0px",
                                    children: [Object(je.jsx)(rb, {
                                        currency: t.outputAmount.currency,
                                        size: "20px",
                                        style: {
                                            marginRight: "12px"
                                        }
                                    }), Object(je.jsx)(Ur.c, {
                                        fontSize: 20,
                                        fontWeight: 500,
                                        children: t.outputAmount.currency.symbol
                                    })]
                                }), Object(je.jsx)(_o, {
                                    gap: "0px",
                                    children: Object(je.jsx)(Cp, {
                                        fontSize: 24,
                                        fontWeight: 500,
                                        children: t.outputAmount.toSignificant(6)
                                    })
                                })]
                            })]
                        })
                    }), Object(je.jsxs)(Fo, {
                        style: {
                            marginTop: "0.25rem",
                            padding: "0 1rem"
                        },
                        children: [Object(je.jsx)(Co, {
                            color: c.text2,
                            fontWeight: 500,
                            fontSize: 14,
                            children: Object(je.jsx)(f.b, {
                                id: "Price"
                            })
                        }), Object(je.jsx)(jx, {
                            price: t.executionPrice,
                            showInverted: d,
                            setShowInverted: l
                        })]
                    }), Object(je.jsx)(Cu, {
                        style: {
                            padding: ".75rem",
                            marginTop: "0.5rem"
                        },
                        children: Object(je.jsx)(ox, {
                            trade: t,
                            allowedSlippage: n
                        })
                    }), r ? Object(je.jsx)(Np, {
                        justify: "flex-start",
                        gap: "0px",
                        children: Object(je.jsxs)(Fo, {
                            children: [Object(je.jsxs)(_o, {
                                children: [Object(je.jsx)(Ll.a, {
                                    size: 20,
                                    style: {
                                        marginRight: "8px",
                                        minWidth: 24
                                    }
                                }), Object(je.jsx)(Oo, {
                                    color: c.primary1,
                                    children: Object(je.jsx)(f.b, {
                                        id: "Price Updated"
                                    })
                                })]
                            }), Object(je.jsx)(qc, {
                                style: {
                                    padding: ".5rem",
                                    width: "fit-content",
                                    fontSize: "0.825rem",
                                    borderRadius: "12px"
                                },
                                onClick: o,
                                children: Object(je.jsx)(f.b, {
                                    id: "Accept"
                                })
                            })]
                        })
                    }) : null, Object(je.jsx)(Lo, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: ".75rem 1rem"
                        },
                        children: t.tradeType === J.TradeType.EXACT_INPUT ? Object(je.jsx)(Ro, {
                            fontWeight: 400,
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: Object(je.jsx)(f.b, {
                                id: "Output is estimated. You will receive at least <0>{0} {1}</0> or the transaction will revert.",
                                values: {
                                    0: t.minimumAmountOut(n).toSignificant(6),
                                    1: t.outputAmount.currency.symbol
                                },
                                components: {
                                    0: Object(je.jsx)("b", {})
                                }
                            })
                        }) : Object(je.jsx)(Ro, {
                            fontWeight: 400,
                            textAlign: "left",
                            style: {
                                width: "100%"
                            },
                            children: Object(je.jsx)(f.b, {
                                id: "Input is estimated. You will sell at most <0>{0} {1}</0> or the transaction will revert.",
                                values: {
                                    0: t.maximumAmountIn(n).toSignificant(6),
                                    1: t.inputAmount.currency.symbol
                                },
                                components: {
                                    0: Object(je.jsx)("b", {})
                                }
                            })
                        })
                    }), null !== i ? Object(je.jsx)(Lo, {
                        justify: "flex-start",
                        gap: "sm",
                        style: {
                            padding: "12px 0 0 0px"
                        },
                        children: Object(je.jsx)(Oo, {
                            children: Object(je.jsx)(f.b, {
                                id: "Output will be sent to <0>{0}</0>",
                                values: {
                                    0: xt(i) ? vt(i) : i
                                },
                                components: {
                                    0: Object(je.jsx)("b", {
                                        title: i
                                    })
                                }
                            })
                        })
                    }) : null]
                })
            }

            function xx(e) {
                var t, n, i, r, o, c, s = e.trade,
                    u = e.originalTrade,
                    d = e.onAcceptChanges,
                    l = e.allowedSlippage,
                    b = e.onConfirm,
                    p = e.onDismiss,
                    j = e.recipient,
                    h = e.swapErrorMessage,
                    m = e.isOpen,
                    x = e.attemptingTxn,
                    v = e.txHash,
                    O = Object(a.useMemo)((function() {
                        return Boolean(s && u && function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            var i = t[0],
                                r = t[1];
                            return i.tradeType !== r.tradeType || !i.inputAmount.currency.equals(r.inputAmount.currency) || !i.inputAmount.equalTo(r.inputAmount) || !i.outputAmount.currency.equals(r.outputAmount.currency) || !i.outputAmount.equalTo(r.outputAmount)
                        }(s, u))
                    }), [u, s]),
                    g = Object(a.useCallback)((function() {
                        return s ? Object(je.jsx)(mx, {
                            trade: s,
                            allowedSlippage: l,
                            recipient: j,
                            showAcceptChanges: O,
                            onAcceptChanges: d
                        }) : null
                    }), [l, d, j, O, s]),
                    y = Object(a.useCallback)((function() {
                        return s ? Object(je.jsx)(bx, {
                            onConfirm: b,
                            trade: s,
                            disabledConfirm: O,
                            swapErrorMessage: h
                        }) : null
                    }), [b, O, h, s]),
                    w = Object(je.jsx)(f.b, {
                        id: "Swapping {0} {1} for {2} {3}",
                        values: {
                            0: null === s || void 0 === s || null === (t = s.inputAmount) || void 0 === t ? void 0 : t.toSignificant(6),
                            1: null === s || void 0 === s || null === (n = s.inputAmount) || void 0 === n || null === (i = n.currency) || void 0 === i ? void 0 : i.symbol,
                            2: null === s || void 0 === s || null === (r = s.outputAmount) || void 0 === r ? void 0 : r.toSignificant(6),
                            3: null === s || void 0 === s || null === (o = s.outputAmount) || void 0 === o || null === (c = o.currency) || void 0 === c ? void 0 : c.symbol
                        }
                    }),
                    k = Object(a.useCallback)((function() {
                        return h ? Object(je.jsx)(pb, {
                            onDismiss: p,
                            message: h
                        }) : Object(je.jsx)(bb, {
                            title: Object(je.jsx)(f.b, {
                                id: "Confirm Swap"
                            }),
                            onDismiss: p,
                            topContent: g,
                            bottomContent: y
                        })
                    }), [p, y, g, h]);
                return Object(je.jsx)(fb, {
                    isOpen: m,
                    onDismiss: p,
                    attemptingTxn: x,
                    hash: v,
                    content: k,
                    pendingText: w,
                    currencyToAdd: null === s || void 0 === s ? void 0 : s.outputAmount.currency
                })
            }
            var vx = Ni.default.div.withConfig({
                componentId: "sc-jhay2b-0"
            })(["padding:1rem 1.25rem 0.5rem 1.25rem;width:100%;color:", ";"], (function(e) {
                return e.theme.text2
            }));

            function Ox(e) {
                var t = e.allowedSlippage;
                return Object(je.jsx)(vx, {
                    children: Object(je.jsxs)(Fo, {
                        children: [Object(je.jsx)(_o, {
                            children: Object(je.jsx)(wo, {
                                fontWeight: 500,
                                fontSize: 16,
                                style: {
                                    marginRight: "8px"
                                },
                                children: Object(je.jsx)(f.b, {
                                    id: "Swap"
                                })
                            })
                        }), Object(je.jsx)(_o, {
                            children: Object(je.jsx)(Lj, {
                                placeholderSlippage: t
                            })
                        })]
                    })
                })
            }

            function gx(e) {
                var t = e.isOpen,
                    n = e.tokens,
                    i = e.onConfirm,
                    r = e.onDismiss;
                return Object(je.jsx)(Sc, {
                    isOpen: t,
                    onDismiss: r,
                    maxHeight: 100,
                    children: Object(je.jsx)(Mp, {
                        tokens: n,
                        handleCurrencySelect: i
                    })
                })
            }
            var yx = n(309),
                wx = new mn.b([{
                    constant: !1,
                    inputs: [{
                        name: "_spender",
                        type: "address"
                    }, {
                        name: "_value",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    payable: !1,
                    stateMutability: "nonpayable",
                    type: "function"
                }]);

            function kx(e, t) {
                if (!e.currency.isToken) throw new Error("Must call with an amount of token");
                var n = wx.encodeFunctionData("approve", [t, Object(yx.a)(e.quotient)]);
                return {
                    to: e.currency.address,
                    data: n,
                    value: "0x0"
                }
            }
            var Cx, Tx, Ix = n(313);

            function Ax(e, t, n) {
                var i = fe(),
                    r = i.account,
                    o = i.chainId,
                    c = i.library,
                    s = sa(n).address,
                    u = null === n ? r : s,
                    d = oh(),
                    l = Bn(),
                    b = function() {
                        var e = fe().account;
                        return Sn(Vm() && null !== e && void 0 !== e ? e : void 0, Ix, !0)
                    }();
                return Object(a.useMemo)((function() {
                    if (!e || !u || !c || !r || !o || !d) return [];
                    if (!l) return [];
                    var n = [];
                    return n.push(Ie.Router.swapCallParameters(e, {
                        feeOnTransfer: !1,
                        allowedSlippage: t,
                        recipient: u,
                        deadline: d.toNumber()
                    })), e.tradeType === J.TradeType.EXACT_INPUT && n.push(Ie.Router.swapCallParameters(e, {
                        feeOnTransfer: !0,
                        allowedSlippage: t,
                        recipient: u,
                        deadline: d.toNumber()
                    })), n.map((function(n) {
                        var i = n.methodName,
                            r = n.args,
                            o = n.value;
                        return b && e.inputAmount.currency.isToken ? {
                            address: b.address,
                            calldata: b.interface.encodeFunctionData("wc_multiCall", [
                                [kx(e.maximumAmountIn(t), l.address), {
                                    to: l.address,
                                    value: o,
                                    data: l.interface.encodeFunctionData(i, r)
                                }]
                            ]),
                            value: "0x0"
                        } : {
                            address: l.address,
                            calldata: l.interface.encodeFunctionData(i, r),
                            value: o
                        }
                    }))
                }), [r, t, b, o, d, c, u, l, e])
            }

            function Ex(e) {
                for (var t, n, i; Boolean(e);) {
                    var r, o, a, c;
                    i = null !== (r = null !== (o = e.reason) && void 0 !== o ? o : e.message) && void 0 !== r ? r : i, e = null !== (a = e.error) && void 0 !== a ? a : null === (c = e.data) || void 0 === c ? void 0 : c.originalError
                }
                switch (0 === (null === (t = i) || void 0 === t ? void 0 : t.indexOf("execution reverted: ")) && (i = i.substr("execution reverted: ".length)), i) {
                    case "UniswapV2Router: EXPIRED":
                        return we.a._("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
                    case "UniswapV2Router: INSUFFICIENT_OUTPUT_AMOUNT":
                    case "UniswapV2Router: EXCESSIVE_INPUT_AMOUNT":
                        return we.a._("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
                    case "TransferHelper: TRANSFER_FROM_FAILED":
                        return we.a._("The input token cannot be transferred. There may be an issue with the input token.");
                    case "UniswapV2: TRANSFER_FAILED":
                        return we.a._("The output token cannot be transferred. There may be an issue with the output token.");
                    case "UniswapV2: K":
                        return we.a._("The ScrappyInu invariant x*y=k was not satisfied by the swap. This usually means one of the tokens you are swapping incorporates custom behavior on transfer.");
                    case "Too little received":
                    case "Too much requested":
                    case "STF":
                        return we.a._("This transaction will not succeed due to price movement. Try increasing your slippage tolerance.");
                    case "TF":
                        return we.a._("The output token cannot be transferred. There may be an issue with the output token.");
                    default:
                        return -1 !== (null === (n = i) || void 0 === n ? void 0 : n.indexOf("undefined is not an object")) ? (console.error(e, i), we.a._("An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading.")) : we.a._("Unknown error{0}. Try increasing your slippage tolerance.", {
                            0: i ? ': "'.concat(i, '"') : ""
                        })
                }
            }! function(e) {
                e[e.INVALID = 0] = "INVALID", e[e.LOADING = 1] = "LOADING", e[e.VALID = 2] = "VALID"
            }(Cx || (Cx = {})),
            function(e) {
                e[e.NOT_APPLICABLE = 0] = "NOT_APPLICABLE", e[e.WRAP = 1] = "WRAP", e[e.UNWRAP = 2] = "UNWRAP"
            }(Tx || (Tx = {}));
            var Sx = {
                wrapType: Tx.NOT_APPLICABLE
            };

            function Nx(e, t, n) {
                var i = fe(),
                    r = i.chainId,
                    o = i.account,
                    c = function(e) {
                        var t, n = fe().chainId;
                        return Sn(n ? null === (t = rt[n]) || void 0 === t ? void 0 : t.address : void 0, An, e)
                    }(),
                    s = za(null !== o && void 0 !== o ? o : void 0, e),
                    u = Object(a.useMemo)((function() {
                        return Oa(n, e)
                    }), [e, n]),
                    d = ta();
                return Object(a.useMemo)((function() {
                    if (!c || !r || !e || !t) return Sx;
                    var n = rt[r];
                    if (!n) return Sx;
                    var i = Boolean(null === u || void 0 === u ? void 0 : u.greaterThan("0")),
                        o = u && s && !s.lessThan(u);
                    return e.isNative && n.equals(t) ? {
                        wrapType: Tx.WRAP,
                        execute: o && u ? Object(R.a)(S.a.mark((function e() {
                            var t;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, console.log(c), e.next = 4, c.deposit({
                                            value: "0x".concat(u.quotient.toString(16))
                                        });
                                    case 4:
                                        t = e.sent, d(t, {
                                            summary: "Wrap ".concat(u.toSignificant(6), " BNB to WBNB")
                                        }), e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.error("Could not deposit", e.t0);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        }))) : void 0,
                        inputError: o ? void 0 : i ? "Insufficient BNB balance" : "Enter BNB amount"
                    } : n.equals(e) && t.isNative ? {
                        wrapType: Tx.UNWRAP,
                        execute: o && u ? Object(R.a)(S.a.mark((function e() {
                            var t;
                            return S.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, c.withdraw("0x".concat(u.quotient.toString(16)));
                                    case 3:
                                        t = e.sent, d(t, {
                                            summary: "Unwrap ".concat(u.toSignificant(6), " WBNB to BNB")
                                        }), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("Could not withdraw", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7]
                            ])
                        }))) : void 0,
                        inputError: o ? void 0 : i ? "Insufficient WETH balance" : "Enter WETH amount"
                    } : Sx
                }), [c, r, e, t, u, s, d])
            }
            var Rx, Ux = Object(Ni.default)(_a.a).withConfig({
                componentId: "sc-1es900k-0"
            })(["opacity:0.4;color:", ";height:16px;width:16px;:hover{opacity:0.8;}"], (function(e) {
                return e.theme.text1
            }));

            function Bx(e) {
                var t, n, i, r, o, c, s, u, d, b, p = e.history,
                    h = fe().account,
                    x = function() {
                        var e = fe().chainId,
                            t = Se(),
                            n = yi(),
                            i = Object(a.useState)(),
                            r = Object(j.a)(i, 2),
                            o = r[0],
                            c = r[1];
                        return Object(a.useEffect)((function() {
                            if (e) {
                                var i = Ia(n);
                                t($i({
                                    typedValue: i.typedValue,
                                    field: i.independentField,
                                    inputCurrencyId: i[Di.INPUT].currencyId,
                                    outputCurrencyId: i[Di.OUTPUT].currencyId,
                                    recipient: i.recipient
                                })), c({
                                    inputCurrencyId: i[Di.INPUT].currencyId,
                                    outputCurrencyId: i[Di.OUTPUT].currencyId
                                })
                            }
                        }), [t, e]), o
                    }(),
                    v = [Qn(null === x || void 0 === x ? void 0 : x.inputCurrencyId), Qn(null === x || void 0 === x ? void 0 : x.outputCurrencyId)],
                    O = v[0],
                    g = v[1],
                    y = Object(a.useState)(!1),
                    w = Object(j.a)(y, 2),
                    k = w[0],
                    C = w[1],
                    T = Object(a.useMemo)((function() {
                        var e, t;
                        return null !== (e = null === (t = [O, g]) || void 0 === t ? void 0 : t.filter((function(e) {
                            var t;
                            return null !== (t = null === e || void 0 === e ? void 0 : e.isToken) && void 0 !== t && t
                        }))) && void 0 !== e ? e : []
                    }), [O, g]),
                    I = Object(a.useCallback)((function() {
                        C(!0)
                    }), []),
                    A = Wn(),
                    E = T && T.filter((function(e) {
                        return !Boolean(e.address in A)
                    })),
                    N = Object(a.useContext)(Ni.ThemeContext),
                    U = Xt(),
                    B = pi(),
                    M = Object(j.a)(B, 1)[0],
                    P = va(),
                    L = P.independentField,
                    z = P.typedValue,
                    D = P.recipient,
                    W = wa(),
                    q = W.toggledTrade,
                    F = W.allowedSlippage,
                    Y = W.currencyBalances,
                    V = W.parsedAmount,
                    _ = W.currencies,
                    H = W.inputError,
                    Q = Nx(_[Di.INPUT], _[Di.OUTPUT], z),
                    G = Q.wrapType,
                    J = Q.execute,
                    K = Q.inputError,
                    Z = G !== Tx.NOT_APPLICABLE,
                    $ = aa(D).address,
                    ee = Object(a.useMemo)((function() {
                        var e, t;
                        return Z ? (e = {}, Object(m.a)(e, Di.INPUT, V), Object(m.a)(e, Di.OUTPUT, V), e) : (t = {}, Object(m.a)(t, Di.INPUT, L === Di.INPUT ? V : null === q || void 0 === q ? void 0 : q.inputAmount), Object(m.a)(t, Di.OUTPUT, L === Di.OUTPUT ? V : null === q || void 0 === q ? void 0 : q.outputAmount), t)
                    }), [L, V, Z, q]),
                    te = pd(ee[Di.INPUT]),
                    ne = pd(ee[Di.OUTPUT]),
                    ie = px(te, ne),
                    re = function() {
                        var e = Se(),
                            t = Object(a.useCallback)((function(t, n) {
                                e(Ki({
                                    field: t,
                                    currencyId: n.isToken ? n.address : n.isNative ? "BNB" : ""
                                }))
                            }), [e]);
                        return {
                            onSwitchTokens: Object(a.useCallback)((function() {
                                e(Xi())
                            }), [e]),
                            onCurrencySelection: t,
                            onUserInput: Object(a.useCallback)((function(t, n) {
                                e(Zi({
                                    field: t,
                                    typedValue: n
                                }))
                            }), [e]),
                            onChangeRecipient: Object(a.useCallback)((function(t) {
                                e(er({
                                    recipient: t
                                }))
                            }), [e])
                        }
                    }(),
                    oe = re.onSwitchTokens,
                    ae = re.onCurrencySelection,
                    ue = re.onUserInput,
                    de = re.onChangeRecipient,
                    le = !H,
                    be = L === Di.INPUT ? Di.OUTPUT : Di.INPUT,
                    pe = Object(a.useCallback)((function(e) {
                        ue(Di.INPUT, e)
                    }), [ue]),
                    he = Object(a.useCallback)((function(e) {
                        ue(Di.OUTPUT, e)
                    }), [ue]),
                    me = Object(a.useCallback)((function() {
                        C(!0), p.push("/swap/")
                    }), [p]),
                    xe = Object(a.useState)({
                        showConfirm: !1,
                        tradeToConfirm: void 0,
                        attemptingTxn: !1,
                        swapErrorMessage: void 0,
                        txHash: void 0
                    }),
                    ve = Object(j.a)(xe, 2),
                    Oe = ve[0],
                    ge = Oe.showConfirm,
                    ye = Oe.tradeToConfirm,
                    we = Oe.swapErrorMessage,
                    ke = Oe.attemptingTxn,
                    Ce = Oe.txHash,
                    Te = ve[1],
                    Ae = (o = {}, Object(m.a)(o, L, z), Object(m.a)(o, be, Z ? null !== (t = null === (n = ee[L]) || void 0 === n ? void 0 : n.toExact()) && void 0 !== t ? t : "" : null !== (i = null === (r = ee[be]) || void 0 === r ? void 0 : r.toSignificant(6)) && void 0 !== i ? i : ""), o),
                    Ee = Boolean(_[Di.INPUT] && _[Di.OUTPUT] && (null === (c = ee[L]) || void 0 === c ? void 0 : c.greaterThan(X.a.BigInt(0)))),
                    Ne = !(null === q || void 0 === q ? void 0 : q.route),
                    Re = function(e, t) {
                        var n = fe().chainId;
                        return ih(Object(a.useMemo)((function() {
                            return e && e.inputAmount.currency.isToken ? e.maximumAmountIn(t) : void 0
                        }), [e, t]), n && e instanceof Ie.Trade ? De[n] : void 0)
                    }(q, F),
                    Ue = Object(j.a)(Re, 2),
                    Be = Ue[0],
                    Me = Ue[1],
                    Pe = function(e, t) {
                        return Xm(Object(a.useMemo)((function() {
                            return e ? e.maximumAmountIn(t) : void 0
                        }), [e, t]), void 0, null)
                    }(q, F),
                    Le = Pe.state,
                    ze = Pe.gatherPermitSignature,
                    We = Object(a.useCallback)(Object(R.a)(S.a.mark((function e() {
                        return S.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Le !== _m.NOT_SIGNED || !ze) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.prev = 1, e.next = 4, ze();
                                case 4:
                                    e.next = 11;
                                    break;
                                case 6:
                                    if (e.prev = 6, e.t0 = e.catch(1), 4001 === (null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.code)) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 11, Me();
                                case 11:
                                    e.next = 15;
                                    break;
                                case 13:
                                    return e.next = 15, Me();
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 6]
                        ])
                    }))), [Me, ze, Le]),
                    qe = Object(a.useState)(!1),
                    Fe = Object(j.a)(qe, 2),
                    Ye = Fe[0],
                    Ve = Fe[1];
                Object(a.useEffect)((function() {
                    Be === eh.PENDING && Ve(!0)
                }), [Be, Ye]);
                var _e = bh(Y[Di.INPUT]),
                    Qe = Boolean((null === _e || void 0 === _e ? void 0 : _e.greaterThan(0)) && !(null === (s = ee[Di.INPUT]) || void 0 === s ? void 0 : s.equalTo(_e))),
                    Ge = function(e, t, n) {
                        var i = fe(),
                            r = i.account,
                            o = i.chainId,
                            c = i.library,
                            s = Ax(e, t, n),
                            u = ta(),
                            d = sa(n).address,
                            l = null === n ? r : d;
                        return Object(a.useMemo)((function() {
                            return e && c && r && o ? l ? {
                                state: Cx.VALID,
                                callback: function() {
                                    var t = Object(R.a)(S.a.mark((function t() {
                                        var i, o, a, d, b, p, f, j;
                                        return S.a.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, Promise.all(s.map((function(e) {
                                                        var t = e.address,
                                                            n = e.calldata,
                                                            i = e.value,
                                                            o = !i || ra(i) ? {
                                                                from: r,
                                                                to: t,
                                                                data: n
                                                            } : {
                                                                from: r,
                                                                to: t,
                                                                data: n,
                                                                value: i
                                                            };
                                                        return c.estimateGas(o).then((function(t) {
                                                            return {
                                                                call: e,
                                                                gasEstimate: t
                                                            }
                                                        })).catch((function(t) {
                                                            return console.debug("Gas estimate failed, trying eth_call to extract error", e), c.call(o).then((function(n) {
                                                                return console.debug("Unexpected successful call after failed estimate gas", e, t, n), {
                                                                    call: e,
                                                                    error: new Error("Unexpected issue with estimating the gas. Please try again.")
                                                                }
                                                            })).catch((function(t) {
                                                                return console.debug("Call threw error", e, t), {
                                                                    call: e,
                                                                    error: new Error(Ex(t))
                                                                }
                                                            }))
                                                        }))
                                                    })));
                                                case 2:
                                                    if (i = t.sent, o = i.find((function(e, t, n) {
                                                            return "gasEstimate" in e && (t === n.length - 1 || "gasEstimate" in n[t + 1])
                                                        }))) {
                                                        t.next = 12;
                                                        break
                                                    }
                                                    if (!((a = i.filter((function(e) {
                                                            return "error" in e
                                                        }))).length > 0)) {
                                                        t.next = 8;
                                                        break
                                                    }
                                                    throw a[a.length - 1].error;
                                                case 8:
                                                    if (d = i.find((function(e) {
                                                            return !("error" in e)
                                                        }))) {
                                                        t.next = 11;
                                                        break
                                                    }
                                                    throw new Error("Unexpected error. Could not estimate gas for the swap.");
                                                case 11:
                                                    o = d;
                                                case 12:
                                                    return b = o.call, p = b.address, f = b.calldata, j = b.value, t.abrupt("return", c.getSigner().sendTransaction(Object(He.a)(Object(He.a)({
                                                        from: r,
                                                        to: p,
                                                        data: f
                                                    }, "gasEstimate" in o ? {
                                                        gasLimit: nh(o.gasEstimate)
                                                    } : {}), j && !ra(j) ? {
                                                        value: j
                                                    } : {})).then((function(t) {
                                                        var i = e.inputAmount.currency.symbol,
                                                            o = e.outputAmount.currency.symbol,
                                                            a = e.inputAmount.toSignificant(4),
                                                            c = e.outputAmount.toSignificant(4),
                                                            s = "Swap ".concat(a, " ").concat(i, " for ").concat(c, " ").concat(o),
                                                            d = l === r ? s : "".concat(s, " to ").concat(n && xt(n) ? vt(n) : n),
                                                            b = "".concat(d);
                                                        return u(t, {
                                                            summary: b
                                                        }), t.hash
                                                    })).catch((function(e) {
                                                        throw 4001 === (null === e || void 0 === e ? void 0 : e.code) ? new Error("Transaction rejected.") : (console.error("Swap failed", e, p, f, j), new Error("Swap failed: ".concat(Ex(e))))
                                                    })));
                                                case 14:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function() {
                                        return t.apply(this, arguments)
                                    }
                                }(),
                                error: null
                            } : null !== n ? {
                                state: Cx.INVALID,
                                callback: null,
                                error: "Invalid recipient"
                            } : {
                                state: Cx.LOADING,
                                callback: null,
                                error: null
                            } : {
                                state: Cx.INVALID,
                                callback: null,
                                error: "Missing dependencies"
                            }
                        }), [e, c, r, o, l, n, s, u])
                    }(q, F, D),
                    Je = Ge.callback,
                    Ke = Ge.error,
                    Xe = fi(),
                    Ze = Object(j.a)(Xe, 1)[0],
                    $e = Object(a.useCallback)((function() {
                        var e;
                        Je && (ie && !((e = ie).lessThan(se) ? e.lessThan(ce) || window.confirm("This swap has a price impact of at least ".concat(ce.toFixed(0), "%. Please confirm that you would like to continue with this swap.")) : "confirm" === window.prompt("This swap has a price impact of at least ".concat(se.toFixed(0), '%. Please type the word "confirm" to continue with this swap.'))) || (Te({
                            attemptingTxn: !0,
                            tradeToConfirm: ye,
                            showConfirm: ge,
                            swapErrorMessage: void 0,
                            txHash: void 0
                        }), Je().then((function(e) {
                            var t, n, i, r;
                            Te({
                                attemptingTxn: !1,
                                tradeToConfirm: ye,
                                showConfirm: ge,
                                swapErrorMessage: void 0,
                                txHash: e
                            }), l.a.event({
                                category: "Swap",
                                action: null === D ? "Swap w/o Send" : (null !== $ && void 0 !== $ ? $ : D) === h ? "Swap w/o Send + recipient" : "Swap w/ Send",
                                label: [null === q || void 0 === q || null === (t = q.inputAmount) || void 0 === t || null === (n = t.currency) || void 0 === n ? void 0 : n.symbol, null === q || void 0 === q || null === (i = q.outputAmount) || void 0 === i || null === (r = i.currency) || void 0 === r ? void 0 : r.symbol, Ze ? "SH" : "MH"].join("/")
                            })
                        })).catch((function(e) {
                            Te({
                                attemptingTxn: !1,
                                tradeToConfirm: ye,
                                showConfirm: ge,
                                swapErrorMessage: e.message,
                                txHash: void 0
                            })
                        }))))
                    }), [Je, ie, ye, ge, D, $, h, q, Ze]),
                    et = Object(a.useState)(!1),
                    tt = Object(j.a)(et, 2),
                    nt = tt[0],
                    it = tt[1],
                    rt = Object(a.useMemo)((function() {
                        var e = null === q || void 0 === q ? void 0 : q.priceImpact;
                        return Jf(e && ie ? e.greaterThan(ie) ? e : ie : null !== e && void 0 !== e ? e : ie)
                    }), [ie, q]),
                    ot = !Vm() && !H && (Be === eh.NOT_APPROVED || Be === eh.PENDING || Ye && Be === eh.APPROVED) && !(rt > 3 && !M),
                    at = Object(a.useCallback)((function() {
                        Te({
                            showConfirm: !1,
                            tradeToConfirm: ye,
                            attemptingTxn: ke,
                            swapErrorMessage: we,
                            txHash: Ce
                        }), Ce && ue(Di.INPUT, "")
                    }), [ke, ue, we, ye, Ce]),
                    ct = Object(a.useCallback)((function() {
                        Te({
                            tradeToConfirm: q,
                            swapErrorMessage: we,
                            txHash: Ce,
                            attemptingTxn: ke,
                            showConfirm: ge
                        })
                    }), [ke, ge, we, q, Ce]),
                    st = Object(a.useCallback)((function(e) {
                        Ve(!1), ae(Di.INPUT, e)
                    }), [ae]),
                    ut = Object(a.useCallback)((function() {
                        _e && ue(Di.INPUT, _e.toExact())
                    }), [_e, ue]),
                    dt = Object(a.useCallback)((function(e) {
                        return ae(Di.OUTPUT, e)
                    }), [ae]),
                    lt = rh(null === _ || void 0 === _ ? void 0 : _.INPUT, null === _ || void 0 === _ ? void 0 : _.OUTPUT),
                    bt = rt > 3 && !M;
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsx)(gx, {
                        isOpen: E.length > 0 && !k,
                        tokens: E,
                        onConfirm: I,
                        onDismiss: me
                    }), Object(je.jsxs)(mh, {
                        children: [Object(je.jsx)(Ox, {
                            allowedSlippage: F
                        }), Object(je.jsxs)(gp, {
                            id: "swap-page",
                            children: [Object(je.jsx)(xx, {
                                isOpen: ge,
                                trade: q,
                                originalTrade: ye,
                                onAcceptChanges: ct,
                                attemptingTxn: ke,
                                txHash: Ce,
                                recipient: D,
                                allowedSlippage: F,
                                onConfirm: $e,
                                swapErrorMessage: we,
                                onDismiss: at
                            }), Object(je.jsxs)(Lo, {
                                gap: "md",
                                children: [Object(je.jsxs)("div", {
                                    style: {
                                        display: "relative"
                                    },
                                    children: [Object(je.jsx)(fj, {
                                        label: L !== Di.OUTPUT || Z ? Object(je.jsx)(f.b, {
                                            id: "From"
                                        }) : Object(je.jsx)(f.b, {
                                            id: "From (at most)"
                                        }),
                                        value: Ae[Di.INPUT],
                                        showMaxButton: Qe,
                                        currency: _[Di.INPUT],
                                        onUserInput: pe,
                                        onMax: ut,
                                        fiatValue: null !== te && void 0 !== te ? te : void 0,
                                        onCurrencySelect: st,
                                        otherCurrency: _[Di.OUTPUT],
                                        showCommonBases: !0,
                                        id: "swap-currency-input"
                                    }), Object(je.jsx)(yp, {
                                        clickable: !0,
                                        children: Object(je.jsx)(Wm.a, {
                                            size: "16",
                                            onClick: function() {
                                                Ve(!1), oe()
                                            },
                                            color: _[Di.INPUT] && _[Di.OUTPUT] ? N.text1 : N.text3
                                        })
                                    }), Object(je.jsx)(fj, {
                                        value: Ae[Di.OUTPUT],
                                        onUserInput: he,
                                        label: L !== Di.INPUT || Z ? Object(je.jsx)(f.b, {
                                            id: "To"
                                        }) : Object(je.jsx)(f.b, {
                                            id: "To (at least)"
                                        }),
                                        showMaxButton: !1,
                                        hideBalance: !1,
                                        fiatValue: null !== ne && void 0 !== ne ? ne : void 0,
                                        priceImpact: ie,
                                        currency: _[Di.OUTPUT],
                                        onCurrencySelect: dt,
                                        otherCurrency: _[Di.INPUT],
                                        showCommonBases: !0,
                                        id: "swap-currency-output"
                                    })]
                                }), null === D || Z ? null : Object(je.jsxs)(je.Fragment, {
                                    children: [Object(je.jsxs)(Vo, {
                                        justify: "space-between",
                                        style: {
                                            padding: "0 1rem"
                                        },
                                        children: [Object(je.jsx)(yp, {
                                            clickable: !1,
                                            children: Object(je.jsx)(Wm.a, {
                                                size: "16",
                                                color: N.text2
                                            })
                                        }), Object(je.jsx)(Jr, {
                                            id: "remove-recipient-button",
                                            onClick: function() {
                                                return de(null)
                                            },
                                            children: Object(je.jsx)(f.b, {
                                                id: "- Remove send"
                                            })
                                        })]
                                    }), Object(je.jsx)(lx, {
                                        id: "recipient",
                                        value: D,
                                        onChange: de
                                    })]
                                }), Z ? null : Object(je.jsxs)(Ho, {
                                    style: {
                                        justifyContent: q ? "space-between" : "center"
                                    },
                                    children: [Object(je.jsx)(_o, {}), q ? Object(je.jsxs)(_o, {
                                        children: [Object(je.jsx)(jx, {
                                            price: q.executionPrice,
                                            showInverted: nt,
                                            setShowInverted: it
                                        }), Object(je.jsx)(Nb, {
                                            content: Object(je.jsx)(ox, {
                                                trade: q,
                                                allowedSlippage: F
                                            }),
                                            children: Object(je.jsx)(Ux, {})
                                        })]
                                    }) : null]
                                }), Object(je.jsxs)("div", {
                                    children: [lt ? Object(je.jsx)(qc, {
                                        disabled: !0,
                                        children: Object(je.jsx)(Oo, {
                                            mb: "4px",
                                            children: Object(je.jsx)(f.b, {
                                                id: "Unsupported Asset"
                                            })
                                        })
                                    }) : h ? Z ? Object(je.jsx)(qc, {
                                        disabled: Boolean(K),
                                        onClick: J,
                                        children: null !== K && void 0 !== K ? K : G === Tx.WRAP ? Object(je.jsx)(f.b, {
                                            id: "Wrap"
                                        }) : G === Tx.UNWRAP ? Object(je.jsx)(f.b, {
                                            id: "Unwrap"
                                        }) : null
                                    }) : Ne && Ee ? Object(je.jsx)(Iu, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: Object(je.jsx)(Oo, {
                                            mb: "4px",
                                            children: Ze ? Object(je.jsx)(f.b, {
                                                id: "Insufficient liquidity for this trade. Try enabling multi-hop trades."
                                            }) : Object(je.jsx)(f.b, {
                                                id: "Insufficient liquidity for this trade."
                                            })
                                        })
                                    }) : ot ? Object(je.jsx)(Vo, {
                                        style: {
                                            flexWrap: "nowrap",
                                            width: "100%"
                                        },
                                        children: Object(je.jsxs)(Lo, {
                                            style: {
                                                width: "100%"
                                            },
                                            gap: "12px",
                                            children: [Object(je.jsx)(Jc, {
                                                onClick: We,
                                                disabled: Be !== eh.NOT_APPROVED || Ye || Le === _m.SIGNED,
                                                width: "100%",
                                                altDisabledStyle: Be === eh.PENDING,
                                                confirmed: Be === eh.APPROVED || Le === _m.SIGNED,
                                                children: Object(je.jsxs)(Vo, {
                                                    justify: "space-between",
                                                    style: {
                                                        flexWrap: "nowrap"
                                                    },
                                                    children: [Object(je.jsxs)("span", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center"
                                                        },
                                                        children: [Object(je.jsx)(rb, {
                                                            currency: _[Di.INPUT],
                                                            size: "20px",
                                                            style: {
                                                                marginRight: "8px",
                                                                flexShrink: 0
                                                            }
                                                        }), Be === eh.APPROVED || Le === _m.SIGNED ? Object(je.jsx)(f.b, {
                                                            id: "You can now trade {0}",
                                                            values: {
                                                                0: null === (u = _[Di.INPUT]) || void 0 === u ? void 0 : u.symbol
                                                            }
                                                        }) : Object(je.jsx)(f.b, {
                                                            id: "Allow ScrappyInu to use your {0}",
                                                            values: {
                                                                0: null === (d = _[Di.INPUT]) || void 0 === d ? void 0 : d.symbol
                                                            }
                                                        })]
                                                    }), Be === eh.PENDING ? Object(je.jsx)(as, {
                                                        stroke: "white"
                                                    }) : Ye && Be === eh.APPROVED || Le === _m.SIGNED ? Object(je.jsx)(ks.a, {
                                                        size: "20",
                                                        color: N.green1
                                                    }) : Object(je.jsx)(Sb, {
                                                        text: Object(je.jsx)(f.b, {
                                                            id: "You must give the ScrappyInu smart contracts permission to use your {0}. You only have to do this once per token.",
                                                            values: {
                                                                0: null === (b = _[Di.INPUT]) || void 0 === b ? void 0 : b.symbol
                                                            }
                                                        }),
                                                        children: Object(je.jsx)(ax.a, {
                                                            size: "20",
                                                            color: "white",
                                                            style: {
                                                                marginLeft: "8px"
                                                            }
                                                        })
                                                    })]
                                                })
                                            }), Object(je.jsx)(Kc, {
                                                onClick: function() {
                                                    M ? $e() : Te({
                                                        tradeToConfirm: q,
                                                        attemptingTxn: !1,
                                                        swapErrorMessage: void 0,
                                                        showConfirm: !0,
                                                        txHash: void 0
                                                    })
                                                },
                                                width: "100%",
                                                id: "swap-button",
                                                disabled: !le || Be !== eh.APPROVED && Le !== _m.SIGNED || bt,
                                                error: le && rt > 2,
                                                children: Object(je.jsx)(Ur.c, {
                                                    fontSize: 16,
                                                    fontWeight: 500,
                                                    children: bt ? Object(je.jsx)(f.b, {
                                                        id: "High Price Impact"
                                                    }) : rt > 2 ? Object(je.jsx)(f.b, {
                                                        id: "Swap Anyway"
                                                    }) : Object(je.jsx)(f.b, {
                                                        id: "Swap"
                                                    })
                                                })
                                            })]
                                        })
                                    }) : Object(je.jsx)(Kc, {
                                        onClick: function() {
                                            M ? $e() : Te({
                                                tradeToConfirm: q,
                                                attemptingTxn: !1,
                                                swapErrorMessage: void 0,
                                                showConfirm: !0,
                                                txHash: void 0
                                            })
                                        },
                                        id: "swap-button",
                                        disabled: !le || bt || !!Ke,
                                        error: le && rt > 2 && !Ke,
                                        children: Object(je.jsx)(Ur.c, {
                                            fontSize: 20,
                                            fontWeight: 500,
                                            children: H || (bt ? Object(je.jsx)(f.b, {
                                                id: "Price Impact Too High"
                                            }) : rt > 2 ? Object(je.jsx)(f.b, {
                                                id: "Swap Anyway"
                                            }) : Object(je.jsx)(f.b, {
                                                id: "Swap"
                                            }))
                                        })
                                    }) : Object(je.jsx)(Fc, {
                                        onClick: U,
                                        children: Object(je.jsx)(f.b, {
                                            id: "Connect Wallet"
                                        })
                                    }), M && we ? Object(je.jsx)(Ep, {
                                        error: we
                                    }) : null]
                                })]
                            })]
                        })]
                    }), Object(je.jsx)(Eh, {}), lt ? Object(je.jsx)(Ah, {
                        show: lt,
                        currencies: [_.INPUT, _.OUTPUT]
                    }) : null]
                })
            }

            function Mx(e) {
                var t = e.location;
                return Object(je.jsx)(gi.a, {
                    to: Object(He.a)(Object(He.a)({}, t), {}, {
                        pathname: "/swap"
                    })
                })
            }

            function Px(e) {
                var t = e.location.search,
                    n = e.match.params.outputCurrency;
                return Object(je.jsx)(gi.a, {
                    to: Object(He.a)(Object(He.a)({}, e.location), {}, {
                        pathname: "/swap",
                        search: t && t.length > 1 ? "".concat(t, "&outputCurrency=").concat(n) : "?outputCurrency=".concat(n)
                    })
                })
            }
            var Lx = Ni.default.div.withConfig({
                    componentId: "sc-1dv6j2d-0"
                })(["display:flex;flex-flow:column;align-items:flex-start;"]),
                zx = Ni.default.div.withConfig({
                    componentId: "sc-1dv6j2d-1"
                })(["display:flex;flex-direction:column;width:100%;padding:120px 16px 0px 16px;align-items:center;flex:1;z-index:1;", ";"], (function(e) {
                    return e.theme.mediaWidth.upToSmall(Rx || (Rx = Object(Si.a)(["\n    padding: 6rem 16px 16px 16px;\n  "])))
                })),
                Dx = Ni.default.div.withConfig({
                    componentId: "sc-1dv6j2d-2"
                })(["", " width:100%;justify-content:space-between;position:fixed;top:0;z-index:2;"], (function(e) {
                    return e.theme.flexRowNoWrap
                })),
                Wx = Ni.default.div.withConfig({
                    componentId: "sc-1dv6j2d-3"
                })(["margin-top:5rem;"]);

            function qx() {
                return Object(je.jsxs)(Zo, {
                    children: [Object(je.jsx)(gi.b, {
                        component: Ui
                    }), Object(je.jsx)(gi.b, {
                        component: Bl
                    }), Object(je.jsx)(gi.b, {
                        component: Ri
                    }), Object(je.jsx)(Ul, {
                        children: Object(je.jsxs)(Lx, {
                            children: [Object(je.jsx)(Dx, {
                                children: Object(je.jsx)(sl, {})
                            }), Object(je.jsxs)(zx, {
                                children: [Object(je.jsx)(Sl, {}), Object(je.jsx)(fl, {}), Object(je.jsxs)(gi.d, {
                                    children: [Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/stake",
                                        component: _h
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/stake",
                                        component: _h
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/stake/:currencyIdA/:currencyIdB",
                                        component: Cm
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/send",
                                        component: Mx
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/swap/:outputCurrency",
                                        component: Px
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/swap",
                                        component: Bx
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/pool/find",
                                        component: Pm
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/pool",
                                        component: Mm
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/add/:currencyIdA?/:currencyIdB?",
                                        component: Bh
                                    }), Object(je.jsx)(gi.b, {
                                        exact: !0,
                                        strict: !0,
                                        path: "/remove/:currencyIdA/:currencyIdB",
                                        component: tx
                                    }), Object(je.jsx)(gi.b, {
                                        component: Mx
                                    })]
                                }), Object(je.jsx)(Wx, {})]
                            })]
                        })
                    })]
                })
            }
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            var Fx = "visibilityState" in document;

            function Yx() {
                return !Fx || "hidden" !== document.visibilityState
            }

            function Vx() {
                var e = Object(a.useState)(Yx()),
                    t = Object(j.a)(e, 2),
                    n = t[0],
                    i = t[1],
                    r = Object(a.useCallback)((function() {
                        i(Yx())
                    }), [i]);
                return Object(a.useEffect)((function() {
                    if (Fx) return document.addEventListener("visibilitychange", r),
                        function() {
                            document.removeEventListener("visibilitychange", r)
                        }
                }), [r]), n
            }

            function _x() {
                var e = fe(),
                    t = e.library,
                    n = e.chainId,
                    i = Se(),
                    r = Vx(),
                    o = Object(a.useState)({
                        chainId: n,
                        blockNumber: null
                    }),
                    c = Object(j.a)(o, 2),
                    s = c[0],
                    u = c[1],
                    d = Object(a.useCallback)((function(e) {
                        u((function(t) {
                            return n === t.chainId ? "number" !== typeof t.blockNumber ? {
                                chainId: n,
                                blockNumber: e
                            } : {
                                chainId: n,
                                blockNumber: Math.max(e, t.blockNumber)
                            } : t
                        }))
                    }), [n, u]);
                Object(a.useEffect)((function() {
                    if (t && n && r) return u({
                            chainId: n,
                            blockNumber: null
                        }), t.getBlockNumber().then(d).catch((function(e) {
                            return console.error("Failed to get block number for chainId: ".concat(n), e)
                        })), t.on("block", d),
                        function() {
                            t.removeListener("block", d)
                        }
                }), [i, n, t, d, r]);
                var l = oa(s, 100);
                return Object(a.useEffect)((function() {
                    l.chainId && l.blockNumber && r && i(Vt({
                        chainId: l.chainId,
                        blockNumber: l.blockNumber
                    }))
                }), [r, i, l.blockNumber, l.chainId]), Object(a.useEffect)((function() {
                    var e;
                    i(Yt({
                        chainId: l.chainId && null !== (e = Gj(l.chainId)) && void 0 !== e ? e : null
                    }))
                }), [i, l.chainId]), null
            }

            function Hx() {
                var e = fe().library,
                    t = Se(),
                    n = Vx(),
                    i = Bt(),
                    r = Lt(),
                    o = tf();
                return mb(Object(a.useCallback)((function() {
                    n && Object.keys(i).forEach((function(e) {
                        return o(e).catch((function(e) {
                            return console.debug("interval list fetching error", e)
                        }))
                    }))
                }), [o, n, i]), e ? 6e5 : null), Object(a.useEffect)((function() {
                    Object.keys(i).forEach((function(e) {
                        var t = i[e];
                        t.current || t.loadingRequestId || t.error || o(e).catch((function(e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, i]), Object(a.useEffect)((function() {
                    kt.forEach((function(e) {
                        var t = i[e];
                        t && (t.current || t.loadingRequestId || t.error) || o(e).catch((function(e) {
                            return console.debug("list added fetching error", e)
                        }))
                    }))
                }), [t, o, e, i]), Object(a.useEffect)((function() {
                    Object.keys(i).forEach((function(e) {
                        var n = i[e];
                        if (n.current && n.pendingUpdate) {
                            var r = Object(sr.b)(n.current.version, n.pendingUpdate.version);
                            switch (r) {
                                case sr.a.NONE:
                                    throw new Error("unexpected no version bump");
                                case sr.a.PATCH:
                                case sr.a.MINOR:
                                    r >= Object(sr.c)(n.current.tokens, n.pendingUpdate.tokens) ? t(fr(e)) : console.error("List at url ".concat(e, " could not automatically update because the version bump was only PATCH/MINOR while the update had breaking changes and should have been MAJOR"));
                                    break;
                                case sr.a.MAJOR:
                                    t(fr(e))
                            }
                        }
                    }))
                }), [t, i, r]), null
            }
            var Qx = 2e5;

            function Gx(e, t) {
                return n = e + Math.round(Math.random() * Math.max(0, t - e)), new Promise((function(e) {
                    return setTimeout(e, n)
                }));
                var n
            }
            var Jx = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n() {
                        var e;
                        return Object(U.a)(this, n), (e = t.call(this, "Cancelled")).isCancelledError = !0, e
                    }
                    return n
                }(Object(P.a)(Error)),
                Kx = function(e) {
                    Object(B.a)(n, e);
                    var t = Object(M.a)(n);

                    function n() {
                        var e;
                        Object(U.a)(this, n);
                        for (var i = arguments.length, r = new Array(i), o = 0; o < i; o++) r[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(r))).isRetryableError = !0, e
                    }
                    return n
                }(Object(P.a)(Error));

            function Xx(e, t) {
                var n, i = t.n,
                    r = t.minWait,
                    o = t.maxWait,
                    a = !1;
                return {
                    promise: new Promise(function() {
                        var t = Object(R.a)(S.a.mark((function t(c, s) {
                            var u;
                            return S.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        n = s;
                                    case 1:
                                        return u = void 0, t.prev = 3, t.next = 6, e();
                                    case 6:
                                        return u = t.sent, a || (c(u), a = !0), t.abrupt("break", 24);
                                    case 11:
                                        if (t.prev = 11, t.t0 = t.catch(3), !a) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("break", 24);
                                    case 15:
                                        if (!(i <= 0) && t.t0.isRetryableError) {
                                            t.next = 19;
                                            break
                                        }
                                        return s(t.t0), a = !0, t.abrupt("break", 24);
                                    case 19:
                                        i--;
                                    case 20:
                                        return t.next = 22, Gx(r, o);
                                    case 22:
                                        t.next = 1;
                                        break;
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [3, 11]
                            ])
                        })));
                        return function(e, n) {
                            return t.apply(this, arguments)
                        }
                    }()),
                    cancel: function() {
                        a || (a = !0, n(new Jx))
                    }
                }
            }
            var Zx = 1e6;

            function $x() {
                return ($x = Object(R.a)(S.a.mark((function e(t, n, i) {
                    var r, o, a;
                    return S.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return console.debug("Fetching chunk", n, i), e.prev = 1, e.next = 4, t.callStatic.multicall(n.map((function(e) {
                                    var t;
                                    return {
                                        target: e.address,
                                        callData: e.callData,
                                        gasLimit: null !== (t = e.gasRequired) && void 0 !== t ? t : Zx
                                    }
                                })), {
                                    blockTag: i
                                });
                            case 4:
                                return r = e.sent, o = r.returnData, e.abrupt("return", o);
                            case 10:
                                if (e.prev = 10, e.t0 = e.catch(1), -32e3 !== e.t0.code && -1 === (null === (a = e.t0.message) || void 0 === a ? void 0 : a.indexOf("header not found"))) {
                                    e.next = 14;
                                    break
                                }
                                throw new Kx("header not found for block number ".concat(i));
                            case 14:
                                throw console.error("Failed to fetch chunk", e.t0), e.t0;
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))).apply(this, arguments)
            }

            function ev() {
                var e = Se(),
                    t = Ne((function(e) {
                        return e.multicall
                    })),
                    n = oa(t.callListeners, 100),
                    i = Gt(),
                    r = fe().chainId,
                    o = Mn(),
                    c = Object(a.useRef)(),
                    s = Object(a.useMemo)((function() {
                        return function(e, t) {
                            if (!e || !t) return {};
                            var n = e[t];
                            return n ? Object.keys(n).reduce((function(e, t) {
                                var i = n[t];
                                return e[t] = Object.keys(i).filter((function(e) {
                                    var t = parseInt(e);
                                    return !(t <= 0) && i[t] > 0
                                })).reduce((function(e, t) {
                                    return Math.min(e, parseInt(t))
                                }), 1 / 0), e
                            }), {}) : {}
                        }(n, r)
                    }), [n, r]),
                    u = Object(a.useMemo)((function() {
                        return function(e, t, n, i) {
                            return n && i ? e[n] ? Object.keys(t).filter((function(r) {
                                var o = t[r],
                                    a = e[n][r];
                                if (!a) return !0;
                                var c = i - (o - 1);
                                return !(a.fetchingBlockNumber && a.fetchingBlockNumber >= c) && (!a.blockNumber || a.blockNumber < c)
                            })) : Object.keys(t) : []
                        }(t.callResults, s, r, i)
                    }), [r, t.callResults, s, i]),
                    d = Object(a.useMemo)((function() {
                        return JSON.stringify(u.sort())
                    }), [u]);
                return Object(a.useEffect)((function() {
                    if (i && r && o) {
                        var t = JSON.parse(d);
                        if (0 !== t.length) {
                            var n = t.map((function(e) {
                                    return on(e)
                                })),
                                a = function(e) {
                                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e8, n = [], i = [], r = 0, o = 0; o < e.length; o++) {
                                        var a, c = e[o],
                                            s = null !== (a = null === c || void 0 === c ? void 0 : c.gasRequired) && void 0 !== a ? a : Qx;
                                        0 === i.length || r + s < t ? (i.push(c), r += s) : (n.push(i), i = [c], r = s)
                                    }
                                    return i.length > 0 && n.push(i), n
                                }(n);
                            c.current && c.current.blockNumber !== i && c.current.cancellations.forEach((function(e) {
                                return e()
                            })), e(en({
                                calls: n,
                                chainId: r,
                                fetchingBlockNumber: i
                            })), c.current = {
                                blockNumber: i,
                                cancellations: a.map((function(n, c) {
                                    var s = Xx((function() {
                                            return function(e, t, n) {
                                                return $x.apply(this, arguments)
                                            }(o, n, i)
                                        }), {
                                            n: 1 / 0,
                                            minWait: 1e3,
                                            maxWait: 2500
                                        }),
                                        u = s.cancel;
                                    return s.promise.then((function(n) {
                                        var o = a.slice(0, c).reduce((function(e, t) {
                                                return e + t.length
                                            }), 0),
                                            s = o + n.length,
                                            u = t.slice(o, s).reduce((function(e, t, i) {
                                                var r;
                                                n[i].success ? e.results[t] = null !== (r = n[i].returnData) && void 0 !== r ? r : null : e.erroredCalls.push(on(t));
                                                return e
                                            }), {
                                                erroredCalls: [],
                                                results: {}
                                            }),
                                            d = u.erroredCalls,
                                            l = u.results;
                                        Object.keys(l).length > 0 && e(nn({
                                            chainId: r,
                                            results: l,
                                            blockNumber: i
                                        })), d.length > 0 && (console.debug("Calls errored in fetch", d), e(tn({
                                            calls: d,
                                            chainId: r,
                                            fetchingBlockNumber: i
                                        })))
                                    })).catch((function(t) {
                                        t.isCancelledError ? console.debug("Cancelled fetch for blockNumber", i, n, r) : (console.error("Failed to fetch multicall chunk", n, r, t), e(tn({
                                            calls: n,
                                            chainId: r,
                                            fetchingBlockNumber: i
                                        })))
                                    })), u
                                }))
                            }
                        }
                    }
                }), [r, o, e, d, i]), null
            }

            function tv() {
                var e = Se(),
                    t = Ne((function(e) {
                        return e.logs
                    })),
                    n = fe(),
                    i = n.chainId,
                    r = n.library,
                    o = Gt(),
                    c = Object(a.useMemo)((function() {
                        if (!i || "number" !== typeof o) return [];
                        var e = t[i];
                        return e ? Object.keys(e).filter((function(t) {
                            var n = e[t],
                                i = n.fetchingBlockNumber,
                                r = n.results;
                            return 0 !== n.listeners && (!("number" === typeof i && i >= o) && !(r && "number" === typeof r.blockNumber && r.blockNumber >= o))
                        })).map((function(e) {
                            return function(e) {
                                var t = e.split(":"),
                                    n = t[0],
                                    i = t[1].split("-").map((function(e) {
                                        var t = e.split(";");
                                        return 1 === t.length ? t[0] : t
                                    }));
                                return {
                                    address: 0 === n.length ? void 0 : n,
                                    topics: i
                                }
                            }(e)
                        })) : []
                    }), [o, i, t]);
                return Object(a.useEffect)((function() {
                    r && i && "number" === typeof o && 0 !== c.length && (e(Ir({
                        chainId: i,
                        filters: c,
                        blockNumber: o
                    })), c.forEach((function(t) {
                        r.getLogs(Object(He.a)(Object(He.a)({}, t), {}, {
                            fromBlock: 0,
                            toBlock: o
                        })).then((function(n) {
                            e(Cr({
                                chainId: i,
                                filter: t,
                                results: {
                                    logs: n,
                                    blockNumber: o
                                }
                            }))
                        })).catch((function(n) {
                            console.error("Failed to get logs", t, n), e(Tr({
                                chainId: i,
                                filter: t,
                                blockNumber: o
                            }))
                        }))
                    })))
                }), [o, i, e, c, r]), null
            }
            var nv = {
                n: 1,
                minWait: 0,
                maxWait: 0
            };

            function iv() {
                var e = fe(),
                    t = e.chainId,
                    n = e.library,
                    i = Gt(),
                    r = Se(),
                    o = Ne((function(e) {
                        return e.transactions
                    })),
                    c = Object(a.useMemo)((function() {
                        var e;
                        return t && null !== (e = o[t]) && void 0 !== e ? e : {}
                    }), [t, o]),
                    s = function() {
                        var e = Se();
                        return Object(a.useCallback)((function(t, n) {
                            e(Ht({
                                content: t,
                                key: n
                            }))
                        }), [e])
                    }(),
                    u = Object(a.useCallback)((function(e) {
                        if (!n || !t) throw new Error("No library or chainId");
                        return Xx((function() {
                            return n.getTransactionReceipt(e).then((function(t) {
                                if (null === t) throw console.debug("Retrying for hash", e), new Kx;
                                return t
                            }))
                        }), nv)
                    }), [t, n]);
                return Object(a.useEffect)((function() {
                    if (t && n && i) {
                        var e = Object.keys(c).filter((function(e) {
                            return function(e, t) {
                                if (t.receipt) return !1;
                                if (!t.lastCheckedBlockNumber) return !0;
                                var n = e - t.lastCheckedBlockNumber;
                                if (n < 1) return !1;
                                var i = ((new Date).getTime() - t.addedTime) / 1e3 / 60;
                                return i > 60 ? n > 9 : !(i > 5) || n > 2
                            }(i, c[e])
                        })).map((function(e) {
                            var n = u(e),
                                o = n.promise,
                                a = n.cancel;
                            return o.then((function(n) {
                                var o;
                                n ? (r(Vi({
                                    chainId: t,
                                    hash: e,
                                    receipt: {
                                        blockHash: n.blockHash,
                                        blockNumber: n.blockNumber,
                                        contractAddress: n.contractAddress,
                                        from: n.from,
                                        status: n.status,
                                        to: n.to,
                                        transactionHash: n.transactionHash,
                                        transactionIndex: n.transactionIndex
                                    }
                                })), s({
                                    txn: {
                                        hash: e,
                                        success: 1 === n.status,
                                        summary: null === (o = c[e]) || void 0 === o ? void 0 : o.summary
                                    }
                                }, e), n.blockNumber > i && r(Vt({
                                    chainId: t,
                                    blockNumber: n.blockNumber
                                }))) : r(_i({
                                    chainId: t,
                                    hash: e,
                                    blockNumber: i
                                }))
                            })).catch((function(t) {
                                t.isCancelledError || console.error("Failed to check transaction hash: ".concat(e), t)
                            })), a
                        }));
                        return function() {
                            e.forEach((function(e) {
                                return e()
                            }))
                        }
                    }
                }), [t, n, c, i, r, s, u]), null
            }

            function rv() {
                var e = Se();
                return Object(a.useEffect)((function() {
                    var t, n = function(t) {
                            e(Gn({
                                matchesDarkMode: t.matches
                            }))
                        },
                        i = null === (t = window) || void 0 === t ? void 0 : t.matchMedia("(prefers-color-scheme: dark)");
                    return e(Gn({
                            matchesDarkMode: i.matches
                        })), (null === i || void 0 === i ? void 0 : i.addListener) ? null === i || void 0 === i || i.addListener(n) : (null === i || void 0 === i ? void 0 : i.addEventListener) && (null === i || void 0 === i || i.addEventListener("change", n)),
                        function() {
                            (null === i || void 0 === i ? void 0 : i.removeListener) ? null === i || void 0 === i || i.removeListener(n): (null === i || void 0 === i ? void 0 : i.removeEventListener) && (null === i || void 0 === i || i.removeEventListener("change", n))
                        }
                }), [e]), null
            }

            function ov(e) {
                var t = new x.a(e, "number" === typeof e.chainId ? e.chainId : "string" === typeof e.chainId ? parseInt(e.chainId) : "any");
                return t.pollingInterval = 15e3, t.detectNetwork(), t
            }
            var av = Object(o.createWeb3ReactRoot)(Z);
            window.ethereum && (window.ethereum.autoRefreshOnNetworkChange = !1);
            var cv = "UA-128182339-4";

            function sv() {
                return Object(je.jsxs)(je.Fragment, {
                    children: [Object(je.jsx)(Hx, {}), Object(je.jsx)(rv, {}), Object(je.jsx)(_x, {}), Object(je.jsx)(iv, {}), Object(je.jsx)(ev, {}), Object(je.jsx)(tv, {})]
                })
            }
            l.a.initialize(cv, {
                gaOptions: {
                    storage: "none",
                    storeGac: !1
                }
            }), l.a.set({
                anonymizeIp: !0,
                customBrowserType: s.isMobile ? "web3" in window || "ethereum" in window ? "mobileWeb3" : "mobileRegular" : "desktop"
            }), d.a.render(Object(je.jsx)(a.StrictMode, {
                children: Object(je.jsx)(b.a, {
                    store: Nr,
                    children: Object(je.jsx)(p.a, {
                        children: Object(je.jsx)(Ei, {
                            children: Object(je.jsx)(o.Web3ReactProvider, {
                                getLibrary: ov,
                                children: Object(je.jsx)(av, {
                                    getLibrary: ov,
                                    children: Object(je.jsxs)(me, {
                                        children: [Object(je.jsx)(sv, {}), Object(je.jsxs)(xo, {
                                            children: [Object(je.jsx)(Bo, {}), Object(je.jsx)(qx, {})]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })
            }), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [603, 2, 3]
    ]
]);
//# sourceMappingURL=main.9de95041.chunk.js.map