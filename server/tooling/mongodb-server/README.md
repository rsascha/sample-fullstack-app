# mongo-db-server-setup

This Makefile provides a streamlined setup for running a MongoDB server using Docker and Colima on macOS. It includes targets for starting and stopping MongoDB containers.

This is just for local development and testing purposes. It is not recommended for production use.

## Usage

Just run the `make` command to set up the MongoDB server:

```sh
make
```

To clean up the environment, run the following command:

```sh
make clean
```

See: [Makefile](Makefile) for more details.

## Connect a MongoDB Client

Connection String:

```plain
mongodb://127.0.0.1:27017/my-test-db
```
