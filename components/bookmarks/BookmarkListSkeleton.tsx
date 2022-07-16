const PlaceholderItem = () => (
  <div className="rounded-md mb-4 bg-gray-200 h-14 animate-pulse" />
);

export const BookmarkListSkeleton = () => {
  return (
    <>
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
      <PlaceholderItem />
    </>
  );
};
