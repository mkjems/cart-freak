.PHONY: server js css

SRC = client-src
BUILD = build
SERVER = server

html_files = $(shell find $(SRC) -name '*.html')
dest_html_files = $(addprefix $(BUILD)/,$(html_files:$(SRC)/%=%))

build: clean js css $(dest_html_files)

js: build_folder
	 traceur --dir $(SRC) $(BUILD) --modules=amd

css: build_folder
	@cat $(SRC)/index.css >> $(BUILD)/index.css

$(BUILD)/%.html : $(SRC)/%.html
	@mkdir -p $(dir $@)
	@cp $< $@
	@$(warning $@)

build_folder:
	@mkdir -p $(BUILD)

dist: clean-dist build
	@cp -r $(BUILD)/ server/www/
	@mkdir -p server/www/js && cp libs/js/require.js server/www/js/require.js

clean:
	@rm -rf $(BUILD)

clean-dist:
	@rm -rf $(SERVER)/www

server:
	@cd $(SERVER); node server.js

watch:
	@echo Watching for changes...
	@fswatch -o $(SRC)/ | xargs -n1 -I{} make -f ~/Martin/game-experiments/cart-freak/Makefile dist
