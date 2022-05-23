run:
	docker run -d --rm -p 5432:5432 --name pg_db -v /g/work/javascript/pern_market/db:/var/lib/postgresql/data -e POSTGRES_DB=my_db -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root postgres

stop:
	docker stop pg_db