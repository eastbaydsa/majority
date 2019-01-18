include .env

wordpress:
	@docker-compose -f docker-compose.yml up -d

stop:
	@docker-compose down --remove-orphans

mysql-dump: FORCE
	@mkdir -p $(MYSQL_DUMPS_DIR)
	@docker exec $(shell docker-compose -f docker-compose.yml ps -q db) mysqldump --databases tonal -u"$(MYSQL_ROOT_USER)" -p"$(MYSQL_ROOT_PASSWORD)" > $(MYSQL_DUMPS_DIR)/$(MYSQL_DATABASE).sql 2>/dev/null

mysql-restore: FORCE
	@docker exec -i $(shell docker-compose -f docker-compose.yml ps -q db) mysql -u"$(MYSQL_ROOT_USER)" -p"$(MYSQL_ROOT_PASSWORD)" $(MYSQL_DATABASE) < $(MYSQL_DUMPS_DIR)/$(MYSQL_DATABASE).sql 2>/dev/null

FORCE:
