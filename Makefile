setup:
	rm -rf node_modules && \
	npm install

build:
	cross-env NODE_ENV=production webpack -p

start:
	webpack-dev-server --history-api-fallback --host 0.0.0.0 --port 3000 --hot --inline --progress

css:
	sass -w public/css/src/main.scss:public/css/main.css -t compressed

run:
	tmux new -s elysium -d
	tmux rename-window elysium
	tmux split-window -h
	tmux send-keys 'make start' C-m
	tmux resize-pane -R 10
	tmux split-window -v
	tmux send-keys 'make css' C-m
	tmux select-pane -t 1
	tmux attach-session -t elysium

standard:
	standard --fix