#!/bin/sh
rm readme.md
cat "./readme_short.md" >> readme.md
echo "" >> readme.md
for var in `find . -maxdepth 1 -type d | grep -v .git`
do
  if [ ${var} != "." ]; then
    echo "## [${var}](${var})" >> readme.md
    echo "" >> readme.md
    cat "${var}/readme_short.md" >> readme.md
  fi
done
