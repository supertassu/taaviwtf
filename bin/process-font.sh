#!/bin/sh
rm static/fonts/*.woff2
mkdir font-temp/
cp $1/iosevka-taavi-bold.woff2 font-temp/
cp $1/iosevka-taavi-regular.woff2 font-temp/
glyphhanger --formats=woff2 --whitelist="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÅåÄäÖö0123456789!@#$%^&*()[]{}:;\"'\|,./<>?=+-_" --subset="font-temp/*.woff2" --css
cp font-temp/*-subset.woff2 static/fonts/
rm -r font-temp/
