## Install The Docker In Ubuntu

```
sudo apt-get update
sudo apt-get install docker.io -y
sudo usermod -aG docker $USER  # Replace with your system's username, e.g., 'ubuntu'
newgrp docker
sudo chmod 777 /var/run/docker.sock
```

```
docker pull postgres
```

```
docker network create my_network
```

```
docker run --name my_postgres --network my_network  -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```

```
docker exec -it my_postgres psql -U postgres


CREATE DATABASE testdb;
\c testdb



CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100)
);



INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');
```

```
SELECT * FROM users;

INSERT INTO users (name, email) VALUES
('User1', 'user1@example.com'),
('User2', 'user2@example.com'),
('User3', 'user3@example.com'),
('User4', 'user4@example.com'),
('User5', 'user5@example.com'),
('User6', 'user6@example.com'),
('User7', 'user7@example.com'),
('User8', 'user8@example.com'),
('User9', 'user9@example.com'),
('User10', 'user10@example.com'),
('User11', 'user11@example.com'),
('User12', 'user12@example.com'),
('User13', 'user13@example.com'),
('User14', 'user14@example.com'),
('User15', 'user15@example.com'),
('User16', 'user16@example.com'),
('User17', 'user17@example.com'),
('User18', 'user18@example.com'),
('User19', 'user19@example.com'),
('User20', 'user20@example.com'),
('User21', 'user21@example.com'),
('User22', 'user22@example.com'),
('User23', 'user23@example.com'),
('User24', 'user24@example.com'),
('User25', 'user25@example.com'),
('User26', 'user26@example.com'),
('User27', 'user27@example.com'),
('User28', 'user28@example.com'),
('User29', 'user29@example.com'),
('User30', 'user30@example.com'),
('User31', 'user31@example.com'),
('User32', 'user32@example.com'),
('User33', 'user33@example.com'),
('User34', 'user34@example.com'),
('User35', 'user35@example.com'),
('User36', 'user36@example.com'),
('User37', 'user37@example.com'),
('User38', 'user38@example.com'),
('User39', 'user39@example.com'),
('User40', 'user40@example.com'),
('User41', 'user41@example.com'),
('User42', 'user42@example.com'),
('User43', 'user43@example.com'),
('User44', 'user44@example.com'),
('User45', 'user45@example.com'),
('User46', 'user46@example.com'),
('User47', 'user47@example.com'),
('User48', 'user48@example.com'),
('User49', 'user49@example.com'),
('User50', 'user50@example.com');


```

```
gcloud auth login
```

```
gsutil cp gs://yugabyteadarsha/postgres_air_2024.sql.zip .
```

```
adarshadshetty09@dockerv1:~$ gcloud auth login

You are running on a Google Compute Engine virtual machine.
It is recommended that you use service accounts for authentication.

You can run:

  $ gcloud config set account `ACCOUNT`

to switch accounts if necessary.

Your credentials may be visible to others with access to this
virtual machine. Are you sure you want to authenticate with
your personal account?

Do you want to continue (Y/n)?  Y

Go to the following link in your browser, and complete the sign-in prompts:

    https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=32555940559.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fsdk.cloud.google.com%2Fauthcode.html&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcloud-platform+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fappengine.admin+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fsqlservice.login+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcompute+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Faccounts.reauth&state=HhrU0KLnLGJjChYJKfigZhhwiPldvq&prompt=consent&token_usage=remote&access_type=offline&code_challenge=Vnu4ngTCWzhSGLmCCUekHEdUJOntDOa-t6OJG148HgI&code_challenge_method=S256

Once finished, enter the verification code provided in your browser: 4/0AUJR-x4GePjyR6o92ihcMWDnRMQCt_XY642D9pk8DSm_nOQxonUta2JFYW0Pl7Wei1PfcA

You are now logged in as [adarshadshetty09@gmail.com].
Your current project is [fleet-bongo-453603-d1].  You can change this setting by running:
  $ gcloud config set project PROJECT_ID
adarshadshetty09@dockerv1:~$ gsutil cp gs://yugabyteadarsha/postgres_air_2024.sql.zip .
Copying gs://yugabyteadarsha/postgres_air_2024.sql.zip...
- [1 files][  1.3 GiB/  1.3 GiB]   45.7 MiB/s                                 
Operation completed over 1 objects/1.3 GiB.                                    
adarshadshetty09@dockerv1:~$ ls
postgres_air_2024.sql.zip  snap
adarshadshetty09@dockerv1:~$ 
```

