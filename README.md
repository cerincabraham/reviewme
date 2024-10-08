HostUpdate

1. cd /home/cerin/reviewme

2. git pull origin master

3. npm install

4. npm run build

5. sudo chown -R $(whoami) /home/cerin/reviewme/build

6. sudo cp -r build/\* /var/www/html/

7. sudo systemctl restart apache2

---

Edit Google/Facebook Link

sudo nano /var/www/html/Links/facebookLink.txt
sudo nano /var/www/html/Links/googleLink.txt

  <h1>REVIEW US ON</h1>
                <h1>GOOGLE / FACEBOOK</h1>
