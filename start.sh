echo $'\n'--------------Starting application---------------$'\n'
sleep 1
mongod &
sleep 1
cd backend && npm run dev &
sleep 1
cd web && npm run dev & # running as a forked child, so no need to cd back to root of project

function handleSIGINT() {
    echo $'\n'---------------------Stopping Application--------------$'\n'
    sleep 1
    kill %1
    kill %2
    kill %3
    exit
}

trap 'handleSIGINT' SIGINT

while true; do
    sleep 1
done