```
unzip postgres_air_2024.sql.zip
docker cp postgres_air_2024.sql my_postgres:/postgres_air_2024.sql
docker exec -it my_postgres bash
psql -U postgres -d testdb -f /postgres_air_2024.sql
\c testdb
\dn
\dt
DROP SCHEMA postgres_air CASCADE;

```


```
FROM rockylinux:9

ENV YB_VERSION=2.25.1.0 \
    YB_BUILD=b381 \
    YB_PLATFORM=linux-x86_64 \
    OIC_URL="https://download.oracle.com/otn_software/linux/instantclient/215000"

# Install dependencies
RUN dnf install -y wget tar hostname procps glibc-langpack-en \
    && dnf clean all

# Download and extract YugabyteDB
RUN wget https://software.yugabyte.com/releases/${YB_VERSION}/yugabyte-${YB_VERSION}-${YB_BUILD}-${YB_PLATFORM}.tar.gz \
    && tar -xvzf yugabyte-${YB_VERSION}-${YB_BUILD}-${YB_PLATFORM}.tar.gz \
    && rm -f yugabyte-${YB_VERSION}-${YB_BUILD}-${YB_PLATFORM}.tar.gz

# Set working directory
WORKDIR /yugabyte-${YB_VERSION}

# Run post-install script
RUN ./bin/post_install.sh

RUN dnf update -y \
    && dnf install https://downloads.yugabyte.com/repos/reporpms/yb-yum-repo-1.1-0.noarch.rpm -y \
    && dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm -y \
    && dnf install https://dev.mysql.com/get/mysql84-community-release-el9-1.noarch.rpm -y \
    && dnf --disablerepo=* install https://download.postgresql.org/pub/repos/yum/reporpms/EL-9-x86_64/pgdg-redhat-repo-latest.noarch.rpm -y \
    && dnf -qy module disable postgresql \
    && dnf install perl-open.noarch -y \
    && dnf install -y \
           ${OIC_URL}/oracle-instantclient-tools-21.5.0.0.0-1.x86_64.rpm \
           ${OIC_URL}/oracle-instantclient-basic-21.5.0.0.0-1.x86_64.rpm \
           ${OIC_URL}/oracle-instantclient-devel-21.5.0.0.0-1.x86_64.rpm \
           ${OIC_URL}/oracle-instantclient-jdbc-21.5.0.0.0-1.x86_64.rpm \
           ${OIC_URL}/oracle-instantclient-sqlplus-21.5.0.0.0-1.x86_64.rpm \
    && dnf update -y \
    && dnf install yb-voyager -y

RUN yb-voyager version


# Expose port
EXPOSE 15433 7000 9000 9042 5433 6379 6380 11000

# Start YugabyteDB (no --docker flag)
CMD ["./bin/yugabyted", "start", "--daemon=false"]
```

```
docker build -f Dockerfile -t yugabyte-rocky:2.25.1 .

sudo mkdir -p /opt/yugabyte_data

sudo chown -R $(whoami):$(whoami) /opt/yugabyte_data

docker run -d --name yugabyte \
  --network my_network \
  -v /opt/yugabyte_data:/root/var/data \
  -e CONTROL_PLANE_TYPE=yugabyted \
  -e YUGABYTED_DB_CONN_STRING="postgresql://yugabyte:yugabyte@yugabyte:5433" \
  -p 7000:7000 \
  -p 9000:9000 \
  -p 15433:15433 \
  -p 5433:5433 \
  -p 9042:9042 \
  yugabyte-rocky:2.25.1 \
  ./bin/yugabyted start --background=false


```

```
adarshadshetty09@dockerv1:~$ docker exec -it 8d20f6f8689c bash 
root@8d20f6f8689c:/# psql -U postgres 
psql (17.5 (Debian 17.5-1.pgdg120+1))
Type "help" for help.

postgres=# CREATE USER ybvoyager PASSWORD 'password';
CREATE ROLE
postgres=# ^C
postgres=# GRANT USAGE ON SCHEMA public TO ybvoyager;
GRANT
postgres=# GRANT SELECT ON ALL TABLES IN SCHEMA public TO ybvoyager;
GRANT
postgres=# ALTER USER postgres WITH PASSWORD 'password';
ALTER ROLE
postgres=# 
```


```
mkdir $HOME/export-dir
export EXPORT_DIR=$HOME/export-dir
```

```
[root@67ec52b5ea09 ~]# echo $CONTROL_PLANE_TYPE
yugabyted
[root@67ec52b5ea09 ~]# echo $YUGABYTED_DB_CONN_STRING
postgresql://yugabyte:yugabyte@yugabyte:5433
[root@67ec52b5ea09 ~]# 

```

```
[root@67ec52b5ea09 ~]# cd /root/
[root@67ec52b5ea09 ~]# ls
anaconda-ks.cfg  anaconda-post.log  export-dir  original-ks.cfg  var
[root@67ec52b5ea09 ~]# cd
[root@67ec52b5ea09 ~]# cd /
[root@67ec52b5ea09 /]# ls
afs   dev   lib         media  proc  sbin  tmp  yugabyte-2.25.1.0
bin   etc   lib64       mnt    root  srv   usr
boot  home  lost+found  opt    run   sys   var
[root@67ec52b5ea09 /]# cd yugabyte-2.25.1.0/
[root@67ec52b5ea09 yugabyte-2.25.1.0]# ./bin/yugabyted status

+-----------------------------------------------------------------------------------------------------------+
|                                                 yugabyted                                                 |
+-----------------------------------------------------------------------------------------------------------+
| Status              : Running.                                                                            |
| YSQL Status         : Ready                                                                               |
| Replication Factor  : 1                                                                                   |
| YugabyteDB UI       : http://67ec52b5ea09:15433                                                           |
| JDBC                : jdbc:postgresql://67ec52b5ea09:5433/yugabyte?user=yugabyte&password=yugabyte        |
| YSQL                : bin/ysqlsh -h 67ec52b5ea09  -U yugabyte -d yugabyte                                 |
| YCQL                : bin/ycqlsh 67ec52b5ea09 9042 -u cassandra                                           |
| Data Dir            : /root/var/data                                                                      |
| Log Dir             : /root/var/logs                                                                      |
| Universe UUID       : 979a1af0-6a56-4296-b75c-53efeacb7759                                                |
+-----------------------------------------------------------------------------------------------------------+
[root@67ec52b5ea09 yugabyte-2.25.1.0]#  bin/ysqlsh -h 67ec52b5ea09  -U yugabyte -d yugabyte 
ysqlsh (15.2-YB-2.25.1.0-b0)
Type "help" for help.

yugabyte=# CREATE DATABASE target_db_name WITH COLOCATION=true;

CREATE DATABASE
yugabyte=# 
yugabyte=# \l
                                                  List of databases
      Name       |  Owner   | Encoding | Collate |    Ctype    | ICU Locale | Locale Provider |   Access privileges   
-----------------+----------+----------+---------+-------------+------------+-----------------+-----------------------
 postgres        | postgres | UTF8     | C       | en_US.UTF-8 |            | libc            | 
 system_platform | postgres | UTF8     | C       | en_US.UTF-8 |            | libc            | 
 target_db_name  | yugabyte | UTF8     | C       | en_US.UTF-8 |            | libc            | 
 template0       | postgres | UTF8     | C       | en_US.UTF-8 |            | libc            | =c/postgres          +
                 |          |          |         |             |            |                 | postgres=CTc/postgres
 template1       | postgres | UTF8     | C       | en_US.UTF-8 |            | libc            | =c/postgres          +
                 |          |          |         |             |            |                 | postgres=CTc/postgres
 yugabyte        | postgres | UTF8     | C       | en_US.UTF-8 |            | libc            | 
(6 rows)

yugabyte=# CREATE USER ybvoyager SUPERUSER PASSWORD 'password';
CREATE ROLE
yugabyte=# 
yugabyte=# 
```


