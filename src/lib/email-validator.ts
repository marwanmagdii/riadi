// Disposable & burner email protection utility

const DISPOSABLE_DOMAINS = new Set([
  'emailnox.live',
  'emailnox.com',
  '10minutemail.com',
  '10minutemail.net',
  '10minutemail.org',
  'tempmail.com',
  'temp-mail.org',
  'temp-mail.io',
  'tempmailo.com',
  'tempmailaddress.com',
  'tempail.com',
  'tempinbox.com',
  'guerrillamail.com',
  'guerrillamail.net',
  'guerrillamail.org',
  'guerrillamail.biz',
  'guerrillamailblock.com',
  'sharklasers.com',
  'grr.la',
  'pokemail.net',
  'spam4.me',
  'mailinator.com',
  'mailinator.net',
  'mailinator2.com',
  'yopmail.com',
  'yopmail.fr',
  'yopmail.net',
  'cool.fr.nf',
  'jetable.fr.nf',
  'courriel.fr.nf',
  'moncourrier.fr.nf',
  'trashmail.com',
  'trashmail.net',
  'trashmail.org',
  'trashmail.me',
  'getnada.com',
  'nada.email',
  'abyssmail.com',
  'boximail.com',
  'dropmail.me',
  'maildrop.cc',
  'mailnesia.com',
  'mailcatch.com',
  'mailnull.com',
  'mailsac.com',
  'mohmal.com',
  'mohmal.im',
  'mohmal.in',
  'mohmal.tech',
  'fakeinbox.com',
  'fakemail.net',
  'fakemailgenerator.com',
  'dispostable.com',
  'discard.email',
  'discardmail.com',
  'spambog.com',
  'spambog.de',
  'spambog.ru',
  'throwawaymail.com',
  'throwaway.email',
  'burnermail.io',
  'mintemail.com',
  'mytemp.email',
  'emailondeck.com',
  'crazymailing.com',
  'inboxkitten.com',
  'harakirimail.com',
  'mailtemp.info',
  '20minutemail.com',
  '33mail.com',
  'anonbox.net',
  'binkmail.com',
  'bobmail.info',
  'chammy.info',
  'devnullmail.com',
  'dodgeit.com',
  'dodgit.com',
  'e4ward.com',
  'emailias.com',
  'emailsensei.com',
  'emailtemporario.com.br',
  'ephemail.net',
  'filzmail.com',
  'Fizmail.com',
  'getairmail.com',
  'gishpuppy.com',
  'Grandmamail.com',
  'haltospam.com',
  'hatespam.org',
  'hidemail.de',
  'incognitomail.org',
  'instant-mail.de',
  'ipoo.org',
  'jetable.org',
  'kasmail.com',
  'klassmaster.com',
  'klzlk.com',
  'kulturbetrieb.info',
  'kurzepost.de',
  'letthemeatspam.com',
  'lhsdv.com',
  'lifebyfood.com',
  'lookugly.com',
  'lopl.co.cc',
  'lortemail.dk',
  'lr78.com',
  'maboard.com',
  'mail-temporaire.fr',
  'mail.by',
  'mail4trash.com',
  'mailbidon.com',
  'mailblocks.com',
  'maileater.com',
  'mailexpire.com',
  'mailforspam.com',
  'mailfreeonline.com',
  'mailin8r.com',
  'mailinater.com',
  'mailme.ir',
  'mailme.lv',
  'mailmetrash.com',
  'mailmoat.com',
  'mailnator.com',
  'mailScrap.com',
  'mailshell.com',
  'mailsiphon.com',
  'mailslite.com',
  'mailzilla.com',
  'mbx.cc',
  'mega.zik.dj',
  'meltmail.com',
  'messagebeamer.de',
  'mierdamail.com',
  'mt2015.com',
  'mx0.wwwnew.eu',
  'mycleaninbox.net',
  'mypartyclip.de',
  'myphantomemail.com',
  'myspaceinc.com',
  'mytrashmail.com',
  'neomailbox.com',
  'nepwk.com',
  'nervmich.net',
  'nervtmich.net',
  'netmails.com',
  'netmails.net',
  'netzidiot.de',
  'neverbox.com',
  'no-spam.ws',
  'nobulk.com',
  'noclickemail.com',
  'nogmailspam.info',
  'nomail.xl.cx',
  'nomail2me.com',
  'nomorespamemails.com',
  'nospam.ze.tc',
  'nospam4.us',
  'nospamfor.us',
  'nospamthanks.info',
  'notmailinator.com',
  'nowmymail.com',
  'nurfuerspam.de',
  'nus.edu.sg',
  'nwldx.com',
  'objectmail.com',
  'obobbo.com',
  'oneoffemail.com',
  'onewaymail.com',
  'online.ms',
  'oopi.org',
  'ordinaryamerican.net',
  'otherinbox.com',
  'ourklips.com',
  'outlawspam.com',
  'ovpn.to',
  'owlpic.com',
  'pancakemail.com',
  'pimpedupmyspace.com',
  'pjjkp.com',
  'politikerclub.de',
  'poofy.org',
  'pookmail.com',
  'privacy.net',
  'proxymail.eu',
  'prtnx.com',
  'punkass.com',
  'putthisinyourspamdatabase.com',
  'qq.com',
  'quickinbox.com',
  'rcpt.at',
  'reallymymail.com',
  'recode.me',
  'recursor.net',
  'regbypass.com',
  'rmqkr.net',
  'rppkn.com',
  'rtrtr.com',
  's0ny.net',
  'safe-mail.net',
  'safersignup.de',
  'safetymail.info',
  'safetypost.de',
  'sandelf.de',
  'saynotospams.com',
  'selfdestructingmail.com',
  'sendspamhere.com',
  'shiftmail.com',
  'shitmail.me',
  'shortmail.net',
  'sibmail.com',
  'skeefmail.com',
  'slaskpost.se',
  'slopsbox.com',
  'smellfear.com',
  'snakemail.com',
  'sneakemail.com',
  'sofimail.com',
  'sofort-mail.de',
  'sogetthis.com',
  'soodonims.com',
  'spam.la',
  'spam.su',
  'spamavert.com',
  'spambob.com',
  'spambob.net',
  'spambob.org',
  'spambox.info',
  'spambox.irishspringrealty.com',
  'spambox.us',
  'spamcannon.com',
  'spamcannon.net',
  'spamcero.com',
  'spamcon.org',
  'spamcorptastic.com',
  'spamcowboy.com',
  'spamcowboy.net',
  'spamcowboy.org',
  'spamday.com',
  'spamex.com',
  'spamfree24.com',
  'spamfree24.de',
  'spamfree24.eu',
  'spamfree24.info',
  'spamfree24.net',
  'spamfree24.org',
  'spamgourmet.com',
  'spamgourmet.net',
  'spamgourmet.org',
  'spamherelots.com',
  'spamhereplease.com',
  'spamhole.com',
  'spamify.com',
  'spaminator.de',
  'spamkill.info',
  'spaml.com',
  'spaml.de',
  'spammotel.com',
  'spamobox.com',
  'spamoff.de',
  'spamslicer.com',
  'spamspot.com',
  'spamthis.co.uk',
  'spamthisplease.com',
  'spamtrail.com',
  'spamtroll.net',
  'speed.1s.fr',
  'supergreatmail.com',
  'supermailer.jp',
  'suremail.info',
  'teewars.org',
  'teleworm.com',
  'teleworm.us',
  'tempalias.com',
  'tempe-mail.com',
  'tempemail.biz',
  'tempemail.co.za',
  'tempemail.com',
  'tempemail.net',
  'tempinbox.co.uk',
  'tempmail.it',
  'tempmail2.com',
  'tempmaildemo.com',
  'tempmailer.com',
  'tempmailer.de',
  'tempomail.fr',
  'temporarily.de',
  'temporarioemail.com.br',
  'temporaryemail.net',
  'temporaryemail.us',
  'temporaryforwarding.com',
  'temporaryinbox.com',
  'thanksnospam.info',
  'thankyou2010.com',
  'thisisnotmyrealemail.com',
  'throwawayemailaddress.com',
  'tilien.com',
  'tmailinator.com',
  'tradermail.info',
  'trash-amil.com',
  'trash-mail.at',
  'trash-mail.com',
  'trash-mail.de',
  'trash2009.com',
  'trashemail.de',
  'trashymail.com',
  'trashymail.net',
  'trillianpro.com',
  'turual.com',
  'twinmail.de',
  'tyldd.com',
  'uggsrock.com',
  'upliftnow.com',
  'uplipht.com',
  'venompen.com',
  'veryrealemail.com',
  'viditag.com',
  'viewcastmedia.com',
  'webm4il.info',
  'wegwerfadresse.de',
  'wegwerfemail.de',
  'wegwerfmail.de',
  'wegwerfmail.net',
  'wegwerfmail.org',
  'wetrainbayarea.com',
  'wetrainbayarea.org',
  'wh4f.org',
  'whyspam.me',
  'willselfdestruct.com',
  'winemaven.info',
  'wronghead.com',
  'wuzup.net',
  'wuzupmail.net',
  'wwwnew.eu',
  'xagloo.com',
  'xemaps.com',
  'xents.com',
  'xmaily.com',
  'xoxy.net',
  'yep.it',
  'yogamaven.com',
  'yuurok.com',
  'zehnminutenmail.de',
  'zippymail.info',
  'zoaxe.com',
  'zoemail.org',
]);

