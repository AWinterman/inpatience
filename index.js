#!/usr/bin/env node

var child = require('child_process')
  , nopt = require('nopt')

var options = {
    'process' : String
  , 'wait': Number
}

var shorthands = {
    'p': '--process'
  , 'w': '--wait'
}

var args = nopt(options, shorthands)

var running = child.spawn(args.process, args.argv.remain)

var timer = setTimeout(kill_and_exit, args.wait * 1000)

running.stdout.on('data', function(data) {
  process.stdout.write(data)

  reset_timer()
})

running.stderr.on('data', function(data) {
  process.stderr.write(data)

  reset_timer()
})

running.on('close', function(code) {
  clearTimeout(timer)
  process.exit(code)
})

function kill_and_exit() {
  process.stderr.write('Process timed out after ' + args.wait + ' seconds. \n')
  process.kill('SIGINT')
}

function reset_timer() {
  timer = setTimeout(kill_and_exit, args.wait * 1000)
}
