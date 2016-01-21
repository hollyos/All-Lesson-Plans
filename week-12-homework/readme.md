mySQL hw 
100,000 records
C-R-U-D
node mySQL app
commandline 
one database
indexing

1. see all the records 
2. delete a single record based off the primary key 
3. update a single record based off the primary key 
4. delete a record based off the primary key 
5. return a certain amount of records based off a where on a certain column 
6. two table left join that returns all the zoo keepers for the zoos (if zoos and zoo keepers are seperate tables)


Table: Zoo Info

| pk | Zoo | CareTaker  |
|----|-----|------------|
|  1 |  NY |    John    |
|  2 |  NY |    Mary    |
|  3 |  SF |    Sara    |

Table: Animal Info

| pk | Name  | Type  | Age | CareTaker_fk |
|----|-------|-------|-----|--------------|
|  1 |  Bobo |  Bear |  4  |      1       |
|  1 |  Link |  Lion |  3  |      1       |
|  1 |  CiCi |  Cat  |  1  |      2       |

