# TODO: Fix Event Deletion Error

## Tasks
- [x] Modify DELETE handler in `src/app/api/events/route.ts` to handle default events (ids starting with 'default-') by returning 204 success without DB deletion.
- [x] Improve error logging in `src/utils/api-fixed.ts` deleteEvent function to log response status and text instead of assuming JSON.

## Additional Issues Found
- [x] Fix carousel image deletion error - similar issue with default carousel images (ids starting with 'default-')