const SUSPICIOUS_DOMAIN_KEYWORDS = [
  'emailnox',
  'tempmail',
  'temp-mail',
  '10minutemail',
  '20minutemail',
  'minutemail',
  'guerrillamail',
  'mailinator',
  'trashmail',
  'throwaway',
  'burnermail',
  'burner',
  'fakemail',
  'fakeinbox',
  'disposable',
  'spambox',
  'spambog',
  'yopmail',
  'mohmal',
  'maildrop',
  'getnada',
];

const HIGH_RISK_TLDS = new Set([
  'live',
  'xyz',
  'top',
  'click',
  'buzz',
  'icu',
  'monster',
  'rest',
  'fit',
  'tk',
  'ml',
  'ga',
  'cf',
  'gq',
  'pw',
  'work',
  'loan',
  'men',
  'date',
  'faith',
  'racing',
  'win',
  'bid',
  'stream',
  'download',
  'Cam',
  'sbs',
  'cfd',
]);

const TRUSTED_PROVIDERS = new Set([
  'gmail.com',
  'googlemail.com',
  'outlook.com',
  'hotmail.com',
  'live.com',
  'msn.com',
  'yahoo.com',
  'ymail.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'zoho.com',
]);

export interface EmailValidationResult {
  valid: boolean;
  reason?: string;
}

