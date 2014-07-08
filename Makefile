.PHONY: server css

SRC = client-src
BUILD = build
SERVER = server

html_files = $(shell find $(SRC) -name '*.html')
dest_html_files = $(addprefix $(BUILD)/,$(html_files:$(SRC)/%=%))

build: clean css $(dest_html_files) js

css: build_folder
	@cat $(SRC)/index.css >> $(BUILD)/index.css

$(BUILD)/%.html : $(SRC)/%.html
	@mkdir -p $(dir $@)
	@cp $< $@
	@$(warning $@)

js: build_folder
	@node libs/js/r.js -convert $(SRC) $(BUILD)
	@$(warning $@)

build_folder:
	@mkdir -p $(BUILD)

dist: clean-dist build
	@cp -r $(BUILD)/ server/www/
	@mkdir -p server/www/js && cp -R libs/js/ server/www/js/

clean:
	@rm -rf $(BUILD)

clean-dist:
	@rm -rf $(SERVER)/www

server:
	@cd $(SERVER); node lib/server.js

watch:
	@echo Watching for changes...
	@fswatch -o $(SRC)/ | xargs -n1 -I{} ./test.sh