````
psql -h my_postgres \
     -d testdb \
     -U postgres \
     -v voyager_user='ybvoyager' \
     -v schema_list='postgres_air' \
     -v is_live_migration=0 \
     -v is_live_migration_fall_back=0 \
     -f /opt/yb-voyager/guardrails-scripts/yb-voyager-pg-grant-migration-permissions.sql
Password for user postgres: 

--- Checking Variables ---
Voyager user is provided: ybvoyager
Schema list is provided: postgres_air
Live migration flag is provided: 0

Current database:  testdb

Note that on RDS, you may get "Permission Denied" errors for pg_catalog tables (such as pg_statistic). These errors do not affect the migration and can be ignored.

--- Granting USAGE Permission on Schemas ---
GRANT
GRANT
GRANT
GRANT
GRANT

--- Granting SELECT Permission on Tables ---
GRANT
GRANT
GRANT
GRANT
GRANT

--- Granting SELECT Permission on Sequences ---
GRANT
GRANT
GRANT
GRANT
GRANT

--- Granting READ Permission on the pg_stat_statments for Assessing the source database
GRANT ROLE
[root@67ec52b5ea09 ~]# 
```
````

```
yb-voyager assess-migration --source-db-type postgresql \
    --source-db-host my_postgres --source-db-user ybvoyager \
    --source-db-password password --source-db-name testdb \
    --source-db-schema postgres_air --export-dir /root/export-dir
```

```
[root@67ec52b5ea09 ~]# yb-voyager assess-migration --source-db-type postgresql \
    --source-db-host my_postgres --source-db-user ybvoyager \
    --source-db-password password --source-db-name testdb \
    --source-db-schema postgres_air --export-dir /root/export-dir
Using export-dir:  /root/export-dir
GIT_COMMIT_HASH=736e14f18874cfaea50a66158909881e8a4782e0
migrationID: f28f6183-c8a4-4524-b713-2d8250721ca6
No target-db-version has been specified.
Do you want to continue with the latest stable YugabyteDB version: 2024.2.2.3? [Y/N]: Y
Assessing for migration to target YugabyteDB version 2024.2.2.3

Permissions missing in the source database for assess migration:
pg_stat_statements extension is not installed on source DB, required for detecting Unsupported Query Constructs

Check the documentation to prepare the database for migration: https://docs.yugabyte.com/preview/yugabyte-voyager/migrate/migrate-steps/#prepare-the-source-database

Do you want to continue anyway? [Y/N]: Y
gathering metadata and stats from 'postgresql' source database...
sleep interval for calculating iops: 120 seconds
Assessment metadata collection started for 'postgres_air' schema(s)
Collecting column statistics...
Collecting db queries summary...
Skipping db queries summary: pg_stat_statements extension is not enabled
Collecting index to table mapping...
Collecting object_type_mapping...
Collecting redundant indexes...
Collecting table columns count...
Collecting table columns data types...
Collecting table index iops...
Collecting table index sizes...
Collecting table row counts...
Collecting schema information...
Assessment metadata collection completed
gathered assessment metadata files at '/root/export-dir/assessment/metadata'
Detected 0 read/write IOPS on the tables in specified schema(s). In order to get an accurate assessment, it is recommended that the source database is actively handling its typical workloads. Do you want to continue anyway? [Y/N]: Y
Generating assessment report...
generated JSON assessment report at: /root/export-dir/assessment/reports/migration_assessment_report.json
generated HTML assessment report at: /root/export-dir/assessment/reports/migration_assessment_report.html
Migration assessment completed successfully.
[root@67ec52b5ea09 ~]# 
```

```
yb-voyager export schema \
  --export-dir /root/export-dir \
  --source-db-type postgresql \
  --source-db-host my_postgres \
  --source-db-user ybvoyager \
  --source-db-password password \
  --source-db-name testdb \
  --source-db-schema postgres_air \
  --start-clean true
