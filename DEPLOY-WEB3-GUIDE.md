# 🚀 Guida Deploy Web3 - Revolution of Giving Landing Page

## 📋 Indice
1. [Deploy IPFS (Decentralizzato)](#deploy-ipfs)
2. [Deploy su Fleek (Consigliato)](#deploy-fleek)
3. [Deploy su Vercel con ENS](#deploy-vercel-ens)
4. [Deploy su GitHub Pages con Web3](#deploy-github-web3)
5. [Deploy su Arweave (Permanente)](#deploy-arweave)

---

## 🌐 Deploy IPFS (Decentralizzato)

### Metodo 1: IPFS Desktop
1. **Scarica IPFS Desktop**: https://github.com/ipfs/ipfs-desktop
2. **Installa e avvia** IPFS Desktop
3. **Aggiungi i file**:
   ```bash
   # Dalla cartella landingincorso
   ipfs add -r .
   ```
4. **Ottieni l'hash IPFS** (es: `QmXx...`)
5. **Accedi via gateway**:
   - `https://ipfs.io/ipfs/[TUO_HASH]`
   - `https://gateway.pinata.cloud/ipfs/[TUO_HASH]`

### Metodo 2: Pinata (Consigliato per principianti)
1. **Registrati** su https://pinata.cloud
2. **Upload** la cartella del progetto
3. **Ottieni l'hash IPFS**
4. **Il sito sarà accessibile** via gateway IPFS

---

## ⚡ Deploy su Fleek (Consigliato - Automatico)

### Setup Fleek
1. **Vai su** https://fleek.co
2. **Connetti GitHub** account
3. **Carica il repository** su GitHub prima:
   ```bash
   cd /Users/isacrisfoma/landingincorso
   git init
   git add .
   git commit -m "Initial commit - Revolution of Giving"
   git remote add origin [URL_TUO_REPO_GITHUB]
   git push -u origin main
   ```

### Configurazione Deploy
1. **Crea nuovo sito** su Fleek
2. **Seleziona il repository** GitHub
3. **Configurazioni**:
   - Framework: `Other`
   - Build Command: `npm run build` (opzionale)
   - Publish Directory: `./`
4. **Deploy automatico** - Fleek gestisce tutto!

### Risultato
- **URL IPFS**: `https://[hash].ipfs.dweb.link`
- **URL Fleek**: `https://[nome-sito].on.fleek.co`
- **Auto-deploy** ad ogni push su GitHub

---

## 🔗 Deploy su Vercel con ENS

### Setup Vercel
1. **Registrati** su https://vercel.com
2. **Connetti GitHub** e importa il repository
3. **Deploy automatico**

### Configurazione ENS (Opzionale)
1. **Acquista dominio ENS**: https://app.ens.domains
   - Es: `revolutionofgiving.eth`
2. **Configura record**:
   - Tipo: `CONTENT`
   - Valore: Hash IPFS del sito
3. **Il sito sarà accessibile** via browser Web3

---

## 📁 Deploy su GitHub Pages con Web3

### Setup Repository
```bash
cd /Users/isacrisfoma/landingincorso

# Inizializza Git se non fatto
git init
git add .
git commit -m "Revolution of Giving - Landing Page"

# Crea repository su GitHub e collega
git remote add origin [URL_TUO_REPO]
git push -u origin main
```

### Attiva GitHub Pages
1. **Vai nelle impostazioni** del repository
2. **Sezione Pages**
3. **Source**: Deploy from branch
4. **Branch**: `main` / `root`
5. **Il sito sarà su**: `https://[username].github.io/[repository-name]`

### Integrazione Web3
1. **Aggiungi wallet connect** (MetaMask, WalletConnect)
2. **Integra Web3.js** o **ethers.js**
3. **Connessione blockchain** per funzionalità future

---

## 🏛️ Deploy su Arweave (Permanente)

### Cos'è Arweave
- **Storage permanente** decentralizzato
- **Pagamento una volta**, hosting per sempre
- **Ideale** per progetti importanti

### Deploy con ArDrive
1. **Vai su** https://ardrive.io
2. **Crea account** e ottieni AR tokens
3. **Upload** la cartella del progetto
4. **Ottieni URL permanente**

### Deploy con arkb CLI
```bash
# Installa arkb
npm install -g arkb

# Deploy (necessita AR tokens)
arkb deploy /Users/isacrisfoma/landingincorso --wallet [path-to-wallet.json]
```

---

## 🛠️ Preparazione File per Web3

### Ottimizzazioni necessarie
1. **Comprimi immagini**:
   ```bash
   # Riduci dimensioni per IPFS
   # Usa WebP invece di PNG quando possibile
   ```

2. **Minimizza CSS/JS**:
   ```bash
   # Rimuovi spazi e commenti
   # Comprimi file per velocità
   ```

3. **Hash integrity** per sicurezza:
   ```html
   <link rel="stylesheet" href="styles.css" integrity="sha256-[hash]">
   ```

---

## 🎯 Raccomandazioni per Revolution of Giving

### Deploy Principale (Consigliato)
1. **Fleek** - Per facilità e automazione
2. **GitHub Pages** - Per backup e versioning
3. **IPFS/Pinata** - Per decentralizzazione vera

### Dominio Personalizzato
1. **Acquista ENS**: `revolutionofgiving.eth`
2. **Configura DNS** tradizionale come backup
3. **Certificates SSL** automatici

### Monitoraggio
1. **Analytics Web3** con Dune Analytics
2. **Uptime monitoring** con tools decentralizzati
3. **Performance** via Web3 metrics

---

## 📞 Supporto e Risorse

### Community Web3
- **Discord Fleek**: https://discord.gg/fleek
- **IPFS Community**: https://discuss.ipfs.io
- **ENS Discord**: https://discord.gg/ensdomains

### Tools Utili
- **IPFS Gateway Checker**: https://ipfs.github.io/public-gateway-checker/
- **Web3 Speed Test**: https://web3-speed-test.vercel.app
- **ENS Manager**: https://app.ens.domains

---

## ✅ Checklist Deploy

- [ ] Backup progetto in `landingincorso`
- [ ] Repository GitHub creato
- [ ] Deploy su Fleek configurato
- [ ] IPFS hash ottenuto
- [ ] Dominio ENS (opzionale)
- [ ] Monitoring attivo
- [ ] Performance testata
- [ ] Community notificata

---

**🚀 Il futuro è decentralizzato - Revolution of Giving è pronta per Web3!**
