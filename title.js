function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + "https://github.com/kdmldeveloper/sms-bomber-api";
    } else {
        process.stdout.write('\x1b]2;' + x + " / https://github.com/kdmldeveloper/sms-bomber-api" + '\x1b\x5c');
    }
}

module.exports = console_title;