```

```
[root@67ec52b5ea09 ~]# yb-voyager export schema \
  --export-dir /root/export-dir \
  --source-db-type postgresql \
  --source-db-host my_postgres \
  --source-db-user ybvoyager \
  --source-db-password password \
  --source-db-name testdb \
  --source-db-schema postgres_air \
  --start-clean true
Using export-dir:  /root/export-dir
GIT_COMMIT_HASH=736e14f18874cfaea50a66158909881e8a4782e0
Schema is not exported yet. Ignoring --start-clean flag.

migrationID: f28f6183-c8a4-4524-b713-2d8250721ca6

export of schema for source type as 'postgresql'
postgresql version: 17.5 (Debian 17.5-1.pgdg120+1)
exporting the schema           done

Applied assessment recommendations.
Applying merge constraints transformation to the exported schema

Exported schema files created under directory: /root/export-dir/schema

[root@67ec52b5ea09 ~]# 
```


```
yb-voyager analyze-schema --export-dir /root/export-dir --output-format txt
```

```
[root@67ec52b5ea09 ~]# yb-voyager analyze-schema --export-dir /root/export-dir --output-format txt
Using export-dir:  /root/export-dir
GIT_COMMIT_HASH=736e14f18874cfaea50a66158909881e8a4782e0
migrationID: f28f6183-c8a4-4524-b713-2d8250721ca6
No target-db-version has been specified.
Do you want to continue with the latest stable YugabyteDB version: 2024.2.2.3? [Y/N]: Y
Analyzing schema for target YugabyteDB version 2024.2.2.3
-- find schema analysis report at: /root/export-dir/reports/schema_analysis_report.txt
[root@67ec52b5ea09 ~]# 
```

```
yb-voyager import schema \
  --export-dir /root/export-dir \
  --target-db-host yugabyte \
  --target-db-user yugabyte \
  --target-db-password yugabyte \
  --target-db-name target_db_name
```

```
[root@67ec52b5ea09 ~]# yb-voyager import schema \
  --export-dir /root/export-dir \
  --target-db-host yugabyte \
  --target-db-user yugabyte \
  --target-db-password yugabyte \
  --target-db-name target_db_name
