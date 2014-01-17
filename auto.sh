jekyll build

git add .
git commit -m 'update'
git push -u origin master &

cp _site/* ../williamlfang.github.com/ -r

cd ../williamlfang.github.com
git add .
git commit -m 'update'
git push -u origin master &


