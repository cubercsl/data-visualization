# data-visualization

[WIP] 数据可视化课程项目

## 数据获取

从 WCA 导出的数据库中进行查询，得到原始数据。

> This information is based on competition results owned and maintained by the
> World Cube Assocation, published at https://worldcubeassociation.org/results
> as of December 25, 2020.

```sql
select competitionId, name, cityname, Competitions.countryId, count(distinct personId), year, month, day 
from Results join Competitions on Results.competitionId=Competitions.id 
where Competitions.countryId in ('China', 'Macau', 'Taiwan', 'Hong Kong') 
group by competitionId, name, cityname, Competitions.countryId, year, month, day 
order by year, month, day;
```

## 处理数据
需要得到如下格式的数据放在 `data/data.json`。
```
[
    {
        date: ...,
        data: [
            { name: '上海', value: 100 },
            ...
        ]
    },
    ...
]
```

## 美工

sad...