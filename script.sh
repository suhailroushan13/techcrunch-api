npm install puppeteer
sudo apt-get update
sudo apt-get install -y libgbm-dev xvfb chromium-browser libvpx7 libevent-2.1-7 libharfbuzz-icu0  libwebpdemux2 libenchant-2-2 libsecret-1-0  libmanette-0.2-0 libflite1  libgles2-mesa
Xvfb :99 -screen 0 1920x1080x24 &
export DISPLAY=:99