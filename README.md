# data-visualization

数据可视化课程项目

## 数据获取

从 WCA 导出的数据库中进行查询，得到原始数据。

```sql
select competitionId, name, cityname, count(distinct personId), latitude, longitude, year, month, day 
from Results join Competitions on Results.competitionId=Competitions.id 
where Competitions.countryId='China' 
group by competitionId, name, cityname, latitude, longitude, year, month, day 
order by year, month, day;
```
