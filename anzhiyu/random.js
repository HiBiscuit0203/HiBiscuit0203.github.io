var posts=["2024/01/01/2024——大航海时代/","2023/08/12/搜索引擎使用技巧/","2023/12/30/Biscuit的2023大事年表/","2023/08/11/hello-world/","2024/01/06/九上满意的作文/","2024/01/09/导师/","2024/01/09/编号-1/","2024/07/17/毕业后的聚餐/","2024/07/23/番薯家一日游/","2024/07/18/自习室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };