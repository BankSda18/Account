package accounts.dto;

import accounts.domain.Currency;
import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.util.UUID;

@Data
@Builder
public class AccountDto {
    private Long id;

    private String name;

    private BigDecimal availableFunds;

    private Currency currency;

    private Long customerId;
}
