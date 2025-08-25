export const STARTUPS_QUERY = `*[_type == "startup" && defined(slug.current) && 
    !defined($search) 
    || title match "*" + $search + "*" 
    || category match "*" + $search + "*" 
    || author->name match "*" + $search + "*"] 
    | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {_id, name, username, bio, image},
    views,
    description,
    category,
    image,
}`;
export const STARTUP_QUERY_BY_ID = `*[_type == "startup" && _id == $id][0]{
    _id,
    title,
    slug,
    _createdAt,
    author -> {_id, name, username, bio, image},
    views,
    description,
    category,
    image,
}`;
