const getTime = epoch =>
  new Date(epoch * 1000).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: 'false',
  });
const getDate = (
  epoch,
  option = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'short',
  }
) => new Date(epoch * 1000).toLocaleDateString('en-US', option);

export { getTime, getDate };
