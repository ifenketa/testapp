from bitcoinaddress import Wallet

wallet = Wallet()
# private_key_wif = wallet.key.hex
# address = wallet.address
print(wallet.key.hex)
print(wallet.address.__dict__['mainnet'].__dict__["pubaddr1c"])
