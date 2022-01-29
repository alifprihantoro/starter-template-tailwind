alias dev='
# copy config tailwind
cp ./tailwind.config.js assets/dev/js/tailwind.config.js &
# reset static
rm static/*
# hugo start
hugo server &
HUGOSERVE=$!
# babel
node app/bin/babel &
# watch
node app/bin/watch &
MYWATCHFILE=$!
'
