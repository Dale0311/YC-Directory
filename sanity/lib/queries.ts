export const STARTUPS_QUERY = `*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
    _id,
    title,
    slug,
    _createdAt,
    author -> {_id, name, username, bio, image},
    views,
    description,
    category,
    image
}`;
