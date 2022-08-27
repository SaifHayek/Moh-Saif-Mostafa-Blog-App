
BEGIN ; 

insert into categories(name,color) values ('news','red') , ('music','blue') ,('sports','green') ;


insert into posts(title, content, username, username_img) values 
('banzema' , 'banzema win the best in Eourope' , 'mostafa.4omar' ,'https://images-ext-2.discordapp.net/external/Qv5lWiYOpxPQLoSNEls_ktMRJEMADOKVUN7-3iHRZPg/%3Fq%3Dtbn%3AANd9GcRY-lwicrR2SMGKgZYDsH383KRVX7gcG06qkDy_gQ_QiVwn37sZMBr3vQat0PeybWph/https/t3.gstatic.com/licensed-image?width=710&height=473'),
('banzema 2' , 'banzema win the best in Eourope 2' , 'mostafa.4omar' ,'https://images-ext-2.discordapp.net/external/Qv5lWiYOpxPQLoSNEls_ktMRJEMADOKVUN7-3iHRZPg/%3Fq%3Dtbn%3AANd9GcRY-lwicrR2SMGKgZYDsH383KRVX7gcG06qkDy_gQ_QiVwn37sZMBr3vQat0PeybWph/https/t3.gstatic.com/licensed-image?width=710&height=473');


insert into comments(content, username, post_id) values 
( 'nooooooooooooo' , 'seef.hayk' , 1 ) ,
( 'WTF' , 'mohammed' , 2 ) ; 


insert into post_category(post_id, category_id) values
( 1 , 1 ) ,
( 1 , 2 ),
( 1 , 3 ),
( 2 , 2 )
;

COMMIT ;