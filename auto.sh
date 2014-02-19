cd /home/william/williamlfang.github.com        
git add . -A           
git commit -m "update"       

git remote rm origin   
git remote add origin git@github.com:williamlfang/williamlfang.github.com.git
git push origin master

jekyll --server         
