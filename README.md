# magnetocorp-commercialpaper

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)

Clone this respository

Copy your connection profile over to your Z instance: scp networkConnection.json bcuser@192.168.22.1XX:~/IBP-MagnetoCorp/

Navigate to the Identity folder
Change config.json file to fit your connection profile and enrolled client
run npm install
run node enroll.js

Back up one folder

docker build -t ibp-magnetocorp
docker run -itd -p 3001:3001/tcp --name ibp-magnetocorp ibp-magnetocorp

Go to 192.168.22.1XX:3001 where XX is your team number