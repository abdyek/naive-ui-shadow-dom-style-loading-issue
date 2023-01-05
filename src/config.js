export { PAGINATION_TYPE, PAGINATION_LOAD_MORE_COMMENT_SIZE, PAGINATION_NUMBERS_COMMENT_SIZE, REQUIRED_TAB, BASE_URL, JWT_PROVIDER_BASE_URL }

// TODO: ^ export için daha kısa yazım varsa kullanılabilir sonuçta her değeri export ediyoruz

/*
 * ÜST BİLGİLENDİRME
 *
 * Prod 'da
 *
 * base_url '/comment-api' olması gerekiyor
 *
 * jwt_provider_base_url '' olması gerekiyor
 *
 */

// sayfalama türleri -> numbers, load-more (numbers stabil değil)
const PAGINATION_TYPE = "load-more"

const PAGINATION_LOAD_MORE_COMMENT_SIZE = 20
const PAGINATION_NUMBERS_COMMENT_SIZE = 10

// tab girme alanı zorunluluğu
const REQUIRED_TAB = true

const BASE_URL = '' // '/comment-api' // 'http://0.0.0.0:8080'
const JWT_PROVIDER_BASE_URL = ''
