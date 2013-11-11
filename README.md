# Inpatience # 

Timebox process, useful for processes which sometimes fail silently and then
hang forever..

## install ##

`npm install -g inpatience`

## run ##

```sh
inpatience -wait 2 -process process_which_might_hang additional_args -- --moar --options
```

Waits `-wait` seconds, if nothing has been written to stdout or stderr in that
time, kills the process. Each time something is written to stdout or stderr,
resets the timer.

