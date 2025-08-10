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