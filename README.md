*  docker mysql
* mysql -u root -p 
* docker run --name lowcode-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -v /Users/zhoujin/Volume/lowcode-mysql :/var/lib/mysql -d mysql:latest
* [Host '****' is not allowed to connect to this MySQL server](https://blog.csdn.net/hanchao5272/article/details/79978694)

* mysql> update user set host='%'where user='root'; 执行报错暂时不用管 直接执行  flush privileges;
* docker  mongodb
* docker run -d --name lowcode-mongodb -p 27017:27017 -v /Users/zhoujin/Volume/lowcode-mongod:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123456 mongo