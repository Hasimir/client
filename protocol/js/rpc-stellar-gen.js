// @flow
/* eslint-disable */

// This file is auto-generated by client/protocol/Makefile.
import * as Keybase1 from './rpc-gen'
import engine, {EngineChannel} from '../../engine'
import type {Boolean, Bool, Bytes, Double, Int, Int64, Long, String, Uint, Uint64, WaitingHandlerType, RPCErrorHandler, CommonResponseHandler, RPCError} from '../../engine/types'

export const bundleAccountMode = {
  none: 0,
  user: 1,
}

export const bundleBundleVersion = {
  v1: 1,
}

export const commonPaymentStrategy = {
  none: 0,
  direct: 1,
  relay: 2,
}

export const commonRelayDirection = {
  claim: 0,
  yank: 1,
}

export const commonTransactionStatus = {
  none: 0,
  pending: 1,
  success: 2,
  errorTransient: 3,
  errorPermanent: 4,
}

export const localBalancesLocalRpcChannelMap = (configKeys: Array<string>, request: LocalBalancesLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.balancesLocal', request)

export const localBalancesLocalRpcPromise = (request: LocalBalancesLocalRpcParam): Promise<LocalBalancesLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.balancesLocal', request, (error: RPCError, result: LocalBalancesLocalResult) => (error ? reject(error) : resolve(result))))

export const localChangeDisplayCurrencyLocalRpcChannelMap = (configKeys: Array<string>, request: LocalChangeDisplayCurrencyLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.changeDisplayCurrencyLocal', request)

export const localChangeDisplayCurrencyLocalRpcPromise = (request: LocalChangeDisplayCurrencyLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.changeDisplayCurrencyLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localChangeWalletAccountNameLocalRpcChannelMap = (configKeys: Array<string>, request: LocalChangeWalletAccountNameLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.changeWalletAccountNameLocal', request)

export const localChangeWalletAccountNameLocalRpcPromise = (request: LocalChangeWalletAccountNameLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.changeWalletAccountNameLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localClaimCLILocalRpcChannelMap = (configKeys: Array<string>, request: LocalClaimCLILocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.claimCLILocal', request)

export const localClaimCLILocalRpcPromise = (request: LocalClaimCLILocalRpcParam): Promise<LocalClaimCLILocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.claimCLILocal', request, (error: RPCError, result: LocalClaimCLILocalResult) => (error ? reject(error) : resolve(result))))

export const localDeleteWalletAccountLocalRpcChannelMap = (configKeys: Array<string>, request: LocalDeleteWalletAccountLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.deleteWalletAccountLocal', request)

export const localDeleteWalletAccountLocalRpcPromise = (request: LocalDeleteWalletAccountLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.deleteWalletAccountLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localExchangeRateLocalRpcChannelMap = (configKeys: Array<string>, request: LocalExchangeRateLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.exchangeRateLocal', request)

export const localExchangeRateLocalRpcPromise = (request: LocalExchangeRateLocalRpcParam): Promise<LocalExchangeRateLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.exchangeRateLocal', request, (error: RPCError, result: LocalExchangeRateLocalResult) => (error ? reject(error) : resolve(result))))

export const localExportSecretKeyLocalRpcChannelMap = (configKeys: Array<string>, request: LocalExportSecretKeyLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.exportSecretKeyLocal', request)

export const localExportSecretKeyLocalRpcPromise = (request: LocalExportSecretKeyLocalRpcParam): Promise<LocalExportSecretKeyLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.exportSecretKeyLocal', request, (error: RPCError, result: LocalExportSecretKeyLocalResult) => (error ? reject(error) : resolve(result))))

export const localFormatLocalCurrencyStringRpcChannelMap = (configKeys: Array<string>, request: LocalFormatLocalCurrencyStringRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.formatLocalCurrencyString', request)

export const localFormatLocalCurrencyStringRpcPromise = (request: LocalFormatLocalCurrencyStringRpcParam): Promise<LocalFormatLocalCurrencyStringResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.formatLocalCurrencyString', request, (error: RPCError, result: LocalFormatLocalCurrencyStringResult) => (error ? reject(error) : resolve(result))))

export const localGetAccountAssetsLocalRpcChannelMap = (configKeys: Array<string>, request: LocalGetAccountAssetsLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.getAccountAssetsLocal', request)

export const localGetAccountAssetsLocalRpcPromise = (request: LocalGetAccountAssetsLocalRpcParam): Promise<LocalGetAccountAssetsLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.getAccountAssetsLocal', request, (error: RPCError, result: LocalGetAccountAssetsLocalResult) => (error ? reject(error) : resolve(result))))

export const localGetAvailableLocalCurrenciesRpcChannelMap = (configKeys: Array<string>, request: LocalGetAvailableLocalCurrenciesRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.getAvailableLocalCurrencies', request)

export const localGetAvailableLocalCurrenciesRpcPromise = (request: LocalGetAvailableLocalCurrenciesRpcParam): Promise<LocalGetAvailableLocalCurrenciesResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.getAvailableLocalCurrencies', request, (error: RPCError, result: LocalGetAvailableLocalCurrenciesResult) => (error ? reject(error) : resolve(result))))

export const localGetDisplayCurrenciesLocalRpcChannelMap = (configKeys: Array<string>, request: LocalGetDisplayCurrenciesLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.getDisplayCurrenciesLocal', request)

export const localGetDisplayCurrenciesLocalRpcPromise = (request: LocalGetDisplayCurrenciesLocalRpcParam): Promise<LocalGetDisplayCurrenciesLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.getDisplayCurrenciesLocal', request, (error: RPCError, result: LocalGetDisplayCurrenciesLocalResult) => (error ? reject(error) : resolve(result))))

export const localGetUserSettingsLocalRpcChannelMap = (configKeys: Array<string>, request: LocalGetUserSettingsLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.getUserSettingsLocal', request)

export const localGetUserSettingsLocalRpcPromise = (request: LocalGetUserSettingsLocalRpcParam): Promise<LocalGetUserSettingsLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.getUserSettingsLocal', request, (error: RPCError, result: LocalGetUserSettingsLocalResult) => (error ? reject(error) : resolve(result))))

export const localGetWalletAccountsLocalRpcChannelMap = (configKeys: Array<string>, request: LocalGetWalletAccountsLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.getWalletAccountsLocal', request)

export const localGetWalletAccountsLocalRpcPromise = (request: LocalGetWalletAccountsLocalRpcParam): Promise<LocalGetWalletAccountsLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.getWalletAccountsLocal', request, (error: RPCError, result: LocalGetWalletAccountsLocalResult) => (error ? reject(error) : resolve(result))))

export const localImportSecretKeyLocalRpcChannelMap = (configKeys: Array<string>, request: LocalImportSecretKeyLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.importSecretKeyLocal', request)

export const localImportSecretKeyLocalRpcPromise = (request: LocalImportSecretKeyLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.importSecretKeyLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localLinkNewWalletAccountLocalRpcChannelMap = (configKeys: Array<string>, request: LocalLinkNewWalletAccountLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.linkNewWalletAccountLocal', request)

export const localLinkNewWalletAccountLocalRpcPromise = (request: LocalLinkNewWalletAccountLocalRpcParam): Promise<LocalLinkNewWalletAccountLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.linkNewWalletAccountLocal', request, (error: RPCError, result: LocalLinkNewWalletAccountLocalResult) => (error ? reject(error) : resolve(result))))

export const localOwnAccountLocalRpcChannelMap = (configKeys: Array<string>, request: LocalOwnAccountLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.ownAccountLocal', request)

export const localOwnAccountLocalRpcPromise = (request: LocalOwnAccountLocalRpcParam): Promise<LocalOwnAccountLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.ownAccountLocal', request, (error: RPCError, result: LocalOwnAccountLocalResult) => (error ? reject(error) : resolve(result))))

export const localPaymentDetailCLILocalRpcChannelMap = (configKeys: Array<string>, request: LocalPaymentDetailCLILocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.paymentDetailCLILocal', request)

export const localPaymentDetailCLILocalRpcPromise = (request: LocalPaymentDetailCLILocalRpcParam): Promise<LocalPaymentDetailCLILocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.paymentDetailCLILocal', request, (error: RPCError, result: LocalPaymentDetailCLILocalResult) => (error ? reject(error) : resolve(result))))

export const localRecentPaymentsCLILocalRpcChannelMap = (configKeys: Array<string>, request: LocalRecentPaymentsCLILocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.recentPaymentsCLILocal', request)

export const localRecentPaymentsCLILocalRpcPromise = (request: LocalRecentPaymentsCLILocalRpcParam): Promise<LocalRecentPaymentsCLILocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.recentPaymentsCLILocal', request, (error: RPCError, result: LocalRecentPaymentsCLILocalResult) => (error ? reject(error) : resolve(result))))

export const localSendCLILocalRpcChannelMap = (configKeys: Array<string>, request: LocalSendCLILocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.sendCLILocal', request)

export const localSendCLILocalRpcPromise = (request: LocalSendCLILocalRpcParam): Promise<LocalSendCLILocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.sendCLILocal', request, (error: RPCError, result: LocalSendCLILocalResult) => (error ? reject(error) : resolve(result))))

export const localSetAcceptedDisclaimerLocalRpcChannelMap = (configKeys: Array<string>, request: LocalSetAcceptedDisclaimerLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.setAcceptedDisclaimerLocal', request)

export const localSetAcceptedDisclaimerLocalRpcPromise = (request: LocalSetAcceptedDisclaimerLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.setAcceptedDisclaimerLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localSetDisplayCurrencyRpcChannelMap = (configKeys: Array<string>, request: LocalSetDisplayCurrencyRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.setDisplayCurrency', request)

export const localSetDisplayCurrencyRpcPromise = (request: LocalSetDisplayCurrencyRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.setDisplayCurrency', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localSetWalletAccountAsDefaultLocalRpcChannelMap = (configKeys: Array<string>, request: LocalSetWalletAccountAsDefaultLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.setWalletAccountAsDefaultLocal', request)

export const localSetWalletAccountAsDefaultLocalRpcPromise = (request: LocalSetWalletAccountAsDefaultLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.setWalletAccountAsDefaultLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const localWalletDumpLocalRpcChannelMap = (configKeys: Array<string>, request: LocalWalletDumpLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.walletDumpLocal', request)

export const localWalletDumpLocalRpcPromise = (request: LocalWalletDumpLocalRpcParam): Promise<LocalWalletDumpLocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.walletDumpLocal', request, (error: RPCError, result: LocalWalletDumpLocalResult) => (error ? reject(error) : resolve(result))))

export const localWalletGetAccountsCLILocalRpcChannelMap = (configKeys: Array<string>, request: LocalWalletGetAccountsCLILocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.walletGetAccountsCLILocal', request)

export const localWalletGetAccountsCLILocalRpcPromise = (request: LocalWalletGetAccountsCLILocalRpcParam): Promise<LocalWalletGetAccountsCLILocalResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.walletGetAccountsCLILocal', request, (error: RPCError, result: LocalWalletGetAccountsCLILocalResult) => (error ? reject(error) : resolve(result))))

export const localWalletInitLocalRpcChannelMap = (configKeys: Array<string>, request: LocalWalletInitLocalRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.local.walletInitLocal', request)

export const localWalletInitLocalRpcPromise = (request: LocalWalletInitLocalRpcParam): Promise<void> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.local.walletInitLocal', request, (error: RPCError, result: void) => (error ? reject(error) : resolve())))

export const remoteAccountSeqnoRpcChannelMap = (configKeys: Array<string>, request: RemoteAccountSeqnoRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.accountSeqno', request)

export const remoteAccountSeqnoRpcPromise = (request: RemoteAccountSeqnoRpcParam): Promise<RemoteAccountSeqnoResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.accountSeqno', request, (error: RPCError, result: RemoteAccountSeqnoResult) => (error ? reject(error) : resolve(result))))

export const remoteBalancesRpcChannelMap = (configKeys: Array<string>, request: RemoteBalancesRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.balances', request)

export const remoteBalancesRpcPromise = (request: RemoteBalancesRpcParam): Promise<RemoteBalancesResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.balances', request, (error: RPCError, result: RemoteBalancesResult) => (error ? reject(error) : resolve(result))))

export const remoteDetailsRpcChannelMap = (configKeys: Array<string>, request: RemoteDetailsRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.details', request)

export const remoteDetailsRpcPromise = (request: RemoteDetailsRpcParam): Promise<RemoteDetailsResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.details', request, (error: RPCError, result: RemoteDetailsResult) => (error ? reject(error) : resolve(result))))

export const remoteIsMasterKeyActiveRpcChannelMap = (configKeys: Array<string>, request: RemoteIsMasterKeyActiveRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.isMasterKeyActive', request)

export const remoteIsMasterKeyActiveRpcPromise = (request: RemoteIsMasterKeyActiveRpcParam): Promise<RemoteIsMasterKeyActiveResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.isMasterKeyActive', request, (error: RPCError, result: RemoteIsMasterKeyActiveResult) => (error ? reject(error) : resolve(result))))

export const remotePaymentDetailRpcChannelMap = (configKeys: Array<string>, request: RemotePaymentDetailRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.paymentDetail', request)

export const remotePaymentDetailRpcPromise = (request: RemotePaymentDetailRpcParam): Promise<RemotePaymentDetailResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.paymentDetail', request, (error: RPCError, result: RemotePaymentDetailResult) => (error ? reject(error) : resolve(result))))

export const remotePaymentSummaryType = {
  none: 0,
  stellar: 1,
  direct: 2,
  relay: 3,
}

export const remotePingRpcChannelMap = (configKeys: Array<string>, request: RemotePingRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.ping', request)

export const remotePingRpcPromise = (request: RemotePingRpcParam): Promise<RemotePingResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.ping', request, (error: RPCError, result: RemotePingResult) => (error ? reject(error) : resolve(result))))

export const remoteRecentPaymentsRpcChannelMap = (configKeys: Array<string>, request: RemoteRecentPaymentsRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.recentPayments', request)

export const remoteRecentPaymentsRpcPromise = (request: RemoteRecentPaymentsRpcParam): Promise<RemoteRecentPaymentsResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.recentPayments', request, (error: RPCError, result: RemoteRecentPaymentsResult) => (error ? reject(error) : resolve(result))))

export const remoteSubmitPaymentRpcChannelMap = (configKeys: Array<string>, request: RemoteSubmitPaymentRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.submitPayment', request)

export const remoteSubmitPaymentRpcPromise = (request: RemoteSubmitPaymentRpcParam): Promise<RemoteSubmitPaymentResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.submitPayment', request, (error: RPCError, result: RemoteSubmitPaymentResult) => (error ? reject(error) : resolve(result))))

export const remoteSubmitRelayClaimRpcChannelMap = (configKeys: Array<string>, request: RemoteSubmitRelayClaimRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.submitRelayClaim', request)

export const remoteSubmitRelayClaimRpcPromise = (request: RemoteSubmitRelayClaimRpcParam): Promise<RemoteSubmitRelayClaimResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.submitRelayClaim', request, (error: RPCError, result: RemoteSubmitRelayClaimResult) => (error ? reject(error) : resolve(result))))

export const remoteSubmitRelayPaymentRpcChannelMap = (configKeys: Array<string>, request: RemoteSubmitRelayPaymentRpcParam): EngineChannel => engine()._channelMapRpcHelper(configKeys, 'stellar.1.remote.submitRelayPayment', request)

export const remoteSubmitRelayPaymentRpcPromise = (request: RemoteSubmitRelayPaymentRpcParam): Promise<RemoteSubmitRelayPaymentResult> => new Promise((resolve, reject) => engine()._rpcOutgoing('stellar.1.remote.submitRelayPayment', request, (error: RPCError, result: RemoteSubmitRelayPaymentResult) => (error ? reject(error) : resolve(result))))

export type AccountAssetLocal = $ReadOnly<{name: String, balanceTotal: String, balanceAvailableToSend: String, assetCode: String, issuer: String, worth: String, worthCurrency: String}>

export type AccountDetails = $ReadOnly<{accountID: AccountID, seqno: String, balances?: ?Array<Balance>, subentryCount: Int, available: String}>

export type AccountID = String

export type AccountMode =
  | 0 // NONE_0
  | 1 // USER_1

export type Asset = $ReadOnly<{type: String, code: String, issuer: String}>

export type Balance = $ReadOnly<{asset: Asset, amount: String, limit: String}>

export type Bundle = $ReadOnly<{revision: BundleRevision, prev: Hash, ownHash: Hash, accounts?: ?Array<BundleEntry>}>

export type BundleEntry = $ReadOnly<{accountID: AccountID, mode: AccountMode, isPrimary: Boolean, signers?: ?Array<SecretKey>, name: String}>

export type BundleRevision = Uint64

export type BundleSecretEntry = $ReadOnly<{accountID: AccountID, signers?: ?Array<SecretKey>, name: String}>

export type BundleSecretV1 = $ReadOnly<{visibleHash: Hash, accounts?: ?Array<BundleSecretEntry>}>

export type BundleSecretVersioned = {version: 1, v1: ?BundleSecretV1}

export type BundleVersion = 1 // V1_1

export type BundleVisibleEntry = $ReadOnly<{accountID: AccountID, mode: AccountMode, isPrimary: Boolean}>

export type BundleVisibleV1 = $ReadOnly<{revision: BundleRevision, prev: Hash, accounts?: ?Array<BundleVisibleEntry>}>

export type ClaimSummary = $ReadOnly<{txID: TransactionID, txStatus: TransactionStatus, txErrMsg: String, dir: RelayDirection, toStellar: AccountID, to: Keybase1.UserVersion}>

export type CurrencyLocal = $ReadOnly<{description: String, code: OutsideCurrencyCode, symbol: String, name: String}>

export type CurrencySymbol = $ReadOnly<{symbol: String, ambigious: Boolean, postfix: Boolean}>

export type EncryptedBundle = $ReadOnly<{v: Int, e: Bytes, n: Keybase1.BoxNonce, gen: Keybase1.PerUserKeyGeneration}>

export type EncryptedNote = $ReadOnly<{v: Int, e: Bytes, n: Keybase1.BoxNonce, sender: NoteRecipient, recipient?: ?NoteRecipient}>

export type EncryptedRelaySecret = $ReadOnly<{v: Int, e: Bytes, n: Keybase1.BoxNonce, gen: Keybase1.PerTeamKeyGeneration}>

export type Hash = Bytes

export type KeybaseTransactionID = String

export type LocalBalancesLocalRpcParam = $ReadOnly<{accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalChangeDisplayCurrencyLocalRpcParam = $ReadOnly<{accountID: AccountID, currency: OutsideCurrencyCode, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalChangeWalletAccountNameLocalRpcParam = $ReadOnly<{accountID: AccountID, newName: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalClaimCLILocalRpcParam = $ReadOnly<{txID: String, into?: ?AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalDeleteWalletAccountLocalRpcParam = $ReadOnly<{accountID: AccountID, userAcknowledged: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalExchangeRateLocalRpcParam = $ReadOnly<{currency: OutsideCurrencyCode, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalExportSecretKeyLocalRpcParam = $ReadOnly<{accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalFormatLocalCurrencyStringRpcParam = $ReadOnly<{amount: String, code: OutsideCurrencyCode, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalGetAccountAssetsLocalRpcParam = $ReadOnly<{accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalGetAvailableLocalCurrenciesRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalGetDisplayCurrenciesLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalGetUserSettingsLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalGetWalletAccountsLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalImportSecretKeyLocalRpcParam = $ReadOnly<{secretKey: SecretKey, makePrimary: Boolean, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalLinkNewWalletAccountLocalRpcParam = $ReadOnly<{secretKey: SecretKey, name: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalOwnAccountLocalRpcParam = $ReadOnly<{accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalPaymentDetailCLILocalRpcParam = $ReadOnly<{txID: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalRecentPaymentsCLILocalRpcParam = $ReadOnly<{accountID?: ?AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalSendCLILocalRpcParam = $ReadOnly<{recipient: String, amount: String, asset: Asset, note: String, displayAmount: String, displayCurrency: String, forceRelay: Boolean, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalSetAcceptedDisclaimerLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalSetDisplayCurrencyRpcParam = $ReadOnly<{accountID: AccountID, currency: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalSetWalletAccountAsDefaultLocalRpcParam = $ReadOnly<{accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalWalletDumpLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalWalletGetAccountsCLILocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type LocalWalletInitLocalRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type NoteContents = $ReadOnly<{note: String, stellarID: TransactionID}>

export type NoteRecipient = $ReadOnly<{user: Keybase1.UserVersion, pukGen: Keybase1.PerUserKeyGeneration}>

export type OutsideCurrencyCode = String

export type OutsideCurrencyDefinition = $ReadOnly<{name: String, symbol: CurrencySymbol}>

export type OutsideExchangeRate = $ReadOnly<{currency: OutsideCurrencyCode, rate: String}>

export type OwnAccountCLILocal = $ReadOnly<{accountID: AccountID, isPrimary: Boolean, name: String, balance?: ?Array<Balance>, exchangeRate?: ?OutsideExchangeRate}>

export type PaymentCLILocal = $ReadOnly<{txID: TransactionID, time: TimeMs, status: String, statusDetail: String, amount: String, asset: Asset, displayAmount?: ?String, displayCurrency?: ?String, fromStellar: AccountID, toStellar?: ?AccountID, fromUsername?: ?String, toUsername?: ?String, note: String, noteErr: String}>

export type PaymentCLIOptionLocal = $ReadOnly<{payment?: ?PaymentCLILocal, err: String}>

export type PaymentDirectPost = $ReadOnly<{fromDeviceID: Keybase1.DeviceID, to?: ?Keybase1.UserVersion, displayAmount: String, displayCurrency: String, noteB64: String, signedTransaction: String}>

export type PaymentRelayPost = $ReadOnly<{fromDeviceID: Keybase1.DeviceID, to?: ?Keybase1.UserVersion, toAssertion: String, relayAccount: AccountID, teamID: Keybase1.TeamID, displayAmount: String, displayCurrency: String, boxB64: String, signedTransaction: String}>

export type PaymentResult = $ReadOnly<{keybaseID: KeybaseTransactionID, stellarID: TransactionID}>

export type PaymentStrategy =
  | 0 // NONE_0
  | 1 // DIRECT_1
  | 2 // RELAY_2

export type PaymentSummary = {typ: 1, stellar: ?PaymentSummaryStellar} | {typ: 2, direct: ?PaymentSummaryDirect} | {typ: 3, relay: ?PaymentSummaryRelay}

export type PaymentSummaryDirect = $ReadOnly<{kbTxID: KeybaseTransactionID, txID: TransactionID, txStatus: TransactionStatus, txErrMsg: String, fromStellar: AccountID, from: Keybase1.UserVersion, fromDeviceID: Keybase1.DeviceID, toStellar: AccountID, to?: ?Keybase1.UserVersion, amount: String, asset: Asset, displayAmount?: ?String, displayCurrency?: ?String, noteB64: String, ctime: TimeMs, rtime: TimeMs}>

export type PaymentSummaryRelay = $ReadOnly<{kbTxID: KeybaseTransactionID, txID: TransactionID, txStatus: TransactionStatus, txErrMsg: String, fromStellar: AccountID, from: Keybase1.UserVersion, fromDeviceID: Keybase1.DeviceID, to?: ?Keybase1.UserVersion, relayAccount: AccountID, amount: String, displayAmount?: ?String, displayCurrency?: ?String, ctime: TimeMs, rtime: TimeMs, boxB64: String, teamID: Keybase1.TeamID, claim?: ?ClaimSummary}>

export type PaymentSummaryStellar = $ReadOnly<{txID: TransactionID, from: AccountID, to: AccountID, amount: String, asset: Asset, operationID: Uint64, ctime: TimeMs}>

export type PaymentSummaryType =
  | 0 // NONE_0
  | 1 // STELLAR_1
  | 2 // DIRECT_2
  | 3 // RELAY_3

export type RelayClaimPost = $ReadOnly<{keybaseID: KeybaseTransactionID, dir: RelayDirection, signedTransaction: String}>

export type RelayClaimResult = $ReadOnly<{claimStellarID: TransactionID}>

export type RelayContents = $ReadOnly<{stellarID: TransactionID, sk: SecretKey, note: String}>

export type RelayDirection =
  | 0 // CLAIM_0
  | 1 // YANK_1

export type RemoteAccountSeqnoRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteBalancesRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteDetailsRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteIsMasterKeyActiveRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, accountID: AccountID, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemotePaymentDetailRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, txID: String, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemotePingRpcParam = ?$ReadOnly<{incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteRecentPaymentsRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, accountID: AccountID, limit: Int, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteSubmitPaymentRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, payment: PaymentDirectPost, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteSubmitRelayClaimRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, claim: RelayClaimPost, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type RemoteSubmitRelayPaymentRpcParam = $ReadOnly<{caller: Keybase1.UserVersion, payment: PaymentRelayPost, incomingCallMap?: IncomingCallMapType, waitingHandler?: WaitingHandlerType}>

export type SecretKey = String

export type SendRelayResultCLILocal = $ReadOnly<{teamID: Keybase1.TeamID}>

export type SendResultCLILocal = $ReadOnly<{kbTxID: KeybaseTransactionID, txID: TransactionID, relay?: ?SendRelayResultCLILocal}>

export type StellarServerDefinitions = $ReadOnly<{revision: Int, currencies: {[key: string]: OutsideCurrencyDefinition}}>

export type TimeMs = Long

export type TransactionID = String

export type TransactionStatus =
  | 0 // NONE_0
  | 1 // PENDING_1
  | 2 // SUCCESS_2
  | 3 // ERROR_TRANSIENT_3
  | 4 // ERROR_PERMANENT_4

export type UserSettings = $ReadOnly<{acceptedDisclaimer: Boolean}>

export type WalletAccountLocal = $ReadOnly<{accountID: AccountID, isDefault: Boolean, name: String, balanceDescription: String}>
type LocalBalancesLocalResult = ?Array<Balance>
type LocalClaimCLILocalResult = RelayClaimResult
type LocalExchangeRateLocalResult = OutsideExchangeRate
type LocalExportSecretKeyLocalResult = SecretKey
type LocalFormatLocalCurrencyStringResult = String
type LocalGetAccountAssetsLocalResult = ?Array<AccountAssetLocal>
type LocalGetAvailableLocalCurrenciesResult = {[key: string]: OutsideCurrencyDefinition}
type LocalGetDisplayCurrenciesLocalResult = ?Array<CurrencyLocal>
type LocalGetUserSettingsLocalResult = UserSettings
type LocalGetWalletAccountsLocalResult = ?Array<WalletAccountLocal>
type LocalLinkNewWalletAccountLocalResult = AccountID
type LocalOwnAccountLocalResult = Boolean
type LocalPaymentDetailCLILocalResult = PaymentCLILocal
type LocalRecentPaymentsCLILocalResult = ?Array<PaymentCLIOptionLocal>
type LocalSendCLILocalResult = SendResultCLILocal
type LocalWalletDumpLocalResult = Bundle
type LocalWalletGetAccountsCLILocalResult = ?Array<OwnAccountCLILocal>
type RemoteAccountSeqnoResult = String
type RemoteBalancesResult = ?Array<Balance>
type RemoteDetailsResult = AccountDetails
type RemoteIsMasterKeyActiveResult = Boolean
type RemotePaymentDetailResult = PaymentSummary
type RemotePingResult = String
type RemoteRecentPaymentsResult = ?Array<PaymentSummary>
type RemoteSubmitPaymentResult = PaymentResult
type RemoteSubmitRelayClaimResult = RelayClaimResult
type RemoteSubmitRelayPaymentResult = PaymentResult

export type IncomingCallMapType = {||}
