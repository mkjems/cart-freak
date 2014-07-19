.PHONY: server css

SRC = client-src
BUILD = build
SERVER = server
DIST_HTML = server/views
server_handlers = server/lib/handlers/

html_files = $(shell find $(SRC) -name '*.html')
dist_html_files = $(addprefix $(DIST_HTML)/,$(html_files:$(SRC)/%=%))

css_files = $(shell find $(SRC) -name '*.css')
build_css_files = $(addprefix $(BUILD)/,$(css_files:$(SRC)/%=%))

build: clean js $(build_css_files)

css: build_folder
	@cat $(SRC)/index.css >> $(BUILD)/index.css

$(BUILD)/%.css : $(SRC)/%.css
	@mkdir -p $(dir $@)
	@cp $< $@
	@$(warning $@)

$(DIST_HTML)/%.html : $(SRC)/%.html
	@mkdir -p $(dir $@)
	@cp $< $@
	@$(warning $@)

js: build_folder
	@node libs/js/r.js -convert $(SRC) $(BUILD)
	@$(warning $@)

build_folder:
	@mkdir -p $(BUILD)

dist: clean-dist build $(dist_html_files)
	@cp -r $(BUILD)/ server/www/
	@mkdir -p server/www/libs && cp -R libs/js/ server/www/libs/

clean:
	@rm -rf $(BUILD)

clean-dist:
	@rm -rf $(SERVER)/www
	@rm -rf $(DIST_HTML)/

server:
	@cd $(SERVER); node lib/server.js &

dist-watch:
	@echo Watching for changes in $(SRC)
	@fswatch -o $(SRC)/ | xargs -n1 -I{} ./make_dist_reload.sh

server-watch:
	@nodemon ./server/lib/server.js localhost 3000
