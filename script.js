const canvas = document.getElementById('matrix-canvas');
 const ctx = document.createElement('canvas').getContext('2d');
 canvas.appendChild(ctx.canvas);
 
 ctx.canvas.width = window.innerWidth;
 ctx.canvas.height = window.innerHeight;
 
 const columns = Math.floor(ctx.canvas.width / 20);
 const drops = [];
 
 for (let i = 0; i < columns; i++) {
     drops[i] = Math.floor(Math.random() * -100);
 }
 
 function drawMatrix() {
     ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
     ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
     
     ctx.fillStyle = '#0f0';
     ctx.font = '15px monospace';
     
     for (let i = 0; i < drops.length; i++) {
         const text = String.fromCharCode(Math.floor(Math.random() * 128));
         ctx.fillText(text, i * 20, drops[i] * 20);
         
         if (drops[i] * 20 > ctx.canvas.height && Math.random() > 0.975) {
             drops[i] = 0;
         }
         
         drops[i]++;
     }
 }
 

 const loginForm = document.getElementById('login-form');
 const passwordInput = document.getElementById('password');
 const errorMessage = document.getElementById('error-message');
 const loginContainer = document.getElementById('login-container');
 const dashboard = document.getElementById('dashboard');
 
 loginForm.addEventListener('submit', function(e) {
     e.preventDefault();
     const password = passwordInput.value;
     
     if (password === '52877') {
         loginContainer.style.animation = 'fadeOut 1s forwards';
         setTimeout(() => {
             loginContainer.style.display = 'none';
             dashboard.style.display = 'block';
             startDashboard();
         }, 1000);
     } else {
         errorMessage.style.visibility = 'visible';
         passwordInput.value = '';
         passwordInput.focus();
         
         loginForm.style.animation = 'shake 0.5s';
         setTimeout(() => {
             loginForm.style.animation = '';
         }, 500);
     }
 });
 
 document.head.insertAdjacentHTML('beforeend', `
     <style>
         @keyframes shake {
             0%, 100% { transform: translateX(0); }
             10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
             20%, 40%, 60%, 80% { transform: translateX(10px); }
         }
         @keyframes fadeOut {
             from { opacity: 1; }
             to { opacity: 0; }
         }
     </style>
 `);
 
 function startDashboard() {
     startTerminal();
     startAttackMap();
     startBinaryStreams();
     startSystemStats();
     startUptimeCounter();
 }
 
 function startTerminal() {
     const terminalContent = document.getElementById('terminal-content');
     const terminalLines = [
         { text: "root@cybermatrix:~# systemctl start cybermatrix-core", delay: 500 },
         { text: "Starting CyberMatrix Core Services...", delay: 800 },
         { text: "Loading kernel modules... [OK]", delay: 1200 },
         { text: "Initializing network interfaces... [OK]", delay: 1500 },
         { text: "Establishing secure connections... [OK]", delay: 1800 },
         { text: "Scanning for vulnerabilities...", delay: 2000 },
         { text: "Detected 143 potential targets.", delay: 3500 },
         { text: "root@cybermatrix:~# cybermatrix --start-monitoring --silent", delay: 4000 },
         { text: "Global monitoring initiated.", delay: 4500 },
         { text: "Creating attack vectors...", delay: 5000 },
         { text: "Attack vectors ready. Awaiting command.", delay: 5500 },
         { text: "root@cybermatrix:~# _", delay: 6000 }
     ];
     
     let lineIndex = 0;
     
     function addTerminalLine() {
         if (lineIndex < terminalLines.length) {
             const line = terminalLines[lineIndex];
             const div = document.createElement('div');
             div.className = 'terminal-line';
             
             if (line.text.startsWith('root@')) {
                 div.innerHTML = `<span class="terminal-prompt">${line.text}</span>`;
             } else {
                 div.textContent = line.text;
             }
             
             terminalContent.appendChild(div);
             terminalContent.scrollTop = terminalContent.scrollHeight;
             
             lineIndex++;
             setTimeout(addTerminalLine, line.delay);
         } else {
             setTimeout(addRandomCommands, 2000);
         }
     }
     
     const randomCommands = [
         "nmap -sS -T4 192.168.1.0/24",
         "ssh -i private_key root@10.0.0.5",
         "curl -s https://target-server.com/api/data",
         "ping -c 4 8.8.8.8",
         "traceroute target-server.com",
         "netstat -tuln",
         "hydra -l admin -P wordlist.txt ssh://10.0.0.1",
         "gobuster dir -u https://target-server.com -w wordlist.txt",
         "sqlmap -u 'https://target-server.com/page.php?id=1' --dbs",
         "hashcat -m 0 -a 0 hashes.txt wordlist.txt"
     ];
     
     const randomResponses = [
         "Found 15 open ports.",
         "Connection established.",
         "Data retrieved successfully.",
         "Latency: 24ms",
         "Trace complete. 12 hops.",
         "Listening on port 443...",
         "Password found: ********",
         "Discovered 3 hidden directories.",
         "Database enumeration complete.",
         "5 hashes cracked."
     ];
     
     function addRandomCommands() {
         const randomIndex = Math.floor(Math.random() * randomCommands.length);
         const command = randomCommands[randomIndex];
         const response = randomResponses[randomIndex];
         
         const commandDiv = document.createElement('div');
         commandDiv.className = 'terminal-line';
         commandDiv.innerHTML = `<span class="terminal-prompt">root@cybermatrix:~# ${command}</span>`;
         terminalContent.appendChild(commandDiv);
         
         setTimeout(() => {
             const responseDiv = document.createElement('div');
             responseDiv.className = 'terminal-line';
             responseDiv.textContent = response;
             terminalContent.appendChild(responseDiv);
             
             const promptDiv = document.createElement('div');
             promptDiv.className = 'terminal-line';
             promptDiv.innerHTML = `<span class="terminal-prompt">root@cybermatrix:~# _</span>`;
             terminalContent.appendChild(promptDiv);
             
             terminalContent.scrollTop = terminalContent.scrollHeight;
             
             setTimeout(addRandomCommands, Math.random() * 5000 + 3000);
         }, Math.random() * 1000 + 500);
     }
     
     addTerminalLine();
 }
 
 function startAttackMap() {
     const mapPoints = document.getElementById('map-points');
     const mapContainer = document.querySelector('.map-container');
     
     function createRandomPoint() {
         const point = document.createElement('div');
         point.className = 'map-point';
         point.style.left = Math.random() * 100 + '%';
         point.style.top = Math.random() * 100 + '%';
         
         mapPoints.appendChild(point);
         
         setTimeout(() => {
             createAttackLine(point);
         }, Math.random() * 1000 + 500);
         
         setTimeout(() => {
             point.remove();
         }, 3000);
     }
     
     function createAttackLine(sourcePoint) {
         const sourceRect = sourcePoint.getBoundingClientRect();
         const containerRect = mapContainer.getBoundingClientRect();
         
         const sourceX = sourceRect.left - containerRect.left + sourceRect.width / 2;
         const sourceY = sourceRect.top - containerRect.top + sourceRect.height / 2;
         
         const targetX = Math.random() * containerRect.width;
         const targetY = Math.random() * containerRect.height;
         
         const dx = targetX - sourceX;
         const dy = targetY - sourceY;
         const distance = Math.sqrt(dx * dx + dy * dy);
         const angle = Math.atan2(dy, dx) * 180 / Math.PI;
         
         const line = document.createElement('div');
         line.className = 'attack-line';
         line.style.width = distance + 'px';
         line.style.left = sourceX + 'px';
         line.style.top = sourceY + 'px';
         line.style.transform = `rotate(${angle}deg)`;
         
         mapContainer.appendChild(line);
         
         setTimeout(() => {
             line.remove();
         }, 1000);
     }
     
     setInterval(createRandomPoint, 800);
 }
 
 function startBinaryStreams() {
     const binaryContainer = document.getElementById('binary-container');
     
     function createBinaryStream() {
         const stream = document.createElement('div');
         stream.className = 'binary-stream';
         
         let binaryString = '';
         for (let i = 0; i < 20; i++) {
             binaryString += Math.random() > 0.5 ? '1' : '0';
         }
         
         stream.textContent = binaryString;
         stream.style.left = Math.random() * 100 + '%';
         stream.style.animationDuration = Math.random() * 5 + 3 + 's';
         
         binaryContainer.appendChild(stream);
         
         setTimeout(() => {
             stream.remove();
         }, (Math.random() * 5 + 3) * 1000);
     }
     
     setInterval(createBinaryStream, 200);
 }
 
 function startSystemStats() {
     const cpuValue = document.getElementById('cpu-value');
     const cpuBar = document.getElementById('cpu-bar');
     const memoryValue = document.getElementById('memory-value');
     const memoryBar = document.getElementById('memory-bar');
     const encryptionValue = document.getElementById('encryption-value');
     const encryptionBar = document.getElementById('encryption-bar');
     const networkValue = document.getElementById('network-value');
     const networkBar = document.getElementById('network-bar');
     const sessionsValue = document.getElementById('sessions-value');
     
     function updateStats() {
         // ПРАЦЕССАР
         const cpu = Math.floor(Math.random() * 30) + 70;
         cpuValue.textContent = cpu + '%';
         cpuBar.style.width = cpu + '%';
         
         // ОЗУ
         const memory = Math.floor(Math.random() * 20) + 70;
         memoryValue.textContent = memory + '%';
         memoryBar.style.width = memory + '%';
         
         // БИЛЛШИФР
         const encryption = Math.floor(Math.random() * 10) + 90;
         encryptionValue.textContent = encryption + '%';
         encryptionBar.style.width = encryption + '%';
         
         // СЕТЬ
         const network = Math.floor(Math.random() * 500) + 500;
         networkValue.textContent = network + ' Mbps';
         networkBar.style.width = (network / 1000 * 100) + '%';
         
         // СЕССИЯ
         const sessions = Math.floor(Math.random() * 5) + 10;
         sessionsValue.textContent = sessions;
     }
     
     setInterval(updateStats, 2000);
     updateStats();
 }
 

 function startUptimeCounter() {
     const uptimeValue = document.getElementById('uptime-value');
     let seconds = 0;
     
     function updateUptime() {
         seconds++;
         const hours = Math.floor(seconds / 3600);
         const minutes = Math.floor((seconds % 3600) / 60);
         const secs = seconds % 60;
         
         const formattedHours = String(hours).padStart(2, '0');
         const formattedMinutes = String(minutes).padStart(2, '0');
         const formattedSeconds = String(secs).padStart(2, '0');
         
         uptimeValue.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
     }
     
     setInterval(updateUptime, 1000);
 }
 
 setInterval(drawMatrix, 50);
 
 window.addEventListener('DOMContentLoaded', () => {
     passwordInput.focus();
 });
 
 window.addEventListener('resize', () => {
     ctx.canvas.width = window.innerWidth;
     ctx.canvas.height = window.innerHeight;
 });
