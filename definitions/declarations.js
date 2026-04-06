// Add the tables you will use in repo to avoid hardcoding and get the dependency graph
// and document benefts
const tables=[
    {name: "distribution_centers", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"},
    {name: "events", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"},
    {name: "order_items", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"},
    {name: "orders", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"},
    {name: "users", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"},
    {name: "products", database: "bigquery-test-march", schema: "theLook_ecommerce_syd"}
];

// Function to generate the table declarations
// declare() must be placed with defintions/ in order to be run when compiled
function generateTableDeclarations(){
    tables.forEach(table =>{
        declare({
            type: "declaration",
            schema: table.schema,
            name: table.name,
            database: table.database
        }
        );
    });
}

// Call the function to generate the declarations
generateTableDeclarations();