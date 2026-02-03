import {Search, X} from "lucide-react";
export default function SearchBar({search,setSearch,region,setRegion}){
    const hasText=search.trim().length>0;
    return(
        <div className="glass rounded-4 p-3">
            <div className="input">
                <span className="input-group-text bg-transparent text-light border-0">
                    <Search size={18}/>
                </span>
                <input type="text" className="form-control bg-transparent text-light border-0" 
                value={search}
                onChange={(e)=>{setSearch(e.target.value)}}
                placeholder="Search Countries..."
                />

                {hasText && (
          <button
            className="btn btn-sm"
            type="button"
            onClick={() => setSearch("")}
          >
            <X size={16} />
          </button>
        )}

                <select value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>


                </select>
            </div>

        </div>
    )
}