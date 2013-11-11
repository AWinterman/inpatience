# Inpatience # 

Stop waiting forever for your hung process.

## install ##

npm install -g inpatience

## run ##

```sh
inpatience -wait 2 -process process_which_might_hang additional_args -- --addional --options
```

Wiats `-wait` seconds, if nothing has been written to stdout or stdeer in that
time, kills the process.

