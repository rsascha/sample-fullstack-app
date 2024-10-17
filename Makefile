install:
	cd client && make install
	cd server && make install

clean:
	cd client && make clean
	cd server && make clean

setup:
	brew install docker docker-buildx colima
	