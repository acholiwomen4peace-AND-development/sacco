function SearchBox({SearchChange}){
	return(
	<div className="tc br2 center">
	<input 
	id="Search"
	type="text" 
	placeholder="Search member"
	className="tc bg-light-blue b--light-blue pa1 br2 grow shadow-2 hover-blue" 
	onChange={SearchChange}  />
	</div>
		);
} export default SearchBox;