killZombie() {
    pid=$(ps -A -ostat,ppid | awk '/[zZ]/ && !a[$2]++ {print $2}');
    if [ "$pid" = "" ]; then
        echo "No zombie processes found.";
    else
        cmd=$(ps -p $pid -o cmd | sed '1d');
        echo "Found zombie process PID: $pid";
        echo "$cmd";
        echo "Kill it? Return to continue… (ctrl+c to cancel)";
        read -r;
        sudo kill -9 $pid;
    fi
}
