import { Question } from "@/types/quiz";

export const questions: Question[] = [
  // Domain 1: Snowflake Architecture (20%)
  {
    id: 1,
    question: "A company is experiencing slow query performance during peak hours when multiple teams run complex analytical queries simultaneously. Which Snowflake feature should they implement to isolate workloads and prevent resource contention?",
    options: [
      "Enable result caching across all warehouses",
      "Create dedicated virtual warehouses for each workload type",
      "Increase the size of the single shared warehouse",
      "Configure query acceleration service for all queries"
    ],
    correctAnswer: 1,
    explanation: "Creating dedicated virtual warehouses for different workload types (ETL, BI reporting, ad-hoc queries) provides workload isolation. Each warehouse has independent compute resources, preventing one workload from affecting another's performance.",
    category: "Architecture"
  },
  {
    id: 2,
    question: "Which statement accurately describes how Snowflake's metadata cache operates within the cloud services layer?",
    options: [
      "It stores the actual row data for frequently accessed tables",
      "It caches query results and automatically invalidates them after 24 hours",
      "It stores object definitions, statistics, and access control information used for query compilation",
      "It requires manual refresh commands to update cached information"
    ],
    correctAnswer: 2,
    explanation: "The cloud services layer maintains metadata including object definitions, table statistics, file locations, and access control information. This metadata is used during query compilation and optimization, and is automatically maintained by Snowflake without manual intervention.",
    category: "Architecture"
  },
  {
    id: 3,
    question: "A data engineer notices that some queries return results almost instantly without consuming warehouse credits. Which Snowflake caching mechanism is responsible for this behavior?",
    options: [
      "Local disk cache on the virtual warehouse nodes",
      "Result cache in the cloud services layer",
      "Remote disk cache in the storage layer",
      "Materialized view automatic refresh"
    ],
    correctAnswer: 1,
    explanation: "The result cache in the cloud services layer stores query results for 24 hours. When an identical query is submitted and the underlying data hasn't changed, results are returned from this cache without using warehouse compute resources.",
    category: "Performance"
  },
  {
    id: 4,
    question: "Which combination of Snowflake architectural components enables the separation of storage and compute?",
    options: [
      "Data stored in micro-partitions with independent virtual warehouses accessing shared cloud storage",
      "Data stored in virtual warehouses with stages for backup",
      "Schemas containing both data and compute definitions",
      "Databases replicated across multiple warehouses"
    ],
    correctAnswer: 0,
    explanation: "Snowflake stores data in micro-partitions in cloud storage (S3, Azure Blob, GCS), while virtual warehouses are independent compute clusters that can access this shared storage. This separation allows scaling storage and compute independently.",
    category: "Architecture"
  },
  {
    id: 5,
    question: "A Snowflake account has three warehouses: WH_ETL (X-Large), WH_REPORTING (Medium), and WH_ADHOC (Small). If WH_REPORTING is running a complex query and WH_ADHOC submits a simple query, what happens?",
    options: [
      "WH_ADHOC must wait until WH_REPORTING completes its query",
      "Both queries execute independently using their own compute resources",
      "The simple query is automatically routed to WH_REPORTING for faster execution",
      "Snowflake automatically suspends WH_ETL to provide resources to WH_ADHOC"
    ],
    correctAnswer: 1,
    explanation: "Virtual warehouses are completely independent compute clusters. Queries submitted to different warehouses execute concurrently without affecting each other. This is a key benefit of Snowflake's multi-cluster architecture.",
    category: "Architecture"
  },
  {
    id: 6,
    question: "What is the primary function of Snowflake's query pruning optimization?",
    options: [
      "To compress data files for storage efficiency",
      "To skip scanning micro-partitions that don't contain relevant data based on metadata",
      "To cache frequently accessed columns in memory",
      "To automatically create indexes on frequently queried columns"
    ],
    correctAnswer: 1,
    explanation: "Query pruning uses metadata stored for each micro-partition (min/max values, distinct counts) to skip partitions that cannot contain matching data. This significantly reduces the amount of data scanned, improving query performance.",
    category: "Performance"
  },
  {
    id: 7,
    question: "A company requires that certain sensitive workloads never share compute resources with other workloads, even from the same account. Which deployment option should they consider?",
    options: [
      "Standard multi-cluster warehouse",
      "Dedicated virtual warehouse with maximum cluster count",
      "Snowflake Virtual Private Snowflake (VPS)",
      "Enterprise edition with enhanced security"
    ],
    correctAnswer: 2,
    explanation: "Virtual Private Snowflake (VPS) provides completely isolated compute and storage resources, separate from other Snowflake customers. This is designed for organizations with the strictest security and compliance requirements.",
    category: "Architecture"
  },
  {
    id: 8,
    question: "Which statement about Snowflake micro-partitions is TRUE?",
    options: [
      "Users must manually define partition keys when creating tables",
      "Micro-partitions are immutable and automatically organized by Snowflake",
      "Partition size is configurable between 16MB and 256MB",
      "Partitions can be manually reorganized using ALTER TABLE commands"
    ],
    correctAnswer: 1,
    explanation: "Micro-partitions are automatically created and managed by Snowflake. They are immutable (cannot be modified in place), sized between 50-500MB compressed, and organized based on the natural ordering of data as it's loaded. No manual partitioning is required.",
    category: "Architecture"
  },
  {
    id: 9,
    question: "During query execution, which cache is checked FIRST before accessing remote storage?",
    options: [
      "Result cache in cloud services layer",
      "Local SSD cache on warehouse nodes",
      "Metadata cache",
      "Materialized view cache"
    ],
    correctAnswer: 0,
    explanation: "The result cache is checked first. If an identical query was recently run and data hasn't changed, results return immediately. If not found, the warehouse checks its local SSD cache, and finally retrieves data from remote storage if needed.",
    category: "Performance"
  },
  {
    id: 10,
    question: "Which Snowflake edition feature allows you to fail over to a secondary account in a different region for disaster recovery?",
    options: [
      "Database replication (available in Standard edition)",
      "Failover/Failback (requires Business Critical edition or higher)",
      "Time Travel (available in all editions)",
      "Zero-Copy Cloning (available in all editions)"
    ],
    correctAnswer: 1,
    explanation: "Failover/Failback capabilities require Business Critical edition or higher. While database replication is available in Standard edition, the ability to automatically failover to a secondary account and then failback requires Business Critical or VPS.",
    category: "Architecture"
  },

  // Domain 2: Account Access and Security (20%)
  {
    id: 11,
    question: "A security administrator needs to ensure that a role can create objects in a specific schema but cannot access objects created by other roles in that schema. Which approach should be implemented?",
    options: [
      "Grant OWNERSHIP on the schema to the role",
      "Grant CREATE privileges on the schema and rely on Snowflake's default ownership model",
      "Create a new database for the role with exclusive access",
      "Use future grants to automatically grant access to all new objects"
    ],
    correctAnswer: 1,
    explanation: "By default, the role that creates an object owns it and has full control. Granting CREATE privileges allows the role to create objects, and without additional grants, other roles cannot access those objects. This implements object-level isolation within a shared schema.",
    category: "Security"
  },
  {
    id: 12,
    question: "Which statement about Row Access Policies in Snowflake is correct?",
    options: [
      "They are evaluated at query compile time and can be bypassed with ACCOUNTADMIN role",
      "They filter rows dynamically at query runtime based on the executing user's context",
      "They must be defined at the database level and apply to all tables",
      "They require Enterprise edition and cannot reference other tables"
    ],
    correctAnswer: 1,
    explanation: "Row Access Policies are evaluated at runtime, dynamically filtering rows based on attributes like the current user, role, or values from a mapping table. They cannot be bypassed even by ACCOUNTADMIN, providing true row-level security.",
    category: "Security"
  },
  {
    id: 13,
    question: "A data engineer needs to grant a role the ability to run SELECT queries on all current and future tables in a schema. What is the most efficient approach?",
    options: [
      "Grant SELECT on each table individually as they are created",
      "Use GRANT SELECT ON ALL TABLES IN SCHEMA and GRANT SELECT ON FUTURE TABLES IN SCHEMA",
      "Grant OWNERSHIP on the schema to the role",
      "Create a secure view that unions all tables"
    ],
    correctAnswer: 1,
    explanation: "Using both 'GRANT SELECT ON ALL TABLES IN SCHEMA' (for existing tables) and 'GRANT SELECT ON FUTURE TABLES IN SCHEMA' (for tables created later) efficiently manages access without requiring individual grants for each table.",
    category: "Security"
  },
  {
    id: 14,
    question: "What happens when a parent role is granted to a child role in Snowflake's role hierarchy?",
    options: [
      "The child role inherits all privileges from the parent role",
      "The parent role inherits all privileges from the child role",
      "Both roles share privileges bidirectionally",
      "No inheritance occurs; roles must be granted privileges independently"
    ],
    correctAnswer: 1,
    explanation: "When ROLE_A is granted to ROLE_B, ROLE_B becomes the parent and inherits all privileges that ROLE_A has. The hierarchy flows upward—a role inherits privileges from all roles granted to it, not the other way around.",
    category: "Security"
  },
  {
    id: 15,
    question: "Which authentication method provides the STRONGEST security for service accounts running automated ETL processes?",
    options: [
      "Username and password with multi-factor authentication",
      "Key pair authentication with encrypted private key",
      "Single Sign-On (SSO) with SAML 2.0",
      "OAuth with refresh tokens"
    ],
    correctAnswer: 1,
    explanation: "Key pair authentication uses RSA key pairs and is recommended for service accounts and automated processes. The private key can be encrypted with a passphrase, and there's no password to rotate or risk of credential exposure in connection strings.",
    category: "Security"
  },
  {
    id: 16,
    question: "A company's security policy requires that all data be encrypted using customer-managed keys. Which Snowflake feature and edition supports this requirement?",
    options: [
      "Client-side encryption with any Snowflake edition",
      "Tri-Secret Secure with Business Critical edition",
      "Server-side encryption available in Standard edition",
      "Column-level encryption with Enterprise edition"
    ],
    correctAnswer: 1,
    explanation: "Tri-Secret Secure (customer-managed keys) is available in Business Critical edition. It combines a Snowflake-maintained key with a customer-maintained key to create a composite master key, giving customers control over their encryption keys.",
    category: "Security"
  },
  {
    id: 17,
    question: "What is the purpose of a Network Policy in Snowflake?",
    options: [
      "To control which virtual warehouses can access specific databases",
      "To restrict access to Snowflake based on IP address ranges",
      "To encrypt data in transit between regions",
      "To define bandwidth limits for data loading"
    ],
    correctAnswer: 1,
    explanation: "Network Policies control access to Snowflake by specifying allowed and blocked IP address ranges. They can be applied at the account level or to specific users, ensuring connections only come from trusted network locations.",
    category: "Security"
  },
  {
    id: 18,
    question: "Which masking policy configuration allows showing full data to ANALYST_ROLE while showing masked data to all other roles?",
    options: [
      "CASE WHEN CURRENT_ROLE() = 'ANALYST_ROLE' THEN val ELSE '***' END",
      "CASE WHEN IS_ROLE_IN_SESSION('ANALYST_ROLE') THEN val ELSE '***' END",
      "Both A and B would work correctly",
      "Masking policies cannot differentiate between roles"
    ],
    correctAnswer: 1,
    explanation: "IS_ROLE_IN_SESSION() checks if a role is active in the current session, accounting for role hierarchy. CURRENT_ROLE() only returns the primary active role. IS_ROLE_IN_SESSION() is preferred as it properly handles inherited roles.",
    category: "Security"
  },
  {
    id: 19,
    question: "A Snowflake administrator needs to audit all login attempts to the account. Which feature should they use?",
    options: [
      "Query History view in ACCOUNT_USAGE schema",
      "LOGIN_HISTORY view in ACCOUNT_USAGE schema",
      "ACCESS_HISTORY view in ACCOUNT_USAGE schema",
      "SESSIONS view in INFORMATION_SCHEMA"
    ],
    correctAnswer: 1,
    explanation: "LOGIN_HISTORY in ACCOUNT_USAGE schema records all login attempts including successful and failed attempts, authentication method used, client information, and error messages for failures. It provides comprehensive login auditing.",
    category: "Security"
  },
  {
    id: 20,
    question: "What is the impact of running REVOKE ROLE role_a FROM ROLE role_b when other roles depend on this hierarchy for access?",
    options: [
      "Only role_b loses access; roles above role_b retain their privileges",
      "All roles in the hierarchy lose access to role_a's privileges",
      "role_b and all parent roles of role_b lose inherited privileges from role_a",
      "The command fails if there are dependent roles"
    ],
    correctAnswer: 2,
    explanation: "When role_a is revoked from role_b, role_b loses all inherited privileges from role_a. Additionally, any parent roles of role_b that were accessing role_a's privileges through role_b will also lose that access path.",
    category: "Security"
  },

  // Domain 3: Performance Concepts (15%)
  {
    id: 21,
    question: "A query on a 10TB table with a WHERE clause filtering on a DATE column is scanning 100% of the table. What is the MOST likely cause and solution?",
    options: [
      "The table lacks a clustering key; add clustering on the DATE column",
      "The warehouse is too small; increase warehouse size",
      "The result cache is disabled; enable result caching",
      "The DATE column should be converted to TIMESTAMP"
    ],
    correctAnswer: 0,
    explanation: "When queries consistently scan most of the table despite selective filters, it indicates poor clustering. Adding a clustering key on the commonly filtered DATE column will reorganize data, enabling effective partition pruning and significantly reducing scan size.",
    category: "Performance"
  },
  {
    id: 22,
    question: "Which warehouse configuration is BEST suited for handling variable workloads with unpredictable query volumes and sizes?",
    options: [
      "Single-cluster warehouse with maximum cluster count of 1",
      "Multi-cluster warehouse with auto-scaling enabled and economy scaling policy",
      "Multi-cluster warehouse with auto-scaling enabled and standard scaling policy",
      "Single large warehouse with auto-suspend disabled"
    ],
    correctAnswer: 2,
    explanation: "Multi-cluster warehouse with standard scaling policy immediately spins up additional clusters when queries queue, providing the best responsiveness for variable workloads. Economy policy waits longer before scaling, which may cause delays during spikes.",
    category: "Performance"
  },
  {
    id: 23,
    question: "What is the primary benefit of using the Query Acceleration Service (QAS)?",
    options: [
      "It caches query results for faster subsequent executions",
      "It offloads portions of eligible queries to shared compute resources to reduce execution time",
      "It automatically optimizes query plans based on historical patterns",
      "It precomputes aggregations during off-peak hours"
    ],
    correctAnswer: 1,
    explanation: "Query Acceleration Service dynamically allocates additional shared compute resources to accelerate portions of eligible queries, particularly those with large scans or selective filters. It complements warehouse compute without requiring larger warehouse sizes.",
    category: "Performance"
  },
  {
    id: 24,
    question: "A dashboard with 50 concurrent users runs the same query with different filter values. Which Snowflake feature would BEST improve performance for this scenario?",
    options: [
      "Create 50 separate warehouses for each user",
      "Use a multi-cluster warehouse with auto-scaling",
      "Enable query result reuse with similar query matching",
      "Pre-compute all possible filter combinations in materialized views"
    ],
    correctAnswer: 1,
    explanation: "Multi-cluster warehouses scale out to handle concurrent queries by automatically starting additional clusters. This provides the necessary compute capacity for 50 users running similar queries simultaneously without resource contention.",
    category: "Performance"
  },
  {
    id: 25,
    question: "Which statement about Snowflake's Automatic Clustering is TRUE?",
    options: [
      "It must be manually triggered using ALTER TABLE RECLUSTER",
      "It runs continuously in the background and consumes serverless compute credits",
      "It only runs during periods of low warehouse utilization",
      "It requires a dedicated warehouse to be specified"
    ],
    correctAnswer: 1,
    explanation: "Automatic Clustering is a serverless feature that continuously monitors and reclusters table micro-partitions as needed. It runs independently of virtual warehouses and charges are based on serverless compute credits consumed.",
    category: "Performance"
  },
  {
    id: 26,
    question: "A query joining a 500GB fact table with a 50MB dimension table is performing poorly. Which optimization technique is Snowflake MOST likely to apply automatically?",
    options: [
      "Hash join with the fact table as the build side",
      "Broadcast join by replicating the dimension table to all nodes",
      "Sort-merge join after sorting both tables",
      "Nested loop join iterating through the fact table"
    ],
    correctAnswer: 1,
    explanation: "Snowflake's optimizer automatically chooses broadcast joins for small tables (typically < 100MB). The small dimension table is replicated to all warehouse nodes, eliminating expensive data shuffling of the large fact table.",
    category: "Performance"
  },
  {
    id: 27,
    question: "What is the impact of setting WAREHOUSE_SIZE = 'XLARGE' compared to 'LARGE' on query execution?",
    options: [
      "Doubles the number of servers, potentially halving execution time for large queries",
      "Doubles the memory only, with no impact on CPU",
      "Reduces credit consumption while maintaining performance",
      "Only affects the maximum number of concurrent queries"
    ],
    correctAnswer: 0,
    explanation: "Each warehouse size increase doubles the compute resources (servers/nodes). An X-Large has twice the compute of Large. This can significantly improve performance for large, complex queries but also doubles the credit consumption per hour.",
    category: "Performance"
  },
  {
    id: 28,
    question: "Which scenario would benefit MOST from a Search Optimization Service?",
    options: [
      "Analytical queries aggregating millions of rows",
      "Point lookup queries searching for specific values in high-cardinality columns",
      "Queries joining multiple large tables",
      "Time-series queries with date range filters"
    ],
    correctAnswer: 1,
    explanation: "Search Optimization Service is designed for point lookup queries on high-cardinality columns (like IDs, emails). It maintains a search access path that enables sub-second lookups in tables with billions of rows.",
    category: "Performance"
  },
  {
    id: 29,
    question: "A query shows high 'Remote Disk IO' in the query profile. What does this indicate and how can it be addressed?",
    options: [
      "The query is CPU-bound; increase warehouse size",
      "Data is being read from cloud storage; improve clustering or use a larger warehouse with more cache",
      "Network latency is high; use a warehouse closer to the data region",
      "The result set is too large; add LIMIT clause"
    ],
    correctAnswer: 1,
    explanation: "High Remote Disk IO indicates data is being read from cloud storage rather than the warehouse's local SSD cache. Improving table clustering reduces data scanned, while larger warehouses have more cache capacity to store frequently accessed data.",
    category: "Performance"
  },
  {
    id: 30,
    question: "What is the difference between CLUSTER BY and ORDER BY in Snowflake?",
    options: [
      "CLUSTER BY defines physical data organization for partition pruning; ORDER BY sorts query results",
      "They are interchangeable and produce the same results",
      "ORDER BY is for tables; CLUSTER BY is for views",
      "CLUSTER BY affects query results; ORDER BY affects storage"
    ],
    correctAnswer: 0,
    explanation: "CLUSTER BY defines how data is physically organized in micro-partitions to optimize partition pruning for common query patterns. ORDER BY sorts the result set of a query. They serve completely different purposes.",
    category: "Performance"
  },

  // Domain 4: Data Loading and Unloading (10%)
  {
    id: 31,
    question: "A data pipeline loads 10GB of CSV files every hour. The files sometimes contain duplicate records that should be ignored. Which COPY INTO option handles this requirement?",
    options: [
      "ON_ERROR = 'SKIP_FILE'",
      "VALIDATION_MODE = 'RETURN_ERRORS'",
      "MATCH_BY_COLUMN_NAME = 'CASE_INSENSITIVE'",
      "This cannot be handled by COPY INTO; use MERGE instead"
    ],
    correctAnswer: 3,
    explanation: "COPY INTO does not deduplicate data—it loads what's in the files. To handle duplicates, use a staging table with COPY INTO, then use MERGE to insert only non-duplicate records into the target table based on a unique key.",
    category: "Data Loading"
  },
  {
    id: 32,
    question: "Which statement about Snowpipe is correct?",
    options: [
      "Snowpipe requires a dedicated virtual warehouse to be running",
      "Snowpipe uses serverless compute and loads data within minutes of file arrival",
      "Snowpipe can only load data from internal stages",
      "Snowpipe batches files for 24 hours before loading"
    ],
    correctAnswer: 1,
    explanation: "Snowpipe is a serverless, continuous data ingestion service. It uses Snowflake-managed compute resources (not customer warehouses) and typically loads data within minutes of files arriving in the stage. It can load from both internal and external stages.",
    category: "Data Loading"
  },
  {
    id: 33,
    question: "What is the recommended approach for loading a single 50GB compressed Parquet file into Snowflake for optimal performance?",
    options: [
      "Load it directly using COPY INTO; Snowflake handles large files efficiently",
      "Split into multiple smaller files (100-250MB) to enable parallel loading",
      "Convert to CSV format first for better compatibility",
      "Use Snowpipe for automatic chunking"
    ],
    correctAnswer: 1,
    explanation: "While Snowflake can load large files, splitting them into 100-250MB compressed files enables parallel loading across multiple threads, significantly improving load performance. This is especially important for large datasets.",
    category: "Data Loading"
  },
  {
    id: 34,
    question: "A COPY INTO command completed successfully but loaded 0 rows. What is the MOST likely cause?",
    options: [
      "The warehouse was too small to process the file",
      "The files were already loaded and Snowflake's load metadata prevented re-loading",
      "The file format specification was incorrect",
      "The user lacked INSERT privileges on the table"
    ],
    correctAnswer: 1,
    explanation: "Snowflake maintains load metadata for 64 days. If the same files were previously loaded successfully, COPY INTO skips them to prevent duplicates. Use FORCE = TRUE to reload, or PURGE old files and load fresh ones.",
    category: "Data Loading"
  },
  {
    id: 35,
    question: "Which external stage definition correctly references an S3 bucket with a storage integration?",
    options: [
      "CREATE STAGE my_stage URL = 's3://bucket/path' CREDENTIALS = (AWS_KEY_ID = '...' AWS_SECRET_KEY = '...');",
      "CREATE STAGE my_stage URL = 's3://bucket/path' STORAGE_INTEGRATION = my_s3_integration;",
      "CREATE STAGE my_stage STORAGE_INTEGRATION = my_s3_integration PATH = 's3://bucket/path';",
      "CREATE STAGE my_stage LOCATION = 's3://bucket/path' INTEGRATION = my_s3_integration;"
    ],
    correctAnswer: 1,
    explanation: "Storage integrations are the recommended way to access external cloud storage. The correct syntax uses URL for the S3 path and STORAGE_INTEGRATION to reference the integration object that handles authentication securely.",
    category: "Data Loading"
  },
  {
    id: 36,
    question: "When unloading data using COPY INTO <stage>, what determines the number of output files generated?",
    options: [
      "The MAX_FILE_SIZE parameter and the amount of data being unloaded",
      "Always creates exactly one file per COPY INTO command",
      "The number of warehouses nodes, regardless of data size",
      "The PARALLEL parameter set at the session level"
    ],
    correctAnswer: 0,
    explanation: "The number of files depends on data size and MAX_FILE_SIZE parameter (default ~16MB). Data is unloaded in parallel, with each thread creating files up to MAX_FILE_SIZE. Larger data sets result in more files for optimal parallel operations.",
    category: "Data Loading"
  },
  {
    id: 37,
    question: "What is the behavior of STRIP_OUTER_ARRAY = TRUE when loading JSON data?",
    options: [
      "Removes all arrays from the JSON structure",
      "Loads each element of the outer array as a separate row",
      "Flattens nested arrays into a single level",
      "Converts arrays to comma-separated strings"
    ],
    correctAnswer: 1,
    explanation: "STRIP_OUTER_ARRAY = TRUE is used when your JSON file contains an array of objects at the root level. It strips the outer array brackets and loads each array element as a separate table row, which is common for API responses.",
    category: "Data Loading"
  },
  {
    id: 38,
    question: "A company wants to continuously stream real-time events from Kafka into Snowflake. Which approach is recommended?",
    options: [
      "Use Snowpipe with REST API calls for each event",
      "Use the Snowflake Kafka Connector to stream data through Snowpipe",
      "Create a custom application that runs COPY INTO every second",
      "Use external tables to query Kafka directly"
    ],
    correctAnswer: 1,
    explanation: "The Snowflake Kafka Connector is purpose-built for streaming Kafka data into Snowflake. It uses Snowpipe Streaming for near real-time ingestion with exactly-once semantics and handles offset management automatically.",
    category: "Data Loading"
  },
  {
    id: 39,
    question: "Which file format provides the BEST loading performance for structured data with many columns?",
    options: [
      "CSV with GZIP compression",
      "JSON with SNAPPY compression",
      "Parquet with SNAPPY compression",
      "AVRO with ZSTD compression"
    ],
    correctAnswer: 2,
    explanation: "Parquet is columnar, enabling Snowflake to read only required columns. Combined with efficient SNAPPY compression, it provides excellent performance for wide tables. CSV requires reading entire rows, and JSON has parsing overhead.",
    category: "Data Loading"
  },
  {
    id: 40,
    question: "What happens when ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE during a COPY INTO operation?",
    options: [
      "Extra columns in the file cause the entire load to fail",
      "Missing columns are filled with NULL; extra columns are ignored based on position",
      "The file columns are automatically mapped by name",
      "All mismatched rows are written to an error file"
    ],
    correctAnswer: 1,
    explanation: "With ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE, COPY INTO is lenient about column count differences. If the file has fewer columns, table columns are filled with NULL. If more columns, extras are ignored. Mapping is positional.",
    category: "Data Loading"
  },

  // Domain 5: Data Transformations (20%)
  {
    id: 41,
    question: "Which approach should be used to handle slowly changing dimension Type 2 (SCD-2) in Snowflake?",
    options: [
      "Use UPDATE statements to modify existing records",
      "Use MERGE with INSERT for new records and UPDATE to set end dates on existing records",
      "Use TRUNCATE and reload the entire dimension daily",
      "Use VARIANT columns to store version history"
    ],
    correctAnswer: 1,
    explanation: "SCD-2 maintains history by adding new records and updating end dates on existing records. MERGE efficiently handles this by matching on business keys, updating current records to set end dates, and inserting new versions in a single statement.",
    category: "Data Transformation"
  },
  {
    id: 42,
    question: "What is the result of SELECT PARSE_JSON('{\"a\": 1, \"b\": [1,2,3]}'):b[1]::INT?",
    options: [
      "1",
      "2",
      "[1,2,3]",
      "Error: Invalid array index"
    ],
    correctAnswer: 1,
    explanation: "PARSE_JSON converts the string to a VARIANT. :b accesses the 'b' key (array [1,2,3]). [1] accesses index 1 (second element, which is 2). ::INT casts to integer. Result is 2.",
    category: "Data Transformation"
  },
  {
    id: 43,
    question: "A JSON column contains nested arrays that need to be flattened into rows. Which function and mode should be used?",
    options: [
      "LATERAL FLATTEN with mode OBJECT",
      "LATERAL FLATTEN with mode ARRAY",
      "LATERAL FLATTEN with mode BOTH or leave mode unspecified",
      "PARSE_JSON with recursive expansion"
    ],
    correctAnswer: 2,
    explanation: "LATERAL FLATTEN with mode BOTH (default) handles both arrays and objects. For nested structures, you may chain multiple FLATTEN calls or use recursive_descent => TRUE to flatten deeply nested arrays in a single operation.",
    category: "Data Transformation"
  },
  {
    id: 44,
    question: "What is the key difference between a stored procedure and a user-defined function (UDF) in Snowflake?",
    options: [
      "UDFs can modify data; stored procedures cannot",
      "Stored procedures can execute DDL/DML and contain transaction control; UDFs are query-only and return values",
      "Stored procedures are faster than UDFs",
      "UDFs support JavaScript; stored procedures only support SQL"
    ],
    correctAnswer: 1,
    explanation: "Stored procedures can execute any SQL including DDL, DML, and transaction control (BEGIN, COMMIT, ROLLBACK). UDFs are designed to be called within queries, must return a value, and cannot modify data or control transactions.",
    category: "Data Transformation"
  },
  {
    id: 45,
    question: "Which window function correctly calculates a running total of sales ordered by date within each region?",
    options: [
      "SUM(sales) OVER (PARTITION BY region ORDER BY date)",
      "SUM(sales) OVER (ORDER BY date PARTITION BY region)",
      "RUNNING_TOTAL(sales) OVER (PARTITION BY region ORDER BY date)",
      "SUM(sales) OVER (PARTITION BY region) ORDER BY date"
    ],
    correctAnswer: 0,
    explanation: "SUM with PARTITION BY region ORDER BY date creates a running total within each region, ordered by date. The ORDER BY in the OVER clause creates a default frame of ROWS UNBOUNDED PRECEDING to CURRENT ROW, enabling cumulative calculation.",
    category: "Data Transformation"
  },
  {
    id: 46,
    question: "A MERGE statement needs to handle three scenarios: update existing records, insert new records, and delete records no longer in the source. How many WHEN clauses are required?",
    options: [
      "Two: WHEN MATCHED and WHEN NOT MATCHED",
      "Three: WHEN MATCHED THEN UPDATE, WHEN MATCHED THEN DELETE, WHEN NOT MATCHED THEN INSERT",
      "Three: WHEN MATCHED, WHEN NOT MATCHED BY TARGET, WHEN NOT MATCHED BY SOURCE",
      "Four separate MERGE statements are required"
    ],
    correctAnswer: 2,
    explanation: "Snowflake MERGE supports WHEN MATCHED (update/delete existing), WHEN NOT MATCHED (insert new), and WHEN NOT MATCHED BY SOURCE (delete records in target not in source). All three scenarios can be handled in one MERGE statement.",
    category: "Data Transformation"
  },
  {
    id: 47,
    question: "What is the output of SELECT ARRAY_AGG(DISTINCT col) WITHIN GROUP (ORDER BY col) FROM table?",
    options: [
      "A comma-separated string of values",
      "An array containing unique values sorted in order",
      "A single aggregated value",
      "Error: DISTINCT cannot be used with ARRAY_AGG"
    ],
    correctAnswer: 1,
    explanation: "ARRAY_AGG aggregates values into an array. DISTINCT removes duplicates, and WITHIN GROUP (ORDER BY col) sorts the elements. The result is an array of unique values in sorted order.",
    category: "Data Transformation"
  },
  {
    id: 48,
    question: "Which statement creates a JavaScript UDF that can be used in SQL queries?",
    options: [
      "CREATE FUNCTION my_func(x INT) RETURNS INT LANGUAGE JAVASCRIPT AS 'return x * 2'",
      "CREATE FUNCTION my_func(x FLOAT) RETURNS FLOAT LANGUAGE JAVASCRIPT AS $$ return X * 2; $$",
      "CREATE OR REPLACE FUNCTION my_func(x FLOAT) RETURNS FLOAT LANGUAGE JAVASCRIPT AS 'return X * 2;'",
      "CREATE FUNCTION my_func(x INT) RETURNS INT AS 'return x * 2' LANGUAGE JAVASCRIPT"
    ],
    correctAnswer: 2,
    explanation: "JavaScript UDFs require: CREATE [OR REPLACE] FUNCTION, parameter with type, RETURNS with type, LANGUAGE JAVASCRIPT, and the JS code in quotes or $$. Note: JS parameter names are uppercase (X not x).",
    category: "Data Transformation"
  },
  {
    id: 49,
    question: "How do you call a stored procedure that modifies data and access its results?",
    options: [
      "SELECT * FROM TABLE(RESULT_SCAN(LAST_QUERY_ID()))",
      "CALL procedure_name(); then query the modified table directly",
      "Both A and B are valid approaches depending on procedure implementation",
      "Stored procedure results cannot be accessed after execution"
    ],
    correctAnswer: 2,
    explanation: "Stored procedures can return results via RESULT_SCAN of their CALL statement, or they can modify tables that you query afterward. The approach depends on how the procedure is designed—some return result sets, others modify data.",
    category: "Data Transformation"
  },
  {
    id: 50,
    question: "What is the purpose of QUALIFY in a Snowflake query?",
    options: [
      "To filter rows before window functions are applied",
      "To filter rows based on the results of window functions",
      "To qualify table names with schema prefixes",
      "To validate query syntax before execution"
    ],
    correctAnswer: 1,
    explanation: "QUALIFY filters results based on window function values, similar to how HAVING filters GROUP BY results. For example, 'QUALIFY ROW_NUMBER() OVER (PARTITION BY id ORDER BY date DESC) = 1' keeps only the latest row per id.",
    category: "Data Transformation"
  },

  // Domain 6: Data Protection and Data Sharing (15%)
  {
    id: 51,
    question: "A table was accidentally dropped 5 days ago. The account has Enterprise edition with default Time Travel settings. Can the table be recovered?",
    options: [
      "No, Time Travel only retains data for 24 hours",
      "Yes, using UNDROP TABLE within the 90-day Time Travel period",
      "Yes, using UNDROP TABLE within the 1-day default, but this is likely outside the window",
      "No, dropped tables cannot be recovered with Time Travel"
    ],
    correctAnswer: 1,
    explanation: "Enterprise edition supports up to 90 days of Time Travel. Dropped tables can be recovered using UNDROP TABLE. The default is 1 day but can be extended up to 90 days with DATA_RETENTION_TIME_IN_DAYS. If set higher, recovery after 5 days is possible.",
    category: "Data Protection"
  },
  {
    id: 52,
    question: "What is the difference between a zero-copy clone and a regular table copy in terms of storage?",
    options: [
      "Zero-copy clones compress data more efficiently",
      "Zero-copy clones share underlying micro-partitions and only store modified data",
      "Both use the same amount of storage",
      "Regular copies are stored externally; clones are stored internally"
    ],
    correctAnswer: 1,
    explanation: "Zero-copy cloning creates metadata pointers to existing micro-partitions. No data is copied initially—storage is only consumed when data diverges (writes to either source or clone). This makes cloning instant and initially free in storage.",
    category: "Data Protection"
  },
  {
    id: 53,
    question: "A consumer account needs real-time access to a provider's data without data movement. Which Snowflake feature enables this?",
    options: [
      "Database replication with continuous refresh",
      "Direct Data Sharing using shares and secure views",
      "Snowpipe for continuous data ingestion",
      "External tables pointing to provider's storage"
    ],
    correctAnswer: 1,
    explanation: "Secure Data Sharing allows a provider to grant access to database objects through shares. Consumers access live, read-only data without copying or data movement. Changes in provider data are instantly visible to consumers.",
    category: "Data Sharing"
  },
  {
    id: 54,
    question: "What is required to share data with a Snowflake account in a different cloud region or provider?",
    options: [
      "Both accounts must be on the same cloud provider",
      "Use database replication to a secondary deployment, then share from there",
      "Direct sharing across regions is automatically supported",
      "Create an external stage accessible to both accounts"
    ],
    correctAnswer: 1,
    explanation: "Direct Data Sharing is limited to the same region and cloud provider. For cross-region or cross-cloud sharing, you must first replicate the database to a secondary deployment in the consumer's region, then create a share from that replica.",
    category: "Data Sharing"
  },
  {
    id: 55,
    question: "Which object types CAN be included in a Snowflake share?",
    options: [
      "Tables, secure views, and secure UDFs",
      "Tables, views, stages, and warehouses",
      "Only tables and materialized views",
      "Databases and all contained objects automatically"
    ],
    correctAnswer: 0,
    explanation: "Shares can include tables, external tables, secure views, and secure UDFs. Non-secure views, stages, file formats, and warehouses cannot be shared. Secure views are important for row/column-level access control on shared data.",
    category: "Data Sharing"
  },
  {
    id: 56,
    question: "A company needs to share the last 30 days of sales data with a partner, filtered by the partner's assigned region. What is the recommended approach?",
    options: [
      "Create a table copy filtered by region and share that table",
      "Create a secure view with filters on date and region, then share the view",
      "Share the entire table and ask the partner to filter their queries",
      "Use external functions to validate partner access"
    ],
    correctAnswer: 1,
    explanation: "Secure views are ideal for sharing filtered data. The view definition is hidden from consumers, and filters based on date range and partner-specific region ensure consumers see only their authorized data. The share includes the secure view.",
    category: "Data Sharing"
  },
  {
    id: 57,
    question: "What is Fail-safe and how does it differ from Time Travel?",
    options: [
      "Fail-safe is user-accessible recovery; Time Travel is Snowflake-only recovery",
      "Time Travel is user-accessible (configurable); Fail-safe is Snowflake-only recovery for 7 days after Time Travel ends",
      "They are the same feature with different names",
      "Fail-safe provides longer retention; Time Travel provides faster recovery"
    ],
    correctAnswer: 1,
    explanation: "Time Travel allows user-initiated recovery within a configurable period (1-90 days). Fail-safe provides an additional 7 days of protection AFTER Time Travel expires, but recovery can only be performed by Snowflake support for disaster scenarios.",
    category: "Data Protection"
  },
  {
    id: 58,
    question: "Which statement about Snowflake Marketplace is TRUE?",
    options: [
      "Data products on Marketplace require data copying to the consumer account",
      "Only free data products are available on Marketplace",
      "Marketplace enables providers to monetize live data products that consumers access without copying",
      "Marketplace is only available in the US region"
    ],
    correctAnswer: 2,
    explanation: "Snowflake Marketplace allows data providers to list free or paid data products. Consumers access live data through secure data sharing without copying. Providers can monetize their data, and Snowflake handles billing and access management.",
    category: "Data Sharing"
  },
  {
    id: 59,
    question: "A reader account is being set up for a partner who doesn't have Snowflake. What limitations does a reader account have?",
    options: [
      "Reader accounts cannot query data",
      "Reader accounts have read-only access, cannot create objects, and the provider pays for compute",
      "Reader accounts have full Snowflake capabilities",
      "Reader accounts can only access Marketplace data"
    ],
    correctAnswer: 1,
    explanation: "Reader accounts (managed accounts) are created by providers for non-Snowflake consumers. They can only read shared data, cannot create databases or write data, and compute costs are charged to the provider who created the account.",
    category: "Data Sharing"
  },
  {
    id: 60,
    question: "Which statement correctly describes database replication in Snowflake?",
    options: [
      "Replication copies data synchronously in real-time",
      "Replication creates a read-only copy that can be refreshed and promoted to read-write if needed",
      "Replicated databases cannot be used for disaster recovery",
      "Replication requires matching warehouse sizes in both regions"
    ],
    correctAnswer: 1,
    explanation: "Database replication creates a replica that is refreshed asynchronously. Replicas are initially read-only but can be promoted to read-write for disaster recovery (with Business Critical edition). Refresh frequency is configurable.",
    category: "Data Protection"
  }
];
