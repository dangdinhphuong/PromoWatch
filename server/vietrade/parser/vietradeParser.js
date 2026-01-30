import { load } from "cheerio";
import { URL } from "url";

export function parseArticleList(html, baseUrl) {
  const $ = load(html);
  const articles = [];

  $("#main-content .card.border-light > a").each((_, el) => {
    const href = $(el).attr("href");
    if (href) {
      articles.push(new URL(href, baseUrl).href);
    }
  });

  return articles;
}

export function parsePagination(html) {
  const $ = load(html);
  let lastPage = 1;

  $("ul.pagination a.page-link").each((_, el) => {
    const pageNum = parseInt($(el).text().trim(), 10);
    if (!Number.isNaN(pageNum) && pageNum > lastPage) {
      lastPage = pageNum;
    }
  });

  const currentPage = parseInt($("ul.pagination .page-item.active").text().trim(), 10) || 1;

  return { currentPage, lastPage };
}

export function parseArticleDetail(html, articleUrl) {
  const $ = load(html);

  const title =
    $("#main-content h2").first().text().trim() ||
    $("#main-content h1").first().text().trim() ||
    $("h1").text().trim();

  const contentSelector = "#main-content .card-body";
  const contentHtml = $(contentSelector).html() || "";
  const contentText = $(contentSelector).text().trim() || "";

  const dateStr =
    $("#main-content .list-unstyled").text().trim() ||
    $("#main-content .text-muted").text().trim();

  return {
    url: articleUrl,
    title,
    date: dateStr,
    contentHtml,
    contentText,
    crawledAt: new Date().toISOString(),
  };
}