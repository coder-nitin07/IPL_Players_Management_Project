
function getFilterFromQuery(query){
    const filter = {};

    if (query.team) filter.team = { $regex: query.team, $options: 'i' };
    if (query.country) filter.country = { $regex: query.country, $options: 'i' };
    if (query.role) filter.role = { $regex: query.role, $options: 'i' };
    if (query.runs) filter.runs = parseInt(query.runs);
    if (query.minRuns) filter.runs = { ...filter.runs, $gte: parseInt(query.minRuns) };
    if (query.maxRuns) filter.runs = { ...filter.runs, $lte: parseInt(query.maxRuns) };
    if (query.search) filter.name = { $regex: query.search, $options: 'i' };

    if (query.minSalary) filter.salary = { ...filter.salary, $gte: parseInt(query.minSalary) };
    if (query.maxSalary) filter.salary = { ...filter.salary, $lte: parseInt(query.maxSalary) };

    return filter;
};

module.exports = { getFilterFromQuery };