Using export-dir:  /root/export-dir
GIT_COMMIT_HASH=736e14f18874cfaea50a66158909881e8a4782e0
migrationID: f28f6183-c8a4-4524-b713-2d8250721ca6
YugabyteDB version: 15.2-YB-2.25.1.0-b0
schemas to be present in target database "target_db_name": [postgres_air]
schema.sql: CREATE SCHEMA postgres_air; 
sequence.sql: CREATE SEQUENCE postgres_air.account_account_id_seq     AS integer     START WIT ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.boarding_pass_pass_id_seq     START WITH 25293500   ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.booking_leg_booking_leg_id_seq     AS integer     S ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.booking_number     START WITH 5743216     INCREMENT ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.flight_flight_id_seq     AS integer     START WITH  ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.frequent_flyer_frequent_flyer_id_seq     AS integer ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.passenger_passenger_id_seq     AS integer     START ...
NOTICE: overriding cache option with cache flag or previous cache value
sequence.sql: CREATE SEQUENCE postgres_air.phone_phone_id_seq     AS integer     START WITH 40 ...
NOTICE: overriding cache option with cache flag or previous cache value
table.sql: CREATE TABLE postgres_air.account (account_id int NOT NULL, login text NOT NULL, ...
table.sql: CREATE TABLE postgres_air.aircraft (model text, range numeric NOT NULL, class in ...
table.sql: CREATE TABLE postgres_air.airport (airport_code char(3) NOT NULL, airport_name t ...
table.sql: CREATE TABLE postgres_air.boarding_pass (pass_id int DEFAULT nextval('postgres_a ...
table.sql: CREATE TABLE postgres_air.booking (booking_id bigint NOT NULL, booking_ref text  ...
table.sql: CREATE TABLE postgres_air.booking_leg (booking_leg_id int NOT NULL, booking_id i ...
table.sql: CREATE TABLE postgres_air.flight (flight_id int NOT NULL, flight_no text NOT NUL ...
table.sql: CREATE TABLE postgres_air.frequent_flyer (frequent_flyer_id int NOT NULL, first_ ...
table.sql: CREATE TABLE postgres_air.passenger (passenger_id int NOT NULL, booking_id int N ...
table.sql: CREATE TABLE postgres_air.phone (phone_id int NOT NULL, account_id int, phone te ...
table.sql: ALTER TABLE ONLY postgres_air.account ALTER COLUMN account_id SET DEFAULT nextva ...
table.sql: ALTER TABLE ONLY postgres_air.booking_leg ALTER COLUMN booking_leg_id SET DEFAUL ...
table.sql: ALTER TABLE ONLY postgres_air.flight ALTER COLUMN flight_id SET DEFAULT nextval( ...
table.sql: ALTER TABLE ONLY postgres_air.frequent_flyer ALTER COLUMN frequent_flyer_id SET  ...
table.sql: ALTER TABLE ONLY postgres_air.passenger ALTER COLUMN passenger_id SET DEFAULT ne ...
table.sql: ALTER TABLE ONLY postgres_air.phone ALTER COLUMN phone_id SET DEFAULT nextval('p ...
procedure.sql: CREATE PROCEDURE postgres_air.advance_air_time(IN p_weeks integer DEFAULT 52, IN ...
sequence.sql: ALTER SEQUENCE postgres_air.account_account_id_seq OWNED BY postgres_air.account ...
sequence.sql: ALTER SEQUENCE postgres_air.booking_leg_booking_leg_id_seq OWNED BY postgres_air ...
sequence.sql: ALTER SEQUENCE postgres_air.flight_flight_id_seq OWNED BY postgres_air.flight.fl ...
sequence.sql: ALTER SEQUENCE postgres_air.frequent_flyer_frequent_flyer_id_seq OWNED BY postgr ...
sequence.sql: ALTER SEQUENCE postgres_air.passenger_passenger_id_seq OWNED BY postgres_air.pas ...
sequence.sql: ALTER SEQUENCE postgres_air.phone_phone_id_seq OWNED BY postgres_air.phone.phone ...
table.sql: ALTER TABLE ONLY postgres_air.flight ADD CONSTRAINT aircraft_code_fk FOREIGN KEY ...
table.sql: ALTER TABLE ONLY postgres_air.flight ADD CONSTRAINT arrival_airport_fk FOREIGN K ...
table.sql: ALTER TABLE ONLY postgres_air.booking ADD CONSTRAINT booking_account_id_fk FOREI ...
table.sql: ALTER TABLE ONLY postgres_air.booking_leg ADD CONSTRAINT booking_id_fk FOREIGN K ...
table.sql: ALTER TABLE ONLY postgres_air.boarding_pass ADD CONSTRAINT booking_leg_id_fk FOR ...
table.sql: ALTER TABLE ONLY postgres_air.flight ADD CONSTRAINT departure_airport_fk FOREIGN ...
table.sql: ALTER TABLE ONLY postgres_air.booking_leg ADD CONSTRAINT flight_id_fk FOREIGN KE ...
table.sql: ALTER TABLE ONLY postgres_air.account ADD CONSTRAINT frequent_flyer_id_fk FOREIG ...
table.sql: ALTER TABLE ONLY postgres_air.passenger ADD CONSTRAINT pass_account_id_fk FOREIG ...
table.sql: ALTER TABLE ONLY postgres_air.passenger ADD CONSTRAINT pass_booking_id_fk FOREIG ...
table.sql: ALTER TABLE ONLY postgres_air.passenger ADD CONSTRAINT pass_frequent_flyer_id_fk ...
table.sql: ALTER TABLE ONLY postgres_air.boarding_pass ADD CONSTRAINT passenger_id_fk FOREI ...
table.sql: ALTER TABLE ONLY postgres_air.phone ADD CONSTRAINT phone_account_id_fk FOREIGN K ...

NOTE: Materialized Views are not populated by default. To populate them, pass --refresh-mviews while executing `import schema --post-snapshot-import`.
[root@67ec52b5ea09 ~]# 
```

```
yb-voyager export data \
  --export-dir /root/export-dir \
  --source-db-type postgresql \
  --source-db-host my_postgres \
  --source-db-user ybvoyager \
  --source-db-password password \
  --source-db-name testdb \
  --source-db-schema postgres_air
```


```
[root@67ec52b5ea09 ~]# yb-voyager export data \
  --export-dir /root/export-dir \
  --source-db-type postgresql \
  --source-db-host my_postgres \
  --source-db-user ybvoyager \
  --source-db-password password \
  --source-db-name testdb \
  --source-db-schema postgres_air
Using export-dir:  /root/export-dir
GIT_COMMIT_HASH=736e14f18874cfaea50a66158909881e8a4782e0
migrationID: f28f6183-c8a4-4524-b713-2d8250721ca6
export of data for source type as 'postgresql'
num tables to export: 10
table list for data export: [postgres_air.frequent_flyer postgres_air.airport postgres_air.aircraft postgres_air.phone postgres_air.booking_leg postgres_air.boarding_pass postgres_air.account postgres_air.booking postgres_air.passenger postgres_air.flight]
Only the sequences that are attached to the above exported tables will be restored during the migration.
calculating approx num of rows to export for each table...
Initiating data export.
Data export started.
Exported tables:- {postgres_air."booking",  postgres_air."account",  postgres_air."flight",  postgres_air."phone",  postgres_air."frequent_flyer",  postgres_air."aircraft",  postgres_air."airport",  postgres_air."booking_leg",  postgres_air."passenger",  postgres_air."boarding_pass"}
snapshot export report

SCHEMA          TABLE           ROW COUNT
postgres_air    boarding_pass   30195223 
postgres_air    passenger       21140719 
postgres_air    booking_leg     18467420 
postgres_air    booking         5952671  
postgres_air    account         1121833  
postgres_air    flight          683178   
postgres_air    phone           664315   
postgres_air    frequent_flyer  128346   
postgres_air    airport         692    
postgres_air    aircraft        12     

Export of data complete
[root@67ec52b5ea09 ~]# 


```



```
yb-voyager export data status --export-dir /root/export-dir
```

```
[root@67ec52b5ea09 ~]# yb-voyager export data status --export-dir /root/export-dir
Using export-dir:  /root/export-dir
Export Data Status for SourceDB

TABLE           STATUS  EXPORTED ROWS
account         DONE    1121833    
aircraft        DONE    12         
airport         DONE    692        
boarding_pass   DONE    30195223   
booking         DONE    5952671    
booking_leg     DONE    18467420   
flight          DONE    683178     
frequent_flyer  DONE    128346     
passenger       DONE    21140719   
phone           DONE    664315     

[root@67ec52b5ea09 ~]# 
```


```
yb-voyager import data \
  --export-dir /root/export-dir \
  --target-db-host yugabyte \
  --target-db-user yugabyte \
  --target-db-password yugabyte \
  --target-db-name target_db_name \
  --parallel-jobs 4 \
  --enable-adaptive-parallelism false \
  --batch-size 20000

```

```
DROP SCHEMA postgres_air CASCADE;
```

```
yb-voyager finalize-schema-post-data-import \
  --export-dir /root/export-dir \
  --target-db-host yugabyte \
  --target-db-user yugabyte \
  --target-db-password yugabyte \
  --target-db-name target_db_name
```

```
mkdir /root/backup-dir
```


```
yb-voyager end migration --export-dir /root/export-dir \
  --backup-log-files true \
  --backup-data-files true \
  --backup-schema-files true \
  --save-migration-reports true \
  --backup-dir /root/backup-dir
```


```

REASSIGN OWNED BY ybvoyager TO yugabyte;
DROP OWNED BY ybvoyager;
DROP USER ybvoyager;