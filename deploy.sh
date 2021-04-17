yarn build

cd public


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Okarin1/Okarin1.github.io.git master

cd ../
rm -rf public