/**
 * Synchronous check for format, disposable domains, and burner hex aliases (e.g. dfc9ab232d@emailnox.live).
 */
export function validateEmailSync(rawEmail: string): EmailValidationResult {
  const email = rawEmail.trim().toLowerCase();

  if (!email) {
    return { valid: false, reason: 'Please enter your email address.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailRegex.test(email)) {
    return { valid: false, reason: 'Please enter a valid email address.' };
  }

  const [localPart, domain] = email.split('@');
  if (!localPart || !domain) {
    return { valid: false, reason: 'Please enter a valid email address.' };
  }

  // 1. Direct match or subdomain of known disposable domains
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return {
      valid: false,
      reason: 'Temporary or disposable email addresses are not allowed. Please use a real email address.',
    };
  }

  for (const blocked of DISPOSABLE_DOMAINS) {
    if (domain.endsWith(`.${blocked}`)) {
      return {
        valid: false,
        reason: 'Temporary or disposable email addresses are not allowed. Please use a real email address.',
      };
    }
  }

  // 2. Keyword match inside domain name
  for (const kw of SUSPICIOUS_DOMAIN_KEYWORDS) {
    if (domain.includes(kw)) {
      return {
        valid: false,
        reason: 'Temporary or disposable email addresses are not allowed. Please use a real email address.',
      };
    }
  }

  // 3. Heuristic for randomized hex/burner aliases (like dfc9ab232d@emailnox.live)
  if (!TRUSTED_PROVIDERS.has(domain)) {
    const cleanLocal = localPart.split('+')[0];
    const isHexAlias = /^[0-9a-f]{8,}$/.test(cleanLocal) && /\d/.test(cleanLocal) && /[a-f]/.test(cleanLocal);
    const tld = domain.split('.').pop() || '';
    const isHighRiskTld = HIGH_RISK_TLDS.has(tld);

    if (isHexAlias) {
      return {
        valid: false,
        reason: 'Automated or temporary burner email addresses are not allowed. Please use your personal or work email.',
      };
    }

    // Random gibberish local-part + high-risk TLD
    const digitRatio = (cleanLocal.match(/\d/g)?.length || 0) / cleanLocal.length;
    if (isHighRiskTld && cleanLocal.length >= 8 && digitRatio >= 0.4) {
      return {
        valid: false,
        reason: 'Temporary or disposable email addresses are not allowed. Please use a valid personal or work email.',
      };
    }
  }

  return { valid: true };
}

/**
 * Full async validation: runs sync checks first, then queries Kickbox's free disposable domain API
 * with a short timeout so newly-created burner domains are also blocked.
 */
export async function validateEmail(rawEmail: string): Promise<EmailValidationResult> {
  const syncResult = validateEmailSync(rawEmail);
  if (!syncResult.valid) {
    return syncResult;
  }

  const domain = rawEmail.trim().toLowerCase().split('@')[1];
  if (!domain || TRUSTED_PROVIDERS.has(domain)) {
    return { valid: true };
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`https://open.kickbox.com/v1/disposable/${encodeURIComponent(domain)}`, {
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.disposable === true) {
        return {
          valid: false,
          reason: 'Temporary or disposable email addresses are not allowed. Please use a real email address.',
        };
      }
    }
  } catch {
    // If offline or API times out, rely on synchronous validation
  }

  return { valid: true };
}
