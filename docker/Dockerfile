# docker run -p 9090:80 mixed-signals-site
# docker build . -f Dockerfile.ReactApp -t mixed-signals-site

FROM nginx

RUN adduser --system --no-create-home --shell /bin/false --group --disabled-login www

RUN mkdir /etc/nginx/logs
RUN chown -P www /etc/nginx/logs 

RUN touch /etc/nginx/logs/error.log
RUN touch /etc/nginx/logs/nginx.pid

COPY ./tmp/ /usr/share/nginx/react/
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN chown -P www /usr/share/nginx/react 