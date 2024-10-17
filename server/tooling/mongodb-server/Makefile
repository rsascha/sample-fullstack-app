all: check-docker-daemon mongo-create mongo-start

check-docker-daemon:
	@docker info > /dev/null 2>&1 || { echo " \
/--------------------------------------------\ \n \
|              === ERROR ===                 | \n \
|--------------------------------------------| \n \
| Docker daemon is not running!              | \n \
| Maybe you need to execute 'colima start'?  | \n \
| Please check the README in root directory. | \n \
\--------------------------------------------/ \n \
"; \
		exit 1; } 

mongo-create:
	@docker ps -a --format '{{.Names}}' | grep -Eq "^mongodb-server$$" || { \
		docker create --name mongodb-server -p 27017:27017 mongo:latest; \
		echo "MongoDB container created."; \
	}
	
mongo-start:
	docker start mongodb-server
	docker ps

mongo-check:
	@docker ps --format '{{.Names}}' | grep -Eq "^mongodb-server$$" \
		&& echo "MongoDB container is running." || { \
		echo "MongoDB container is not running."; \
		exit 1; \
	}

mongo-shell: mongo-check
	docker exec -it mongodb-server bash

mongo-stat: mongo-check
	docker exec -it mongodb-server mongostat

mongo-stop: mongo-check
	docker stop mongodb-server
	@echo "MongoDB container stopped."

mongo-remove:
	docker rm mongodb-server 

mongo-clean: mongo-stop mongo-remove

clean: mongo-clean docker-stop

restart: clean all